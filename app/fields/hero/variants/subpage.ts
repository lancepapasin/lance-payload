import type { Field } from 'payload';
import { link } from '../../link';

export const subpageHeroFields: Field[] = [
  {
    name: 'eyebrow',
    type: 'text',
    localized: true,
    admin: { description: 'Small uppercase label above the title, e.g. "Skin Rituals".' },
  },
  { name: 'title', type: 'text', required: true, localized: true },
  { name: 'description', type: 'textarea', localized: true },
  {
    type: 'row',
    fields: [
      link({ name: 'primaryLink', label: 'Primary action (button)', appearances: false }),
      link({ name: 'secondaryLink', label: 'Secondary action (text link)', appearances: false }),
    ],
  },
  {
    type: 'row',
    fields: [
      { name: 'image', type: 'upload', relationTo: 'media', admin: { width: '50%' } },
      {
        name: 'imageCaption',
        type: 'text',
        localized: true,
        admin: { width: '50%', description: 'Line under the image, e.g. "Botanical science. Daily ritual."' },
      },
    ],
  },
];
