import { CMSImage } from '@/components/CMSImage';
import { CMSLink } from '@/components/CMSLink';
import { cn } from '@/lib/utils';
import type { Media, PlainLinkField } from '@/types/payload-types';
import { Badge } from './Badge';
import { Icon } from './Icon';

// Figma "Card / Category". Image: copy over a bottom gradient with a text action.
// Banner: full-width, copy on the left and a tag + button on the right.
type CategoryCardProps = {
  layout?: 'image' | 'banner';
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  image: number | Media;
  /** Banner only: frosted pill above the action. */
  tag?: string | null;
  /** Image: arrowed text link. Banner: inverse button. */
  link?: PlainLinkField | null;
  className?: string;
};

const titleClasses = 'font-heading text-3xl font-medium leading-[38px] tracking-[0.05em] text-white';
const eyebrowClasses = 'mb-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.1em] text-rose';

export function CategoryCard({
  layout = 'image',
  eyebrow,
  title,
  description,
  image,
  tag,
  link,
  className,
}: CategoryCardProps) {
  const isBanner = layout === 'banner';

  return (
    <article
      className={cn(
        'relative isolate flex overflow-hidden rounded-2xl bg-sand shadow-xs',
        isBanner
          ? 'min-h-[300px] flex-col items-start justify-center gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between'
          : 'h-[380px] flex-col justify-end p-8 sm:h-[440px]',
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <CMSImage
          media={image}
          fill
          sizes={isBanner ? '(min-width: 1366px) 1238px, 100vw' : '(min-width: 1024px) 60vw, 100vw'}
          className="object-cover"
        />
        <div className={cn('absolute inset-0 mix-blend-multiply', isBanner ? 'bg-[#e5e5e5]' : 'bg-[#f2f2f2]')} />
        <div
          className={cn(
            'absolute inset-0',
            isBanner
              ? 'bg-linear-to-r from-foreground/90 via-foreground/60 to-foreground/0'
              : 'bg-linear-to-t from-foreground/80 via-foreground/30 to-foreground/0'
          )}
        />
      </div>

      <div className={cn(isBanner ? 'max-w-[512px]' : 'max-w-[448px]')}>
        {eyebrow && <p className={eyebrowClasses}>{eyebrow}</p>}
        <h3 className={cn(titleClasses, isBanner ? 'mb-3' : 'mb-2')}>{title}</h3>
        {description && (
          <p
            className={cn(
              'text-white/80',
              isBanner ? 'text-sm leading-[22px]' : 'mb-4 text-xs font-light leading-[18px] tracking-[0.01em]'
            )}
          >
            {description}
          </p>
        )}
        {!isBanner && link && (
          <CMSLink link={link} appearance="text" className="leading-5 tracking-[0.1em] text-white">
            <Icon glyph="arrow" />
          </CMSLink>
        )}
      </div>

      {isBanner && (
        <div className="flex flex-col items-start gap-4 lg:items-end">
          {tag && <Badge label={tag} tone="frosted" />}
          {link && <CMSLink link={link} appearance="inverse" />}
        </div>
      )}
    </article>
  );
}
