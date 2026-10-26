import { unstable_cache } from 'next/cache';
import type { Locale } from '@/utils/locale';
import { collectionCacheTag, globalCacheTag, populatedCollections } from './cacheTags';
import { getPayloadClient } from './getPayloadClient';

// Depth 1 populates link references (pages, products, categories) so their URLs can be resolved.
// Tagged with the populated collections too, so a renamed or moved page doesn't leave stale nav links.
// unstable_cache adds the `locale` argument to the cache key, so each locale is cached separately.
const tags = (slug: string) => [globalCacheTag(slug), ...populatedCollections.map(collectionCacheTag)];

export const getHeader = unstable_cache(
  async (locale: Locale) => (await getPayloadClient()).findGlobal({ slug: 'header', depth: 1, locale }),
  ['global', 'header'],
  { tags: tags('header'), revalidate: 3600 }
);

export const getFooter = unstable_cache(
  async (locale: Locale) => (await getPayloadClient()).findGlobal({ slug: 'footer', depth: 1, locale }),
  ['global', 'footer'],
  { tags: tags('footer'), revalidate: 3600 }
);

export const getNotFound = unstable_cache(
  async (locale: Locale) => (await getPayloadClient()).findGlobal({ slug: 'not-found', depth: 1, locale }),
  ['global', 'not-found'],
  { tags: tags('not-found'), revalidate: 3600 }
);
