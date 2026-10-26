import { CMSLink } from '@/components/CMSLink';
import { Heading } from '@/components/design-system/Heading';
import { getLocale } from '@/lib/getLocale';
import { getNotFound } from '@/lib/payload/getGlobals';

export default async function NotFound() {
  const { eyebrow, heading, description, link } = await getNotFound(await getLocale());

  return (
    <main className="flex flex-1 items-center justify-center bg-background px-4 py-24 sm:px-8 lg:px-12">
      <div className="flex flex-col items-center gap-10">
        <Heading as="h1" align="center" eyebrow={eyebrow} title={heading} description={description} />
        {link && <CMSLink link={link} appearance="primary" size="lg" />}
      </div>
    </main>
  );
}
