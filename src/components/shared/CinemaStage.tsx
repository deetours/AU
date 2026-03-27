"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { EASE_SOFT } from "@/components/shared/experience";

interface CinemaTestimonial {
  quote: string;
  attribution: string;
  title: string;
  country: string;
  label?: string;
}

export default function CinemaStage({ testimonials }: { testimonials: CinemaTestimonial[] }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / 70;
        return next > 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [current]);

  const item = testimonials[current];
  const initial = item.attribution.charAt(0).toUpperCase();

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="flex min-h-[55vh] flex-col items-center justify-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        {/* Left column: Monogram + attribution */}
        <motion.div
          key={`${current}-meta`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE_SOFT }}
          className="flex flex-col items-center gap-6 lg:items-start"
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_SOFT }}
            className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[var(--color-brand-amber)] text-3xl font-bold text-[var(--color-brand-amber)]"
          >
            {initial}
          </motion.div>
          <div className="space-y-2 text-center lg:text-left">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-charcoal)]">
              {item.attribution}
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
              {item.title}
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-amber)]">
              {item.country}
            </p>
          </div>
        </motion.div>

        {/* Right column: Quote */}
        <motion.div
          key={`${current}-quote`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.85, ease: EASE_SOFT }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="font-serif text-4xl italic leading-tight text-[var(--color-brand-charcoal)] md:text-5xl">
            &ldquo;{item.quote}&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="absolute -bottom-8 left-0 h-1 w-full bg-[var(--color-brand-fog)]">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="h-full origin-left bg-[var(--color-brand-amber)]"
        />
      </div>

      {/* Dots indicator */}
      <div className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 gap-2">
        {testimonials.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setProgress(0);
            }}
            animate={{
              scale: idx === current ? 1.2 : 1,
              opacity: idx === current ? 1 : 0.4,
            }}
            transition={{ duration: 0.3, ease: EASE_SOFT }}
            className="h-2 w-2 rounded-full bg-[var(--color-brand-amber)]"
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
