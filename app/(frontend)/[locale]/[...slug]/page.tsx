import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { RenderBlocks } from '@/app/blocks/RenderLayoutBlocks';
import { RenderHero } from '@/app/fields/hero/components/RenderHero';
import { getLocale } from '@/lib/getLocale';
import { getPage } from '@/lib/payload/getPage';
import { generateMeta } from '@/utils/generateMeta';

type Args = {
  params: Promise<{ slug?: string[] }>;
};

async function loadPage(params: Args['params']) {
  const { slug = [] } = await params;
  const [locale, { isEnabled: draft }] = await Promise.all([getLocale(), draftMode()]);
  return getPage(`/${slug.join('/')}`, { locale, draft });
}

export default async function PageTemplate({ params }: Args) {
  const page = await loadPage(params);
  if (!page) notFound();

  return (
    <main className="flex-1">
      <RenderHero hero={page.hero} />
      <RenderBlocks blocks={page.layout ?? []} page={page} />
    </main>
  );
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const page = await loadPage(params);
  return page ? generateMeta({ doc: page, locale: await getLocale() }) : {};
}
