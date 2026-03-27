"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AmbientLayer from "@/components/shared/AmbientLayer";
import { EASE_STANDARD } from "@/components/shared/experience";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "The Work", href: "/the-work" },
  { label: "Offerings", href: "/offerings" },
  { label: "Journey", href: "/journey" },
  { label: "Voices", href: "/voices" },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="relative overflow-hidden bg-[var(--color-brand-deep)] px-6 py-24 text-[var(--color-brand-bone)] md:px-12 md:py-28">
      <AmbientLayer tone="deep" intensity="medium" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center opacity-[0.06]">
        <span className="mb-12 font-serif text-[10rem] font-thin leading-none text-[var(--color-brand-amber)] md:text-[15rem]">
          ALCHEMY
        </span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_STANDARD }}
        >
          <p className="font-serif text-[2rem] leading-tight md:text-[2.6rem]">
            A space for creative, conscious, and embodied transformation.
          </p>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-[var(--color-brand-stone)]">
            Coaching with Harish Narayan for people navigating inner change,
            creative truth, and a more grounded relationship with their own life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE_STANDARD }}
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-stone)]">
            Explore
          </p>
          <div className="space-y-3">
            {LINKS.map((link) => (
              <div
                key={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-3 font-sans text-sm text-[var(--color-brand-bone)] transition-colors duration-300 hover:text-[var(--color-brand-amber)]"
                >
                  <span className="h-px w-4 bg-current opacity-35 transition-all duration-300" />
                  {link.label}
                </Link>
                <motion.div
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: hoveredLink === link.href ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 h-px w-16 bg-[var(--color-brand-amber)]"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.16, ease: EASE_STANDARD }}
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-stone)]">
            Connect
          </p>
          <div className="space-y-3">
            <Link
              href="/begin"
              className="inline-flex items-center gap-3 font-sans text-sm text-[var(--color-brand-amber)] transition-colors duration-300 hover:text-white"
            >
              <span className="h-px w-4 bg-current opacity-35" />
              Begin a Conversation
            </Link>
            <a
              href="mailto:hello@alchemyunbounded.com"
              className="block font-sans text-sm text-[var(--color-brand-bone)] transition-colors duration-300 hover:text-[var(--color-brand-amber)]"
            >
              hello@alchemyunbounded.com
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.24, ease: EASE_STANDARD }}
        className="relative z-10 mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-[var(--color-brand-amber)]/20 pt-10 md:flex-row"
      >
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-stone)]">
          Calm guidance. Real conversation.
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-bone)]">
          &copy; Alchemy Unbounded {new Date().getFullYear()}
        </p>
        <div className="h-px w-8 bg-[var(--color-brand-amber)] opacity-40" />
      </motion.div>
    </footer>
  );
}
