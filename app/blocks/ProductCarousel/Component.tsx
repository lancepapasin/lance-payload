import { CMSLink } from '@/components/CMSLink';
import { ProductCard } from '@/components/design-system/ProductCard';
import { getLocale } from '@/lib/getLocale';
import { getProducts } from '@/lib/payload/getProducts';
import type { Product, ProductCarouselBlock as ProductCarouselBlockProps } from '@/types/payload-types';
import { SectionContainer, SectionHeading } from '../SectionContainer';

async function resolveProducts({ source, category, products, limit }: ProductCarouselBlockProps) {
  if (source === 'manual') {
    return (products ?? []).filter((product): product is Product => typeof product === 'object');
  }
  const categoryId = typeof category === 'object' && category ? category.id : (category ?? undefined);
  return getProducts({ source, categoryId, limit: limit ?? 8, locale: await getLocale() });
}

export async function ProductCarouselBlock(props: ProductCarouselBlockProps) {
  const { header, viewAll } = props;
  const products = await resolveProducts(props);
  if (products.length === 0) return null;

  // The description is short supporting copy here, so it renders in the slot instead of the Heading's description.
  return (
    <SectionContainer className="bg-background">
      <SectionHeading header={{ ...header, description: null }}>
        {(header.description || viewAll?.label) && (
          <div className="flex items-center gap-6">
            {header.description && (
              <p className="font-light text-muted-foreground text-xs leading-[18px] tracking-[0.01em]">
                {header.description}
              </p>
            )}
            {viewAll?.label && <CMSLink link={viewAll} appearance="text" />}
          </div>
        )}
      </SectionHeading>
      <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className="w-[280px] shrink-0 snap-start md:w-auto" />
        ))}
      </div>
    </SectionContainer>
  );
}
