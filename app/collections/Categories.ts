import { type CollectionConfig, slugField } from 'payload';
import { revalidateCollection } from './hooks/revalidateCollection';

export const Categories: CollectionConfig = {
  slug: 'categories',
  hooks: revalidateCollection('categories'),
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    slugField({ position: 'sidebar' }),
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
