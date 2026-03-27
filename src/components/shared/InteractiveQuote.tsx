"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/components/shared/MagneticCTA";
import { EASE_SOFT } from "@/components/shared/experience";

interface InteractiveQuoteProps {
  label?: string;
  quote: ReactNode;
  description?: ReactNode;
  attribution?: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function InteractiveQuote({
  label,
  quote,
  description,
  attribution,
  className,
  dark = false,
}: InteractiveQuoteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(my, { stiffness: 120, damping: 18, mass: 0.7 });
  const rotateY = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.7 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || reducedMotion) return;
    const bounds = ref.current.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;

    mx.set(px * 4);
    my.set(py * -4);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.45, ease: EASE_SOFT }}
      style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      className={cn(
        "group relative overflow-hidden rounded-[1.9rem] border p-8 md:p-9",
        dark
          ? "border-white/10 bg-white/[0.03] text-[var(--color-brand-bone)]"
          : "border-[var(--color-brand-stone)]/10 bg-[var(--color-brand-bone)]/90 text-[var(--color-brand-carbon)] shadow-[0_20px_60px_rgba(25,26,29,0.05)]",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          dark
            ? "bg-[radial-gradient(circle_at_top_right,rgba(185,138,74,0.18),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(185,138,74,0.12),transparent_55%)]"
        )}
      />
      <div className="relative z-10">
        {label ? (
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
            {label}
          </p>
        ) : null}
        <div className="mt-5 font-serif text-[2rem] leading-tight md:text-[2.4rem]">
          {quote}
        </div>
        {description ? (
          <div className="mt-5 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
            {description}
          </div>
        ) : null}
        {attribution ? (
          <div
            className={cn(
              "mt-6 font-sans text-sm uppercase tracking-[0.18em]",
              dark ? "text-[var(--color-brand-bone)]/75" : "text-[var(--color-brand-carbon)]"
            )}
          >
            {attribution}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
