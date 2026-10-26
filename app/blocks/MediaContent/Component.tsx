import { CMSImage } from '@/components/CMSImage';
import { FeatureRow } from '@/components/design-system/FeatureRow';
import { Heading } from '@/components/design-system/Heading';
import { Icon } from '@/components/design-system/Icon';
import { cn } from '@/lib/utils';
import type { MediaContentBlock as MediaContentBlockProps } from '@/types/payload-types';
import { SectionContainer } from '../SectionContainer';

export function MediaContentBlock({ header, image, imagePosition, imageBadge, features }: MediaContentBlockProps) {
  const imageOnRight = imagePosition === 'right';

  return (
    <SectionContainer className="bg-sand">
      <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className={cn('relative lg:col-span-5', imageOnRight && 'lg:order-last')}>
          <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-lg sm:h-[520px] lg:h-[587px]">
            <CMSImage media={image} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          {imageBadge?.title && (
            <div
              className={cn(
                'absolute -bottom-6 flex max-w-[320px] items-center gap-3 rounded-xl bg-card px-6 pt-6 pb-8 shadow-xl',
                imageOnRight ? 'left-4 lg:-left-6' : 'right-4 lg:-right-6'
              )}
            >
              <Icon glyph={imageBadge.icon} />
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-foreground">
                  {imageBadge.title}
                </p>
                {imageBadge.subtitle && (
                  <p className="text-xs font-light leading-[18px] tracking-[0.01em] text-muted-foreground">
                    {imageBadge.subtitle}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8 lg:col-span-7">
          <Heading eyebrow={header.eyebrow} title={header.heading} description={header.description} />

          {features && features.length > 0 && (
            <ul className="flex flex-col gap-6">
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureRow glyph={feature.icon} title={feature.title} description={feature.description} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
