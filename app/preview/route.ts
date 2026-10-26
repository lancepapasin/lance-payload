import config from '@payload-config';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { getPayload } from 'payload';
import { env } from '@/lib/env';

// Opened by the admin "Preview" button (see utils/createPreviewPath.ts): checks the secret and the
// admin session, enables draft mode, then redirects to the page so it renders unpublished content.
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const path = searchParams.get('path');
  const previewSecret = searchParams.get('previewSecret');

  if (previewSecret !== env.PREVIEW_SECRET) {
    return new Response('You are not allowed to preview this page', { status: 403 });
  }
  if (!path?.startsWith('/') || path.startsWith('//')) {
    return new Response('Invalid preview path', { status: 400 });
  }

  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: req.headers });
  const draft = await draftMode();

  if (!user) {
    draft.disable();
    return new Response('You must be logged in to preview this page', { status: 403 });
  }

  draft.enable();
  redirect(path);
}
