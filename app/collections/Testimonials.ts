import type { CollectionConfig } from 'payload';
import { revalidateCollection } from './hooks/revalidateCollection';

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  hooks: revalidateCollection('testimonials'),
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'product', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
        {
          name: 'role',
          type: 'text',
          localized: true,
          admin: { width: '50%', description: 'e.g. "Formulation Researcher"' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'rating',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
          defaultValue: 5,
          admin: { width: '50%' },
        },
        {
          name: 'tag',
          type: 'text',
          localized: true,
          admin: { width: '50%', description: 'e.g. "Verified Buyer", "Studio Patron"' },
        },
      ],
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      admin: { position: 'sidebar' },
    },
  ],
};
