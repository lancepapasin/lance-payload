import { CMSImage } from '@/components/CMSImage';
import { LocaleLink } from '@/components/LocaleLink';
import { formatPrice } from '@/lib/format';
import { cn } from '@/lib/utils';
import type { Product } from '@/types/payload-types';
import { buttonVariants } from './Button';
import { Stars } from './Stars';

const badgeToneClasses: Record<NonNullable<NonNullable<Product['badge']>['tone']>, string> = {
  accent: 'bg-coral text-coral-foreground',
  soft: 'bg-blush text-blush-foreground',
  neutral: 'bg-secondary text-secondary-foreground',
};

// Figma "Card / Product".
export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const href = `/products/${product.slug}`;
  const { badge, rating } = product;

  return (
    <article className={cn('flex flex-col overflow-hidden rounded-2xl bg-card shadow-xs', className)}>
      <div className="p-4">
        <LocaleLink href={href} className="relative block h-[246px] overflow-hidden rounded-xl bg-linen">
          <CMSImage
            media={product.images[0]}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 280px"
            className="object-cover"
          />
          {badge?.label && (
            <span
              className={cn(
                'absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] uppercase leading-[15px] tracking-[0.05em]',
                badgeToneClasses[badge.tone ?? 'neutral'],
              )}>
              {badge.label}
            </span>
          )}
        </LocaleLink>
      </div>

      <div className="flex flex-1 flex-col px-4 py-2">
        {rating?.average != null && (
          <div className="mb-2 flex items-center gap-1">
            <Stars value={rating.average} spaced />
            {rating.count != null && (
              <span className="pl-1 text-muted-foreground text-xs leading-[18px]">({rating.count})</span>
            )}
          </div>
        )}
        <h3 className="mb-1 font-heading font-medium text-foreground text-xl leading-7 tracking-[0.025em]">
          <LocaleLink href={href}>{product.title}</LocaleLink>
        </h3>
        {product.keyIngredients && (
          <p className="mb-3 font-semibold text-[11px] text-brand uppercase leading-4 tracking-[0.05em]">
            {product.keyIngredients}
          </p>
        )}
        {product.shortDescription && (
          <p className="line-clamp-2 font-light text-muted-foreground text-xs leading-[18px] tracking-[0.01em]">
            {product.shortDescription}
          </p>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between bg-background/50 p-4">
        <p className="font-heading font-semibold text-foreground text-xl leading-7 tracking-[0.025em]">
          {formatPrice(product.price)}
        </p>
        {/* Links to the product page until the cart exists. */}
        <LocaleLink
          href={href}
          aria-label={`Quick add ${product.title}`}
          className={buttonVariants({ variant: 'primary', size: 'sm' })}>
          + Quick Add
        </LocaleLink>
      </div>
    </article>
  );
}
