import type { SelectField } from 'payload';

// Values are Figma "Icon" glyph names, rendered by components/design-system/Icon.tsx.
export const iconOptions = [
  { label: 'Extraction (droplet)', value: 'extraction' },
  { label: 'Microbiome (shield)', value: 'microbiome' },
  { label: 'Packaging (recycle)', value: 'packaging' },
  { label: 'Certification (microscope)', value: 'certification' },
  { label: 'Diagnostic (mind)', value: 'diagnostic' },
  { label: 'Sustainability (leaf)', value: 'sustainability' },
];

export const icon = ({ name = 'icon', required = false }: { name?: string; required?: boolean } = {}): SelectField => ({
  name,
  type: 'select',
  required,
  options: iconOptions,
});
