import type { Block } from 'payload';
import { icon } from '@/app/fields/iconField';

export const FeatureList: Block = {
  slug: 'featureList',
  interfaceName: 'FeatureListBlock',
  labels: { singular: 'Feature List', plural: 'Feature Lists' },
  fields: [
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        icon(),
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
  ],
};
