import type { LinkField, Page, PlainLinkField } from '@/types/payload-types';
import { pagePath } from '@/utils/pagePath';

const basePaths = {
  pages: '',
  products: '/products',
  categories: '/categories',
} as const;

export type LinkableCollection = keyof typeof basePaths;
export const linkableCollections = Object.keys(basePaths) as LinkableCollection[];

export type LinkableDoc = { slug?: string | null; breadcrumbs?: Page['breadcrumbs'] };

/** URL for a populated document in one of the linkable collections. */
export function docHref(relationTo: LinkableCollection, doc: LinkableDoc): string | null {
  if (!doc.slug) return null;
  if (relationTo === 'pages') return pagePath({ slug: doc.slug, breadcrumbs: doc.breadcrumbs });
  return `${basePaths[relationTo]}/${doc.slug}`;
}

export function resolveHref(link: LinkField | PlainLinkField): string | null {
  if (link.type === 'custom') return link.url || null;

  const reference = link.reference;
  if (!reference || typeof reference.value !== 'object') return null;

  return docHref(reference.relationTo, reference.value);
}
