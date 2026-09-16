import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Button — primary/secondary/ghost variants.
 *
 * Per Blueprint v3 / Build Prompt: primary and secondary CTAs must be
 * visually distinct from each other and from every other button on the
 * page — this is a hard StoryBrand placement rule, not a style choice.
 * No drop shadows (avoid-list). Motion durations reference design
 * tokens (--motion-fast / --motion-base) rather than hardcoded values.
 */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold " +
  "whitespace-nowrap select-none rounded-[var(--radius-sm)] " +
  "transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-background disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  // Primary — solid lime fill. Reserved for the single most important
  // action on a page (Start a Project). Never used more than once
  // above the fold per StoryBrand's distinct-CTA rule.
  primary:
    "bg-lime text-background hover:bg-lime/90 active:bg-lime/80",
  // Secondary — outlined, off-white. Visually distinct from primary by
  // fill vs. outline, not just a lighter shade of the same color.
  secondary:
    "border border-offwhite/30 text-offwhite hover:border-offwhite hover:bg-offwhite/5 active:bg-offwhite/10",
  // Ghost — text-only, for tertiary/inline actions (e.g. "View all work →").
  ghost:
    "text-offwhite/80 hover:text-lime underline-offset-4 hover:underline px-0",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

// href present → renders as next/link, so anchor attributes (target,
// rel, etc.) must be accepted and forwarded, not just button attributes.
type ButtonAsLinkProps = ButtonOwnProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps> & {
    href: string;
  };

type ButtonAsButtonProps = ButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ variant = "primary", size = "md", href, className, children, ...props }, ref) => {
  const classes = cn(
    base,
    variant !== "ghost" && sizes[size], // ghost keeps padding-x removed for inline text use
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
