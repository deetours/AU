"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Amber sweep line */}
      <motion.div
        key={`line-${pathname}`}
        className="fixed top-0 left-0 right-0 h-0.5 bg-[var(--color-brand-amber)] z-[999] pointer-events-none"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0, transformOrigin: "right" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        key={pathname}
        initial={{ opacity: 1, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: 6 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
