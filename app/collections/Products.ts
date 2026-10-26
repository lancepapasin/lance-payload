import { type CollectionConfig, slugField } from 'payload';
import { revalidateCollection } from './hooks/revalidateCollection';

export const Products: CollectionConfig = {
  slug: 'products',
  hooks: revalidateCollection('products'),
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'isBestseller', 'updatedAt'],
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
      name: 'keyIngredients',
      type: 'text',
      localized: true,
      admin: { description: 'Short ingredient line shown on cards, e.g. "Niacinamide 5% • Ferulic".' },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
    {
      type: 'row',
      fields: [
        { name: 'price', type: 'number', required: true, min: 0, admin: { width: '50%' } },
        { name: 'compareAtPrice', type: 'number', min: 0, admin: { width: '50%' } },
      ],
    },
    {
      name: 'rating',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'average', type: 'number', min: 0, max: 5, admin: { width: '50%' } },
            { name: 'count', type: 'number', min: 0, defaultValue: 0, admin: { width: '50%' } },
          ],
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'badge',
      type: 'group',
      admin: { position: 'sidebar', description: 'Pill shown on the product image, e.g. "Bestseller".' },
      fields: [
        { name: 'label', type: 'text', localized: true },
        {
          name: 'tone',
          type: 'select',
          defaultValue: 'neutral',
          options: [
            { label: 'Accent', value: 'accent' },
            { label: 'Soft', value: 'soft' },
            { label: 'Neutral', value: 'neutral' },
          ],
        },
      ],
    },
    {
      name: 'isBestseller',
      type: 'checkbox',
      defaultValue: false,
      index: true,
      admin: { position: 'sidebar', description: 'Included in "Bestsellers" product carousels.' },
    },
  ],
};
