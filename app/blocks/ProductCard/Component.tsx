import { ProductCard } from '@/components/design-system/ProductCard';
import type { ProductCardBlock as ProductCardBlockProps } from '@/types/payload-types';

export function ProductCardBlock({ product }: ProductCardBlockProps) {
  if (typeof product !== 'object') return null;
  return <ProductCard product={product} />;
}
