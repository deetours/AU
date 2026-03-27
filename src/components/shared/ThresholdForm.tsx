"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import MagneticCTA from "@/components/shared/MagneticCTA";
import { EASE_SOFT, EASE_STANDARD } from "@/components/shared/experience";

export default function ThresholdForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [messageRows, setMessageRows] = useState(4);
  const reducedMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Alchemy Unbounded inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        "",
        "Where I am right now:",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:hello@alchemyunbounded.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const getFieldProgress = (key: keyof typeof formData) => {
    const value = formData[key].trim();
    if (value.length === 0) return "empty";
    return focusedField === key ? "focused" : "filled";
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: EASE_STANDARD }}
      className="mx-auto w-full max-w-2xl rounded-[2rem] border border-[var(--color-brand-stone)]/12 bg-[var(--color-brand-bone)]/70 px-6 py-10 text-left shadow-[0_30px_80px_rgba(25,26,29,0.06)] backdrop-blur-sm md:px-10 md:py-12"
      onSubmit={handleSubmit}
    >
      <div className="mb-8 flex items-center justify-between gap-6 border-b border-[var(--color-brand-stone)]/10 pb-6">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-stone)]">
            Tell me where you are
          </p>
          <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-[var(--color-brand-stone)]">
            A few honest lines are enough. This opens an email draft addressed to Harish.
          </p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {(["name", "email", "message"] as const).map((field) => (
            <span
              key={field}
              className={`h-1.5 w-12 rounded-full transition-colors duration-300 ${
                formData[field].trim()
                  ? "bg-[var(--color-brand-amber)]"
                  : "bg-[var(--color-brand-stone)]/15"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-12">
      <div className="relative group">
        <label htmlFor="name" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-stone)] transition-colors group-focus-within:text-[var(--color-brand-charcoal)]">
          Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            required
            className="relative z-10 w-full rounded-none border-b border-[var(--color-brand-stone)]/20 bg-transparent py-3 font-serif text-[2rem] text-[var(--color-brand-carbon)] transition-colors duration-700 focus:border-[var(--color-brand-charcoal)] focus:outline-none md:text-[2.15rem]"
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-[var(--color-brand-charcoal)]"
            initial={false}
            animate={{
              scaleX: getFieldProgress("name") === "empty" ? 0 : 1,
              opacity: getFieldProgress("name") === "empty" ? 0 : 1,
            }}
            transition={{ duration: 0.35, ease: EASE_SOFT }}
            style={{ width: "100%", originX: 0 }}
          />
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="email" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-stone)] transition-colors group-focus-within:text-[var(--color-brand-charcoal)]">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            required
            className="relative z-10 w-full rounded-none border-b border-[var(--color-brand-stone)]/20 bg-transparent py-3 font-serif text-[2rem] text-[var(--color-brand-carbon)] transition-colors duration-700 focus:border-[var(--color-brand-charcoal)] focus:outline-none md:text-[2.15rem]"
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-[var(--color-brand-charcoal)]"
            initial={false}
            animate={{
              scaleX: getFieldProgress("email") === "empty" ? 0 : 1,
              opacity: getFieldProgress("email") === "empty" ? 0 : 1,
            }}
            transition={{ duration: 0.35, ease: EASE_SOFT }}
            style={{ width: "100%", originX: 0 }}
          />
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="message" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-stone)] transition-colors group-focus-within:text-[var(--color-brand-charcoal)]">
          What are you navigating right now?
        </label>
        <div className="relative overflow-hidden">
          <motion.textarea
            id="message"
            rows={messageRows}
            value={formData.message}
            onChange={handleInputChange}
            onFocus={() => {
              setFocusedField("message");
              setMessageRows(6);
            }}
            onBlur={() => {
              setFocusedField(null);
              setMessageRows(4);
            }}
            required
            className="relative z-10 w-full resize-none rounded-none border-b border-[var(--color-brand-stone)]/20 bg-transparent py-3 font-serif text-[1.85rem] leading-relaxed text-[var(--color-brand-carbon)] transition-colors duration-700 focus:border-[var(--color-brand-charcoal)] focus:outline-none md:text-[2rem]"
            animate={{ height: "auto" }}
            transition={{ duration: 0.4, ease: EASE_SOFT }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-[var(--color-brand-charcoal)]"
            initial={false}
            animate={{
              scaleX: getFieldProgress("message") === "empty" ? 0 : 1,
              opacity: getFieldProgress("message") === "empty" ? 0 : 1,
            }}
            transition={{ duration: 0.35, ease: EASE_SOFT }}
            style={{ width: "100%", originX: 0 }}
          />
        </div>
      </div>
      </div>

      <div className="flex flex-col items-center pt-12">
        <MagneticCTA magneticPull={0.4} type="submit" className="w-[280px]">
          Begin a Conversation
        </MagneticCTA>
        <p className="mt-8 text-center font-sans text-[11px] tracking-wide text-[var(--color-brand-stone)]">
          This opens an email draft to Harish with your details already filled in.
        </p>
        <motion.p
          initial={false}
          animate={{
            opacity:
              formData.name.trim() && formData.email.trim() && formData.message.trim() ? 1 : 0.45,
          }}
          transition={{ duration: reducedMotion ? 0.2 : 0.4 }}
          className="mt-4 text-center font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--color-brand-amber)]"
        >
          Real conversation. No pressure.
        </motion.p>
      </div>
    </motion.form>
  );
}
