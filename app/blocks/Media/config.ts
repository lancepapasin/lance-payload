import type { Block } from 'payload';
import { icon } from '@/app/fields/iconField';

export const Media: Block = {
  slug: 'media',
  interfaceName: 'MediaBlock',
  labels: { singular: 'Image', plural: 'Images' },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, admin: { width: '50%' } },
        {
          name: 'aspect',
          type: 'select',
          defaultValue: 'portrait',
          options: [
            { label: 'Portrait (5:6)', value: 'portrait' },
            { label: 'Square', value: 'square' },
            { label: 'Landscape (3:2)', value: 'landscape' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'badge',
      type: 'group',
      admin: { description: 'Optional floating card over the bottom corner, e.g. "Certified Cold-Press".' },
      fields: [
        {
          type: 'row',
          fields: [
            icon(),
            { name: 'title', type: 'text', localized: true },
            { name: 'subtitle', type: 'text', localized: true },
          ],
        },
      ],
    },
  ],
};
