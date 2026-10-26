import type { Locale, LocalizationConfig } from 'payload';

export const locales = [
  {
    label: 'English',
    code: 'en',
  },
  {
    label: 'Japanese',
    code: 'ja',
  },
] as const satisfies Locale[];

export const localization: LocalizationConfig = {
  locales,
  defaultLocale: 'en',
  defaultLocalePublishOption: 'active',
  fallback: true,
};
