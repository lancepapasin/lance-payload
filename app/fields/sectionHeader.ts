import type { GroupField } from 'payload';

type SectionHeaderOptions = {
  defaultAlign?: 'left' | 'center';
  /** Set false where the header is optional; it renders only when a heading is filled in. */
  required?: boolean;
};

export const sectionHeader = ({ defaultAlign = 'left', required = true }: SectionHeaderOptions = {}): GroupField => ({
  name: 'header',
  type: 'group',
  interfaceName: required ? 'SectionHeaderField' : 'OptionalSectionHeaderField',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          localized: true,
          admin: { width: '50%', description: 'Small uppercase label above the heading.' },
        },
        {
          name: 'align',
          type: 'select',
          defaultValue: defaultAlign,
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
  ],
});
