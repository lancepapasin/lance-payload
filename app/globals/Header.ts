import type { GlobalConfig } from 'payload';
import { link } from '@/app/fields/link';
import { revalidateGlobal } from './hooks/revalidateGlobal';

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  hooks: revalidateGlobal('header'),
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Falls back to the site name if empty.' },
    },
    {
      type: 'row',
      fields: [
        { name: 'siteName', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'tagline', type: 'text', localized: true, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'searchPlaceholder',
          type: 'text',
          localized: true,
          defaultValue: 'Search formulations, ingredients...',
          admin: { width: '50%' },
        },
        {
          name: 'currencyLabel',
          type: 'text',
          defaultValue: 'USD ($)',
          admin: { width: '50%', description: 'Shown beside the globe icon. Display only until currencies exist.' },
        },
      ],
    },
    {
      name: 'utilityLinks',
      type: 'group',
      admin: { description: 'Where the wishlist, bag and account icons go. An icon is hidden when its URL is empty.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'wishlistUrl', type: 'text', admin: { width: '33%' } },
            { name: 'cartUrl', type: 'text', admin: { width: '33%' } },
            { name: 'accountUrl', type: 'text', admin: { width: '33%' } },
          ],
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 10,
      fields: [link({ required: true, appearances: false })],
    },
  ],
};
