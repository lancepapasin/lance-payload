import type { Field } from 'payload';
import { homepageHeroFields } from './variants/homepage';
import { subpageHeroFields } from './variants/subpage';

// Each variant (other than "none") has a group of the same name holding its fields; only the selected one
// shows in the admin, and Payload skips validating hidden groups. RenderHero maps the variant to its component.
export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'none',
      required: true,
      options: [
        { label: 'None', value: 'none' },
        { label: 'Homepage', value: 'homepage' },
        { label: 'Subpage', value: 'subpage' },
      ],
    },
    {
      name: 'homepage',
      type: 'group',
      interfaceName: 'HomepageHero',
      label: false,
      fields: homepageHeroFields,
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'homepage',
      },
    },
    {
      name: 'subpage',
      type: 'group',
      interfaceName: 'SubpageHero',
      label: false,
      fields: subpageHeroFields,
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'subpage',
      },
    },
  ],
};
