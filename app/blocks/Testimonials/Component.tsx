import { Stars } from '@/components/design-system/Stars';
import { TestimonialCard } from '@/components/design-system/TestimonialCard';
import type { Testimonial, TestimonialsBlock as TestimonialsBlockProps } from '@/types/payload-types';
import { SectionContainer, SectionHeading } from '../SectionContainer';

export function TestimonialsBlock({ header, ratingSummary, testimonials }: TestimonialsBlockProps) {
  const items = testimonials.filter((testimonial): testimonial is Testimonial => typeof testimonial === 'object');
  if (items.length === 0) return null;

  return (
    <SectionContainer className="bg-ivory">
      <SectionHeading header={header}>
        {ratingSummary && (
          <p className="flex items-center gap-2 text-xs font-semibold leading-[18px] tracking-[0.01em] text-foreground">
            <Stars value={5} />
            {ratingSummary}
          </p>
        )}
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </SectionContainer>
  );
}
