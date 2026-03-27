interface SceneDividerProps {
  tone?: "light" | "dark";
  className?: string;
}

export default function SceneDivider({
  tone = "light",
  className = "",
}: SceneDividerProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
        tone === "dark"
          ? "bg-gradient-to-r from-transparent via-white/14 to-transparent"
          : "bg-gradient-to-r from-transparent via-[rgba(107,110,115,0.14)] to-transparent"
      } ${className}`}
      aria-hidden="true"
    />
  );
}
