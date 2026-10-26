import Image from 'next/image';
import { cn } from '@/lib/utils';

// Same dimensions as the star glyph in Icon.tsx; the half star shares its bounds.
const STAR = { full: '/icons/star.svg', half: '/icons/star-half.svg', width: 13.3333, height: 12.6667 };

type StarsProps = {
  value: number;
  /** Product cards space their stars 4px apart; testimonials and summaries sit flush. */
  spaced?: boolean;
  className?: string;
};

export function Stars({ value, spaced = false, className }: StarsProps) {
  const rounded = Math.round(value * 2) / 2;

  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className={cn('inline-flex items-center', spaced && 'gap-1', className)}
    >
      {[1, 2, 3, 4, 5].map((position) => {
        const isHalf = rounded === position - 0.5;
        const isEmpty = !isHalf && rounded < position;
        return (
          <Image
            key={position}
            src={isHalf ? STAR.half : STAR.full}
            alt=""
            width={STAR.width}
            height={STAR.height}
            className={cn('shrink-0', isEmpty && 'opacity-25')}
          />
        );
      })}
    </span>
  );
}
