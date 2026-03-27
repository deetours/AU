"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ComponentType, ReactNode } from "react";

type LenisRootProps = {
  children: ReactNode;
  root?: boolean;
  options?: {
    lerp?: number;
    duration?: number;
    smoothWheel?: boolean;
  };
};

const LenisRoot = ReactLenis as unknown as ComponentType<LenisRootProps>;

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LenisRoot root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children}
    </LenisRoot>
  );
}
