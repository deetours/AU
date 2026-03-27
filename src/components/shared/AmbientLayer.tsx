"use client";

import { motion, useReducedMotion } from "framer-motion";
import { sceneFade } from "@/components/shared/experience";

interface AmbientLayerProps {
  tone?: "warm" | "deep" | "mist";
  intensity?: "soft" | "medium";
  className?: string;
}

const TONE_CLASSES = {
  warm: {
    orbA:
      "from-[rgba(185,138,74,0.20)] via-[rgba(185,138,74,0.08)] to-transparent",
    orbB:
      "from-[rgba(255,255,255,0.45)] via-[rgba(245,242,235,0.2)] to-transparent",
  },
  deep: {
    orbA:
      "from-[rgba(185,138,74,0.22)] via-[rgba(185,138,74,0.08)] to-transparent",
    orbB:
      "from-[rgba(245,242,235,0.12)] via-[rgba(245,242,235,0.04)] to-transparent",
  },
  mist: {
    orbA:
      "from-[rgba(255,255,255,0.55)] via-[rgba(255,255,255,0.18)] to-transparent",
    orbB:
      "from-[rgba(185,138,74,0.14)] via-[rgba(185,138,74,0.04)] to-transparent",
  },
} as const;

export default function AmbientLayer({
  tone = "warm",
  intensity = "soft",
  className = "",
}: AmbientLayerProps) {
  const reducedMotion = useReducedMotion();
  const currentTone = TONE_CLASSES[tone];
  const blurStrength = intensity === "medium" ? "blur-3xl" : "blur-[96px]";

  return (
    <motion.div
      variants={sceneFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.08}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className={`absolute left-[-12%] top-[8%] h-[24rem] w-[24rem] rounded-full bg-gradient-to-br ${currentTone.orbA} ${blurStrength}`}
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, 24, -8, 0],
                y: [0, 12, -18, 0],
                scale: [1, 1.04, 0.98, 1],
              }
        }
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <motion.div
        className={`absolute bottom-[-14%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl ${currentTone.orbB} ${blurStrength}`}
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, -22, 10, 0],
                y: [0, -14, 18, 0],
                scale: [1, 0.98, 1.05, 1],
              }
        }
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </motion.div>
  );
}
