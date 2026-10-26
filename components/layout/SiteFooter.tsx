import { CMSLink } from '@/components/CMSLink';
import { buttonVariants } from '@/components/design-system/Button';
import { Icon } from '@/components/design-system/Icon';
import { getLocale } from '@/lib/getLocale';
import { getFooter, getHeader } from '@/lib/payload/getGlobals';
import { cn } from '@/lib/utils';

const columnTitleClasses = 'text-[11px] font-semibold uppercase leading-4 tracking-[0.1em] text-foreground';
// Figma "Link": the footer's text link.
const footerLinkClasses = 'text-sm leading-[22px] text-muted-foreground transition-colors hover:text-foreground';
const smallPrintClasses = 'text-xs font-light leading-[18px] tracking-[0.01em] text-muted-foreground';

export async function SiteFooter() {
  const locale = await getLocale();
  const [footer, header] = await Promise.all([getFooter(locale), getHeader(locale)]);
  const { newsletter } = footer;

  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-4 pt-16 pb-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            {header.siteName && (
              <p className="font-heading font-medium text-foreground text-xl uppercase leading-7 tracking-[0.025em]">
                {header.siteName}
              </p>
            )}
            {footer.about && <p className="text-muted-foreground text-sm leading-[22.75px]">{footer.about}</p>}
            {footer.badge && (
              <p className="flex items-center gap-1 font-semibold text-[11px] text-brand uppercase leading-4 tracking-[0.05em]">
                <Icon glyph="sustainability" />
                {footer.badge}
              </p>
            )}
          </div>

          {footer.columns?.map((column) => (
            <nav key={column.id} aria-label={column.title} className="flex flex-col gap-4">
              <p className={columnTitleClasses}>{column.title}</p>
              <ul className="flex flex-col gap-1">
                {column.links?.map(({ id, link }) => (
                  <li key={id}>
                    <CMSLink link={link} className={footerLinkClasses} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {newsletter?.title && (
            <div className="flex flex-col gap-4">
              <p className={columnTitleClasses}>{newsletter.title}</p>
              {newsletter.description && (
                <p className="text-muted-foreground text-sm leading-[22px]">{newsletter.description}</p>
              )}
              {/* No newsletter backend yet; the form posts nowhere until one exists. */}
              <form className="flex flex-col gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={newsletter.placeholder ?? undefined}
                  className="w-full rounded-full bg-white px-4 pt-[13px] pb-[14px] font-light text-foreground text-xs leading-none tracking-[0.01em] outline-none placeholder:text-placeholder focus-visible:ring-2 focus-visible:ring-brand/30 supports-[-webkit-touch-callout:none]:text-base"
                />
                <button type="submit" className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'w-full')}>
                  {newsletter.buttonLabel}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
          {footer.copyright && <p className={smallPrintClasses}>{footer.copyright}</p>}
          {footer.legalLinks && footer.legalLinks.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footer.legalLinks.map(({ id, link }) => (
                <li key={id}>
                  <CMSLink link={link} className={cn(smallPrintClasses, 'transition-colors hover:text-foreground')} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
