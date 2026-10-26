import { CMSLink } from '@/components/CMSLink';
import { Icon } from '@/components/design-system/Icon';
import type { ButtonsBlock as ButtonsBlockProps } from '@/types/payload-types';

export function ButtonsBlock({ links }: ButtonsBlockProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.map(({ id, link }) => (
        <CMSLink key={id} link={link} size="lg">
          {link.appearance === 'primary' && <Icon glyph="arrow" />}
        </CMSLink>
      ))}
    </div>
  );
}
