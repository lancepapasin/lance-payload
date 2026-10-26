import Image from 'next/image';
import { cn } from '@/lib/utils';

// Glyph names follow the Figma "Icon" component. Dimensions match each SVG's root width/height.
const glyphs = {
  globe: { width: 13.3333, height: 13.3333 },
  search: { width: 13.5, height: 13.5 },
  heart: { width: 18.3333, height: 16.8208 },
  bag: { width: 14.6667, height: 18.3333 },
  account: { width: 12, height: 12 },
  arrow: { width: 9.33333, height: 9.33333 },
  star: { width: 13.3333, height: 12.6667 },
  clock: { width: 15, height: 15 },
  extraction: { width: 13.3333, height: 16.6667 },
  microbiome: { width: 13.3333, height: 16.6667 },
  packaging: { width: 17.5227, height: 17.5 },
  certification: { width: 16.3333, height: 22.1667 },
  diagnostic: { width: 12.6745, height: 13.3333 },
  sustainability: { width: 11.3303, height: 11.3282 },
} as const;

export type Glyph = keyof typeof glyphs;

export function Icon({ glyph, className }: { glyph: Glyph | null | undefined; className?: string }) {
  // Unknown values can come from content saved before a glyph was renamed.
  if (!glyph || !(glyph in glyphs)) return null;
  const { width, height } = glyphs[glyph];
  return (
    <Image
      src={`/icons/${glyph}.svg`}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={cn('shrink-0', className)}
    />
  );
}
