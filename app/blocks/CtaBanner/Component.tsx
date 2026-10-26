import { CMSLink } from '@/components/CMSLink';
import { Heading } from '@/components/design-system/Heading';
import { cn } from '@/lib/utils';
import type { CtaBannerBlock as CtaBannerBlockProps } from '@/types/payload-types';

export function CtaBannerBlock({ eyebrow, heading, description, link, theme }: CtaBannerBlockProps) {
  const isDark = theme !== 'light';

  return (
    <section className="bg-background px-4 py-16 sm:px-8 lg:p-16">
      <div
        className={cn(
          // isolate makes Safari clip the blurred glow to the rounded corners.
          'relative isolate mx-auto flex max-w-[1238px] flex-col items-start gap-10 overflow-hidden rounded-3xl p-8 shadow-xl sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16',
          isDark ? 'bg-foreground' : 'bg-card'
        )}
      >
        <div aria-hidden className="absolute -right-24 -bottom-24 size-96 rounded-full bg-brand/20 blur-[32px]" />

        <Heading
          eyebrow={eyebrow}
          title={heading}
          description={description}
          tone={isDark ? 'inverse' : 'default'}
          className="relative max-w-[547px]"
        />

        <CMSLink link={link} appearance={isDark ? 'inverse' : 'primary'} size="lg" className="relative" />
      </div>
    </section>
  );
}
