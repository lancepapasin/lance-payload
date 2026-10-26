import { type NextRequest, NextResponse } from 'next/server';
import { defaultLocale, splitLocale } from '@/utils/locale';

// Frontend routes live under app/(frontend)/[locale], but the default locale has no URL prefix: `/about` is
// rewritten to `/en/about` internally, and an explicit `/en/about` redirects to `/about` so each page has one URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/';
    return NextResponse.redirect(url);
  }
  if (splitLocale(pathname).locale !== defaultLocale) return NextResponse.next();

  url.pathname = pathname === '/' ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skips Payload (admin, api), the preview route, Next internals and files such as favicon.ico.
  matcher: ['/((?!admin|api|preview|_next|.*\\..*).*)'],
};
