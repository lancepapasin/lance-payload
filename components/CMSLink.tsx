import type { ReactNode } from 'react';
import { type ButtonVariants, buttonVariants } from '@/components/design-system/Button';
import { LocaleLink } from '@/components/LocaleLink';
import { resolveHref } from '@/lib/payload/resolveHref';
import { cn } from '@/lib/utils';
import type { LinkField, PlainLinkField } from '@/types/payload-types';

type Appearance = NonNullable<ButtonVariants['variant']> | 'text';

const textClasses =
  'inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.05em] underline-offset-4 hover:underline';

type CMSLinkProps = {
  /** A plain link has no CMS-chosen appearance; pass one via `appearance`. */
  link: LinkField | PlainLinkField;
  /** Overrides the appearance chosen in the CMS. */
  appearance?: Appearance | null;
  size?: ButtonVariants['size'];
  className?: string;
  children?: ReactNode;
};

export function CMSLink({ link, appearance: appearanceOverride, size, className, children }: CMSLinkProps) {
  const appearance = appearanceOverride ?? ('appearance' in link ? link.appearance : undefined);
  const href = resolveHref(link);
  if (!href) return null;

  const appearanceClasses =
    appearance === 'text' ? textClasses : appearance ? buttonVariants({ variant: appearance, size }) : undefined;

  return (
    <LocaleLink
      href={href}
      className={cn(appearanceClasses, className)}
      {...(link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {link.label}
      {children}
    </LocaleLink>
  );
}
