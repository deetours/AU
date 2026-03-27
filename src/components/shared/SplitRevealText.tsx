"use client";

import { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_STANDARD } from "@/components/shared/experience";

interface SplitRevealTextProps {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
}

export default function SplitRevealText({
  lines,
  as = "h2",
  className,
  lineClassName,
  delay = 0,
}: SplitRevealTextProps) {
  const reducedMotion = useReducedMotion();

  const renderChildren = () =>
    lines.map((line, index) => (
      <span key={`${line}-${index}`} className="block" style={{ overflow: "clip", overflowClipMargin: "0.15em" }}>
        <motion.span
          className={`block ${lineClassName ?? ""}`}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: "100%" }}
          whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: "0%" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: reducedMotion ? 0.45 : 0.95,
            delay: delay + index * 0.1,
            ease: EASE_STANDARD,
          }}
        >
          {line}
        </motion.span>
      </span>
    ));

  if (as === "h1") return <motion.h1 className={className}>{renderChildren()}</motion.h1>;
  if (as === "p") return <motion.p className={className}>{renderChildren()}</motion.p>;
  if (as === "div") return <motion.div className={className}>{renderChildren()}</motion.div>;

  return <motion.h2 className={className}>{renderChildren()}</motion.h2>;
}
