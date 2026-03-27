"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import MagneticCTA from "@/components/shared/MagneticCTA";
import SceneFrame from "@/components/shared/SceneFrame";
import SplitRevealText from "@/components/shared/SplitRevealText";
import { EASE_STANDARD, EASE_SOFT } from "@/components/shared/experience";

const MODELS = [
  {
    title: "Awareness",
    body: "Seeing clearly what is happening in you without judgment, denial, or performance.",
  },
  {
    title: "Embodiment",
    body: "Moving insight out of abstraction and into the body, nervous system, and lived experience.",
  },
  {
    title: "Inquiry",
    body: "Questioning the stories, assumptions, and inherited structures shaping how you live and create.",
  },
  {
    title: "Integration",
    body: "Allowing what becomes clear to reorganize your choices, work, relationships, and way of being.",
  },
];

const FOUNDATIONS = [
  {
    title: "Clarity",
    body: "You cannot transform what you refuse to see. Clarity helps you tell the truth about where you are before trying to optimize it.",
  },
  {
    title: "Structure",
    body: "Change needs support. The right structure helps growth unfold without fragmenting who you are.",
  },
  {
    title: "Embodiment",
    body: "Transformation that never lands in the body remains conceptual. The work becomes real when it can be lived.",
  },
];

const AUDIENCES = [
  {
    title: "Creators",
    body: "For people whose expression has been thinned by fear, performance pressure, or the constant demand to make themselves legible to everyone.",
  },
  {
    title: "Entrepreneurs",
    body: "For people carrying vision and complexity who feel the strain of building from a fragmented center.",
  },
  {
    title: "Changemakers",
    body: "For people devoted to something larger than themselves — who know that output alone will eventually hollow them out.",
  },
];

const SHIFTS = [
  {
    before: "Overthinking decisions from fear",
    after: "Calm inner authority guiding choices",
  },
  {
    before: "Creating from pressure instead of purpose",
    after: "Creative clarity rooted in truth",
  },
  {
    before: "Success without meaning",
    after: "A life that is actually yours",
  },
  {
    before: "Exhaustion dressed as ambition",
    after: "Sustainable energy and presence",
  },
];

const PATHS = [
  {
    title: "Transformational Life Coaching",
    body: "Deep inner architecture work for identity, transition, purpose, and emotional complexity.",
  },
  {
    title: "Creativity Coaching",
    body: "Support for creators who want to recover expression without betraying themselves to performance.",
  },
  {
    title: "Movement Arts Training",
    body: "Embodiment work for strength, resilience, awareness, and a more intelligent relationship with the body.",
  },
];

