import {
  BoldFeature,
  FixedToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical';
import type { Field } from 'payload';
import { link } from '../../link';

export const homepageHeroFields: Field[] = [
  {
    name: 'badge',
    type: 'text',
    localized: true,
    admin: { description: 'e.g. "Haute Formulary • Batch Nº 302"' },
  },
  {
    name: 'heading',
    type: 'richText',
    required: true,
    localized: true,
    editor: lexicalEditor({
      features: [FixedToolbarFeature(), ParagraphFeature(), BoldFeature(), ItalicFeature()],
    }),
    admin: { description: 'Italicise a word to render it in the accent style.' },
  },
  {
    name: 'description',
    type: 'textarea',
    localized: true,
  },
  {
    name: 'links',
    type: 'array',
    maxRows: 2,
    fields: [link({ required: true })],
  },
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'imageCaption',
    type: 'group',
    admin: { description: 'Text along the bottom of the main image.' },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'label',
            type: 'text',
            localized: true,
            admin: { width: '50%', description: 'e.g. "Parisian Atelier"' },
          },
          {
            name: 'meta',
            type: 'text',
            localized: true,
            admin: { width: '50%', description: 'e.g. "Ref: Bio-01"' },
          },
        ],
      },
    ],
  },
  {
    name: 'overlayCard',
    type: 'group',
    admin: { description: 'Small floating card over the main image.' },
    fields: [
      {
        type: 'row',
        fields: [
          { name: 'image', type: 'upload', relationTo: 'media', admin: { width: '50%' } },
          { name: 'label', type: 'text', localized: true, admin: { width: '50%' } },
        ],
      },
    ],
  },
];
