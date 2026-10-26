import { LocaleLink } from '@/components/LocaleLink';
import { formatPrice } from '@/lib/format';
import { cn } from '@/lib/utils';
import type { Treatment } from '@/types/payload-types';
import { buttonVariants } from './Button';
import { Icon } from './Icon';

// Figma "Card / Treatment".
type TreatmentCardProps = {
  treatment: Treatment;
  ctaLabel: string;
  className?: string;
};

export function TreatmentCard({ treatment, ctaLabel, className }: TreatmentCardProps) {
  const href = treatment.bookingUrl || `/treatments/${treatment.slug}`;

  return (
    <article className={cn('flex flex-col justify-between rounded-2xl bg-background p-8', className)}>
      <div className="flex flex-col gap-2 pb-6">
        <div className="flex items-center justify-between gap-4">
          {treatment.protocol && (
            <span className="rounded-full bg-blush px-3 py-1 font-semibold text-[11px] text-brand uppercase leading-4 tracking-[0.1em]">
              {treatment.protocol}
            </span>
          )}
          {treatment.duration != null && (
            <span className="flex items-center gap-1 font-light text-muted-foreground text-xs leading-[18px] tracking-[0.01em]">
              <Icon glyph="clock" />
              {treatment.duration} Minutes
            </span>
          )}
        </div>
        <h3 className="pt-2 font-heading font-medium text-2xl text-foreground leading-8 tracking-[0.025em]">
          {treatment.title}
        </h3>
        {treatment.modality && (
          <p className="font-semibold text-brand text-xs uppercase leading-[18px] tracking-[0.05em]">
            Modality: {treatment.modality}
          </p>
        )}
        {treatment.description && (
          <p className="pt-1 text-muted-foreground text-sm leading-[22.75px]">{treatment.description}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-border border-t pt-6">
        <p className="flex flex-col">
          <span className="font-light text-muted-foreground text-xs leading-[18px] tracking-[0.01em]">
            Session Investment
          </span>
          <span className="font-heading font-semibold text-foreground text-xl leading-7 tracking-[0.025em]">
            {formatPrice(treatment.price)}
          </span>
        </p>
        <LocaleLink href={href} className={buttonVariants({ variant: 'primary', size: 'md' })}>
          {ctaLabel}
        </LocaleLink>
      </div>
    </article>
  );
}
