"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MagneticCTA from "@/components/shared/MagneticCTA";
import InteractiveQuote from "@/components/shared/InteractiveQuote";
import ParallaxMedia from "@/components/shared/ParallaxMedia";
import SceneFrame from "@/components/shared/SceneFrame";
import SplitRevealText from "@/components/shared/SplitRevealText";
import { EASE_STANDARD, EASE_SOFT, hoverLift, sceneReveal } from "@/components/shared/experience";
import CinemaStage from "@/components/shared/CinemaStage";

// Breathing pulse animation
const breathingPulseStyle = `
  @keyframes breathingPulse {
    0%, 100% { opacity: 0.12; }
    50% { opacity: 0.18; }
  }
  .breathing-pulse {
    animation: breathingPulse 4s ease-in-out infinite;
  }
`;

const RECOGNITION_LINES = [
  "You built something.",
  "But something essential went quiet.",
  "Not failure. Something deeper.",
  "The distance between what you've built and what you actually feel.",
];

const PRINCIPLES = [
  {
    title: "Presence",
    description:
      "We slow the pace down enough to hear what your life is actually asking of you.",
  },
  {
    title: "Awareness",
    description:
      "We name the patterns, roles, and inherited expectations shaping how you live and create.",
  },
  {
    title: "Embodiment",
    description:
      "The work does not stay in the head. It becomes something your body, choices, and relationships can actually live.",
  },
];

const PROOF = [
  {
    label: "Transformational Life Coaching",
    quote: "His approach is not formulaic — it's deeply personal, intuitive, and anchored in truth.",
    attribution: "Kapildev Verma",
    title: "Head, Client Servicing · Marcellus Investment Managers",
    country: "India",
  },
  {
    label: "Creativity Coaching",
    quote: "Each of our sessions is the discovery of a new location on the map of my own inner world.",
    attribution: "Katerina Svetkova",
    title: "Creative Director & Dancer",
    country: "Russia",
  },
  {
    label: "Movement Arts",
    quote: "His approach instilled in me a sense of body awareness and self-confidence I didn't expect.",
    attribution: "Sumedha Sharma",
    title: "Country Director · iPartner India",
    country: "India",
  },
];

const THRESHOLD_SIGNALS = [
  "The systems helped. But they didn't reach the root.",
  "The insight made sense. But it never quite became you.",
  "You changed what you could. And something deeper stayed the same.",
];

