import type { Block } from 'payload';
import { sectionHeader } from '@/app/fields/sectionHeader';

export const Testimonials: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  labels: { singular: 'Testimonials', plural: 'Testimonials' },
  fields: [
    sectionHeader(),
    {
      name: 'ratingSummary',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "4.92 / 5.0 Global Rating"' },
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      required: true,
    },
  ],
};
