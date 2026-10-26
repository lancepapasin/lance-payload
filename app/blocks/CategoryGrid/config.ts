import type { Block } from 'payload';
import { link } from '@/app/fields/link';
import { sectionHeader } from '@/app/fields/sectionHeader';

export const CategoryGrid: Block = {
  slug: 'categoryGrid',
  interfaceName: 'CategoryGridBlock',
  labels: { singular: 'Category Grid', plural: 'Category Grids' },
  fields: [
    sectionHeader(),
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
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
              name: 'size',
              type: 'select',
              defaultValue: 'large',
              required: true,
              options: [
                { label: 'Large (7 of 12 columns)', value: 'large' },
                { label: 'Small (5 of 12 columns)', value: 'small' },
                { label: 'Full width', value: 'full' },
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
          admin: { description: 'Optional pill on the card, e.g. "Starting from $95.00"' },
        },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        link({ appearances: false }),
      ],
    },
  ],
};
