import type { Field, GroupField } from 'payload';

type LinkOptions = {
  name?: string;
  label?: string;
  required?: boolean;
  appearances?: false | { label: string; value: string }[];
};

const defaultAppearances = [
  { label: 'Primary', value: 'primary' },
  { label: 'Secondary', value: 'secondary' },
  { label: 'Text', value: 'text' },
];

export const link = ({
  name = 'link',
  label,
  required = false,
  appearances = defaultAppearances,
}: LinkOptions = {}): GroupField => {
  const fields: Field[] = [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'radio',
          defaultValue: 'reference',
          options: [
            { label: 'Internal page', value: 'reference' },
            { label: 'Custom URL', value: 'custom' },
          ],
          admin: { layout: 'horizontal', width: '50%' },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          admin: { width: '50%', style: { alignSelf: 'flex-end' } },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'reference',
          type: 'relationship',
          relationTo: ['pages', 'products', 'categories'],
          required,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'reference',
            width: '50%',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
            width: '50%',
          },
        },
        {
          name: 'label',
          type: 'text',
          required,
          localized: true,
          admin: { width: '50%' },
        },
      ],
    },
  ];

  if (appearances) {
    fields.push({
      name: 'appearance',
      type: 'select',
      defaultValue: appearances[0]?.value,
      options: appearances,
    });
  }

  return {
    name,
    label,
    type: 'group',
    // The two shapes need separate interfaces, or type generation keeps whichever it meets first.
    interfaceName: appearances ? 'LinkField' : 'PlainLinkField',
    fields,
  };
};
