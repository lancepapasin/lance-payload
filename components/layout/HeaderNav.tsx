'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { splitLocale } from '@/utils/locale';
import { LocaleSwitcher } from './LocaleSwitcher';

export type NavItem = { href: string; label: string; newTab: boolean };

// Client-side only to highlight the current section.
function useIsActive() {
  const pathname = usePathname();
  // A locale's home (`/ja`) prefixes every page in that locale, so like `/` it only matches itself.
  return (href: string) =>
    splitLocale(href).path === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

const linkClasses = (active: boolean) =>
  cn(
    'transition-colors',
    active
      ? 'text-base font-semibold leading-6 text-brand'
      : 'text-[15px] font-medium leading-5 text-sand-foreground hover:text-brand'
  );

const newTabProps = (newTab: boolean) => (newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {});

// Horizontal bar below the header row; hidden below md, where MobileNav takes over.
export function HeaderNav({ items }: { items: NavItem[] }) {
  const isActive = useIsActive();

  return (
    // The nav scrolls and the list centers itself with mx-auto, so overflowing items stay reachable on both sides
    // (justify-center inside the scroller would push the first items out of reach).
    <nav aria-label="Main" className="hidden overflow-x-auto bg-ivory/95 px-8 md:block lg:px-12">
      <ul className="mx-auto flex h-[57px] w-max items-center gap-8 lg:gap-10">
        {items.map(({ href, label, newTab }) => {
          const active = isActive(href);
          return (
            <li key={`${href}-${label}`} className="shrink-0">
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'block whitespace-nowrap py-1',
                  linkClasses(active),
                  active && 'border-brand border-b pb-[5px]'
                )}
                {...newTabProps(newTab)}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Hamburger button + slide-in sheet, shown below md.
export function MobileNav({ items }: { items: NavItem[] }) {
  const isActive = useIsActive();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="relative flex shrink-0 items-center text-foreground transition-opacity after:absolute after:-inset-2.5 hover:opacity-70 md:hidden"
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-ivory">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Main" className="px-6 pt-16">
          <ul className="flex flex-col gap-5">
            {items.map(({ href, label, newTab }) => {
              const active = isActive(href);
              return (
                <li key={`${href}-${label}`}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={cn('block py-1', linkClasses(active))}
                    {...newTabProps(newTab)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mx-6 mt-10 flex flex-col gap-4 border-sand-foreground/15 border-t pt-6">
          <p className="font-semibold text-[11px] text-muted-foreground uppercase leading-4 tracking-[0.1em]">
            Language
          </p>
          <LocaleSwitcher variant="list" onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
