"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { LogoMark } from "@/components/ui/LogoMark";

/**
 * PageTransition — brief centered logo + spinner "loading flash" between
 * page navigations, in the spirit of cisfreetown.com's transition.
 *
 * App Router note: by the time `pathname` changes, `children` already
 * reflects the new route (Next has already resolved it). So this
 * component doesn't actually wait on data — it deliberately holds an
 * opaque overlay over the new page for a fixed minimum duration, purely
 * for the branded transition moment. The new page is already mounted
 * underneath the whole time.
 *
 * Respects prefers-reduced-motion by skipping the held delay entirely
 * (instant swap, no overlay).
 *
 * PROJECT → CASE STUDY VARIANT (Tier 3, Build Prompt: "project-card-to-
 * case-study page transition"):
 *
 * True cross-route shared-element morphing isn't achievable here —
 * Motion's layoutId only interpolates within one mounted React tree,
 * and a Next.js route change unmounts the old page and mounts a new
 * one entirely. The other real option, React/Next's native View
 * Transitions API, is explicitly documented as experimental and "not
 * recommended for production" as of Next.js 16.2 — wrong call for a
 * client's production site given this project's consistent bias
 * toward stability over bleeding-edge features.
 *
 * So instead of true morphing: ProjectCard (on click) stashes the
 * clicked project's thumbnail src + title in sessionStorage right
 * before navigating. This overlay checks for that on mount and, if
 * present, shows that specific project's image and title in place of
 * the generic logo — the same visual object carried across the
 * unmount boundary, not truly morphed but reading as continuous
 * rather than a generic loading flash. Falls back to the plain
 * logo+spinner for any other navigation (nav links, footer, etc.)
 * where no project was clicked.
 */
const MIN_VISIBLE_MS = 620;
const PROJECT_TRANSITION_KEY = "arsiekeh-project-transition";

interface ProjectTransitionData {
  title: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const [loading, setLoading] = useState(false);
  const [displayPathname, setDisplayPathname] = useState(pathname);
  const [projectData, setProjectData] = useState<ProjectTransitionData | null>(
    null
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (pathname === displayPathname) return;

    if (reduceMotion) {
      setDisplayPathname(pathname);
      sessionStorage.removeItem(PROJECT_TRANSITION_KEY);
      return;
    }

    const stored = sessionStorage.getItem(PROJECT_TRANSITION_KEY);
    if (stored) {
      try {
        setProjectData(JSON.parse(stored));
      } catch {
        setProjectData(null);
      }
      sessionStorage.removeItem(PROJECT_TRANSITION_KEY);
    } else {
      setProjectData(null);
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setDisplayPathname(pathname);
      setLoading(false);
    }, MIN_VISIBLE_MS);

    return () => clearTimeout(timer);
  }, [pathname, displayPathname, reduceMotion]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="page-transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
            aria-hidden="true"
          >
            {projectData ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 px-6"
              >
                <div className="relative h-40 w-64 overflow-hidden rounded-[var(--radius-md)] border border-border sm:h-48 sm:w-80">
                  <Image
                    src={projectData.thumbnailSrc}
                    alt={projectData.thumbnailAlt}
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                  />
                </div>
                <span className="font-heading text-[1.05rem] font-semibold text-offwhite">
                  {projectData.title}
                </span>
                <span className="relative h-[3px] w-20 overflow-hidden rounded-full bg-border">
                  <motion.span
                    className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-lime"
                    animate={{ x: ["-100%", "220%"] }}
                    transition={{
                      duration: 0.85,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center gap-5"
              >
                <LogoMark className="h-14 w-14" />
                <span className="relative h-[3px] w-20 overflow-hidden rounded-full bg-border">
                  <motion.span
                    className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-lime"
                    animate={{ x: ["-100%", "220%"] }}
                    transition={{
                      duration: 0.85,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div key={displayPathname}>{children}</div>
    </>
  );
}

/** Exported so ProjectCard can stash data before navigating to a case study. */
export function stashProjectTransition(data: ProjectTransitionData) {
  sessionStorage.setItem(PROJECT_TRANSITION_KEY, JSON.stringify(data));
}
