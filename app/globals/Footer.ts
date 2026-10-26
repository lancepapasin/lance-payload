import type { GlobalConfig } from 'payload';
import { link } from '@/app/fields/link';
import { revalidateGlobal } from './hooks/revalidateGlobal';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  hooks: revalidateGlobal('footer'),
  fields: [
    {
      name: 'about',
      type: 'textarea',
      localized: true,
      admin: { description: 'Short brand blurb under the logo.' },
    },
    {
      name: 'badge',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "100% Biodegradable Actives"' },
    },
    {
      name: 'columns',
      type: 'array',
      maxRows: 3,
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        {
          name: 'links',
          type: 'array',
          fields: [link({ required: true, appearances: false })],
        },
      ],
    },
    {
      name: 'newsletter',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'placeholder', type: 'text', defaultValue: 'Your email address', localized: true },
        { name: 'buttonLabel', type: 'text', defaultValue: 'Subscribe', localized: true },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      localized: true,
    },
    {
      name: 'legalLinks',
      type: 'array',
      fields: [link({ required: true, appearances: false })],
    },
  ],
};
