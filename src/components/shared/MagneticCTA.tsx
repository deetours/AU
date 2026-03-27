"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EASE_SOFT } from "@/components/shared/experience";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MagneticCTAProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  magneticPull?: number;
  type?: "button" | "submit" | "reset";
}

export default function MagneticCTA({
  children,
  href,
  onClick,
  className,
  magneticPull = 0.3,
  type = "button",
}: MagneticCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 180, mass: 0.18 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    if (reducedMotion) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((clientX - centerX) * magneticPull);
    y.set((clientY - centerY) * magneticPull);
    setGlowPosition({
      x: ((clientX - left) / width) * 100,
      y: ((clientY - top) / height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!reducedMotion) {
      x.set(0);
      y.set(0);
    }
    setGlowPosition({ x: 50, y: 50 });
  };

  const buttonClassName = cn(
    "group/cta relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-[var(--color-brand-amber)]/35 bg-[var(--color-brand-amber)] px-10 font-sans text-sm uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(185,138,74,0.24)] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-amber)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-cloud)]",
    isHovered ? "bg-[var(--color-brand-charcoal)] text-[var(--color-brand-bone)]" : "",
    className
  );

  const content = (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-full opacity-80"
        style={{
          background: reducedMotion
            ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.24), transparent 58%)"
            : `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255,255,255,0.28), transparent 58%)`,
        }}
      />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100" />
      <motion.span
        className="relative z-10 inline-flex items-center gap-3"
        animate={isHovered && !reducedMotion ? { x: 1 } : { x: 0 }}
        transition={{ duration: 0.35, ease: EASE_SOFT }}
      >
        <span>{children}</span>
        <motion.span
          aria-hidden="true"
          animate={isHovered && !reducedMotion ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.35, ease: EASE_SOFT }}
        >
          &rarr;
        </motion.span>
      </motion.span>
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      style={{ x: reducedMotion ? 0 : springX, y: reducedMotion ? 0 : springY }}
      className="relative inline-block"
    >
      {/* Outer glow ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[var(--color-brand-amber)]/20 blur-lg pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isHovered && !reducedMotion ? { scale: 1.3, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE_SOFT }}
      />

      {href ? (
        <Link href={href} onClick={onClick} className={buttonClassName}>
          {content}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={buttonClassName}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
