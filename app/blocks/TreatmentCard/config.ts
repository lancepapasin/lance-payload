import type { Block } from 'payload';

export const TreatmentCard: Block = {
  slug: 'treatmentCard',
  interfaceName: 'TreatmentCardBlock',
  labels: { singular: 'Treatment Card', plural: 'Treatment Cards' },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'treatment',
          type: 'relationship',
          relationTo: 'treatments',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: 'Reserve Suite',
          localized: true,
          admin: { width: '50%', description: 'Button label on the card.' },
        },
      ],
    },
  ],
};
