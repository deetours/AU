"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MagneticCTA from "@/components/shared/MagneticCTA";
import ParallaxMedia from "@/components/shared/ParallaxMedia";
import SceneFrame from "@/components/shared/SceneFrame";
import SplitRevealText from "@/components/shared/SplitRevealText";
import { EASE_STANDARD, EASE_SOFT, hoverLift, sceneReveal } from "@/components/shared/experience";

const WHAT_I_REFUSE = [
  "I refuse to fix people. They are not broken.",
  "I refuse to sell transformation as productivity. It is alchemy, not optimization.",
  "I refuse to make this another performance. Another checklist. Another way to prove your worth.",
];

const THE_JOURNEY = [
  {
    title: "The fracture",
    body:
      "I was functional. On paper: school, career, competence. But inside? Anxiety lived in my chest. Shame lived in the spaces I wouldn't examine. I could function. I couldn't feel at home inside myself. That is the difference between a life that works and a life that breathes.",
    shift:
      "I learned that outward success means nothing if you are internally erased.",
  },
  {
    title: "The turn",
    body:
      "Something shifted. Not suddenly. Like water finding a new channel. I stopped escaping what I felt and started staying with it. The attention changed. The quality of listening changed. I began to read myself with less fear and more honesty. The ground beneath me started to hold again.",
    shift:
      "That inward turn was the beginning of everything that came after.",
  },
  {
    title: "The body remembers",
    body:
      "In my early thirties, I was grossly overweight. But the real weight was invisible — carried in how I moved through the world, how I inhabited my own skin. In ten months, I lost one hundred pounds. That number is irrelevant. What matters: my relationship to effort, vitality, and personal truth was reborn. My body stopped being a problem and became a teacher.",
    shift:
      "I learned that transformation must be felt in the bones. It cannot stay in the mind.",
  },
  {
    title: "The leaving",
    body:
      "Mechanical Engineer. SAP Consultant. Years in the corporate machinery. Success. Salary. Stability. And a slow, quiet disappearance of myself. One day the call became louder than the fear. I walked away from a life that worked. Toward a life that was actually mine. The cost was real. So was the clarity.",
    shift:
      "I learned that leaving takes more courage than arriving. But it is the only way home.",
  },
  {
    title: "What emerged",
    body:
      "After years of inner practice, movement, study, and embodied living — the work became clear. I am at my best when I am helping people reconnect with their own intelligence. With their own truth. With their capacity for change that was always there. This is not my work. It is my calling.",
    shift:
      "Everything before this was practice for this.",
  },
];

const THE_LINEAGE = [
  {
    name: "Eric Maisel",
    context: "Creativity and the architecture of meaning.",
  },
  {
    name: "Jill Badonsky",
    context: "Unblocking the creative self through play and permission.",
  },
  {
    name: "Leon VanderPol",
    context: "Deep transformation beyond the stories we tell ourselves.",
  },
  {
    name: "Stevie Kent",
    context: "How perception creates reality. How identity is constructed.",
  },
  {
    name: "Jozef Frucek & Linda Kapetanea",
    context: "The body as the primary teacher. Movement as becoming.",
  },
  {
    name: "Somatic & contemplative practice",
    context: "Years sitting with the nervous system, embodiment, the silence beneath thought.",
  },
];

const THE_PAST = [
  "Mechanical Engineering degree from Purdue University",
  "Years as an SAP Logistics and Supply Chain consultant",
  "Months that became years in the corporate architecture of ambition",
  "Until the distance between who I was and who I could be became impossible to ignore",
];

