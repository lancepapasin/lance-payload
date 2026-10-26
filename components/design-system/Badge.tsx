import { cn } from '@/lib/utils';

// Figma "Badge": Subtle sits on light surfaces, Frosted on imagery.
type BadgeProps = {
  label: string;
  tone?: 'subtle' | 'frosted';
  className?: string;
};

export function Badge({ label, tone = 'subtle', className }: BadgeProps) {
  if (tone === 'frosted') {
    return (
      <span
        className={cn(
          'inline-flex w-fit rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-white backdrop-blur-[6px]',
          className
        )}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex w-fit items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.1em] text-brand',
        className
      )}
    >
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-brand" />
      {label}
    </span>
  );
}
