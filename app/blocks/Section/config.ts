import type { Block } from 'payload';
import { sectionHeader } from '@/app/fields/sectionHeader';
import { Buttons } from '../Buttons/config';
import { CategoryCard } from '../CategoryCard/config';
import { Content } from '../Content/config';
import { FeatureList } from '../FeatureList/config';
import { Heading } from '../Heading/config';
import { Media } from '../Media/config';
import { ProductCard } from '../ProductCard/config';
import { TestimonialCard } from '../TestimonialCard/config';
import { TreatmentCard } from '../TreatmentCard/config';

// Blocks allowed inside a column. Section itself is not in this list, which caps nesting at one level.
export const contentBlocks = [
  Heading,
  FeatureList,
  Media,
  Content,
  Buttons,
  CategoryCard,
  ProductCard,
  TreatmentCard,
  TestimonialCard,
];

// Values are column spans out of 12; Section/Component.tsx maps each to grid classes.
const layouts = [
  { label: 'Full width (12)', value: '12' },
  { label: 'Halves (6 / 6)', value: '6-6' },
  { label: 'Wide left (7 / 5)', value: '7-5' },
  { label: 'Wide right (5 / 7)', value: '5-7' },
  { label: 'Thirds (4 / 4 / 4)', value: '4-4-4' },
  { label: 'Quarters (3 / 3 / 3 / 3)', value: '3-3-3-3' },
] as const;

export const Section: Block = {
  slug: 'section',
  interfaceName: 'SectionBlock',
  labels: { singular: 'Section', plural: 'Sections' },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'layout',
          type: 'select',
          defaultValue: '12',
          required: true,
          options: [...layouts],
          admin: { width: '25%', description: 'Columns repeat this pattern and wrap onto new rows.' },
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
          admin: { width: '25%' },
        },
        {
          name: 'gap',
          type: 'select',
          defaultValue: 'cards',
          required: true,
          options: [
            { label: 'Cards (24px)', value: 'cards' },
            { label: 'Editorial (40px)', value: 'editorial' },
          ],
          admin: { width: '25%' },
        },
        {
          name: 'verticalAlign',
          type: 'select',
          defaultValue: 'stretch',
          required: true,
          options: [
            { label: 'Stretch', value: 'stretch' },
            { label: 'Center', value: 'center' },
          ],
          admin: { width: '25%' },
        },
      ],
    },
    sectionHeader({ required: false }),
    {
      name: 'columns',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Column', plural: 'Columns' },
      fields: [
        {
          name: 'width',
          type: 'select',
          defaultValue: 'auto',
          required: true,
          options: [
            { label: 'Follow layout', value: 'auto' },
            { label: 'Full row', value: 'full' },
          ],
          admin: { description: 'A full-row column spans all 12 columns and does not use up a slot in the pattern.' },
        },
        { name: 'blocks', type: 'blocks', required: true, minRows: 1, blocks: contentBlocks },
      ],
    },
  ],
};
