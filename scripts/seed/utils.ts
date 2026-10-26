import type { CollectionSlug, GlobalSlug, Payload, RequiredDataFromCollectionSlug } from 'payload';
import { defaultLocale, type Locale, localeCodes } from '@/utils/locale';

// Skips the Next.js cache revalidation hooks: seeding runs in onInit, outside any request. A fresh object per
// call: Payload keeps the passed object as req.context, and the storage plugin leaves flags on it (skipCloudStorage)
// that would make later uploads silently skip the blob store.
export const context = () => ({ disableRevalidate: true });

/**
 * Updates the document whose `field` equals `data[field]`, or creates it when there is none, so reseeding
 * restores seeded documents to their seed values without duplicating them or touching anything else.
 */
export async function upsert<TSlug extends CollectionSlug>(
  payload: Payload,
  collection: TSlug,
  field: keyof RequiredDataFromCollectionSlug<TSlug> & string,
  data: RequiredDataFromCollectionSlug<TSlug>
): Promise<{ id: number }> {
  const {
    docs: [existing],
  } = await payload.find({
    collection,
    where: { [field]: { equals: data[field] } },
    limit: 1,
    depth: 0,
    pagination: false,
    context: context(),
  });
  // Payload's update() can't relate full create data to its DeepPartial update data for a generic slug.
  if (existing)
    return payload.update({ collection, id: existing.id, data: data as never, depth: 0, context: context() });
  return payload.create({ collection, data, depth: 0, context: context() });
}

/** Picks a locale's copy: `const t = translate(locale)`, then `t({ en: 'Home', ja: 'ホーム' })`. */
export const translate =
  (locale: Locale) =>
  (copy: Record<Locale, string>): string =>
    copy[locale];

/**
 * Copies the row ids of `saved` onto the matching array and block rows of `data`. Both come from the same seed
 * function, so rows line up by index. Without ids Payload replaces the rows, dropping the other locales' values
 * stored on them.
 */
function withRowIds<T>(data: T, saved: unknown): T {
  if (Array.isArray(data)) {
    const savedRows = Array.isArray(saved) ? saved : [];
    return data.map((row, index) => {
      const savedRow = savedRows[index] as { id?: unknown } | undefined;
      const merged = withRowIds(row, savedRow);
      return savedRow?.id && merged && typeof merged === 'object' && !Array.isArray(merged)
        ? { ...merged, id: savedRow.id }
        : merged;
    }) as T;
  }
  if (data && typeof data === 'object') {
    const savedObject = (saved && typeof saved === 'object' ? saved : {}) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, withRowIds(value, savedObject[key])])
    ) as T;
  }
  return data;
}

/**
 * Writes another locale's copy onto a document seeded in the default locale. Non-localized fields in `data` are
 * the same values the default locale wrote, so only the localized ones change.
 */
async function upsertLocale<TSlug extends CollectionSlug>(
  payload: Payload,
  collection: TSlug,
  id: number,
  locale: Locale,
  data: RequiredDataFromCollectionSlug<TSlug>
): Promise<void> {
  const saved = await payload.findByID({ collection, id, locale: defaultLocale, depth: 0, context: context() });
  await payload.update({
    collection,
    id,
    locale,
    data: withRowIds(data, saved) as never,
    depth: 0,
    context: context(),
  });
}

const otherLocales = localeCodes.filter((code) => code !== defaultLocale);

/**
 * Seeds documents in every locale: upserts the default locale's copy (matched on `field`), then writes each other
 * locale's copy onto the same documents. `dataFor` must return the documents in the same order for every locale.
 * Returns the ids in that order.
 */
export async function upsertLocalized<TSlug extends CollectionSlug>(
  payload: Payload,
  collection: TSlug,
  field: keyof RequiredDataFromCollectionSlug<TSlug> & string,
  dataFor: (locale: Locale) => RequiredDataFromCollectionSlug<TSlug>[]
): Promise<number[]> {
  const ids: number[] = [];
  for (const data of dataFor(defaultLocale)) {
    ids.push((await upsert(payload, collection, field, data)).id);
  }
  for (const locale of otherLocales) {
    for (const [index, data] of dataFor(locale).entries()) {
      await upsertLocale(payload, collection, ids[index], locale, data);
    }
  }
  return ids;
}

/** Seeds a global in every locale: the default locale first, then the others onto its rows. */
export async function upsertGlobal<TSlug extends GlobalSlug>(
  payload: Payload,
  slug: TSlug,
  dataFor: (locale: Locale) => Record<string, unknown>
): Promise<void> {
  const saved = await payload.updateGlobal({
    slug,
    locale: defaultLocale,
    data: dataFor(defaultLocale) as never,
    depth: 0,
    context: context(),
  });
  for (const locale of otherLocales) {
    await payload.updateGlobal({
      slug,
      locale,
      data: withRowIds(dataFor(locale), saved) as never,
      depth: 0,
      context: context(),
    });
  }
}

/** Looks up a created document's id by slug, failing loudly on a typo instead of seeding a broken relation. */
export function idOf(ids: Record<string, number>, slug: string, kind: string): number {
  const id = ids[slug];
  if (id === undefined) throw new Error(`Seed: no ${kind} with slug "${slug}"`);
  return id;
}

// Minimal Lexical nodes for seeded rich text. `format` is Lexical's bitmask: 1 bold, 2 italic.
export const text = (value: string, format = 0) => ({
  type: 'text' as const,
  text: value,
  format,
  detail: 0,
  mode: 'normal' as const,
  style: '',
  version: 1,
});

export const paragraph = (...children: ReturnType<typeof text>[]) => ({
  type: 'paragraph' as const,
  children,
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  textFormat: 0,
  version: 1,
});

export const richText = (...children: ReturnType<typeof paragraph>[]) => ({
  root: {
    type: 'root' as const,
    children,
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
});
