"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ComparisonSlider from "@/components/ui/ComparisonSlider";

export default function TransformationSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
                <span className="text-accent text-[10px] font-bold uppercase tracking-wider">The Transformation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-8">
                See the <span className="text-primary italic">Glacier group</span> Difference.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 font-light">
                We don&apos;t just clean; we restore. Our deep cleaning and fumigation services bring back the original brilliance of your surfaces while ensuring a safe, pest-free environment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-heading font-bold text-accent mb-2">99%</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Bacteria Removed</p>
                </div>
                <div>
                  <h4 className="text-3xl font-heading font-bold text-accent mb-2">0</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Harsh Odors</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.3}>
            <ComparisonSlider
              beforeImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXbZkREw68B_sX-I7d2tYjJz0yR2N8m1m0vW5r6m7a9L7n2m1m0vW5r6m7a9L7n2m1m0vW5r6m7a9L7n2m1m0vW5r6m7a9L7n2m1m0vW5r6m7a9L7n2m1m0vW5r" // Placeholder
              afterImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBDzOqVgZkeTYyrR7LFDz8uLQ1KD5iOTiUSOCf0CfQtsWAx6lfvohsloITgEyERJ3glKieyYdC55EGchM4wxEnWFi06Wy8Gzi2F3ehEx9zEKZmRTzIgcgtzlBX9nCjLZsHjQHERNrLK4MiKYjYezUtA7ExDp2xMW7-LbkKjnuE9QGpJ-TtvmijF4Lohf1tdtFLuDSoZSOsb1tDOF9oakvNFZmWMGmCj4XLHXF2XBtT9XYDaej5acXQgAP3Sd2fpMI_NB1llKK2Vbe0" 
            />
            <p className="text-center mt-6 text-on-surface-variant/60 text-xs italic">
              Slide to compare our Deep Cleaning results
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
