import Link from 'next/link';
import type { ComponentProps } from 'react';
import { getLocale } from '@/lib/getLocale';
import { localizePath } from '@/utils/locale';

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

/** next/link that keeps internal paths in the current locale (`/about` → `/ja/about`). Server Components only. */
export async function LocaleLink({ href, ...props }: LocaleLinkProps) {
  return <Link href={localizePath(href, await getLocale())} {...props} />;
}
