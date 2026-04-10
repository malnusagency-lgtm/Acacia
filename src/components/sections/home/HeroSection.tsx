"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import TextReveal from "@/components/ui/TextReveal";

export default function HeroSection() {
  return (
    <ParallaxSection
      backgroundImage="/images/home_hero.png"
      parallaxStrength={200}
      className="pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full pb-12 lg:pb-0">
        {/* Left — Copy */}
        <div className="max-w-2xl text-center lg:text-left">
          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="w-2 h-2 bg-glow rounded-full shadow-[0_0_10px_var(--tertiary)]" />
              <span className="text-glow font-sans tracking-[0.12em] md:tracking-[0.15em] text-[10px] md:text-xs uppercase font-medium">
                Trusted by 500+ Nairobi Homes
              </span>
            </div>
          </ScrollReveal>

          <TextReveal className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] lg:leading-[0.9] tracking-tighter mb-8 break-words">
            Premium Cleaning & Fumigation in Nairobi
          </TextReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-base md:text-lg lg:text-xl text-on-surface-variant mb-10 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              Reliable. Eco-Friendly. On-Demand. We treat your space
              with care, precision, and products that are safe for your
              family and the environment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.7} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full px-4 sm:px-0">
            <MagneticWrapper>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-accent text-on-accent px-8 py-4 rounded-full font-heading font-bold text-lg glow-accent transition-all hover:scale-105 active:scale-95"
              >
                Book a Service
                <ArrowRight size={20} />
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-surface-highest dark:bg-surface-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-surface-high transition-all"
              >
                Get a Free Quote
              </Link>
            </MagneticWrapper>
          </ScrollReveal>
        </div>

        {/* Right — Quick Estimate Card */}
        <ScrollReveal direction="right" delay={0.6}>
          <div className="glass p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto border border-outline-variant/10">
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <Sparkles size={22} className="text-accent" />
              Instant Estimate
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">
                  Service Type
                </label>
                <select className="w-full bg-surface-lowest dark:bg-surface-lowest border border-outline-variant/20 rounded-xl text-on-surface focus:ring-2 focus:ring-accent p-3 text-base transition-all">
                  <option>Home Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Fumigation</option>
                  <option>Move-In/Out Cleaning</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">
                    Bedrooms
                  </label>
                  <select className="w-full bg-surface-lowest dark:bg-surface-lowest border border-outline-variant/20 rounded-xl text-on-surface focus:ring-2 focus:ring-accent p-3 text-base transition-all">
                    <option>Studio / 1BR</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>4+ Bedrooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">
                    Frequency
                  </label>
                  <select className="w-full bg-surface-lowest dark:bg-surface-lowest border border-outline-variant/20 rounded-xl text-on-surface focus:ring-2 focus:ring-accent p-3 text-base transition-all">
                    <option>One-time</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                <span className="text-on-surface-variant text-sm">Estimated Price</span>
                <span className="text-2xl font-heading font-bold text-accent">
                  KES 4,500
                </span>
              </div>
              <MagneticWrapper className="w-full">
                <button
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-heading font-bold text-base hover:brightness-110 transition-all shadow-lg active:scale-[0.98]"
                >
                  Continue Booking
                </button>
              </MagneticWrapper>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
}
