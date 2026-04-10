"use client";
import { Target, Heart, Recycle, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const values = [
  { icon: Target, title: "Reliability", desc: "We show up on time, every time. Your schedule is our priority." },
  { icon: Heart, title: "Care", desc: "We treat every home like our own — with attention, respect, and thoroughness." },
  { icon: Recycle, title: "Eco-Friendly", desc: "100% biodegradable products. Zero harm to your family or the environment." },
  { icon: Users, title: "Community", desc: "We employ locally, train rigorously, and give back to the Nairobi community." },
];

export default function StorySection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
              Glacier group was founded in 2020 by a team of Nairobi professionals who were frustrated with the inconsistency of cleaning services in the city. We set out to build a company that you can actually rely on — one that shows up on time, uses safe products, and delivers results every single time.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Today, we serve over 500 homes and offices across Nairobi. Every member of our team is vetted, trained, and equipped with professional-grade tools and eco-friendly cleaning products.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="p-6 glass rounded-2xl">
                <p className="text-4xl font-heading font-black text-accent mb-2">500+</p>
                <p className="text-sm text-on-surface-variant">Happy Clients</p>
              </div>
              <div className="p-6 glass rounded-2xl">
                <p className="text-4xl font-heading font-black text-glow mb-2">50+</p>
                <p className="text-sm text-on-surface-variant">Team Members</p>
              </div>
              <div className="p-6 glass rounded-2xl">
                <p className="text-4xl font-heading font-black text-primary mb-2">10K+</p>
                <p className="text-sm text-on-surface-variant">Cleans Completed</p>
              </div>
              <div className="p-6 glass rounded-2xl">
                <p className="text-4xl font-heading font-black text-accent mb-2">4.9★</p>
                <p className="text-sm text-on-surface-variant">Google Rating</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Values</h2>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="card-elevated p-8 rounded-2xl text-center h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
