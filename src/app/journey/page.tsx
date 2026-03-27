"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticCTA from "@/components/shared/MagneticCTA";
import SceneFrame from "@/components/shared/SceneFrame";
import SplitRevealText from "@/components/shared/SplitRevealText";
import { EASE_STANDARD, EASE_SOFT } from "@/components/shared/experience";

// Copy is UNCHANGED — only layout, motion, and visual world changes
const STAGES = [
  {
    id: "recognition",
    title: "The Recognition",
    body: "Something is not working. Not your competence. Your aliveness. The gap between how you function and how you feel has become impossible to ignore. This is not weakness. This is clarity arriving.",
    state: "The pretending stops being possible.",
    num: "01",
  },
  {
    id: "unraveling",
    title: "The Unraveling",
    body: "You begin to see how much of your life was built on inherited rules. Roles that fit someone else. Defenses that protected you once and now imprison you. The familiar loses its grip. This is uncomfortable. It is also honest.",
    state: "Everything you thought was permanent starts to shift.",
    num: "02",
  },
  {
    id: "descent",
    title: "The Descent",
    body: "This is the hard part. The part where you stop running from what you actually feel. Where you sit with confusion instead of solving it. Where you learn that aliveness is not found through effort. It is found through surrender.",
    state: "You learn what it means to stop.",
    num: "03",
  },
  {
    id: "return",
    title: "The Return",
    body: "As the noise quiets, something becomes audible. Your own knowing. Your own rhythm. Your own intelligence. What was fragmented begins to cohere. Not because you fixed it. Because you finally heard it.",
    state: "You recognize yourself again.",
    num: "04",
  },
  {
    id: "integration",
    title: "The Integration",
    body: "This becomes your way of being. Not a project you are working on. Not a goal you are chasing. How you move through your life. How you choose. How you create. How you show up. The work is no longer something you do. It is who you are becoming.",
    state: "The shift is no longer an idea. It is lived.",
    num: "05",
  },
];

// Stage 1 — "The Recognition" — charcoal, x-slide from left
function StageRecognition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "start 20%"] });
  const imgX = useTransform(scrollYProgress, [0, 1], [30, -10]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--color-brand-charcoal)] py-32 md:py-52">
      {/* Atmospheric image — barely visible, right side */}
      <motion.div
        style={{ x: imgX }}
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.12]"
      >
        <Image src="/images/journey_thumb_2.png" alt="" fill className="object-cover object-center" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Oversized stage number */}
        <div className="pointer-events-none absolute -top-4 left-6 select-none font-serif text-[12rem] leading-none text-[var(--color-brand-amber)] opacity-[0.06] md:left-12">
          01
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="relative"
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
            {STAGES[0].num}
          </p>
          <h2 className="font-serif text-5xl leading-tight text-[var(--color-brand-bone)] md:text-6xl">
            {STAGES[0].title}
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
            {STAGES[0].body}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE_SOFT }}
            className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-amber)]"
          >
            {STAGES[0].state}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Stage 2 — "The Unraveling" — fog, tilt settle
function StageUnraveling() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-brand-fog)] py-28 md:py-44">
      {/* Ghosted atmospheric image — left side */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2/5 opacity-[0.08] blur-sm">
        <Image src="/images/journey_thumb_3.png" alt="" fill className="object-cover object-right" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="pointer-events-none absolute -top-4 right-6 select-none font-serif text-[12rem] leading-none text-[var(--color-brand-charcoal)] opacity-[0.04] md:right-12">
          02
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -0.8 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: EASE_SOFT }}
          className="lg:ml-16"
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
            {STAGES[1].num}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[var(--color-brand-charcoal)] md:text-5xl">
            {STAGES[1].title}
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-[var(--color-brand-stone)] lg:ml-8">
            {STAGES[1].body}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_SOFT }}
            className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-charcoal)] lg:ml-8"
          >
            {STAGES[1].state}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Stage 3 — "The Descent" — darkest charcoal, scale weight, most space
