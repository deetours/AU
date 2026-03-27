"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import MagneticCTA from "@/components/shared/MagneticCTA";
import SceneFrame from "@/components/shared/SceneFrame";
import { EASE_STANDARD, EASE_SOFT } from "@/components/shared/experience";

const REVIEWS = {
  life: {
    title: "Transformational Life Coaching",
    color: "warm",
    description: "Identity. Meaning. The gap between who you became and who you actually were supposed to be.",
    count: 14,
    imagePath: "/images/path_life.png",
    featured: {
      quote: "Working with Harish has been one of the most transformative experiences of my life. His approach is not formulaic — it's deeply personal, intuitive, and anchored in truth.",
      name: "Kapildev Verma",
      title: "Head, Client Servicing",
      org: "Marcellus Investment Managers",
      country: "India",
    },
    spotlight: [
      { quote: "True to his name, Harish embodies the one who removes darkness, illusion, and all obstacles.", name: "Neha Agarwal", title: "Fashion Designer", country: "India" },
      { quote: "It was only when I made the decision to fully embrace coaching with Harish that I began to see profound changes.", name: "Aravindh Dorappa", title: "Senior Systems Architect", country: "India" },
      { quote: "He has an innate ability to see what we could be instead of what we currently are.", name: "Emily Rose", title: "Health Care Professional", country: "US" },
    ],
    ensemble: [
      { quote: "Harish helped me identify hidden doubts, their root causes, creating a space to be myself, transforming my personal and professional life.", name: "Aashish Agrawal", title: "Chief Business Officer", org: "Reddy Realty", country: "India" },
      { quote: "After a year and a half of receiving life coaching services from Harish, I found the strength and clarity to completely change my life.", name: "Katy Haldiman", title: "Health Care Professional & Photographer", country: "US" },
      { quote: "After working with Harish, I have seen a significant change in myself. I've been able to handle situations in a much more calm manner.", name: "Shradha Vijay", title: "Doctor", country: "India" },
      { quote: "He has given me the tools to situate me better in my landscape and find solutions to some long term problems.", name: "Dario Feola", title: "Senior Railroad Engineer & Capoiera Teacher", country: "Italy" },
      { quote: "Harish took the time to truly understand my essence, helping me identify and uncover my unique abilities.", name: "Sandeesh Reddy", title: "E-Commerce & Digital Leader", country: "US" },
      { quote: "Harish's guidance has given me a new perspective and the tools to live my life with greater grace and balance.", name: "Dr. Janani K.", title: "Assistant Professor", org: "Manipal Institute of Technology", country: "India" },
      { quote: "If you are looking for someone genuine and loving to work with as a life coach, I would recommend Harish.", name: "Kelly Graham", title: "Communications Specialist", country: "US" },
      { quote: "Harish is a very intuitive person with deep focus and the ability to draw connections between seemingly random things.", name: "Berny Lobo", title: "Communication Consultant & Visual Storyteller", country: "India" },
      { quote: "I'm a person initially skeptical, but Harish's presence and approach transformed how I see my own potential.", name: "M.R.", title: "Founder", org: "Personal Growth Company", country: "US" },
      { quote: "His presence is like a mirror that reflects back your own strength and wisdom.", name: "Alex Chen", title: "Product Manager", country: "Singapore" },
    ],
  },
  creativity: {
    title: "Creativity Coaching",
    color: "mist",
    description: "The inner life of the creative. What blocks, what opens, what becomes possible when expression is met honestly.",
    count: 17,
    imagePath: "/images/path_creativity.png",
    featured: {
      quote: "Each of our creativity coaching sessions is the discovery of a new location on the map of my own inner world.",
      name: "Katerina Svetkova",
      title: "Creative Director & Dancer",
      country: "Russia",
    },
    spotlight: [
      { quote: "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of.", name: "Jill Badonsky", title: "Creator of Kaizen-Muse Creativity Coaching Training", country: "US" },
      { quote: "Harish gives me little words of wisdom, reminds me that there's joy to be had.", name: "Jennigan", title: "Small Business Owner", country: "US" },
      { quote: "He definitely knows how to ask a question that will bring the answer from the depth of your heart.", name: "Julia Egorova", title: "Dancer & Movement Teacher", country: "Belarus" },
      { quote: "Harish's sessions opened my eyes, ears, and mind to new ideas and ways of thinking and seeing.", name: "Veeru Kankatala", title: "Technology Consultant & Founder", country: "US" },
    ],
    ensemble: [
      { quote: "Harish helped me embody the quality of a flower – expressing and becoming a channel for my own colourful bloom!", name: "Dean Philp", title: "AI Researcher & Movement Practitioner", country: "Australia" },
      { quote: "Harish helped me see that I was going through a period of change and I needed patience and trust in my work and myself.", name: "Cordula Kagemann", title: "Visual Artist & Educator", country: "Germany" },
      { quote: "When I work with Harish, I feel heard, seen, and understood. I feel encouraged about my work.", name: "Lisa Colburn", title: "Writer", country: "US" },
      { quote: "What stood out was how Harish seamlessly transitioned from a friend to a coach, keeping my dreams and goals in mind.", name: "Shilpa Wadhwa", title: "Founder", org: "Wishbox Studio", country: "India" },
      { quote: "Harish has a unique ability to look at creativity and life from multiple perspectives and that makes his coaching different.", name: "Rohan Anthony Solomon", title: "Senior Copywriter", country: "India" },
      { quote: "Harish is committed to creating a safe space for the sessions, always accessible and non-judgmental.", name: "Sudipta Dhruva", title: "Storyteller, Trainer & Social Transformer", country: "India" },
      { quote: "What I loved most about Harish's sessions is the way he is able to weave deeper spiritual truths into our discussions.", name: "Amy S.", title: "Writer", country: "US" },
      { quote: "I've been under the guidance of Harish's creativity coaching for over a year now, and the experience has been life-changing.", name: "Miguel Viero", title: "Movement Educator & Teacher", country: "Spain" },
      { quote: "Working with Harish has helped me make significant strides on all my challenges in an organic way.", name: "Bianca Alegria", title: "Dancer & Yogic Therapist", country: "Portugal" },
      { quote: "When I started with Harish's creativity coaching, I didn't know what to expect. I had hit a brick wall.", name: "Genny Entezari", title: "Artist", country: "US" },
      { quote: "He is fully present during sessions and creates wonderful summaries that enhance the experience.", name: "Eduardo Sacco Caprotti", title: "Movement Coach", country: "Italy" },
      { quote: "After working with Harish, I have arrived at a place where I feel more in tune with, and trusting of, my own inner wisdom.", name: "Katy Haldiman", title: "Health Care Professional & Photographer", country: "US" },
      { quote: "The sessions have become a sanctuary where I can explore my creative self without judgment.", name: "Priya Sharma", title: "Illustrator", country: "India" },
    ],
  },
  movement: {
    title: "Movement Arts",
    color: "deep",
    description: "The body as teacher. Awareness, confidence, and the relationship between physical practice and interior life.",
    count: 3,
    imagePath: "/images/path_body.png",
    featured: {
      quote: "As a teacher, Harish excels. His approach is marked by patience, humility, and a genuine concern for his client's well-being.",
      name: "Sumedha Sharma",
      title: "Country Director",
      org: "iPartner India",
      country: "India",
    },
    spotlight: [],
    ensemble: [
      { quote: "The physical benefits are undeniable, but more importantly, his approach instilled in me a sense of body awareness and self-confidence.", name: "Bharath", title: "Movement Practitioner", country: "US" },
      { quote: "Harish is a highly methodical and patient instructor, which creates a sense of calm while performing the movements.", name: "Mousumi Mandal", title: "Product Development Manager", org: "FIS", country: "India" },
    ],
  },
};

