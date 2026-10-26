import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Figma "Heading": eyebrow + title + description, with an optional supporting-content slot.
// Split puts the description (and slot) on the right; Stacked puts it under the title.
type HeadingProps = {
  eyebrow?: string | null;
  title: ReactNode;
  description?: string | null;
  layout?: 'split' | 'stacked';
  align?: 'left' | 'center';
  tone?: 'default' | 'inverse';
  /** Supporting content, rendered beside the description in the split layout. */
  children?: ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
};

const toneClasses = {
  default: { eyebrow: 'text-brand', title: 'text-foreground', description: 'text-muted-foreground' },
  inverse: { eyebrow: 'text-inverse-accent', title: 'text-inverse-foreground', description: 'text-inverse-muted' },
};

export const headingTitleClasses =
  'font-heading text-4xl font-semibold leading-[1.25] tracking-[-0.025em] whitespace-pre-line sm:text-5xl';

export function Heading({
  eyebrow,
  title,
  description,
  layout = 'stacked',
  align = 'left',
  tone = 'default',
  children,
  as: TitleTag = 'h2',
  className,
}: HeadingProps) {
  const colors = toneClasses[tone];
  const isSplit = layout === 'split' && align === 'left';
  const isCenter = align === 'center';

  const eyebrowAndTitle = (
    <div className={cn('flex flex-col gap-2', isSplit && 'min-w-0 flex-1')}>
      {eyebrow && (
        <p className={cn('font-semibold text-[11px] uppercase leading-4 tracking-[0.1em]', colors.eyebrow)}>
          {eyebrow}
        </p>
      )}
      <TitleTag className={cn(headingTitleClasses, colors.title)}>{title}</TitleTag>
    </div>
  );
  const descriptionText = description && (
    <p className={cn('text-sm leading-[22px]', colors.description)}>{description}</p>
  );

  if (isSplit) {
    return (
      <div className={cn('flex flex-col gap-6 md:flex-row md:items-end md:justify-between', className)}>
        {eyebrowAndTitle}
        {(descriptionText || children) && (
          <div className="flex w-full flex-col gap-2 md:max-w-[448px] md:items-end">
            {descriptionText}
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-4', isCenter && 'mx-auto max-w-[672px] items-center text-center', className)}>
      {eyebrowAndTitle}
      {descriptionText}
    </div>
  );
}
