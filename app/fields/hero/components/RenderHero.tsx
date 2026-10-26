import type { ComponentType } from 'react';
import type { Page } from '@/types/payload-types';
import { HomepageHero } from './HomepageHero';
import { SubpageHero } from './SubpageHero';

type Hero = NonNullable<Page['hero']>;
/** Variants that render something; each has a same-named group on the hero field. */
type HeroVariant = Exclude<Hero['variant'], 'none'>;

// Not optional: adding a variant to the field without a component here is a type error.
const heroComponents: { [K in HeroVariant]: ComponentType<NonNullable<Hero[K]>> } = {
  homepage: HomepageHero,
  subpage: SubpageHero,
};

export function RenderHero({ hero }: { hero: Page['hero'] }) {
  const variant = hero?.variant;
  if (!variant || variant === 'none') return null;

  const data = hero[variant];
  if (!data) return null;

  // TypeScript can't tie `data` to `heroComponents[variant]` through the variable key; the mapped type above
  // already guarantees each component receives its own variant's group.
  const Component = heroComponents[variant] as ComponentType<NonNullable<Hero[HeroVariant]>>;
  return <Component {...data} />;
}
