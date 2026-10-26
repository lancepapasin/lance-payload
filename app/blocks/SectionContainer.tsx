import type { ComponentProps, ReactNode } from 'react';
import { Heading } from '@/components/design-system/Heading';
import { cn } from '@/lib/utils';
import type { SectionHeaderField } from '@/types/payload-types';

export function SectionContainer({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <section className={cn('px-4 py-16 sm:px-8 lg:px-16 lg:py-20', className)}>
      <div className="mx-auto max-w-[1238px]">{children}</div>
    </section>
  );
}

type SectionHeadingProps = Omit<ComponentProps<typeof Heading>, 'eyebrow' | 'title' | 'description' | 'align'> & {
  header: SectionHeaderField;
};

/** Maps the CMS `header` group onto Heading. Left-aligned headers default to the split layout. */
export function SectionHeading({ header, layout = 'split', className, ...props }: SectionHeadingProps) {
  const align = header.align ?? 'left';
  return (
    <Heading
      eyebrow={header.eyebrow}
      title={header.heading}
      description={header.description}
      align={align}
      layout={align === 'center' ? 'stacked' : layout}
      className={cn('mb-16', className)}
      {...props}
    />
  );
}
