import { CMSImage } from '@/components/CMSImage';
import { Icon } from '@/components/design-system/Icon';
import { LocaleLink } from '@/components/LocaleLink';
import { getLocale } from '@/lib/getLocale';
import { getHeader } from '@/lib/payload/getGlobals';
import { resolveHref } from '@/lib/payload/resolveHref';
import { localizePath } from '@/utils/locale';
import { HeaderNav, MobileNav, type NavItem } from './HeaderNav';
import { LocaleSwitcher } from './LocaleSwitcher';

// The ::after inset widens the tap target to ~40px without changing the layout.
const iconLinkClasses =
  'relative flex shrink-0 items-center transition-opacity after:absolute after:-inset-2.5 hover:opacity-70';

export async function SiteHeader() {
  const locale = await getLocale();
  const header = await getHeader(locale);
  if (!header.siteName && !header.logo) return null;

  // HeaderNav is a Client Component, so its hrefs are localized here rather than through LocaleLink.
  const navItems: NavItem[] = (header.navItems ?? []).flatMap(({ link }) => {
    const href = resolveHref(link);
    return href && link.label
      ? [{ href: localizePath(href, locale), label: link.label, newTab: Boolean(link.newTab) }]
      : [];
  });
  const { wishlistUrl, cartUrl, accountUrl } = header.utilityLinks ?? {};

  return (
    <header className="sticky top-0 z-40 bg-ivory/90 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.03)] backdrop-blur-[6px]">
      <div className="mx-auto grid h-20 max-w-[1280px] grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-8 md:grid-cols-[1fr_auto_1fr] lg:px-12">
        {/* Below md the left column is empty, so it collapses and the wordmark aligns left. */}
        <div className="hidden min-w-0 items-center gap-6 md:flex">
          {header.currencyLabel && (
            <span className="hidden shrink-0 items-center gap-1 font-semibold text-[11px] text-sand-foreground uppercase leading-4 tracking-[0.05em] md:flex">
              <Icon glyph="globe" />
              {header.currencyLabel}
            </span>
          )}
          {/* Below md the language options move into the mobile menu, keeping the icon row clear. */}
          <LocaleSwitcher />
          <search className="relative hidden w-full max-w-[320px] lg:block">
            <form action="/search">
              <label htmlFor="site-search" className="sr-only">
                Search
              </label>
              <Icon glyph="search" className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
              <input
                id="site-search"
                name="q"
                type="search"
                placeholder={header.searchPlaceholder ?? undefined}
                className="w-full rounded-full bg-white/80 py-2.5 pr-4 pl-10 font-light text-foreground text-xs leading-none tracking-[0.01em] outline-none placeholder:text-placeholder focus-visible:ring-2 focus-visible:ring-brand/30 supports-[-webkit-touch-callout:none]:text-base"
              />
            </form>
          </search>
        </div>

        <LocaleLink href="/" className="flex flex-col items-start md:items-center md:text-center">
          {header.logo ? (
            <CMSImage media={header.logo} alt={header.siteName} priority className="h-[42px] w-auto" />
          ) : (
            <>
              {/* Below 360px the wordmark wraps onto two lines so the icons stay on screen. */}
              <span className="font-heading font-medium text-foreground text-sm uppercase leading-5 tracking-[0.05em] sm:text-2xl min-[360px]:whitespace-nowrap min-[360px]:text-base min-[360px]:leading-8">
                {header.siteName}
              </span>
              {header.tagline && (
                <span className="-mt-1 hidden text-[9px] text-muted-foreground uppercase leading-[13.5px] tracking-[0.25em] sm:block">
                  {header.tagline}
                </span>
              )}
            </>
          )}
        </LocaleLink>

        <div className="flex items-center justify-end gap-4">
          {wishlistUrl && (
            <LocaleLink href={wishlistUrl} aria-label="Wishlist" className={iconLinkClasses}>
              <Icon glyph="heart" />
            </LocaleLink>
          )}
          {cartUrl && (
            <LocaleLink href={cartUrl} aria-label="Shopping bag" className={iconLinkClasses}>
              <Icon glyph="bag" />
            </LocaleLink>
          )}
          {accountUrl && (
            <LocaleLink
              href={accountUrl}
              aria-label="Account"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand transition-colors hover:bg-brand/85"
            >
              <Icon glyph="account" />
            </LocaleLink>
          )}
          {navItems.length > 0 && <MobileNav items={navItems} />}
        </div>
      </div>

      {navItems.length > 0 && <HeaderNav items={navItems} />}
    </header>
  );
}
