"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const team = [
  { name: "Amina K.", role: "Operations Lead", initial: "A" },
  { name: "Brian M.", role: "Head of Training", initial: "B" },
  { name: "Faith W.", role: "Client Relations", initial: "F" },
];

export default function TeamSection() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Leadership</h2>
          <p className="text-on-surface-variant mb-16 max-w-md mx-auto">
            Trained professionals dedicated to delivering Nairobi&apos;s highest cleaning standards.
          </p>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="card-elevated p-8 rounded-2xl">
                <div className="w-20 h-20 rounded-full bg-primary-container mx-auto mb-5 flex items-center justify-center">
                  <span className="text-primary font-heading font-black text-2xl">{member.initial}</span>
                </div>
                <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                <p className="text-xs text-accent uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
