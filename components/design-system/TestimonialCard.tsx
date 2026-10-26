import { CMSImage } from '@/components/CMSImage';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/types/payload-types';
import { Stars } from './Stars';

// Figma "Card / Testimonial".
export function TestimonialCard({ testimonial, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <figure
      className={cn(
        'flex flex-col justify-between rounded-2xl bg-card p-8 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]',
        className
      )}
    >
      <div className="flex flex-col gap-6 pb-6">
        <div className="flex items-center justify-between gap-4">
          <Stars value={testimonial.rating} />
          {testimonial.tag && (
            <span className="rounded-full bg-sand px-2.5 py-1 text-[10px] uppercase leading-[15px] tracking-[0.05em] text-sand-foreground">
              {testimonial.tag}
            </span>
          )}
        </div>
        <blockquote className="text-sm italic leading-[22.75px] text-ink">“{testimonial.quote}”</blockquote>
      </div>

      <figcaption className="flex items-center gap-3 border-t border-border pt-6">
        <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-linen">
          <CMSImage media={testimonial.avatar} fill sizes="48px" className="object-cover" />
        </span>
        <span className="flex flex-col">
          <span className="font-heading text-base font-semibold leading-[22px] text-foreground">
            {testimonial.name}
          </span>
          {testimonial.role && (
            <span className="text-[10px] uppercase leading-[15px] tracking-[0.05em] text-brand">
              {testimonial.role}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
