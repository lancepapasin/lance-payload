import { TreatmentCard } from '@/components/design-system/TreatmentCard';
import type { TreatmentCardBlock as TreatmentCardBlockProps } from '@/types/payload-types';

export function TreatmentCardBlock({ treatment, ctaLabel }: TreatmentCardBlockProps) {
  if (typeof treatment !== 'object') return null;
  return <TreatmentCard treatment={treatment} ctaLabel={ctaLabel || 'Reserve Suite'} className="h-full" />;
}
