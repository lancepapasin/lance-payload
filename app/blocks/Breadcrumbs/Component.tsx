import Link from 'next/link';
import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getLocale } from '@/lib/getLocale';
import { cn } from '@/lib/utils';
import type { BreadcrumbsBlock as BreadcrumbsBlockProps, Page } from '@/types/payload-types';
import { localizePath } from '@/utils/locale';

const backgroundClasses: Record<BreadcrumbsBlockProps['background'], string> = {
  background: 'bg-background',
  ivory: 'bg-ivory',
  sand: 'bg-sand',
};

type Crumb = { label: string; url: string };

export async function BreadcrumbsBlock({
  showHome,
  homeLabel,
  background,
  page,
}: BreadcrumbsBlockProps & { page: Pick<Page, 'slug' | 'breadcrumbs'> }) {
  const locale = await getLocale();
  // Breadcrumb URLs are stored without a locale prefix (slugs are shared across locales).
  const crumbs: Crumb[] = (page.breadcrumbs ?? []).flatMap(({ label, url }) =>
    label && url ? [{ label, url: localizePath(url, locale) }] : []
  );
  if (showHome && page.slug !== 'home') crumbs.unshift({ label: homeLabel || 'Home', url: localizePath('/', locale) });

  // A lone crumb is just the current page, which says nothing the page title doesn't.
  if (crumbs.length < 2) return null;

  return (
    <div className={cn('px-4 pt-8 sm:px-8 lg:px-16', backgroundClasses[background])}>
      <Breadcrumb className="mx-auto max-w-[1238px]">
        <BreadcrumbList>
          {crumbs.map((crumb, index) =>
            index === crumbs.length - 1 ? (
              <BreadcrumbItem key={crumb.url}>
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <Fragment key={crumb.url}>
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link href={crumb.url} />}>{crumb.label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            )
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
