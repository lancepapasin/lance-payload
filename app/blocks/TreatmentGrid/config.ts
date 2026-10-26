import type { Block } from 'payload';
import { sectionHeader } from '@/app/fields/sectionHeader';

export const TreatmentGrid: Block = {
  slug: 'treatmentGrid',
  interfaceName: 'TreatmentGridBlock',
  labels: { singular: 'Treatment Grid', plural: 'Treatment Grids' },
  fields: [
    sectionHeader({ defaultAlign: 'center' }),
    {
      name: 'treatments',
      type: 'relationship',
      relationTo: 'treatments',
      hasMany: true,
      required: true,
    },
    {
      name: 'ctaLabel',
      type: 'text',
      defaultValue: 'Reserve Suite',
      localized: true,
      admin: { description: 'Button label on each treatment card.' },
    },
  ],
};
