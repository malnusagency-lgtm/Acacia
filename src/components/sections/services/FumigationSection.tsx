"use client";

import { Leaf, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FumigationSection() {
  return (
    <section id="fumigation" className="py-24 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-surface-low dark:bg-surface-low rounded-[2rem] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--secondary-fixed)_0%,_transparent_70%)]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
                  <span className="text-accent text-[10px] font-bold uppercase tracking-wider">Pest Control</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 leading-tight">
                  Professional Fumigation
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-10">
                  Effective pest elimination using eco-friendly products. We handle cockroaches, bedbugs, ants, termites, mosquitoes, and rodents — without harmful chemicals or lingering odors.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Leaf size={32} className="text-accent" />
                    <h4 className="text-sm font-bold uppercase tracking-wider">Eco-Friendly Products</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Biodegradable compounds safe for children, pets, and the environment. No harsh chemical residues.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <ShieldCheck size={32} className="text-accent" />
                    <h4 className="text-sm font-bold uppercase tracking-wider">Safe Re-entry</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Your space is safe to re-enter within hours, not days. We ensure air quality is optimal before you return.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden border border-outline-variant/10">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDw37RBAS1FX9YWf3ltPvoFmdi6XLCan6onfb56F-uLlgW45bPTLLCuXfUAEvBRQPTrd09aAA-HAPpkvHAc2Q4RnAhIvBg_ck3-yEKdnQTAudK_b7VMyOCdRqB6PFLB6HorDKdotRpxEavG8q6d8vqSyGZ_SQUm4QzZWouR8ArunrtlkhkvXdwhinXX2dMSiIu_Odf4tqSab72FP9Qzs8lWSrDzLCVBmPELFvUsvH0q-CVN4k5-el28reZPm2QrLbOf2-j5A1QjH74')",
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent p-6 rounded-xl shadow-2xl">
                  <p className="text-on-accent font-heading text-3xl font-black">100%</p>
                  <p className="text-on-accent font-sans text-[10px] font-bold uppercase tracking-widest">Pest Elimination</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
