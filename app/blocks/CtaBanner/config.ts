import type { Block } from 'payload';
import { link } from '@/app/fields/link';

export const CtaBanner: Block = {
  slug: 'ctaBanner',
  interfaceName: 'CtaBannerBlock',
  labels: { singular: 'CTA Banner', plural: 'CTA Banners' },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      admin: { description: 'Small uppercase label above the heading, e.g. "Dermal Algorithm Matcher".' },
    },
    { name: 'heading', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
    link({ required: true }),
    {
      name: 'theme',
      type: 'select',
      defaultValue: 'dark',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
    },
  ],
};
