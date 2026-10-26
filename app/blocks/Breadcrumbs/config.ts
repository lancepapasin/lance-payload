import type { Block } from 'payload';

// The trail itself comes from the page's nested-docs breadcrumbs, so it follows the page's parent chain.
export const Breadcrumbs: Block = {
  slug: 'breadcrumbs',
  interfaceName: 'BreadcrumbsBlock',
  labels: { singular: 'Breadcrumbs', plural: 'Breadcrumbs' },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'showHome',
          type: 'checkbox',
          label: 'Start with a home link',
          defaultValue: true,
          admin: { width: '50%', style: { alignSelf: 'flex-end' } },
        },
        {
          name: 'homeLabel',
          type: 'text',
          defaultValue: 'Home',
          localized: true,
          admin: { width: '50%', condition: (_, siblingData) => Boolean(siblingData?.showHome) },
        },
      ],
    },
    {
      name: 'background',
      type: 'select',
      defaultValue: 'background',
      required: true,
      options: [
        { label: 'Cream', value: 'background' },
        { label: 'Ivory', value: 'ivory' },
        { label: 'Sand', value: 'sand' },
      ],
      admin: { description: 'Match the section below so the trail sits on the same background.' },
    },
  ],
};
