import { cva, type VariantProps } from 'class-variance-authority';

// Figma "Button": Style (primary | secondary | inverse) × Size (sm | md | lg).
// Exported as classes so links (CMSLink, next/link) can look like buttons.
export const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full uppercase transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/85',
        secondary: 'bg-card text-card-foreground drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-secondary',
        inverse: 'bg-white text-foreground hover:bg-secondary',
      },
      size: {
        sm: 'px-4 py-2 text-[11px] font-semibold leading-4 tracking-[0.05em]',
        md: 'px-6 py-2.5 text-sm font-medium leading-5 tracking-[0.05em]',
        lg: 'px-8 py-3.5 text-sm font-medium leading-5 tracking-[0.05em]',
      },
    },
    compoundVariants: [{ variant: 'primary', size: 'lg', className: 'drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]' }],
    defaultVariants: { variant: 'primary', size: 'lg' },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
