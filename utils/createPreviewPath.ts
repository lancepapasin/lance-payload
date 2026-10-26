import type { GeneratePreviewURL } from 'payload';
import type { Page } from '@/types/payload-types';
import { defaultLocale, isLocale, localizePath } from './locale';
import { pagePath } from './pagePath';

// Previews the page in the locale currently selected in the admin.
export const createPreviewPath: GeneratePreviewURL = (doc, { locale }) => {
  const slug = typeof doc.slug === 'string' ? doc.slug : '';
  const path = pagePath({ slug, breadcrumbs: doc.breadcrumbs as Page['breadcrumbs'] });

  const encodedParams = new URLSearchParams({
    slug,
    collection: 'pages',
    path: localizePath(path, isLocale(locale) ? locale : defaultLocale),
    previewSecret: process.env.PREVIEW_SECRET || '',
  });

  return `/preview?${encodedParams.toString()}`;
};
