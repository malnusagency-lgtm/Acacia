"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import TextReveal from "@/components/ui/TextReveal";

export default function AboutHero() {
  return (
    <ParallaxSection
      backgroundImage="/images/about_hero.png"
      parallaxStrength={150}
      minHeight="min-h-[70vh]"
      className="pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <span className="text-glow font-sans tracking-[0.15em] text-xs uppercase font-medium block mb-4">
            About Glacier group
          </span>
        </ScrollReveal>

        <TextReveal className="text-5xl md:text-7xl font-heading font-bold leading-[0.9] tracking-tighter mb-8">
          The Story Behind The Clean.
        </TextReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-lg text-on-surface-variant max-w-xl font-light leading-relaxed">
            Born in Nairobi, built for Nairobi. Glacier group was founded with a simple mission: to bring world-class cleaning standards to every home and office in the city.
          </p>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
}
