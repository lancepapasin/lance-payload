import type { SerializedLinkNode } from '@payloadcms/richtext-lexical';
import { type JSXConvertersFunction, LinkJSXConverter, RichText } from '@payloadcms/richtext-lexical/react';
import { buttonVariants } from '@/components/design-system/Button';
import { CategoryCard } from '@/components/design-system/CategoryCard';
import { Icon } from '@/components/design-system/Icon';
import { ProductCard } from '@/components/design-system/ProductCard';
import { TreatmentCard } from '@/components/design-system/TreatmentCard';
import { LocaleLink } from '@/components/LocaleLink';
import { docHref, type LinkableCollection, type LinkableDoc, linkableCollections } from '@/lib/payload/resolveHref';
import { cn } from '@/lib/utils';
import type { Category, ContentBlock as ContentBlockProps, Product, Treatment } from '@/types/payload-types';

const isLinkable = (relationTo: string): relationTo is LinkableCollection =>
  (linkableCollections as string[]).includes(relationTo);

function linkHref({ linkType, doc, url }: SerializedLinkNode['fields']): string {
  if (linkType !== 'internal') return url || '#';
  if (!doc || typeof doc.value !== 'object' || !isLinkable(doc.relationTo)) return '#';
  return docHref(doc.relationTo, doc.value as LinkableDoc) ?? '#';
}

// Matches the `appearance` field added to LinkFeature in config.ts.
const buttonAppearances = ['primary', 'secondary'] as const;
type ButtonAppearance = (typeof buttonAppearances)[number];
const isButtonAppearance = (value: unknown): value is ButtonAppearance =>
  buttonAppearances.includes(value as ButtonAppearance);

// Embedded documents arrive populated when the page is fetched with enough depth; an unpopulated id renders nothing.
const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  // Keeps the default autolink converter; `link` is replaced below.
  ...LinkJSXConverter({}),
  link: ({ node, nodesToJSX }) => {
    const { appearance, newTab } = node.fields;
    const children = nodesToJSX({ nodes: node.children });
    const targetProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    if (!isButtonAppearance(appearance)) {
      return (
        <LocaleLink href={linkHref(node.fields)} {...targetProps}>
          {children}
        </LocaleLink>
      );
    }

    // Buttons break onto their own row (flex) so they never sit mid-sentence.
    return (
      <LocaleLink
        href={linkHref(node.fields)}
        data-button
        className={cn(buttonVariants({ variant: appearance, size: 'lg' }), 'my-2 flex w-fit')}
        {...targetProps}
      >
        {children}
        {appearance === 'primary' && <Icon glyph="arrow" />}
      </LocaleLink>
    );
  },
  relationship: ({ node }) => {
    if (typeof node.value !== 'object') return null;

    switch (node.relationTo) {
      case 'products':
        return <ProductCard product={node.value as Product} className="my-8 max-w-[320px]" />;
      case 'treatments':
        return <TreatmentCard treatment={node.value as Treatment} ctaLabel="Reserve Suite" className="my-8" />;
      case 'categories': {
        const category = node.value as Category;
        const href = docHref('categories', category);
        if (!category.image || !href) return null;
        return (
          <CategoryCard
            title={category.title}
            description={category.description}
            image={category.image}
            link={{ type: 'custom', url: href, label: `Explore ${category.title}` }}
            className="my-8"
          />
        );
      }
      default:
        return null;
    }
  },
});

// Type scale follows the design system: Playfair headings, Plus Jakarta body in muted ink.
// Selectors target the rich text's own top-level nodes (`>`), so embedded cards keep their styles.
const proseClasses = [
  'text-base leading-[26px] text-muted-foreground',
  '[&>p]:my-4 [&>:first-child]:mt-0',
  '[&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:font-heading [&>h2]:text-4xl [&>h2]:font-semibold [&>h2]:leading-[1.25] [&>h2]:tracking-[-0.025em] [&>h2]:text-foreground',
  '[&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:font-heading [&>h3]:text-2xl [&>h3]:font-medium [&>h3]:leading-8 [&>h3]:tracking-[0.025em] [&>h3]:text-foreground',
  '[&>h4]:mt-6 [&>h4]:mb-2 [&>h4]:font-heading [&>h4]:text-xl [&>h4]:font-medium [&>h4]:leading-7 [&>h4]:text-foreground',
  '[&>:is(p,ul,ol,blockquote,h2,h3,h4)_a:not([data-button])]:text-brand [&>:is(p,ul,ol,blockquote,h2,h3,h4)_a:not([data-button])]:underline [&>:is(p,ul,ol,blockquote,h2,h3,h4)_a:not([data-button])]:underline-offset-4',
  '[&>:is(p,ul,ol,blockquote,h2,h3,h4)_strong]:font-semibold [&>:is(p,ul,ol,blockquote,h2,h3,h4)_strong]:text-foreground',
  '[&>ul]:my-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:my-4 [&>ol]:list-decimal [&>ol]:pl-6 [&_li]:my-1',
  '[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-brand [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-ink',
  '[&>hr]:my-10 [&>hr]:border-border [&>img]:my-8 [&>img]:rounded-2xl',
].join(' ');

export function ContentBlock({ content }: ContentBlockProps) {
  return <RichText data={content} converters={converters} className={proseClasses} />;
}
