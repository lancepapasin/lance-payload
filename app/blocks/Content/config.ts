import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  LinkFeature,
  lexicalEditor,
  RelationshipFeature,
} from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';
import { linkableCollections } from '@/lib/payload/resolveHref';

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
      editor: lexicalEditor({
        // These override the defaults of the same name (the last feature with a given key wins).
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          LinkFeature({
            // Internal links only to collections the site has routes for (the default allows every collection).
            enabledCollections: linkableCollections,
            // Rendering a link only needs the target's slug.
            maxDepth: 1,
            fields: ({ defaultFields }) => [
              ...defaultFields,
              {
                name: 'appearance',
                type: 'select',
                defaultValue: 'text',
                options: [
                  { label: 'Inline link', value: 'text' },
                  { label: 'Primary button', value: 'primary' },
                  { label: 'Secondary button', value: 'secondary' },
                ],
                admin: { description: 'Buttons render on their own row, below any text before them.' },
              },
            ],
          }),
          //   RelationshipFeature({ enabledCollections: ['categories', 'products', 'treatments'] }),
        ],
      }),
    },
  ],
};
