import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CollectionSlug, Payload } from 'payload';
import { defaultLocale, localeCodes } from '@/utils/locale';
import { categories, type MediaIds, mediaFiles, products, type SlugIds, testimonials, treatments } from './catalog';
import { footer, header, notFound } from './globals';
import { topPage } from './top-page';
import { context, upsertGlobal, upsertLocalized } from './utils';

/** Pairs seeded documents' slugs with the ids upsertLocalized returned for them, in the same order. */
const bySlug = (docs: { slug: string }[], ids: number[]): SlugIds =>
  Object.fromEntries(docs.map(({ slug }, index) => [slug, ids[index]]));

const assetsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'assets');

// Every collection seed() writes to.
const seededCollections: CollectionSlug[] = ['media', 'categories', 'products', 'treatments', 'testimonials', 'pages'];

/** True when none of the seeded collections has any documents, i.e. a fresh database. */
export async function isUnseeded(payload: Payload): Promise<boolean> {
  const counts = await Promise.all(seededCollections.map((collection) => payload.count({ collection })));
  return counts.every(({ totalDocs }) => totalDocs === 0);
}

/**
 * Uploads a seed image, or reuses the media document already holding that file. Payload saves an upload as
 * `name-1.jpg` (`-2`, …) when `name.jpg` is already on disk, e.g. left over from a wiped database, so those match too.
 */
async function upsertMedia(payload: Payload, file: string, alt: string): Promise<number> {
  const { name, ext } = path.parse(file);
  const sameFile = new RegExp(`^${name}(-\\d+)?${ext.replace('.', '\\.')}$`);
  const { docs } = await payload.find({
    collection: 'media',
    where: { filename: { like: name } },
    sort: 'id',
    depth: 0,
    pagination: false,
    context: context(),
  });
  const existing = docs.find((doc) => doc.filename && sameFile.test(doc.filename));
  if (existing) {
    await payload.update({ collection: 'media', id: existing.id, data: { alt }, depth: 0, context: context() });
    return existing.id;
  }
  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    filePath: path.join(assetsDir, file),
    depth: 0,
    context: context(),
  });
  return doc.id;
}

/**
 * Seeds the shop catalogue, header, footer, 404 page and home page. Idempotent: documents are matched by slug
 * (testimonials by name, media by filename) and reset to their seed values; users and any other
 * documents are left alone.
 */
export async function seed(payload: Payload): Promise<void> {
  payload.logger.info('Seeding…');

  const media = {} as MediaIds;
  for (const [key, { file, alt }] of Object.entries(mediaFiles) as [keyof MediaIds, { file: string; alt: string }][]) {
    media[key] = await upsertMedia(payload, file, alt);
  }

  // Each collection is seeded in the default locale, then every other locale is written onto the same documents.
  const categoryIds = bySlug(
    categories(media, defaultLocale),
    await upsertLocalized(payload, 'categories', 'slug', (locale) => categories(media, locale))
  );

  const productRefs = { media, categories: categoryIds };
  const productIds = bySlug(
    products(productRefs, defaultLocale),
    await upsertLocalized(payload, 'products', 'slug', (locale) => products(productRefs, locale))
  );

  const treatmentIds = await upsertLocalized(payload, 'treatments', 'slug', treatments);

  const testimonialIds = await upsertLocalized(payload, 'testimonials', 'name', (locale) =>
    testimonials({ media, products: productIds }, locale)
  );

  await upsertGlobal(payload, 'header', (locale) => header(categoryIds, locale));
  await upsertGlobal(payload, 'footer', footer);
  await upsertGlobal(payload, 'not-found', notFound);

  const topPageRefs = { media, categories: categoryIds, treatments: treatmentIds, testimonials: testimonialIds };
  await upsertLocalized(payload, 'pages', 'slug', (locale) => [topPage(topPageRefs, locale)]);

  payload.logger.info(
    `Seeded ${Object.keys(media).length} media, ${Object.keys(categoryIds).length} categories, ` +
      `${Object.keys(productIds).length} products, ${treatmentIds.length} treatments, ` +
      `${testimonialIds.length} testimonials, the header, footer and 404 page, and the home page ` +
      `(${localeCodes.join(', ')})`
  );
}
