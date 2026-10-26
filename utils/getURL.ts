import { env } from '@/lib/env';
import canUseDOM from './canUseDOM';

// NEXT_PUBLIC_SERVER_URL is the canonical site URL. VERCEL_URL (a bare host, set by Vercel per deployment)
// is only a fallback, so preview deployments still get absolute URLs.
export const getServerSideURL = () => {
  if (env.NEXT_PUBLIC_SERVER_URL) return env.NEXT_PUBLIC_SERVER_URL.replace(/\/+$/, '');
  return `https://${env.VERCEL_URL}`;
};

export const getClientSideURL = (slug?: string) => {
  const baseURL = canUseDOM ? window.location.origin : getServerSideURL();
  const normalizedSlug = slug?.replace(/^\/+/, '');

  return normalizedSlug ? `${baseURL}/${normalizedSlug}` : baseURL;
};
