import type { CollectionConfig } from 'payload';
import { revalidateCollection } from './hooks/revalidateCollection';

export const Media: CollectionConfig = {
  slug: 'media',
  hooks: revalidateCollection('media'),
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
};
