"use client";

import { motion } from "framer-motion";
import SceneFrame from "@/components/shared/SceneFrame";
import SplitRevealText from "@/components/shared/SplitRevealText";
import ThresholdForm from "@/components/shared/ThresholdForm";
import { EASE_STANDARD, EASE_SOFT } from "@/components/shared/experience";

const NEXT_STEPS = [
  "You reach out and let Harish know what you are navigating.",
  "We have an initial conversation to understand where you are and what kind of support makes sense.",
  "Together, we decide whether there is a real fit and what container would serve you best.",
];

const TRUST_POINTS = [
  "No need to present yourself perfectly.",
  "No need to know the right words in advance.",
  "No obligation after the first conversation.",
];

export default function Begin() {
  return (
    <main className="relative bg-[var(--color-brand-cloud)] pb-16 text-[var(--color-brand-carbon)] md:pb-0">
      {/* Scene 1: Hero + Trust Bridge */}
      <SceneFrame padding="huge" className="pt-32 md:pt-40" ambientTone="warm" ambientIntensity="medium">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE_STANDARD }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Begin</p>
        </motion.div>

        <div className="mx-auto max-w-4xl text-center">
          <SplitRevealText
            as="h1"
            lines={["You do not need", "to have it", "all figured out."]}
            className="type-hero-display text-[var(--color-brand-charcoal)]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE_SOFT }}
          className="type-lead mx-auto mt-8 max-w-3xl text-center text-[var(--color-brand-stone)]"
        >
          This begins with a conversation, not a commitment. You can arrive
          exactly as you are, with as much certainty or uncertainty as you have.
        </motion.p>

        {/* Trust Bridge: Two columns, editorial style (no cards) */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Left: What happens next — Editorial list */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.75, ease: EASE_SOFT }}
          >
            <p className="type-meta mb-8 text-[var(--color-brand-stone)]">
              What happens next
            </p>
            <div className="space-y-0 divide-y divide-[var(--color-brand-stone)]/10">
              {NEXT_STEPS.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: EASE_SOFT,
                  }}
                  className="flex gap-6 py-8 first:pt-0 last:pb-0"
                >
                  <span className="flex-shrink-0 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
                    0{index + 1}
                  </span>
                  <p className="font-sans text-base leading-relaxed text-[var(--color-brand-carbon)]">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: There is no pressure — Heading + trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE_SOFT }}
          >
            <h2 className="font-serif text-3xl leading-tight text-[var(--color-brand-charcoal)] md:text-4xl">
              There is no pressure here. Only clarity.
            </h2>
            <div className="mt-8 space-y-4">
              {TRUST_POINTS.map((point) => (
                <p
                  key={point}
                  className="relative pl-5 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]"
                >
                  <span className="absolute left-0 top-3 h-px w-3 bg-[var(--color-brand-amber)]" />
                  {point}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </SceneFrame>

      {/* Scene 2: The Form + Practical Trust */}
      <SceneFrame ambientTone="mist" dividerTop>
        {/* Form intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="type-lead text-[var(--color-brand-carbon)]">
            Write it as you would to someone who will actually read it.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: EASE_SOFT }}
          className="mt-16"
        >
          <ThresholdForm />
        </motion.div>

        {/* Practical Trust — plain text, no card wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_SOFT }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="type-meta mb-4 text-[var(--color-brand-stone)]">
            Practical trust
          </p>
          <p className="type-lead text-[var(--color-brand-carbon)]">
            You can also reach out directly at{" "}
            <a
              href="mailto:hello@alchemyunbounded.com"
              className="text-[var(--color-brand-amber)] transition-colors duration-300 hover:text-[var(--color-brand-charcoal)]"
            >
              hello@alchemyunbounded.com
            </a>{" "}
            or via{" "}
            <a
              href="https://wa.me/?text=Hello%20Harish%2C%20I%27d%20like%20to%20explore%20working%20together."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-brand-amber)] transition-colors duration-300 hover:text-[var(--color-brand-charcoal)]"
            >
              WhatsApp
            </a>
            . Either way, the conversation stays personal and human.
          </p>
        </motion.div>
      </SceneFrame>
    </main>
  );
}
