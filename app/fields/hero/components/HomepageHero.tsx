import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react';
import { CMSImage } from '@/components/CMSImage';
import { CMSLink } from '@/components/CMSLink';
import { Badge } from '@/components/design-system/Badge';
import { Icon } from '@/components/design-system/Icon';
import type { HomepageHero as HomepageHeroProps } from '@/types/payload-types';

// Each paragraph is one line of the heading; italic text renders in the accent style via the h1's `[&_em]` classes.
const headingConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  paragraph: ({ node, nodesToJSX }) => <span className="block">{nodesToJSX({ nodes: node.children })}</span>,
});

export function HomepageHero({
  badge,
  heading,
  description,
  links,
  image,
  imageCaption,
  overlayCard,
}: HomepageHeroProps) {
  return (
    <section className="bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1238px] grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start lg:col-span-7 lg:pb-10">
          {badge && <Badge label={badge} className="mb-6" />}

          <h1 className="mb-6 font-heading text-5xl font-semibold leading-[1.08] tracking-[-0.025em] text-foreground sm:text-6xl lg:text-[72px] [&_em]:font-normal [&_em]:text-brand">
            <RichText data={heading} converters={headingConverters} disableContainer />
          </h1>

          {description && (
            <p className="mb-10 max-w-[500px] text-base leading-[26px] text-muted-foreground">{description}</p>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {links.map(({ id, link }) => (
                <CMSLink key={id} link={link} size="lg">
                  {link.appearance === 'primary' && <Icon glyph="arrow" />}
                </CMSLink>
              ))}
            </div>
          )}
        </div>

        <div className="relative flex items-center justify-end lg:col-span-5 lg:h-[512px]">
          <div
            aria-hidden
            className="absolute top-4 right-0 h-[480px] w-[384px] max-w-full rounded-full bg-blush/40 blur-[20px] lg:right-auto lg:left-[86px]"
          />

          <div className="relative aspect-[3/4] w-full max-w-[384px] overflow-hidden rounded-t-full rounded-b-3xl shadow-xl">
            <CMSImage media={image} fill priority sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent via-50% to-transparent" />
            {(imageCaption?.label || imageCaption?.meta) && (
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase leading-4 tracking-[0.1em] text-white">
                  {imageCaption.label}
                </span>
                <span className="text-xs font-light leading-[18px] tracking-[0.01em] text-white/80">
                  {imageCaption.meta}
                </span>
              </div>
            )}
          </div>

          {overlayCard?.image && (
            <div className="absolute -bottom-6 left-0 w-40 rounded-2xl bg-card p-2 shadow-2xl sm:w-[227px] lg:-left-10">
              <div className="relative h-[188px] overflow-hidden rounded-xl bg-background sm:h-[244px]">
                <CMSImage media={overlayCard.image} fill sizes="227px" className="object-cover" />
                {overlayCard.label && (
                  <Badge label={overlayCard.label} tone="frosted" className="absolute bottom-2 left-2" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
