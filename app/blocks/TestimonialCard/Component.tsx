import { TestimonialCard } from '@/components/design-system/TestimonialCard';
import type { TestimonialCardBlock as TestimonialCardBlockProps } from '@/types/payload-types';

export function TestimonialCardBlock({ testimonial }: TestimonialCardBlockProps) {
  if (typeof testimonial !== 'object') return null;
  return <TestimonialCard testimonial={testimonial} className="h-full" />;
}
