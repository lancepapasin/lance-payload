import type { ComponentType } from 'react';
import type { Page } from '@/types/payload-types';
import { BreadcrumbsBlock } from './Breadcrumbs/Component';
import { CategoryGridBlock } from './CategoryGrid/Component';
import { CtaBannerBlock } from './CtaBanner/Component';
import { MediaContentBlock } from './MediaContent/Component';
import { ProductCarouselBlock } from './ProductCarousel/Component';
import { SectionBlock } from './Section/Component';
import { TestimonialsBlock } from './Testimonials/Component';
import { TreatmentGridBlock } from './TreatmentGrid/Component';

type LayoutBlock = NonNullable<Page['layout']>[number];

// Every block also receives the page it sits on, for blocks that depend on it (e.g. breadcrumbs).
type BlockContext = { page: Page };

type BlockComponents = {
  [K in LayoutBlock['blockType']]?: ComponentType<Extract<LayoutBlock, { blockType: K }> & BlockContext>;
};

const blockComponents: BlockComponents = {
  breadcrumbs: BreadcrumbsBlock,
  categoryGrid: CategoryGridBlock,
  productCarousel: ProductCarouselBlock,
  treatmentGrid: TreatmentGridBlock,
  mediaContent: MediaContentBlock,
  testimonials: TestimonialsBlock,
  ctaBanner: CtaBannerBlock,
  section: SectionBlock,
};

export function RenderBlocks({ blocks, page }: { blocks: LayoutBlock[] } & BlockContext) {
  return blocks.map((block) => {
    const Component = blockComponents[block.blockType] as ComponentType<LayoutBlock & BlockContext> | undefined;
    return Component ? <Component key={block.id} {...block} page={page} /> : null;
  });
}