export default function About() {
  return (
    <main className="bg-[var(--color-brand-cloud)] text-[var(--color-brand-carbon)]">
      {/* OPENING: The Recognition Hook */}
      <SceneFrame padding="huge" className="pt-32 md:pt-40" ambientTone="warm" ambientIntensity="medium">
        <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_STANDARD }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="type-meta mb-5 text-[var(--color-brand-stone)]"
            >
              This is how I know.
            </motion.p>
            <SplitRevealText
              as="h1"
              lines={[
                "I built a life that worked.",
                "It was killing me quietly.",
                "That is the work I do now.",
              ]}
              className="type-hero-display text-[var(--color-brand-charcoal)]"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 1.8, ease: EASE_SOFT }}
              className="type-lead mt-8 max-w-2xl text-[var(--color-brand-stone)]"
            >
              This is not theory spoken from a distance. This is a path I have walked. The guide you find here is someone who has been fragmented and found wholeness. Who has left everything to find anything that was real.
            </motion.p>
          </motion.div>
          <ParallaxMedia className="relative min-h-[30rem] overflow-hidden rounded-[2.2rem] shadow-[0_40px_100px_rgba(25,26,29,0.12)]">
            <Image
              src="/images/about_hero.png"
              alt="Harish Narayan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_38%),linear-gradient(180deg,transparent_50%,rgba(25,26,29,0.22)_100%)]" />
          </ParallaxMedia>
        </div>
      </SceneFrame>

      {/* TENSION: What I Refuse */}
      <SceneFrame variant="fog" dividerTop dividerBottom ambientTone="mist">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Clarity about what this is</p>
            <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
              What I will not do. What I will not become.
            </h2>
          </div>
          <div className="space-y-5">
            {WHAT_I_REFUSE.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ x: 6 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: EASE_STANDARD }}
                className="group relative overflow-hidden border-b border-[var(--color-brand-stone)]/12 pb-5"
              >
                <span className="absolute left-0 top-0 h-full w-px scale-y-0 bg-[var(--color-brand-amber)] transition-transform duration-500 group-hover:scale-y-100" />
                <p className="pl-5 font-sans text-xl leading-relaxed text-[var(--color-brand-carbon)]">
                  {line}
                </p>
              </motion.div>
            ))}
            <p className="type-lead pt-4 text-[var(--color-brand-stone)]">
              What I hold instead: People contain their own medicine. Your intelligence was never broken. The space between where you are and where you could be is not a problem to solve. It is a doorway to open.
            </p> {/* Intentionally static — no animation */}
          </div>
        </div>
      </SceneFrame>

      {/* THE JOURNEY: Cinematic Descent & Ascent */}
      <SceneFrame padding="huge" ambientTone="warm" dividerBottom>
        <div className="max-w-5xl">
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">
            The path that shaped this work
          </p>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            Built from necessity. Tempered by lived transformation.
          </h2>
        </div>

        <div className="relative mt-14 space-y-8 pl-0 md:pl-14">
          <div className="absolute left-3 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[var(--color-brand-amber)]/35 via-[var(--color-brand-amber)]/16 to-transparent md:block" />
          {THE_JOURNEY.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: index * 0.06, ease: EASE_SOFT }}
              className="group relative rounded-[1.9rem] border border-[var(--color-brand-stone)]/10 bg-[linear-gradient(180deg,rgba(245,242,235,0.96),rgba(234,231,225,0.92))] p-8 shadow-[0_20px_60px_rgba(25,26,29,0.05)] md:p-10"
            >
              <span className="absolute left-[-2.4rem] top-9 hidden h-3 w-3 rounded-full bg-[var(--color-brand-amber)] shadow-[0_0_0_10px_rgba(185,138,74,0.08)] md:block" />
              <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-serif text-3xl leading-tight text-[var(--color-brand-charcoal)] md:text-[3.2rem]">
                    {step.title}
                  </h3>
                  <p className="mt-5 font-sans text-base leading-relaxed text-[var(--color-brand-stone)]">
                    {step.body}
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.75, delay: index * 0.06 + 0.15, ease: EASE_SOFT }}
                    className="mt-5 font-sans text-base font-semibold leading-relaxed text-[var(--color-brand-charcoal)]"
                  >
                    {step.shift}
                  </motion.p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SceneFrame>

      {/* AUTHORITY: The Lineage (Lived, Not Listed) */}
      <SceneFrame variant="charcoal" padding="huge" ambientTone="deep" ambientIntensity="medium">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE_SOFT }}
          className="max-w-5xl"
        >
          <p className="type-meta mb-5 text-[var(--color-brand-stone)]">Teachers who shaped the path</p>
          <h2 className="type-scene-heading max-w-3xl text-[var(--color-brand-bone)]">
            These are not credentials. They are woven into how I listen, move, and think.
          </h2>
          <p className="type-lead mt-8 max-w-3xl text-[var(--color-brand-stone)]">
            Years of study. Years of practice. Years of being shaped by minds and bodies and approaches that asked: What is actually true? What does the nervous system know? How does transformation happen in the body?
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {THE_LINEAGE.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, scale: 0.975 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.75, delay: index * 0.04, ease: EASE_SOFT }}
              className="group rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="font-serif text-2xl leading-tight text-[var(--color-brand-bone)]">
                {item.name}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[var(--color-brand-stone)]">
                {item.context}
              </p>
              <div className="mt-5 h-px w-12 bg-[var(--color-brand-amber)]/40 transition-all duration-500 group-hover:w-20" />
            </motion.article>
          ))}
        </div>
      </SceneFrame>

      {/* THE PAST: A Life Before */}
      <SceneFrame variant="fog" padding="huge" ambientTone="mist" dividerTop dividerBottom>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="type-meta mb-5 text-[var(--color-brand-stone)]">There was another life</p>
            <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
              Before this path, another one shaped me.
            </h2>
          </div>
          <div className="space-y-4">
            {THE_PAST.map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.65, delay: index * 0.07, ease: EASE_STANDARD }}
                className="relative border-b border-[var(--color-brand-stone)]/12 pb-4 pl-5 font-sans text-base leading-relaxed text-[var(--color-brand-carbon)]"
              >
                <span className="absolute left-0 top-3 h-px w-3 bg-[var(--color-brand-amber)]" />
                {item}
              </motion.p>
            ))}
            <p className="type-lead pt-3 text-[var(--color-brand-stone)]">
              That life gave me something essential: I know what it costs to live in ambition. To build without aliveness. To achieve without presence. That knowledge is the ground from which I understand you.
            </p>
            {/* Intentionally static — no animation on closing paragraph */}
          </div>
        </div>
      </SceneFrame>

      {/* INVITATION: The Doorway */}
      <SceneFrame padding="huge" className="text-center" ambientTone="warm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.0, ease: EASE_SOFT }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <SplitRevealText
            lines={[
              "If something in this resonates—",
              "if you recognize the distance between",
              "what you have built and what you feel—",
              "then we might have something to explore together.",
            ]}
            className="type-scene-heading text-[var(--color-brand-charcoal)]"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE_SOFT }}
            className="type-lead mx-auto max-w-2xl text-[var(--color-brand-stone)]"
          >
            This is not a promise to fix you. It is an invitation to know yourself. To locate what you have been living without. To become the person your life has been asking you to become.
          </motion.p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/the-work"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-brand-stone)]/18 bg-white/70 px-8 py-4 font-sans text-sm uppercase tracking-[0.18em] text-[var(--color-brand-carbon)] transition-colors duration-300 hover:border-[var(--color-brand-amber)] hover:text-[var(--color-brand-amber)]"
            >
              Explore the Work
            </Link>
            <MagneticCTA href="/begin">Begin a Conversation</MagneticCTA>
          </div>
        </motion.div>
      </SceneFrame>
    </main>
  );
}
