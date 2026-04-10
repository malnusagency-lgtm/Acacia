"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  overlayOpacity?: number;
  parallaxStrength?: number;
  className?: string;
  minHeight?: string;
}

export default function ParallaxSection({
  children,
  backgroundImage,
  overlayOpacity = 0.5,
  parallaxStrength = 150,
  className = "",
  minHeight = "min-h-screen",
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxStrength, parallaxStrength]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]); // Cinematic scale-in
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${minHeight} flex items-center ${className}`}
    >
      {/* Background with Parallax and Zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: springY, scale: springScale }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            opacity: 1, // Higher visibility as requested
          }}
        />
        {/* Dynamic Overlays */}
        <motion.div
            className="absolute inset-0 bg-background/20 dark:bg-background/40 backdrop-blur-[1px]"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0.8]) }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/10" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full"
        style={{ opacity }}
      >
        {children}
      </motion.div>
    </section>
  );
}
