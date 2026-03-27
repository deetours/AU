import { CSSProperties, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionShellProps {
  children: ReactNode;
  variant?: "bone" | "charcoal" | "fog";
  padding?: "huge" | "comfortable" | "normal" | "none";
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export default function SectionShell({
  children,
  variant = "bone",
  padding = "normal",
  className,
  id,
  style,
}: SectionShellProps) {
  // EMOTIONAL GOAL: Creates the boundaries and breathing room for a thought.
  return (
    <section
      id={id}
      style={style}
      className={cn(
        "scene-shell w-full relative overflow-hidden transition-colors duration-700",
        {
          "bg-[var(--color-brand-bone)] text-[var(--color-brand-carbon)]": variant === "bone",
          "bg-[var(--color-brand-charcoal)] text-[var(--color-brand-bone)]": variant === "charcoal",
          "bg-[var(--color-brand-fog)] text-[var(--color-brand-carbon)]": variant === "fog",
          "py-16 md:py-32": padding === "normal",
          "py-20 md:py-40": padding === "comfortable",
          "py-32 md:py-52": padding === "huge",
          "py-0": padding === "none",
        },
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {children}
      </div>
    </section>
  );
}