function RecognitionLine({
  line,
  index,
  onView,
}: {
  line: string;
  index: number;
  onView?: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px", amount: 0.6 });
  const reducedMotion = useReducedMotion();

  // Report when this line comes into view
  useEffect(() => {
    if (inView && onView) {
      onView(index);
    }
  }, [inView, index, onView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={sceneReveal}
      custom={index * 0.05}
      animate={
        reducedMotion
          ? undefined
          : {
              x: inView ? 8 : 0,
            }
      }
      transition={{ duration: 0.55, ease: EASE_SOFT }}
      className="group relative pl-6"
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px origin-top rounded-full bg-[var(--color-brand-amber)]/25"
        animate={
          reducedMotion
            ? undefined
            : {
                scaleY: inView ? 1 : 0.45,
                opacity: inView ? 1 : 0.35,
              }
        }
        transition={{ duration: 0.4, ease: EASE_SOFT }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute left-[-3px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--color-brand-amber)]"
        animate={
          reducedMotion
            ? undefined
            : {
                scale: inView ? 1 : 0.72,
                opacity: inView ? 1 : 0.35,
              }
        }
        transition={{ duration: 0.4, ease: EASE_SOFT }}
      />
      <p
        className={`border-b border-[var(--color-brand-stone)]/12 pb-6 font-sans text-xl leading-relaxed transition-colors duration-500 ${
          inView
            ? "text-[var(--color-brand-charcoal)]"
            : "text-[var(--color-brand-stone)]"
        }`}
      >
        {line}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const auOpacity = useTransform(scrollYProgress, [0, 0.5], [0.035, 0]);
  const imageRotation = useTransform(scrollYProgress, [0, 1], [0, 2]);

  // Track which recognition lines have been viewed
  const [viewedRecognitionLines, setViewedRecognitionLines] = useState<
    Set<number>
  >(new Set());
  const handleRecognitionLineView = (index: number) => {
    setViewedRecognitionLines((prev) => new Set(prev).add(index));
  };
  const allRecognitionLinesViewed =
    viewedRecognitionLines.size === RECOGNITION_LINES.length;

  return (
    <main className="overflow-x-hidden bg-[var(--color-brand-cloud)] text-[var(--color-brand-carbon)]">
      <style>{breathingPulseStyle}</style>
      <div ref={heroRef}>
        <SceneFrame
          padding="huge"
          className="relative min-h-screen pt-32 md:pt-40 overflow-hidden"
          ambientTone="warm"
          ambientIntensity="medium"
        >
        {/* Atmospheric background layers */}
        <div className="absolute inset-0 pointer-events-none opacity-100">
          {/* Warm amber radial glow from top-right */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(185,138,74,0.08),transparent_55%)]" />
          {/* Subtle amber warmth from bottom-left */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(185,138,74,0.05),transparent_40%)]" />
          {/* Large background monogram AU - scroll-linked opacity */}
          <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
            <motion.span
              style={{ opacity: auOpacity }}
              className="font-serif text-[32rem] md:text-[40rem] font-thin leading-none text-[#B98A4A] -mr-16 md:-mr-32 pointer-events-none select-none"
            >
              AU
            </motion.span>
          </div>
        </div>

        <div className="grid items-end gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sceneReveal}
            custom={0}
            className="max-w-4xl"
          >
            <p className="type-meta mb-6 text-[var(--color-brand-stone)]">
              Alchemy Unbounded
            </p>
            <SplitRevealText
              as="h1"
              lines={[
                "You've kept your life together.",
                "That's the problem.",
              ]}
              className="type-hero-display text-[var(--color-brand-charcoal)]"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: EASE_STANDARD }}
              className="type-lead mt-8 max-w-2xl text-[var(--color-brand-stone)]"
            >
              Coaching with Harish Narayan. For people who got it right — and still feel wrong.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: EASE_STANDARD }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <MagneticCTA href="/begin">Begin a Conversation</MagneticCTA>
              <Link
                href="/the-work"
                className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-amber)] transition-colors duration-300 hover:text-[var(--color-brand-charcoal)]"
              >
                Explore the Work
                <motion.span
                  aria-hidden="true"
                  animate={reducedMotion ? undefined : { x: [0, 2, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            ref={heroImageRef}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: EASE_STANDARD }}
            style={{ rotateZ: imageRotation }}
          >
            <ParallaxMedia className="relative min-h-[28rem] overflow-hidden rounded-[2.2rem] shadow-[0_40px_100px_rgba(25,26,29,0.12)] z-20">
              <Image
                src="/Harish.jpeg"
                alt="Harish Narayan"
                fill
                priority
                className="object-cover soft-mask-bottom"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_38%),linear-gradient(180deg,transparent_42%,rgba(35,29,24,0.42)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="type-meta text-[var(--color-brand-bone)]/75">
                  Recognition. Orientation. Trust.
                </p>
              </div>
            </ParallaxMedia>
          </motion.div>
        </div>

        {/* Breathing amber pulse element */}
        <div className="absolute top-1/3 right-12 w-12 h-12 bg-[#B98A4A] rounded-full blur-3xl opacity-[0.12] breathing-pulse pointer-events-none" />
        </SceneFrame>
      </div>

      <SceneFrame
        variant="fog"
        dividerTop
        dividerBottom
        ambientTone="mist"
        className="overflow-visible"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="type-meta mb-5 text-[var(--color-brand-stone)]">
              If you recognize this —
            </p>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease: EASE_SOFT }}
              className="type-scene-heading max-w-md text-[var(--color-brand-charcoal)]"
            >
              You're not falling apart. You're waking up to the price of a borrowed life.
            </motion.h2>
          </div>
          <div className="relative">
            <div className="absolute left-1 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--color-brand-amber)]/35 via-[var(--color-brand-amber)]/12 to-transparent md:block" />
            <div className="space-y-6">
              {RECOGNITION_LINES.map((line, index) => (
                <RecognitionLine
                  key={line}
                  line={line}
                  index={index}
                  onView={handleRecognitionLineView}
                />
              ))}
            </div>
            {/* Completion line - draws when all recognition lines have been viewed */}
            <motion.div
              className="h-0.5 bg-[var(--color-brand-amber)] origin-left mt-6"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: allRecognitionLinesViewed ? 1 : 0,
              }}
              transition={{ duration: 0.6, ease: EASE_SOFT }}
              style={{
                width: "100%",
              }}
            />
            <p className="type-lead pt-8 text-[var(--color-brand-stone)]">
              This work begins at the point where outward competence no longer
              feels like a satisfying answer.
            </p>
          </div>
        </div>
      </SceneFrame>

      <SceneFrame padding="comfortable" ambientTone="warm" dividerBottom>
        <div className="max-w-5xl">
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">What this work is</p>
          <motion.h2
            initial={{ opacity: 0, backgroundPosition: "100% 0" }}
            whileInView={{ opacity: 1, backgroundPosition: "0% 0" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.0, ease: EASE_SOFT }}
            className="type-scene-heading max-w-4xl text-[var(--color-brand-charcoal)]"
            style={{
              backgroundImage: "linear-gradient(90deg, var(--color-brand-charcoal) 0%, var(--color-brand-charcoal) 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Not more insight. Change your life can actually hold.
          </motion.h2>
          <p className="type-lead mt-8 max-w-3xl text-[var(--color-brand-stone)]">
            We slow down enough to hear what is real beneath the roles you've learned to play. Change is not forced here. It emerges.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{
                ...hoverLift,
                hidden: sceneReveal.hidden,
                visible: sceneReveal.visible(index * 0.05),
              }}
              className="group relative overflow-hidden rounded-[1.85rem] border border-[var(--color-brand-stone)]/10 bg-[linear-gradient(180deg,rgba(245,242,235,0.9),rgba(234,231,225,0.95))] p-8 shadow-[0_18px_60px_rgba(25,26,29,0.04)] min-h-[16rem] flex flex-col justify-between"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,138,74,0.12),transparent_46%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Amber accent line */}
              <motion.div
                className="absolute top-0 left-0 h-0.5 bg-[var(--color-brand-amber)] origin-left"
                initial={{ scaleX: 0.5, width: "2rem" }}
                whileHover={{ scaleX: 1.8 }}
                transition={{ duration: 0.4, ease: EASE_SOFT }}
              />

              <div className="relative z-10">
                {/* Card number */}
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)] mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Title - italic + letter-spacing hover */}
                <motion.p
                  className="font-serif italic text-3xl leading-none text-[var(--color-brand-charcoal)] transition-transform duration-500 group-hover:scale-[1.03]"
                  animate={{ letterSpacing: "0em" }}
                  whileHover={{ letterSpacing: "0.01em" }}
                  transition={{ duration: 0.3, ease: EASE_SOFT }}
                >
                  {principle.title}
                </motion.p>

                {/* Description - breathing room */}
                <p className="relative z-10 mt-6 md:mt-7 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                  {principle.description}
                </p>
              </div>

              {/* Hover affordance arrow */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE_SOFT }}
                className="mt-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-amber)]"
              >
                Explore →
              </motion.div>
            </motion.article>
          ))}
        </div>
      </SceneFrame>

      <SceneFrame variant="charcoal" padding="comfortable" ambientTone="deep" ambientIntensity="medium">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <ParallaxMedia className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/portrait_harish.png"
              alt="Portrait of Harish Narayan"
              fill
              className="object-cover grayscale-[18%] transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,242,235,0.16),transparent_30%),linear-gradient(180deg,transparent_48%,rgba(25,26,29,0.32)_100%)]" />
          </ParallaxMedia>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE_STANDARD }}
            className="max-w-3xl"
          >
            <p className="type-meta mb-5 text-[var(--color-brand-stone)]">The guide</p>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: EASE_SOFT }}
              className="type-scene-heading text-[var(--color-brand-bone)]"
            >
              I have walked through anxiety, the erosion of meaning, and the slow disappearance of myself.
            </motion.h2>
            <p className="type-lead mt-8 text-[var(--color-brand-stone)]">
              That path is the foundation of how I work. Not theory. Lived experience — and years sitting with people while they locate the parts of themselves they had silenced.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-amber)] transition-colors duration-300 hover:text-white"
              >
                Read Harish&apos;s Story
                <motion.span
                  aria-hidden="true"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: EASE_SOFT }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </SceneFrame>

      <SceneFrame variant="fog" padding="comfortable" ambientTone="mist" dividerTop>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5">
              <p className="type-meta text-[var(--color-brand-stone)]">What becomes possible</p>
              <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-amber)]">From the people who've done this work</p>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: EASE_STANDARD }}
              className="type-scene-heading text-[var(--color-brand-charcoal)]"
            >
              Real shifts. Not a better performance of the same life.
            </motion.h2>
          </div>
          <Link
            href="/voices"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-amber)] transition-colors duration-300 hover:text-[var(--color-brand-charcoal)]"
          >
            Read More Voices
            <motion.span
              aria-hidden="true"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25, ease: EASE_SOFT }}
            >
              &rarr;
            </motion.span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: EASE_SOFT }}
          className="mt-20 pt-12"
        >
          <CinemaStage testimonials={PROOF} />
        </motion.div>
      </SceneFrame>

      <SceneFrame padding="comfortable" ambientTone="warm" dividerBottom>
        <div className="mx-auto max-w-4xl text-center">
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">
            The moment it shifts
          </p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.4, ease: EASE_SOFT }}
            className="type-scene-heading-intimate text-[var(--color-brand-charcoal)]"
          >
            There has to be another way to live.
          </motion.h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {THRESHOLD_SIGNALS.map((signal, index) => (
              <motion.div
                key={signal}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: EASE_SOFT }}
                className="relative overflow-hidden rounded-full border border-[var(--color-brand-stone)]/10 bg-white/50 px-6 py-4"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(185,138,74,0.8),transparent)]" />
                <p className="font-sans text-lg leading-relaxed text-[var(--color-brand-stone)]">
                  {signal}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="type-lead mx-auto mt-8 max-w-2xl text-[var(--color-brand-carbon)]">
            That refusal — to keep going as if everything is fine — is often where this work begins.
          </p>
        </div>
      </SceneFrame>

      <SceneFrame
        variant="charcoal"
        padding="huge"
        ambientTone="deep"
        ambientIntensity="medium"
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: EASE_SOFT }}
          className="mx-auto flex max-w-3xl flex-col items-center"
        >
          <h2 className="type-scene-heading-intimate text-[var(--color-brand-bone)]">
            If the pretending is starting to cost too much, we can talk.
          </h2>
          <p className="type-lead mt-6 max-w-2xl text-[var(--color-brand-stone)]">
            No performance. No pressure. Just an honest conversation about where you actually are.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE_SOFT }}
            className="mt-10"
          >
            <MagneticCTA href="/begin">Begin</MagneticCTA>
          </motion.div>
        </motion.div>
      </SceneFrame>
    </main>
  );
}
