import { revalidateTag } from 'next/cache';
import type { GlobalConfig } from 'payload';
import { globalCacheTag } from '@/lib/payload/cacheTags';

// Clears the cached global so every page picks up the change.
export const revalidateGlobal = (slug: string): NonNullable<GlobalConfig['hooks']> => ({
  afterChange: [
    ({ doc, context }) => {
      if (!context.disableRevalidate) revalidateTag(globalCacheTag(slug), { expire: 0 });
      return doc;
    },
  ],
});
