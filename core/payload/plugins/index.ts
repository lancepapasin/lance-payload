import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import type { Plugin } from 'payload';
import { env } from '@/lib/env';
import { getServerSideURL } from '@/utils/getURL';
import { pagePath } from '@/utils/pagePath';

export const plugins: Plugin[] = [
  nestedDocsPlugin({
    collections: ['pages'],
    generateLabel: (_, doc) => String(doc.title),
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${String(doc.slug)}`, ''),
  }),
  // Pages adds the SEO fields itself (in its "SEO" tab), so `collections` is left unset here;
  // the plugin only provides the generate endpoints used by the fields' "Auto-generate" buttons.
  seoPlugin({
    generateTitle: ({ doc }) => doc.title,
    generateURL: ({ doc }) => {
      const url = getServerSideURL();
      const path = doc?.slug ? pagePath(doc) : '/';
      return path === '/' ? url : `${url}${path}`;
    },
  }),
  vercelBlobStorage({
    enabled: true,
    clientUploads: true,
    collections: {
      media: true,
    },
    token: env.BLOB_READ_WRITE_TOKEN,
  }),
];
