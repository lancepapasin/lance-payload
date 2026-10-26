import { locale } from 'next/root-params';
import { defaultLocale, isLocale, type Locale } from '@/utils/locale';

/** Locale of the current request, from the `[locale]` segment that proxy.ts adds. Server Components only. */
export async function getLocale(): Promise<Locale> {
  const value = await locale();
  return isLocale(value) ? value : defaultLocale;
}
