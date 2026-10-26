import { type CollectionConfig, slugField } from 'payload';
import { revalidateCollection } from './hooks/revalidateCollection';

export const Treatments: CollectionConfig = {
  slug: 'treatments',
  hooks: revalidateCollection('treatments'),
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'protocol', 'duration', 'price', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    slugField({ position: 'sidebar' }),
    {
      type: 'row',
      fields: [
        {
          name: 'protocol',
          type: 'text',
          localized: true,
          admin: { width: '50%', description: 'e.g. "Protocol I"' },
        },
        {
          name: 'duration',
          type: 'number',
          min: 0,
          admin: { width: '50%', description: 'Duration in minutes.' },
        },
      ],
    },
    {
      name: 'modality',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "Cryo-Sculpt • Medical-Grade LED • Ginseng Vitamin C"' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'bookingUrl',
      type: 'text',
      label: 'Booking URL',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
