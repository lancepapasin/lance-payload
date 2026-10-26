import { unstable_cache } from 'next/cache';
import type { Where } from 'payload';
import type { Locale } from '@/utils/locale';
import { collectionCacheTag } from './cacheTags';
import { getPayloadClient } from './getPayloadClient';

type GetProductsArgs = {
  source: 'bestsellers' | 'category';
  categoryId?: number;
  limit: number;
  locale: Locale;
};

// unstable_cache keys on the arguments, so each locale is cached separately.
export const getProducts = unstable_cache(
  async ({ source, categoryId, limit, locale }: GetProductsArgs) => {
    const where: Where =
      source === 'bestsellers' ? { isBestseller: { equals: true } } : { categories: { in: [categoryId] } };

    const payload = await getPayloadClient();
    const { docs } = await payload.find({ collection: 'products', where, limit, depth: 1, locale });
    return docs;
  },
  ['products'],
  { tags: [collectionCacheTag('products'), collectionCacheTag('media')], revalidate: 3600 }
);
