import { CategoryCard } from '@/components/design-system/CategoryCard';
import type { CategoryGridBlock as CategoryGridBlockProps } from '@/types/payload-types';
import { SectionContainer, SectionHeading } from '../SectionContainer';

type CategoryItem = CategoryGridBlockProps['items'][number];

const spanClasses: Record<CategoryItem['size'], string> = {
  large: 'lg:col-span-7',
  small: 'lg:col-span-5',
  full: 'lg:col-span-12',
};

export function CategoryGridBlock({ header, items }: CategoryGridBlockProps) {
  return (
    <SectionContainer className="bg-ivory">
      <SectionHeading header={header} className="mb-12" />
      <div className="grid gap-6 lg:grid-cols-12">
        {items.map((item) => (
          <CategoryCard
            key={item.id}
            layout={item.size === 'full' ? 'banner' : 'image'}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            image={item.image}
            tag={item.tag}
            link={item.link}
            className={spanClasses[item.size]}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
