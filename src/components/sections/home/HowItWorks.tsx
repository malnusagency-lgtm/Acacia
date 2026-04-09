"use client";

import { Monitor, UserCheck, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: Monitor,
    number: "01",
    title: "Book Online",
    description:
      "Pick your service, choose a date and time, and book in under 2 minutes via our website or WhatsApp.",
    color: "text-accent",
    border: "border-accent/30",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "We Show Up",
    description:
      "Our vetted, uniformed team arrives on time with all equipment and eco-friendly cleaning products.",
    color: "text-glow",
    border: "border-glow/30",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Enjoy the Clean",
    description:
      "Sit back and enjoy a spotless, fresh-smelling space. Not happy? We'll come back and redo it — free.",
    color: "text-primary",
    border: "border-primary/30",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Three Simple Steps
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connector Line (desktop) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent z-0" />

          {steps.map((step) => (
            <StaggerItem
              key={step.number}
              className="relative z-10 text-center flex flex-col items-center"
            >
              <div
                className={`w-24 h-24 rounded-full bg-surface-highest dark:bg-surface-highest border-4 border-background flex items-center justify-center mb-8 shadow-lg group hover:${step.border} transition-all duration-500`}
              >
                <step.icon size={36} className={step.color} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">
                <span className="text-on-surface-variant mr-1">{step.number}.</span>{" "}
                {step.title}
              </h3>
              <p className="text-on-surface-variant max-w-xs leading-relaxed">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
