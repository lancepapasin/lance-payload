import { createBreadcrumbsField, createParentField } from '@payloadcms/plugin-nested-docs';
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields';
import { type CollectionConfig, slugField } from 'payload';
import { authenticatedOrPublished } from '@/app/access/authenticatedOrPublished';
import { pageBlocks } from '@/app/blocks';
import { createPreviewPath } from '@/utils/createPreviewPath';
import { hero } from '../fields/hero';
import { revalidatePage, revalidatePageDelete } from './hooks/revalidatePage';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: createPreviewPath,
  },
  access: {
    read: authenticatedOrPublished,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Title & Hero',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              localized: true,
            },
            hero,
          ],
        },
        {
          label: 'Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: pageBlocks,
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
              overrides: { localized: true },
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
              overrides: { localized: true },
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    slugField(),
    // Declared here (instead of letting the nested-docs plugin add it) to keep "home" out of the options,
    // which would otherwise produce `/home/...` URLs. Setting filterOptions replaces the plugin's default,
    // so this also repeats its rule against picking the page itself or one of its descendants.
    createParentField('pages', {
      filterOptions: ({ id }) => ({
        slug: { not_equals: 'home' },
        ...(id ? { id: { not_equals: id }, 'breadcrumbs.doc': { not_in: [id] } } : {}),
      }),
      // createParentField spreads overrides last, so this replaces its `admin` (and its sidebar position) wholesale.
      admin: { position: 'sidebar', description: 'The page this one sits under. Sets its URL and breadcrumb trail.' },
    }),
    // Declared here so it sits in the sidebar under its parent instead of below the tabs. Both nested-docs
    // fields must stay top-level: the plugin only looks for them there, and would otherwise add duplicates.
    createBreadcrumbsField('pages', {
      admin: {
        position: 'sidebar',
        initCollapsed: true,
        description: 'Generated from the parent chain on save.',
      },
    }),
  ],
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidatePageDelete],
  },
  versions: {
    drafts: {
      autosave: true,
      localizeStatus: true,
    },
    maxPerDoc: 50,
  },
};
