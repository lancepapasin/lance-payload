import { unstable_cache } from 'next/cache';
import type { Locale } from '@/utils/locale';
import { pagePath } from '@/utils/pagePath';
import { collectionCacheTag, pageCacheTag, populatedCollections } from './cacheTags';
import { getPayloadClient } from './getPayloadClient';

async function queryPage(slug: string, locale: Locale, draft: boolean) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
    pagination: false,
    locale,
    draft,
    // Outside of draft mode, apply access control so only published pages are returned.
    overrideAccess: draft,
  });

  return docs[0] ?? null;
}

function findPage(slug: string, locale: Locale, draft: boolean) {
  // Draft previews always read fresh data.
  if (draft) return queryPage(slug, locale, true);

  // The page tag covers every locale, since publishing one locale can change what another falls back to.
  return unstable_cache(() => queryPage(slug, locale, false), ['page', slug, locale], {
    tags: [pageCacheTag(slug), ...populatedCollections.map(collectionCacheTag)],
    revalidate: 3600,
  })();
}

/** Page at a path such as `/` or `/about/team` (without the locale prefix), in the given locale. */
export async function getPage(path: string, { locale, draft = false }: { locale: Locale; draft?: boolean }) {
  // Slugs are unique, so the last segment identifies the page. The full path must still match its
  // breadcrumbs, or `/anything/team` would render `/about/team`.
  const slug = path === '/' ? 'home' : (path.split('/').at(-1) ?? '');
  const page = await findPage(slug, locale, draft);

  return page && pagePath(page) === path ? page : null;
}
