import { Heading } from '@/components/design-system/Heading';
import type { HeadingBlock as HeadingBlockProps } from '@/types/payload-types';

// Inside a column the heading is always stacked; the split layout needs the full section width.
export function HeadingBlock({ eyebrow, title, description, align, tone }: HeadingBlockProps) {
  return (
    <Heading
      eyebrow={eyebrow}
      title={title}
      description={description}
      align={align ?? 'left'}
      tone={tone ?? 'default'}
    />
  );
}
