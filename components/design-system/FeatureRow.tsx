import { type Glyph, Icon } from './Icon';

// Figma "Content / Feature row".
type FeatureRowProps = {
  glyph?: Glyph | null;
  title: string;
  description?: string | null;
};

export function FeatureRow({ glyph, title, description }: FeatureRowProps) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
        <Icon glyph={glyph} />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-xl font-medium leading-7 tracking-[0.025em] text-foreground">{title}</h3>
        {description && <p className="text-sm leading-[22px] text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
