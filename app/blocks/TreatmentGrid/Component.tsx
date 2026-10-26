import { TreatmentCard } from '@/components/design-system/TreatmentCard';
import type { Treatment, TreatmentGridBlock as TreatmentGridBlockProps } from '@/types/payload-types';
import { SectionContainer, SectionHeading } from '../SectionContainer';

export function TreatmentGridBlock({ header, treatments, ctaLabel }: TreatmentGridBlockProps) {
  const items = treatments.filter((treatment): treatment is Treatment => typeof treatment === 'object');
  if (items.length === 0) return null;

  return (
    <SectionContainer className="bg-ivory">
      <SectionHeading header={header} />
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((treatment) => (
          <TreatmentCard key={treatment.id} treatment={treatment} ctaLabel={ctaLabel || 'Reserve Suite'} />
        ))}
      </div>
    </SectionContainer>
  );
}
