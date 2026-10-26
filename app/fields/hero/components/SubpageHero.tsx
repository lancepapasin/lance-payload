import { CMSImage } from '@/components/CMSImage';
import { CMSLink } from '@/components/CMSLink';
import { Heading } from '@/components/design-system/Heading';
import type { SubpageHero as SubpageHeroProps } from '@/types/payload-types';

// Figma "Hero", Page=Subpage: compact page heading with optional actions and a captioned image.
export function SubpageHero({
  eyebrow,
  title,
  description,
  primaryLink,
  secondaryLink,
  image,
  imageCaption,
}: SubpageHeroProps) {
  const hasActions = primaryLink?.label || secondaryLink?.label;

  return (
    <section className="bg-background px-4 pt-10 pb-12 sm:px-8 lg:px-16">
      <div className="mx-auto flex min-h-[312px] max-w-[1238px] flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <Heading as="h1" eyebrow={eyebrow} title={title} description={description} className="max-w-[600px]" />

          {hasActions && (
            <div className="flex flex-wrap items-center gap-6">
              {primaryLink?.label && <CMSLink link={primaryLink} appearance="primary" size="md" />}
              {secondaryLink?.label && (
                // Figma "Link", in the brand colour with an underline.
                <CMSLink
                  link={secondaryLink}
                  className="text-sm leading-[22px] text-brand underline underline-offset-2 transition-colors hover:text-foreground"
                />
              )}
            </div>
          )}
        </div>

        {image && (
          <figure className="flex w-full flex-col gap-3 lg:w-[392px] lg:shrink-0">
            <div className="relative h-[264px] overflow-hidden rounded-2xl bg-linen">
              <CMSImage media={image} fill priority sizes="(min-width: 1024px) 392px, 100vw" className="object-cover" />
            </div>
            {imageCaption && (
              <figcaption className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium uppercase leading-4 tracking-[0.09em] text-brand">
                  {imageCaption}
                </span>
                <span aria-hidden className="h-px w-10 shrink-0 bg-brand" />
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
