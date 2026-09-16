/**
 * LogoMark — static rendering of the Arsiekeh "A" concept: a dashed red
 * construction stroke resolving into a solid lime letterform.
 *
 * This is intentionally NOT animated yet. The signature GSAP-driven
 * resolve animation (dashed → solid, before the hero headline appears)
 * is Tier 3 per the Build Prompt's feature priority tiers, and must not
 * be built until Tier 1 + 2 are shipped and stable. This static SVG is
 * the exact end-state artwork the animation will resolve into, so
 * swapping it for the animated version later is additive, not a redraw.
 */
interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Arsiekeh Agency logo"
    >
      <path
        d="M8 32 L18 8 L20 8 L30 32"
        stroke="var(--color-red)"
        strokeWidth="2.5"
        strokeDasharray="4 3"
        fill="none"
      />
      <path
        d="M12 32 L21 10 L23 10 L32 32 M15.5 24 H28.5"
        stroke="var(--color-lime)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
