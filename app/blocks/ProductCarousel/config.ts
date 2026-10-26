import type { Block } from 'payload';
import { link } from '@/app/fields/link';
import { sectionHeader } from '@/app/fields/sectionHeader';

export const ProductCarousel: Block = {
  slug: 'productCarousel',
  interfaceName: 'ProductCarouselBlock',
  labels: { singular: 'Product Carousel', plural: 'Product Carousels' },
  fields: [
    sectionHeader(),
    {
      name: 'source',
      type: 'select',
      defaultValue: 'bestsellers',
      required: true,
      options: [
        { label: 'Bestsellers', value: 'bestsellers' },
        { label: 'By category', value: 'category' },
        { label: 'Hand-picked', value: 'manual' },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      admin: { condition: (_, siblingData) => siblingData?.source === 'category' },
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
      admin: { condition: (_, siblingData) => siblingData?.source === 'manual' },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 8,
      min: 1,
      max: 24,
      admin: { condition: (_, siblingData) => siblingData?.source !== 'manual' },
    },
    link({ name: 'viewAll', label: 'View all link', appearances: false }),
  ],
};
