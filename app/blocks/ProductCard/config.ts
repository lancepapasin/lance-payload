import type { Block } from 'payload';

export const ProductCard: Block = {
  slug: 'productCard',
  interfaceName: 'ProductCardBlock',
  labels: { singular: 'Product Card', plural: 'Product Cards' },
  fields: [{ name: 'product', type: 'relationship', relationTo: 'products', required: true }],
};
