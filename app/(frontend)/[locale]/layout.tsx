import type { Metadata } from 'next';
import { Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { notFound } from 'next/navigation';
import { locale } from 'next/root-params';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { cn } from '@/lib/utils';
import { isLocale } from '@/utils/locale';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Éclat Dermatologie',
  description: 'Dermatological rigor meets sensorial poise.',
};

export default async function RootLayout({ children }: LayoutProps<'/[locale]'>) {
  // proxy.ts only lets known locales through, but paths it skips (e.g. `/foo.txt`) would otherwise land here.
  const lang = await locale();
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={cn(
        'h-full',
        'antialiased',
        'font-sans',
        plusJakartaSans.variable,
        playfairDisplay.variable,
        geistMono.variable,
      )}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
        {/* <GoogleAnalytics gaId="" debugMode={true} /> */}
      </body>
    </html>
  );
}
