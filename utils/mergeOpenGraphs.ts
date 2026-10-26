import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Éclat Dermatologie',
  title: 'Éclat Dermatologie',
  description: 'Dermatological rigor meets sensorial poise.',
  images: [
    {
      url: 'https://payloadcms.com/images/og-image.jpg',
    },
  ],
};

export const mergeOpenGraph = (og?: Partial<Metadata['openGraph']>): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
