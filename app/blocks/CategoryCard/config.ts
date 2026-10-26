import type { Block } from 'payload';
import { link } from '@/app/fields/link';

export const CategoryCard: Block = {
  slug: 'categoryCard',
  interfaceName: 'CategoryCardBlock',
  labels: { singular: 'Category Card', plural: 'Category Cards' },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          localized: true,
          admin: { width: '50%', description: 'e.g. "01 • Biologic Focus"' },
        },
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'image',
          required: true,
          options: [
            { label: 'Image (copy over the photo)', value: 'image' },
            { label: 'Banner (wide, button on the right)', value: 'banner' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
    {
      name: 'tag',
      type: 'text',
      localized: true,
      admin: {
        description: 'Banner only: pill above the button, e.g. "Starting from $95.00"',
        condition: (_, siblingData) => siblingData?.layout === 'banner',
      },
    },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    link({ appearances: false }),
  ],
};