function StageDescent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "start 30%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--color-brand-charcoal)] py-44 md:py-64">
      {/* Near-invisible full-bleed atmosphere */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <Image src="/images/path_body.png" alt="" fill className="object-cover object-center" />
      </div>
      {/* Deep vignette */}
      <div className="pointer-events-none absolute inset-0 bg-radial-[circle_at_center,transparent_30%,rgba(25,26,29,0.5)_100%]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 select-none font-serif text-[14rem] leading-none text-[var(--color-brand-amber)] opacity-[0.04]">
          03
        </div>

        {/* Scroll-linked amber rule */}
        <div className="mx-auto mb-10 flex justify-center">
          <motion.div
            style={{ scaleX: lineScale }}
            className="h-px w-16 origin-left bg-[var(--color-brand-amber)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE_SOFT }}
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
            {STAGES[2].num}
          </p>
          <h2 className="font-serif text-5xl leading-tight text-[var(--color-brand-bone)] md:text-7xl">
            {STAGES[2].title}
          </h2>
          <p className="mx-auto mt-10 max-w-2xl font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
            {STAGES[2].body}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE_SOFT }}
            className="mt-10 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-amber)]"
          >
            {STAGES[2].state}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Stage 4 — "The Return" — fog lighter, y-rise (earned first use of y)
function StageReturn() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "start 20%"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--color-brand-fog)] py-28 md:py-44">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:px-12 lg:grid-cols-[1fr_1fr]">
        <div className="pointer-events-none absolute -top-4 left-6 select-none font-serif text-[12rem] leading-none text-[var(--color-brand-charcoal)] opacity-[0.04] md:left-12">
          04
        </div>

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
            {STAGES[3].num}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[var(--color-brand-charcoal)] md:text-5xl">
            {STAGES[3].title}
          </h2>
          <p className="mt-8 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
            {STAGES[3].body}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_SOFT }}
            className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-charcoal)]"
          >
            {STAGES[3].state}
          </motion.p>
        </motion.div>

        {/* Right: atmospheric image */}
        <motion.div
          style={{ y: imgY }}
          className="relative hidden aspect-[3/4] overflow-hidden rounded-2xl opacity-[0.2] lg:block"
        >
          <Image src="/images/journey_thumb_4.png" alt="" fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

// Stage 5 — "The Integration" — bone/warm, pure presence (no motion reveal)
function StageIntegration() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-brand-bone)] py-32 md:py-52">
      {/* Warm atmospheric background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <Image src="/images/path_life.png" alt="" fill className="object-cover object-center" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-brand-bone)]/60 via-transparent to-[var(--color-brand-bone)]/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 select-none font-serif text-[14rem] leading-none text-[var(--color-brand-amber)] opacity-[0.05]">
          05
        </div>

        {/* Pure opacity — was always whole, just revealing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.0, ease: EASE_SOFT }}
        >
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
            {STAGES[4].num}
          </p>
          <h2 className="font-serif text-5xl leading-tight text-[var(--color-brand-charcoal)] md:text-6xl">
            {STAGES[4].title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
            {STAGES[4].body}
          </p>
          <p className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-amber)]">
            {STAGES[4].state}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Journey() {
  return (
    <main className="bg-[var(--color-brand-charcoal)]">
      {/* Hero — The Threshold */}
      <section className="relative overflow-hidden bg-[var(--color-brand-charcoal)] pb-20 pt-32 md:pt-40">
        {/* Barely-visible atmospheric image */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <Image src="/images/journey_thumb_1.png" alt="" fill className="object-cover object-center" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-brand-charcoal)]/80 via-transparent to-[var(--color-brand-charcoal)]/90" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: EASE_STANDARD }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="type-meta mb-6 text-[var(--color-brand-stone)]"
            >
              What happens here
            </motion.p>
            <SplitRevealText
              as="h1"
              lines={[
                "Transformation is not a destination.",
                "It is a path you recognize yourself on.",
              ]}
              className="type-hero-display text-[var(--color-brand-bone)]"
              delay={0.5}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 2.0, ease: EASE_SOFT }}
              className="type-lead mx-auto mt-10 max-w-2xl text-[var(--color-brand-stone)]"
            >
              This is not a curriculum with a fixed endpoint. This is what unfolds when you stop running from yourself and start moving toward your own aliveness. The work meets you where you are. But it does not let you stay there.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Five Cinematic Stages */}
      <StageRecognition />
      <StageUnraveling />
      <StageDescent />
      <StageReturn />
      <StageIntegration />

      {/* Closing — The Quiet Arrival */}
      <section className="bg-[var(--color-brand-charcoal)] py-32 text-center md:py-52">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.2, ease: EASE_SOFT }}
            className="space-y-8"
          >
            <h2 className="type-scene-heading text-[var(--color-brand-bone)]">
              You may live all five stages at once. Or return to one you thought you had left. The work does not follow your timeline. It follows your becoming.
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE_SOFT }}
              className="type-lead text-[var(--color-brand-stone)]"
            >
              What matters is not the order. What matters is that you stop pretending. That you finally listen. That you build a life that actually fits.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: 0.7, ease: EASE_SOFT }}
            >
              <MagneticCTA href="/begin">Begin a Conversation</MagneticCTA>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
