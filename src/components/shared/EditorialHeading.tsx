import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface EditorialHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

// EMOTIONAL GOAL: Commands the room with precise truth.
export default function EditorialHeading({
  children,
  as: Component = "h2",
  className,
}: EditorialHeadingProps) {
  return (
    <Component
      className={twMerge(
        clsx(
          "font-serif leading-tight tracking-tight",
          className
        )
      )}
    >
      {children}
    </Component>
  );
}
