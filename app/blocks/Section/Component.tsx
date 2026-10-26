import type { ComponentType } from 'react';
import { cn } from '@/lib/utils';
import type { SectionBlock as SectionBlockProps } from '@/types/payload-types';
import { ButtonsBlock } from '../Buttons/Component';
import { CategoryCardBlock } from '../CategoryCard/Component';
import { ContentBlock } from '../Content/Component';
import { FeatureListBlock } from '../FeatureList/Component';
import { HeadingBlock } from '../Heading/Component';
import { MediaBlock } from '../Media/Component';
import { ProductCardBlock } from '../ProductCard/Component';
import { SectionContainer, SectionHeading } from '../SectionContainer';
import { TestimonialCardBlock } from '../TestimonialCard/Component';
import { TreatmentCardBlock } from '../TreatmentCard/Component';

type ColumnBlock = SectionBlockProps['columns'][number]['blocks'][number];

type ContentComponents = {
  [K in ColumnBlock['blockType']]: ComponentType<Extract<ColumnBlock, { blockType: K }>>;
};

const contentComponents: ContentComponents = {
  heading: HeadingBlock,
  featureList: FeatureListBlock,
  media: MediaBlock,
  content: ContentBlock,
  buttons: ButtonsBlock,
  categoryCard: CategoryCardBlock,
  productCard: ProductCardBlock,
  treatmentCard: TreatmentCardBlock,
  testimonialCard: TestimonialCardBlock,
};

// One span per column in the pattern. Columns cycle through it, so extra columns wrap onto new rows;
// full-row columns sit outside the cycle.
// Every column is full width below its breakpoint; the 7/5 splits wait for lg, card grids start at md.
const layoutSpans: Record<SectionBlockProps['layout'], string[]> = {
  '12': ['md:col-span-12'],
  '6-6': ['md:col-span-6'],
  '7-5': ['lg:col-span-7', 'lg:col-span-5'],
  '5-7': ['lg:col-span-5', 'lg:col-span-7'],
  '4-4-4': ['md:col-span-4'],
  '3-3-3-3': ['md:col-span-6 lg:col-span-3'],
};

const backgroundClasses: Record<SectionBlockProps['background'], string> = {
  background: 'bg-background',
  ivory: 'bg-ivory',
  sand: 'bg-sand',
};

export function SectionBlock({ layout, background, gap, verticalAlign, header, columns }: SectionBlockProps) {
  const spans = layoutSpans[layout];
  let slot = 0;
  const columnSpans = columns.map((column) =>
    column.width === 'full' ? 'md:col-span-12' : spans[slot++ % spans.length]
  );

  return (
    <SectionContainer className={backgroundClasses[background]}>
      {header?.heading && <SectionHeading header={{ ...header, heading: header.heading }} />}
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-12',
          gap === 'editorial' ? 'gap-16 lg:gap-10' : 'gap-6',
          verticalAlign === 'center' && 'items-center'
        )}
      >
        {columns.map((column, index) => (
          <div key={column.id} className={cn('flex min-w-0 flex-col gap-8 md:col-span-12', columnSpans[index])}>
            {column.blocks.map((block) => {
              const Component = contentComponents[block.blockType] as ComponentType<ColumnBlock>;
              return <Component key={block.id} {...block} />;
            })}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
