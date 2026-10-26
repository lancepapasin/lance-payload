import type { Block } from 'payload';

export const TestimonialCard: Block = {
  slug: 'testimonialCard',
  interfaceName: 'TestimonialCardBlock',
  labels: { singular: 'Testimonial Card', plural: 'Testimonial Cards' },
  fields: [{ name: 'testimonial', type: 'relationship', relationTo: 'testimonials', required: true }],
};
