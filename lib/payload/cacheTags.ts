export const pageCacheTag = (slug: string) => `page:${slug}`;

export const collectionCacheTag = (slug: string) => `collection:${slug}`;

export const globalCacheTag = (slug: string) => `global:${slug}`;

// Collections whose documents get populated into page layouts and globals (e.g. link URLs). Pages are
// included because a page's URL changes with its slug or parent, which every link to it has to follow.
export const populatedCollections = ['pages', 'products', 'categories', 'treatments', 'testimonials', 'media'] as const;