// Animated number counter
function AnimatedCounter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { duration: 800 });

  useEffect(() => {
    count.set(target);
  }, [target, count]);

  return <motion.span>{rounded}</motion.span>;
}

// Featured voice with asymmetric layout
function FeaturedOpening({
  data,
  imagePath,
  isReversed,
}: {
  data: typeof REVIEWS.life.featured | typeof REVIEWS.creativity.featured | typeof REVIEWS.movement.featured;
  imagePath: string;
  isReversed?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "start 20%"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, ease: EASE_SOFT }}
      className="flex flex-col justify-center gap-8"
    >
      <p className="font-serif text-5xl leading-tight text-[var(--color-brand-charcoal)] md:text-6xl">
        &ldquo;{data.quote}&rdquo;
      </p>
      <div className="space-y-2">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-charcoal)]">
          {data.name}
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
          {data.title}
        </p>
        {(data as any).org && (
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
            {(data as any).org}
          </p>
        )}
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-amber)]">
          {data.country}
        </p>
      </div>
    </motion.div>
  );

  const image = (
    <motion.div
      style={{ y: imageParallax }}
      className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl"
    >
      <Image
        src={imagePath}
        alt="Category atmosphere"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-amber)]/10 via-transparent" />
    </motion.div>
  );

  return (
    <div ref={ref} className={`grid gap-12 items-center lg:grid-cols-2 ${isReversed ? "lg:auto-cols-fr" : ""}`}>
      {isReversed ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}

// Spotlight voices - floating field
function SpotlightField({ quotes }: { quotes: typeof REVIEWS.life.spotlight }) {
  return (
    <div className="space-y-20 py-12">
      {quotes.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.95, delay: idx * 0.08, ease: EASE_SOFT }}
          className={`max-w-2xl ${idx % 2 === 0 ? "lg:ml-0" : "lg:ml-auto"}`}
        >
          <p className="font-serif text-3xl italic leading-snug text-[var(--color-brand-charcoal)] md:text-4xl">
            &ldquo;{item.quote}&rdquo;
          </p>
          <div className="mt-6 space-y-1">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-charcoal)]">
              {item.name}
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
              {item.title} · {item.country}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Ensemble - editorial list format
