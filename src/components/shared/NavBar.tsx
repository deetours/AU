"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EASE_STANDARD } from "@/components/shared/experience";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/the-work", label: "The Work" },
  { href: "/offerings", label: "Offerings" },
  { href: "/journey", label: "Journey" },
  { href: "/voices", label: "Voices" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 32);
  });

  return (
    <>
      <motion.nav
        initial={false}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-colors duration-700",
          isScrolled
            ? "border-b border-[var(--color-brand-stone)]/10 bg-[var(--color-brand-cloud)]/80 shadow-[0_10px_50px_rgba(25,26,29,0.05)] backdrop-blur-2xl"
            : "bg-transparent"
        )}
        transition={{ duration: 0.5, ease: EASE_STANDARD }}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-5 md:h-24 md:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-serif text-sm uppercase tracking-[0.15em] text-[var(--color-brand-carbon)] transition-opacity duration-500 hover:opacity-70"
          >
            <span className="h-px w-6 bg-[var(--color-brand-amber)] opacity-60 transition-all duration-500 group-hover:w-8" />
            <span className="hidden md:inline">Alchemy Unbounded</span>
            <span className="md:hidden">AU</span>
          </Link>

          <div
            className="hidden items-center gap-8 md:flex"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {NAV_LINKS.map((link, idx) => {
              const isCurrentPage = pathname === link.href;
              const isBlur = hoveredIdx !== null && hoveredIdx !== idx;
              return (
                <div key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className={cn(
                      "font-sans text-xs uppercase tracking-[0.12em] text-[var(--color-brand-carbon)] transition-all duration-500 ease-[0.22,1,0.36,1]",
                      isBlur && "opacity-45",
                      isCurrentPage && "opacity-100"
                    )}
                  >
                    {link.label}
                  </Link>
                  {isCurrentPage && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--color-brand-amber)]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              );
            })}
            <Link
              href="/begin"
              className="ml-4 rounded-full border border-[var(--color-brand-amber)]/35 bg-white/55 px-5 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)] shadow-[0_10px_25px_rgba(25,26,29,0.04)] transition-all duration-500 hover:border-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber)] hover:text-white"
            >
              Begin a Conversation
            </Link>
          </div>

          <button
            className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-carbon)] transition-opacity duration-500 hover:opacity-60 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.2 : 0.45, ease: EASE_STANDARD }}
            className="fixed inset-0 z-[60] overflow-hidden bg-[var(--color-brand-deep)] text-[var(--color-brand-bone)]"
          >
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: reducedMotion ? 0.2 : 0.55, ease: EASE_STANDARD }}
              className="relative flex h-full flex-col items-center justify-center"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,138,74,0.16),transparent_34%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <div className="flex flex-col gap-8 text-center">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-[2.75rem] leading-none transition-opacity duration-500 hover:opacity-60"
                >
                  Home
                </Link>
                {NAV_LINKS.map((link, index) => {
                  const isCurrentPage = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
                      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.45, ease: EASE_STANDARD }}
                      className="relative inline-block"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "font-serif text-[2.75rem] leading-none transition-opacity duration-500 hover:opacity-60",
                          isCurrentPage && "text-[var(--color-brand-amber)]"
                        )}
                      >
                        {link.label}
                      </Link>
                      {isCurrentPage ? (
                        <div className="absolute -bottom-3 left-1/2 h-px w-16 -translate-x-1/2 bg-[var(--color-brand-amber)]" />
                      ) : null}
                    </motion.div>
                  );
                })}
                <Link
                  href="/begin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-[var(--color-brand-amber)]/30 px-8 py-4 font-sans text-xs uppercase tracking-[0.22em] text-[var(--color-brand-amber)] transition-colors duration-500 hover:bg-[var(--color-brand-amber)] hover:text-white"
                >
                  Begin a Conversation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
