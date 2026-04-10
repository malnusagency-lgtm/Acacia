"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import TextReveal from "@/components/ui/TextReveal";

export default function ServicesHero() {
  return (
    <ParallaxSection
      backgroundImage="/images/services_hero.png"
      parallaxStrength={150}
      minHeight="min-h-[70vh]"
      priority={true}
      className="pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-glow rounded-full shadow-[0_0_10px_var(--tertiary)]" />
            <span className="text-glow font-sans tracking-[0.15em] text-xs uppercase font-medium">
              Professional Cleaning Solutions
            </span>
          </div>
        </ScrollReveal>
        
        <TextReveal className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] tracking-tighter mb-8">
          Our Services
        </TextReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
            From homes to offices, we deliver thorough, eco-friendly cleaning tailored to Nairobi&apos;s needs.
          </p>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
}
