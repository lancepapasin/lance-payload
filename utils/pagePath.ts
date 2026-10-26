import type { Page } from '@/types/payload-types';

/** Public path of a page: its nested-docs breadcrumb URL (e.g. `/about/team`), or `/` for the home page. */
export const pagePath = (page: Pick<Page, 'slug' | 'breadcrumbs'>): string => {
  if (page.slug === 'home') return '/';
  // Breadcrumbs are filled on save; fall back to the slug for a document that hasn't been saved with them yet.
  return page.breadcrumbs?.at(-1)?.url || `/${page.slug}`;
};
