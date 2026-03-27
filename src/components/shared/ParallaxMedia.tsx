"use client";

import { ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/components/shared/MagneticCTA";

interface ParallaxMediaProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  strength?: number;
}

export default function ParallaxMedia({
  children,
  className,
  innerClassName,
  strength = 36,
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reducedMotion ? [0, 0, 0] : [strength * -0.45, 0, strength]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reducedMotion ? [1, 1, 1] : [1.06, 1.02, 1.08]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y, scale }} className={cn("h-full w-full", innerClassName)}>
        {children}
      </motion.div>
    </div>
  );
}
