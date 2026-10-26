import type { GlobalConfig } from 'payload';
import { link } from '@/app/fields/link';
import { revalidateGlobal } from './hooks/revalidateGlobal';

export const NotFound: GlobalConfig = {
  slug: 'not-found',
  label: 'Not Found Page',
  access: {
    read: () => true,
  },
  hooks: revalidateGlobal('not-found'),
  admin: { description: 'Shown when a page does not exist (404).' },
  fields: [
    { name: 'eyebrow', type: 'text', defaultValue: 'Error 404', localized: true },
    { name: 'heading', type: 'text', required: true, defaultValue: 'Page not found', localized: true },
    { name: 'description', type: 'textarea', localized: true },
    link({ appearances: false, label: 'Button' }),
  ],
};
