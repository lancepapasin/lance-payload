'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { localeCodes, localizePath, splitLocale } from '@/utils/locale';

// Each language's name in that language (English, 日本語), so a reader can find their own.
const nativeName = (code: string) => new Intl.DisplayNames([code], { type: 'language' }).of(code) ?? code;

type LocaleSwitcherProps = {
  /** `inline`: compact `EN | JA` for the header bar. `list`: native names stacked, for the mobile menu. */
  variant?: 'inline' | 'list';
  onNavigate?: () => void;
  className?: string;
};

// Slugs are shared across locales, so the same page in another language is the same path with a different prefix.
export function LocaleSwitcher({ variant = 'inline', onNavigate, className }: LocaleSwitcherProps) {
  const { locale: current, path } = splitLocale(usePathname());
  const inline = variant === 'inline';

  return (
    <nav
      aria-label="Language"
      className={cn(inline ? 'flex shrink-0 items-center gap-2' : 'flex flex-col gap-3', className)}
    >
      {localeCodes.map((code, index) => {
        const active = code === current;
        return (
          <Fragment key={code}>
            {inline && index > 0 && <span aria-hidden className="h-3 w-px bg-sand-foreground/30" />}
            <Link
              href={localizePath(path, code)}
              hrefLang={code}
              lang={code}
              aria-current={active ? 'true' : undefined}
              onClick={onNavigate}
              className={cn(
                'transition-colors',
                inline
                  ? 'font-semibold text-[11px] uppercase leading-4 tracking-[0.05em]'
                  : 'text-[15px] leading-5',
                active ? 'text-brand' : 'text-sand-foreground hover:text-brand',
                !inline && active && 'font-semibold'
              )}
            >
              {inline ? code : nativeName(code)}
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
}
