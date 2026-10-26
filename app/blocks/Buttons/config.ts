import type { Block } from 'payload';
import { link } from '@/app/fields/link';

export const Buttons: Block = {
  slug: 'buttons',
  interfaceName: 'ButtonsBlock',
  labels: { singular: 'Buttons', plural: 'Buttons' },
  fields: [
    {
      name: 'links',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 3,
      fields: [link({ required: true })],
    },
  ],
};
