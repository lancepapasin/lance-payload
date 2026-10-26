import type { Block } from 'payload';

export const Heading: Block = {
  slug: 'heading',
  interfaceName: 'HeadingBlock',
  labels: { singular: 'Heading', plural: 'Headings' },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      admin: { description: 'Small uppercase label above the title.' },
    },
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
    {
      type: 'row',
      fields: [
        {
          name: 'align',
          type: 'select',
          defaultValue: 'left',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'tone',
          type: 'select',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Inverse (on dark)', value: 'inverse' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
  ],
};
