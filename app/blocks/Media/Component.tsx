import { CMSImage } from '@/components/CMSImage';
import { Icon } from '@/components/design-system/Icon';
import { cn } from '@/lib/utils';
import type { MediaBlock as MediaBlockProps } from '@/types/payload-types';

const aspectClasses: Record<NonNullable<MediaBlockProps['aspect']>, string> = {
  portrait: 'aspect-[5/6]',
  square: 'aspect-square',
  landscape: 'aspect-[3/2]',
};

export function MediaBlock({ image, aspect, badge }: MediaBlockProps) {
  return (
    <div className="relative">
      <div className={cn('relative overflow-hidden rounded-2xl shadow-lg', aspectClasses[aspect ?? 'portrait'])}>
        <CMSImage media={image} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      {badge?.title && (
        <div className="absolute right-4 -bottom-6 flex max-w-[320px] items-center gap-3 rounded-xl bg-card px-6 pt-6 pb-8 shadow-xl lg:-right-6">
          <Icon glyph={badge.icon} />
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-foreground">
              {badge.title}
            </p>
            {badge.subtitle && (
              <p className="text-xs font-light leading-[18px] tracking-[0.01em] text-muted-foreground">
                {badge.subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