export default function TheWork() {
  return (
    <main className="bg-[var(--color-brand-cloud)] text-[var(--color-brand-carbon)]">
      {/* Scene 1: Frame Break — What this is NOT / IS */}
      <SceneFrame padding="huge" className="pt-32 md:pt-40" ambientTone="warm" ambientIntensity="medium">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: What it is NOT */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE_STANDARD }}
          >
            <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Be clear on this</p>
            <SplitRevealText
              as="h1"
              lines={[
                "Not a fix.",
                "Not a framework.",
                "Not a faster version of who you are.",
                "Not another way to perform being fine.",
              ]}
              className="type-scene-heading text-[var(--color-brand-stone)]"
            />
          </motion.div>

          {/* Right: What it IS */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE_STANDARD }}
            className="relative md:pt-12"
          >
            <span className="pointer-events-none absolute -left-8 top-2 hidden h-px w-12 bg-[var(--color-brand-amber)]/40 md:block" />
            <p className="type-meta mb-5 text-[var(--color-brand-stone)]">What it actually is</p>
            <h2 className="font-serif text-4xl leading-tight text-[var(--color-brand-charcoal)] md:text-5xl">
              A path that takes your whole life seriously — and asks you to stop living in pieces.
            </h2>
          </motion.div>
        </div>
      </SceneFrame>

      {/* Scene 2: Core Philosophy */}
      <SceneFrame variant="fog" dividerTop dividerBottom ambientTone="mist">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE_SOFT }}
          className="grid gap-12 md:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Core philosophy</p>
            <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
              Nothing in your life exists in isolation.
            </h2>
          </div>
          <div className="space-y-6 md:pt-2">
            <p className="font-serif text-2xl leading-tight text-[var(--color-brand-charcoal)]">
              "Attention changes experience. The whole person matters."
            </p>
            <p className="type-lead text-[var(--color-brand-stone)]">
              This work does not isolate one problem. It addresses the relationship between perception, body, creativity, identity, and action — because that relationship is where change actually happens.
            </p>
          </div>
        </motion.div>
      </SceneFrame>

      {/* Scene 3: How Transformation Happens — Editorial List */}
      <SceneFrame padding="huge" ambientTone="warm" dividerBottom>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="max-w-4xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">How transformation happens</p>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            Transformation is not delivered. It emerges. We create the conditions.
          </h2>
        </motion.div>

        {/* Mechanism: Numbered Editorial List */}
        <div className="mt-16 space-y-10">
          {MODELS.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: EASE_SOFT }}
              className="grid gap-6 md:grid-cols-[auto_auto_1fr] md:items-start"
            >
              <p className="pointer-events-none select-none font-serif text-5xl leading-none text-[var(--color-brand-amber)] opacity-[0.08] md:text-6xl">
                0{index + 1}
              </p>
              <div className="hidden md:block">
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
                  0{index + 1}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl leading-tight text-[var(--color-brand-charcoal)] md:text-3xl">
                  {model.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                  {model.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SceneFrame>

      {/* Scene 4: Three Foundations */}
      <SceneFrame variant="charcoal" padding="huge" ambientTone="deep" ambientIntensity="medium">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="max-w-4xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Three foundations</p>
          <h2 className="type-scene-heading text-[var(--color-brand-bone)]">
            Clarity. Structure. Embodiment.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FOUNDATIONS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.975 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.75, delay: index * 0.06, ease: EASE_SOFT }}
              className="group rounded-[1.85rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="font-serif text-4xl leading-none text-[var(--color-brand-bone)]">
                {item.title}
              </h3>
              <p className="mt-6 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                {item.body}
              </p>
              <div className="mt-8 h-px w-12 bg-[var(--color-brand-amber)]/45 transition-all duration-500 group-hover:w-20" />
            </motion.article>
          ))}
        </div>
      </SceneFrame>

      {/* Scene 5: Who This Is For — Stacked Editorial Rows */}
      <SceneFrame padding="huge" ambientTone="warm" dividerBottom>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="max-w-4xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Who this is for</p>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            For people whose outer life still works, but whose inner life is asking for something truer.
          </h2>
        </motion.div>

        <div className="mt-14 space-y-0 divide-y divide-[var(--color-brand-stone)]/10">
          {AUDIENCES.map((audience, index) => (
            <motion.article
              key={audience.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: EASE_SOFT }}
              className="relative grid gap-6 py-10 md:grid-cols-[auto_1fr] md:items-start"
            >
              <p className="pointer-events-none select-none font-serif text-5xl leading-none text-[var(--color-brand-amber)] opacity-[0.08]">
                0{index + 1}
              </p>
              <div>
                <h3 className="font-serif text-3xl leading-tight text-[var(--color-brand-charcoal)] md:text-4xl">
                  {audience.title}
                </h3>
                <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                  {audience.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </SceneFrame>

      {/* Scene 6: Before/After — The Signature Structural Moment */}
      <SceneFrame variant="fog" padding="huge" ambientTone="mist" dividerTop dividerBottom>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="max-w-4xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">What this work changes</p>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            The shift is not cosmetic. It changes how you decide, create, and inhabit your own life.
          </h2>
        </motion.div>

        <div className="mt-16 space-y-12">
          {SHIFTS.map((shift, index) => (
            <ShiftRow key={shift.before} shift={shift} index={index} />
          ))}
        </div>
      </SceneFrame>

      {/* Scene 7: Paths Preview */}
      <SceneFrame padding="huge" ambientTone="warm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="max-w-4xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Paths preview</p>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            The work takes different shapes depending on what you are navigating.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PATHS.map((path, index) => (
            <motion.article
              key={path.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: EASE_SOFT }}
              className="rounded-[1.85rem] border border-[var(--color-brand-stone)]/12 bg-white/75 p-8"
            >
              <h3 className="font-serif text-2xl leading-tight text-[var(--color-brand-charcoal)]">
                {path.title}
              </h3>
              <p className="mt-5 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                {path.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE_SOFT }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/offerings"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-brand-amber)]/30 bg-white/70 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-[var(--color-brand-amber)] transition-colors duration-300 hover:bg-[var(--color-brand-amber)] hover:text-white"
          >
            Explore the Paths
          </Link>
          <MagneticCTA href="/begin">Begin a Conversation</MagneticCTA>
        </motion.div>
      </SceneFrame>
    </main>
  );
}

// Before/After Row Component with Scroll-Linked Amber Rule Draw
function ShiftRow({ shift, index }: { shift: (typeof SHIFTS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "start 20%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.75, delay: index * 0.06, ease: EASE_SOFT }}
      className="group"
    >
      <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
        {/* Before */}
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-stone)]">
            Before
          </p>
          <p className="mt-3 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
            {shift.before}
          </p>
        </div>

        {/* Animated Amber Rule (The Signature Moment) */}
        <motion.div style={{ scaleX: lineScale }} className="hidden h-px w-16 origin-left bg-[var(--color-brand-amber)] md:block" />

        {/* After */}
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
            After
          </p>
          <p className="mt-3 font-serif text-2xl leading-tight text-[var(--color-brand-charcoal)] md:text-3xl">
            {shift.after}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
