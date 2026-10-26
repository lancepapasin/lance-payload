import type { Block } from 'payload';
import { icon } from '@/app/fields/iconField';
import { sectionHeader } from '@/app/fields/sectionHeader';

export const MediaContent: Block = {
  slug: 'mediaContent',
  interfaceName: 'MediaContentBlock',
  labels: { singular: 'Media + Content', plural: 'Media + Content' },
  fields: [
    sectionHeader(),
    {
      type: 'row',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, admin: { width: '50%' } },
        {
          name: 'imagePosition',
          type: 'select',
          defaultValue: 'left',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'imageBadge',
      type: 'group',
      admin: { description: 'Optional floating badge over the image, e.g. "Certified Cold-Pressed".' },
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
    {
      name: 'features',
      type: 'array',
      fields: [
        icon(),
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
  ],
};
