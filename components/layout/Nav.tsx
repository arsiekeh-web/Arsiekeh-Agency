"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/site-config";
import { LogoMark } from "@/components/ui/LogoMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Nav — sticky header, shared across every page.
 *
 * Tier 2 "adaptive sticky nav" (Build Prompt / Feature Stack): spacious
 * at top, reduces height and increases background contrast once the
 * page has scrolled past a small threshold. Condensing is driven by a
 * scroll-position boolean, not continuous interpolation — simpler,
 * cheaper, and the visual difference at even a coarse threshold reads
 * clearly. No scroll-direction hide/show: on a content-first site,
 * hiding the nav on scroll-down risks hiding the Start a Project CTA
 * exactly when someone's decided to act — StoryBrand's placement rule
 * takes priority over the fancier version of this pattern.
 */
export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape-to-close for the mobile menu — a real Tier 1 accessibility
  // gap (found during scrutiny pass): the menu previously had no way
  // to close via keyboard other than tabbing back to the toggle button
  // itself. Standard expected behavior for any disclosure/overlay nav.
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-sm transition-[background-color,border-color] duration-[var(--motion-base)]",
        scrolled
          ? "border-border bg-background/95"
          : "border-transparent bg-background/70"
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[padding] duration-[var(--motion-base)]",
          scrolled ? "py-3" : "py-4"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-lg font-bold"
          onClick={() => setMobileOpen(false)}
        >
          <LogoMark className="h-[30px] w-[30px] shrink-0" />
          Arsiekeh
        </Link>

        <div className="flex items-center gap-7">
          <nav
            className="hidden items-center gap-7 text-[15px] text-offwhite/75 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "transition-colors duration-[var(--motion-fast)]",
                    isActive
                      ? "text-lime"
                      : "hover:text-offwhite"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Button
            href="/start-a-project"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            START A PROJECT →
          </Button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-border p-2 text-offwhite md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-[var(--radius-sm)] px-3 py-3 text-base",
                    isActive
                      ? "text-lime"
                      : "text-offwhite/80 hover:bg-surface"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href="/start-a-project"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              START A PROJECT →
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