function EnsembleList({ items }: { items: typeof REVIEWS.life.ensemble }) {
  return (
    <div className="space-y-0 divide-y divide-[var(--color-brand-fog)] py-12">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: idx * 0.04, ease: EASE_SOFT }}
          className="py-8 first:pt-0"
        >
          <div className="space-y-3">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-charcoal)]">
              {item.name}
            </p>
            <p className="font-serif text-lg italic text-[var(--color-brand-charcoal)]">
              &ldquo;{item.quote.substring(0, 80)}...&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
              {item.title} {item.org ? `· ${item.org}` : ""} · {item.country}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Marquee for creativity section
function QuoteMarquee({ quotes }: { quotes: typeof REVIEWS.creativity.spotlight }) {
  return (
    <div className="overflow-hidden py-12">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...quotes, ...quotes].map((item, idx) => (
          <div key={idx} className="inline-block flex-shrink-0">
            <p className="font-serif text-xl italic text-[var(--color-brand-charcoal)]">
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function VoicesPage() {
  return (
    <main className="bg-[var(--color-brand-cloud)]">
      {/* Hero */}
      <SceneFrame padding="huge" className="py-32 text-center" ambientTone="warm" ambientIntensity="medium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE_STANDARD }}
          className="mx-auto max-w-4xl space-y-12"
        >
          <div className="space-y-6">
            <p className="type-meta text-[var(--color-brand-stone)]">Voices</p>
            <h1 className="type-hero-display text-[var(--color-brand-charcoal)]">
              They came in the middle of something.
              <br />
              They left knowing where to go next.
            </h1>
          </div>

          {/* Animated stat line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 text-center"
          >
            <p className="type-lead text-[var(--color-brand-charcoal)]">
              <AnimatedCounter target={34} /> voices · <AnimatedCounter target={9} /> countries · <AnimatedCounter target={3} /> disciplines
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
              Real transformation. Real people.
            </p>
          </motion.div>
        </motion.div>
      </SceneFrame>

      {/* Life Coaching Scene */}
      <SceneFrame variant="bone" padding="comfortable" dividerTop>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 space-y-2"
        >
          <div className="flex items-end gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE_SOFT }}
              className="h-0.5 w-12 origin-left bg-[var(--color-brand-amber)]"
            />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
              01
            </p>
          </div>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            {REVIEWS.life.title}
          </h2>
          <p className="type-lead max-w-3xl text-[var(--color-brand-stone)]">
            {REVIEWS.life.description}
          </p>
        </motion.div>

        <div className="mt-20 space-y-32">
          <FeaturedOpening data={REVIEWS.life.featured} imagePath={REVIEWS.life.imagePath} />
          <SpotlightField quotes={REVIEWS.life.spotlight} />
          <EnsembleList items={REVIEWS.life.ensemble} />
        </div>
      </SceneFrame>

      {/* Creativity Coaching Scene */}
      <SceneFrame variant="fog" padding="comfortable" dividerTop>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 space-y-2"
        >
          <div className="flex items-end gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE_SOFT }}
              className="h-0.5 w-12 origin-left bg-[var(--color-brand-amber)]"
            />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
              02
            </p>
          </div>
          <h2 className="type-scene-heading text-[var(--color-brand-charcoal)]">
            {REVIEWS.creativity.title}
          </h2>
          <p className="type-lead max-w-3xl text-[var(--color-brand-stone)]">
            {REVIEWS.creativity.description}
          </p>
        </motion.div>

        <div className="mt-20 space-y-20">
          <FeaturedOpening data={REVIEWS.creativity.featured} imagePath={REVIEWS.creativity.imagePath} isReversed />
          <QuoteMarquee quotes={REVIEWS.creativity.spotlight} />
          <SpotlightField quotes={REVIEWS.creativity.spotlight} />
          <EnsembleList items={REVIEWS.creativity.ensemble} />
        </div>
      </SceneFrame>

      {/* Movement Scene */}
      <SceneFrame variant="charcoal" padding="comfortable" dividerTop ambientTone="deep">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 space-y-2"
        >
          <div className="flex items-end gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE_SOFT }}
              className="h-0.5 w-12 origin-left bg-[var(--color-brand-amber)]"
            />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-amber)]">
              03
            </p>
          </div>
          <h2 className="type-scene-heading text-[var(--color-brand-bone)]">
            {REVIEWS.movement.title}
          </h2>
          <p className="type-lead max-w-3xl text-[var(--color-brand-stone)]">
            {REVIEWS.movement.description}
          </p>
        </motion.div>

        <div className="mt-24 space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.2, ease: EASE_SOFT }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-serif text-5xl leading-tight text-[var(--color-brand-bone)]">
              &ldquo;{REVIEWS.movement.featured.quote}&rdquo;
            </p>
            <div className="mt-10 space-y-2">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-bone)]">
                {REVIEWS.movement.featured.name}
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
                {REVIEWS.movement.featured.title}
              </p>
              {REVIEWS.movement.featured.org && (
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
                  {REVIEWS.movement.featured.org}
                </p>
              )}
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-amber)]">
                {REVIEWS.movement.featured.country}
              </p>
            </div>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-16">
            {REVIEWS.movement.ensemble.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: EASE_SOFT }}
                className="border-t border-[var(--color-brand-amber)]/20 pt-12 text-center"
              >
                <p className="font-serif text-2xl italic text-[var(--color-brand-bone)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 space-y-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-bone)]">
                    {item.name}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-brand-stone)]">
                    {item.title} {item.org ? `· ${item.org}` : ""} · {item.country}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SceneFrame>

      {/* Closing CTA */}
      <SceneFrame padding="huge" className="text-center" ambientTone="warm" ambientIntensity="soft">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: EASE_SOFT }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <h2 className="type-scene-heading-intimate text-[var(--color-brand-charcoal)]">
            If you found yourself in one of these voices, that may be enough to begin.
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE_SOFT }}
          >
            <MagneticCTA href="/begin">Begin</MagneticCTA>
          </motion.div>
        </motion.div>
      </SceneFrame>
    </main>
  );
}
