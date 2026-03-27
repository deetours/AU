import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface QuietCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// EMOTIONAL GOAL: Invites without pressuring.
export default function QuietCTA({ href, children, className }: QuietCTAProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        clsx(
          "inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-sm tracking-wide uppercase font-medium",
          "bg-[var(--color-brand-charcoal)] text-[var(--color-brand-bone)]",
          "transition-colors duration-500 ease-out hover:bg-[var(--color-brand-amber)] hover:text-white",
          className
        )
      )}
    >
      {children}
    </Link>
  );
}
