import { revalidateTag } from 'next/cache';
import type { CollectionConfig } from 'payload';
import { collectionCacheTag } from '@/lib/payload/cacheTags';

// Clears cached pages and queries that include documents from this collection.
export const revalidateCollection = (slug: string): NonNullable<CollectionConfig['hooks']> => ({
  afterChange: [
    ({ doc, context }) => {
      if (!context.disableRevalidate) revalidateTag(collectionCacheTag(slug), { expire: 0 });
      return doc;
    },
  ],
  afterDelete: [
    ({ doc, context }) => {
      if (!context.disableRevalidate) revalidateTag(collectionCacheTag(slug), { expire: 0 });
      return doc;
    },
  ],
});
