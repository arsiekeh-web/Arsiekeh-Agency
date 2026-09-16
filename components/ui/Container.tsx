import { cn } from "@/lib/utils";

/**
 * Container — consistent max-width and horizontal padding for every
 * homepage/page section. Mobile-first: padding starts tight and opens
 * up at larger breakpoints, per Blueprint v3 Section 12 (Mobile-First
 * Experience).
 */
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Section — wraps Container with consistent vertical rhythm between
 * homepage sections. Use this, not raw <section> tags, so spacing stays
 * systematic rather than ad-hoc per section.
 */
interface SectionProps extends ContainerProps {
  id?: string;
}

export function Section({
  children,
  className,
  id,
  as = "div",
}: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-24 lg:py-32">
      <Container as={as} className={className}>
        {children}
      </Container>
    </section>
  );
}
