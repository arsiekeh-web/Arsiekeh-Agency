"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
 */
const MIN_VISIBLE_MS = 620;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const [loading, setLoading] = useState(false);
  const [displayPathname, setDisplayPathname] = useState(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (pathname === displayPathname) return;

    if (reduceMotion) {
      setDisplayPathname(pathname);
      return;
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
          </motion.div>
        )}
      </AnimatePresence>
      <div key={displayPathname}>{children}</div>
    </>
  );
}
