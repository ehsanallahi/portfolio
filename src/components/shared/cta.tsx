import { cva, type VariantProps } from "class-variance-authority";

/** Shared styles for call-to-action links and buttons. */
export const ctaVariants = cva(
  "group/cta relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/60 hover:-translate-y-0.5 hover:shadow-primary/80 hover:brightness-110",
        outline:
          "border border-border bg-card/50 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-brand/50 hover:bg-card",
        ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type CtaVariantProps = VariantProps<typeof ctaVariants>;
