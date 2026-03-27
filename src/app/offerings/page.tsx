"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticCTA from "@/components/shared/MagneticCTA";
import ParallaxMedia from "@/components/shared/ParallaxMedia";
import SceneFrame from "@/components/shared/SceneFrame";
import SplitRevealText from "@/components/shared/SplitRevealText";
import { EASE_STANDARD, EASE_SOFT } from "@/components/shared/experience";

const OFFERINGS = [
  {
    title: "Transformational Life Coaching",
    image: "/images/offering_life.png",
    who: "For people navigating life transitions, identity shifts, emotional complexity, or the sense that the life they built no longer fully belongs to them.",
    focus: "We work with inner architecture: patterns, fear, inherited expectations, and the tension between who you have been and who you are becoming.",
    shifts: "A life that feels less performed. Decisions from ground, not fear.",
    container: "Held as one-to-one conversations with depth, continuity, and room for what is actually alive.",
  },
  {
    title: "Creativity Coaching",
    image: "/images/offering_creative.png",
    who: "For creators whose expression has become tangled with fear, perfectionism, audience pressure, or the need to make the work constantly perform.",
    focus: "We work with creative identity, resistance, self-censorship, artistic integrity, and the relationship between your inner life and what wants to be made.",
    shifts: "More honest expression, less friction around making, and a creative life that can grow without asking you to betray yourself.",
    container: "A one-to-one container for serious creative people who want more than productivity tricks.",
  },
  {
    title: "Movement Arts Training",
    image: "/images/offering_movement.png",
    who: "For people who want to reclaim intelligence, resilience, and presence through the body rather than living entirely from the neck up.",
    focus: "We work with movement, body awareness, physical intelligence, nervous system steadiness, and the patterns the body has been carrying for years.",
    shifts: "More coordination. More stability. The body as a resource, not a problem to manage.",
    container: "A psycho-physical training container rooted in attention, adaptability, and embodied practice.",
  },
];

const DECISION_ROWS = [
  {
    condition:
      "If identity, direction, or the gap between who you are and what you want is the core edge",
    offering: "Transformational Life Coaching",
  },
  {
    condition:
      "If creative block, artistic fear, or performing for an audience is the core edge",
    offering: "Creativity Coaching",
  },
  {
    condition:
      "If body disconnection, regulation, or building intelligence through movement is the core edge",
    offering: "Movement Arts Training",
  },
];

