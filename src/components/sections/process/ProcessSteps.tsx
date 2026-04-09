"use client";
import { Search, Sparkles, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  { icon: Search, phase: "Phase A", title: "Assessment", desc: "Our team leader inspects every room, identifies priority areas, stains, and specific client requests before any cleaning begins.", color: "text-glow" },
  { icon: Sparkles, phase: "Phase B", title: "Deep Cleaning", desc: "Using professional equipment and eco-friendly products, we systematically clean every surface — floors, counters, fixtures, windows, and appliances.", color: "text-accent" },
  { icon: CheckCircle, phase: "Phase C", title: "Quality Check", desc: "The team leader does a final walkthrough to ensure every area meets our standards. You inspect the work and confirm satisfaction before we leave.", color: "text-primary" },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32 bg-surface-low">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Our Cleaning Lifecycle</h2>
        </ScrollReveal>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.15}>
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-surface-highest dark:bg-surface-highest flex items-center justify-center">
                    <step.icon size={22} className={step.color} />
                  </div>
                  {i < steps.length - 1 && <div className="w-[2px] h-16 bg-outline-variant/30 mt-2" />}
                </div>
                <div className="pb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest ${step.color} block mb-1`}>{step.phase}</span>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
