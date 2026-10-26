import { locales, localization } from '@/core/payload/locale.config';

export type Locale = (typeof locales)[number]['code'];

export const localeCodes: Locale[] = locales.map(({ code }) => code);

export const defaultLocale = localization.defaultLocale as Locale;

export const isLocale = (value: unknown): value is Locale => localeCodes.includes(value as Locale);

/** Splits a public pathname into its locale and the path without the prefix: `/ja/about` → `ja`, `/about`. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split('/');
  if (first !== defaultLocale && isLocale(first)) return { locale: first, path: `/${rest.join('/')}` };
  return { locale: defaultLocale, path: pathname };
}

/**
 * Public URL of an internal path in a locale. The default locale has no prefix (`/about`), others do (`/ja/about`).
 * External URLs, and paths that already carry a locale prefix, are returned unchanged.
 */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//') || locale === defaultLocale) return path;
  if (splitLocale(path).locale !== defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}
