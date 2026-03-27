import { CSSProperties, ReactNode } from "react";
import SectionShell from "@/components/shared/SectionShell";
import AmbientLayer from "@/components/shared/AmbientLayer";
import SceneDivider from "@/components/shared/SceneDivider";

interface SceneFrameProps {
  children: ReactNode;
  variant?: "bone" | "charcoal" | "fog";
  padding?: "huge" | "comfortable" | "normal" | "none";
  ambientTone?: "warm" | "deep" | "mist";
  ambientIntensity?: "soft" | "medium";
  dividerTop?: boolean;
  dividerBottom?: boolean;
  className?: string;
  innerClassName?: string;
  id?: string;
  style?: CSSProperties;
}

export default function SceneFrame({
  children,
  variant = "bone",
  padding = "normal",
  ambientTone = "warm",
  ambientIntensity = "soft",
  dividerTop = false,
  dividerBottom = false,
  className,
  innerClassName,
  id,
  style,
}: SceneFrameProps) {
  return (
    <SectionShell
      id={id}
      variant={variant}
      padding={padding}
      className={className}
      style={style}
    >
      <AmbientLayer tone={ambientTone} intensity={ambientIntensity} />
      {dividerTop ? <SceneDivider tone={variant === "charcoal" ? "dark" : "light"} /> : null}
      {dividerBottom ? (
        <SceneDivider
          tone={variant === "charcoal" ? "dark" : "light"}
          className="top-auto bottom-0"
        />
      ) : null}
      <div className={`relative z-10 ${innerClassName ?? ""}`}>{children}</div>
    </SectionShell>
  );
}
