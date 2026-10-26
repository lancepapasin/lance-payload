import { CategoryCard } from '@/components/design-system/CategoryCard';
import type { CategoryCardBlock as CategoryCardBlockProps } from '@/types/payload-types';

export function CategoryCardBlock({ layout, eyebrow, title, description, tag, image, link }: CategoryCardBlockProps) {
  return (
    <CategoryCard
      layout={layout}
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      tag={tag}
      link={link}
    />
  );
}
