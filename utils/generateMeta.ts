import type { Metadata } from 'next';
import type { Page } from '@/types/payload-types';
import { getServerSideURL } from './getURL';
import { type Locale, localeCodes, localizePath } from './locale';
import { mergeOpenGraph } from './mergeOpenGraphs';
import { pagePath } from './pagePath';

export const generateMeta = ({ doc, locale }: { doc: Page; locale: Locale }): Metadata => {
  const serverURL = getServerSideURL();
  const image = doc.meta?.image;
  const ogImage = typeof image === 'object' && image?.url ? `${serverURL}${image.url}` : undefined;
  const title = doc.meta?.title || doc.title;
  const description = doc.meta?.description || undefined;
  const path = pagePath(doc);
  const url = (code: Locale) => {
    const localized = localizePath(path, code);
    return localized === '/' ? serverURL : `${serverURL}${localized}`;
  };

  return {
    title,
    description,
    // Slugs are shared across locales, so the same path exists in every language.
    alternates: {
      canonical: url(locale),
      languages: Object.fromEntries(localeCodes.map((code) => [code, url(code)])),
    },
    openGraph: mergeOpenGraph({
      title,
      ...(description ? { description } : {}),
      images: ogImage ? [{ url: ogImage }] : undefined,
      url: url(locale),
      locale,
    }),
  };
};
