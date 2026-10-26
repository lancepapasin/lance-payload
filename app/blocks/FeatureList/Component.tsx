import { FeatureRow } from '@/components/design-system/FeatureRow';
import type { FeatureListBlock as FeatureListBlockProps } from '@/types/payload-types';

export function FeatureListBlock({ features }: FeatureListBlockProps) {
  return (
    <ul className="flex flex-col gap-6">
      {features.map((feature) => (
        <li key={feature.id}>
          <FeatureRow glyph={feature.icon} title={feature.title} description={feature.description} />
        </li>
      ))}
    </ul>
  );
}
