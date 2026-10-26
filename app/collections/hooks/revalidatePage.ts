import { revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload';
import { collectionCacheTag, pageCacheTag } from '@/lib/payload/cacheTags';
import type { Page } from '@/types/payload-types';

// Only published content is cached, so draft autosaves don't need to clear anything.
// `expire: 0` drops the entry immediately, so the next visit (e.g. right after publishing) reads fresh data
// instead of being served the stale entry, which could be a cached 404.
// Scripts run outside Next.js (e.g. the seed) set `disableRevalidate`, since revalidateTag needs a request context.
export const revalidatePage: CollectionAfterChangeHook<Page> = ({ doc, previousDoc, context }) => {
  if (context.disableRevalidate) return doc;

  if (doc._status === 'published') {
    revalidateTag(pageCacheTag(doc.slug), { expire: 0 });
  }
  // Unpublished, or published under a different slug: clear the old entry too.
  if (previousDoc?._status === 'published' && (doc._status !== 'published' || previousDoc.slug !== doc.slug)) {
    revalidateTag(pageCacheTag(previousDoc.slug), { expire: 0 });
  }
  // Any published change can alter this page's URL (slug, parent) or title, so clear everything that links to it.
  if (doc._status === 'published' || previousDoc?._status === 'published') {
    revalidateTag(collectionCacheTag('pages'), { expire: 0 });
  }
  return doc;
};

export const revalidatePageDelete: CollectionAfterDeleteHook<Page> = ({ doc, context }) => {
  if (context.disableRevalidate) return doc;

  revalidateTag(pageCacheTag(doc.slug), { expire: 0 });
  revalidateTag(collectionCacheTag('pages'), { expire: 0 });
  return doc;
};
