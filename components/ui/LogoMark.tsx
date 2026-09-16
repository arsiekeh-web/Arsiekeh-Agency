/**
 * LogoMark — static rendering of the Arsiekeh "A" concept: a dashed red
 * construction stroke resolving into a solid lime letterform.
 *
 * Server-renderable (no "use client") — this is the plain mark used
 * everywhere the logo appears repeatedly or briefly (nav, footer,
 * PageTransition's loading flash). Animating it on every render would
 * cheapen the one moment it's meant to own; see LogoMarkAnimated for
 * that moment, which is a separate client-only component so importing
 * this file never forces a client boundary on nav/footer.
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
