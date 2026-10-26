import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    serverActions: {
      allowedOrigins: ['localhost:3000', 'https://6j39gc80-3000.asse.devtunnels.ms/'],
    },
  },
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default withPayload(nextConfig);
