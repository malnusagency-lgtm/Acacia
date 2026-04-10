"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        touchMultiplier: 1.5,
        smoothWheel: true,
        smoothTouch: true,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