export default function Offerings() {
  return (
    <main className="bg-[var(--color-brand-cloud)] text-[var(--color-brand-carbon)]">
      {/* Scene 1: Hero */}
      <SceneFrame padding="huge" className="pt-32 pb-20 md:pt-40" ambientTone="warm" ambientIntensity="medium">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_STANDARD }}
            className="type-meta mb-5 text-[var(--color-brand-stone)]"
          >
            Ways we can work together
          </motion.p>
          <SplitRevealText
            as="h1"
            lines={["Three paths.", "One deeper movement."]}
            className="type-hero-display text-[var(--color-brand-charcoal)]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: EASE_SOFT }}
            className="type-lead mx-auto mt-8 max-w-3xl text-[var(--color-brand-stone)]"
          >
            These are not products. They are intentional containers. Each begins
            with honest attention — and ends with a life that is more fully yours.
          </motion.p>
        </div>
      </SceneFrame>

      {/* Scene 2: Life Coaching — Opacity Fade (Presence = Stillness) */}
      <SceneFrame
        variant="bone"
        padding="huge"
        ambientTone="warm"
        dividerTop
        className="overflow-visible"
      >
        <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <ParallaxMedia className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(25,26,29,0.12)]">
            <Image
              src={OFFERINGS[0].image}
              alt={OFFERINGS[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),linear-gradient(180deg,transparent_48%,rgba(25,26,29,0.18)_100%)]" />
          </ParallaxMedia>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: EASE_SOFT }}
          >
            <p className="type-meta mb-5 text-[var(--color-brand-amber)]">01</p>
            <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
              {OFFERINGS[0].title}
            </h2>

            <div className="mt-10 space-y-7">
              {/* Pull-quote: What Changes */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.75, delay: 0.1, ease: EASE_SOFT }}
                className="border-l-2 border-[var(--color-brand-amber)]/40 pl-6"
              >
                <p className="font-serif text-2xl leading-tight text-[var(--color-brand-charcoal)] md:text-3xl">
                  {OFFERINGS[0].shifts}
                </p>
              </motion.div>

              <div>
                <p className="type-meta text-[var(--color-brand-stone)]">
                  Who this is for
                </p>
                <p className="type-lead mt-3 text-[var(--color-brand-carbon)]">
                  {OFFERINGS[0].who}
                </p>
              </div>
              <div>
                <p className="type-meta text-[var(--color-brand-stone)]">
                  What we work with
                </p>
                <p className="type-lead mt-3 text-[var(--color-brand-carbon)]">
                  {OFFERINGS[0].focus}
                </p>
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                className="rounded-[1.6rem] border border-[var(--color-brand-stone)]/10 bg-[var(--color-brand-cloud)]/75 p-6 shadow-[0_14px_40px_rgba(25,26,29,0.04)]"
              >
                <p className="type-meta text-[var(--color-brand-stone)]">
                  What the container feels like
                </p>
                <p className="mt-3 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                  {OFFERINGS[0].container}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SceneFrame>

      {/* Scene 3: Creativity Coaching — Scale Reveal (Something Blooming) */}
      <SceneFrame
        variant="fog"
        padding="huge"
        ambientTone="mist"
        dividerTop
        className="overflow-visible"
      >
        <div className="grid items-start gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          {/* Copy LEFT (reversed from Life Coaching) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.975 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: EASE_SOFT }}
          >
            <p className="type-meta mb-5 text-[var(--color-brand-amber)]">02</p>
            <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
              {OFFERINGS[1].title}
            </h2>

            <div className="mt-10 space-y-7">
              {/* Pull-quote: Focus */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.75, delay: 0.1, ease: EASE_SOFT }}
              >
                <p className="font-serif text-lg italic leading-relaxed text-[var(--color-brand-charcoal)]">
                  "{OFFERINGS[1].focus}"
                </p>
              </motion.div>

              <div>
                <p className="type-meta text-[var(--color-brand-stone)]">
                  Who this is for
                </p>
                <p className="type-lead mt-3 text-[var(--color-brand-carbon)]">
                  {OFFERINGS[1].who}
                </p>
              </div>
              <div>
                <p className="type-meta text-[var(--color-brand-stone)]">
                  What you gain
                </p>
                <p className="type-lead mt-3 text-[var(--color-brand-carbon)]">
                  {OFFERINGS[1].shifts}
                </p>
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                className="rounded-[1.6rem] border border-[var(--color-brand-stone)]/10 bg-[var(--color-brand-cloud)]/75 p-6 shadow-[0_14px_40px_rgba(25,26,29,0.04)]"
              >
                <p className="type-meta text-[var(--color-brand-stone)]">
                  What the container feels like
                </p>
                <p className="mt-3 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                  {OFFERINGS[1].container}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image RIGHT (reversed from Life Coaching) */}
          <ParallaxMedia className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(25,26,29,0.12)]">
            <Image
              src={OFFERINGS[1].image}
              alt={OFFERINGS[1].title}
              fill
              className="object-cover"
            />
            {/* Subtle amber tint overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),linear-gradient(180deg,transparent_48%,rgba(25,26,29,0.18)_100%),rgba(185,138,74,0.06)]" />
          </ParallaxMedia>
        </div>
      </SceneFrame>

      {/* Scene 4: Movement Arts Training — X-Slide (Directional, Kinetic) */}
      <SceneFrame
        variant="bone"
        padding="huge"
        ambientTone="warm"
        dividerTop
        className="overflow-visible"
      >
        {/* Full-width landscape image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.75, ease: EASE_SOFT }}
          className="relative -mx-6 aspect-[21/9] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(25,26,29,0.12)] md:-mx-12"
        >
          <Image
            src={OFFERINGS[2].image}
            alt={OFFERINGS[2].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),linear-gradient(180deg,transparent_48%,rgba(25,26,29,0.18)_100%)]" />
        </motion.div>

        {/* Copy section below */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.75, delay: 0.06, ease: EASE_SOFT }}
          className="mt-16 max-w-3xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-amber)]">03</p>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            {OFFERINGS[2].title}
          </h2>

          <div className="mt-10 space-y-7">
            <div>
              <p className="type-meta text-[var(--color-brand-stone)]">
                Who this is for
              </p>
              <p className="type-lead mt-3 text-[var(--color-brand-carbon)]">
                {OFFERINGS[2].who}
              </p>
            </div>
            <div>
              <p className="type-meta text-[var(--color-brand-stone)]">
                What we work with
              </p>
              <p className="type-lead mt-3 text-[var(--color-brand-carbon)]">
                {OFFERINGS[2].focus}
              </p>
            </div>
            <div>
              <p className="type-meta text-[var(--color-brand-stone)]">
                What changes
              </p>
              <p className="type-lead mt-3 text-[var(--color-brand-carbon)]">
                {OFFERINGS[2].shifts}
              </p>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35 }}
              className="rounded-[1.6rem] border border-[var(--color-brand-stone)]/10 bg-[var(--color-brand-cloud)]/75 p-6 shadow-[0_14px_40px_rgba(25,26,29,0.04)]"
            >
              <p className="type-meta text-[var(--color-brand-stone)]">
                What the container feels like
              </p>
              <p className="mt-3 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                {OFFERINGS[2].container}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </SceneFrame>

      {/* Scene 5: Decision Guide — "If / Then" Editorial Rows */}
      <SceneFrame variant="charcoal" padding="huge" ambientTone="deep" ambientIntensity="medium">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="max-w-4xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">
            Which path fits?
          </p>
          <h2 className="type-scene-heading text-[var(--color-brand-bone)]">
            You do not need to choose perfectly before reaching out.
          </h2>
        </motion.div>

        {/* Decision rows */}
        <div className="mt-14 space-y-0 divide-y divide-white/8">
          {DECISION_ROWS.map((row, index) => (
            <motion.div
              key={row.condition}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: EASE_SOFT }}
              className="grid gap-6 py-10 md:grid-cols-[1fr_auto_1fr] md:items-center"
            >
              {/* If... condition */}
              <p className="font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                {row.condition}
              </p>

              {/* Center dot/indicator */}
              <div className="hidden md:flex justify-center">
                <div className="h-2 w-2 rounded-full bg-[var(--color-brand-amber)]" />
              </div>

              {/* → Offering name */}
              <p className="font-serif text-2xl leading-tight text-[var(--color-brand-amber)]">
                → {row.offering}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.75, delay: 0.3, ease: EASE_SOFT }}
          className="type-lead mt-14 max-w-3xl text-[var(--color-brand-stone)]"
        >
          If you cannot identify the edge yet, that is fine. The first
          conversation is for finding it.
        </motion.p>
      </SceneFrame>

      {/* Scene 6: CTA */}
      <SceneFrame padding="huge" className="text-center" ambientTone="warm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            If the path is not obvious yet, that is still enough to begin.
          </h2>
          <p className="type-lead mt-6 text-[var(--color-brand-stone)]">
            We can work out together what kind of support fits what you are
            navigating now.
          </p>
          <div className="mt-10">
            <MagneticCTA href="/begin">Begin a Conversation</MagneticCTA>
          </div>
        </motion.div>
      </SceneFrame>
    </main>
  );
}
