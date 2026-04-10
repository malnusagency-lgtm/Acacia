"use client";

import Link from "next/link";
import { Home, Building2, Bug, Truck, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: Home,
    title: "Home Deep Clean",
    description:
      "Top-to-bottom cleaning for your home. We handle kitchens, bathrooms, bedrooms, and living areas with eco-friendly products safe for kids and pets.",
    href: "/services#residential",
    featured: true,
    color: "text-accent",
  },
  {
    icon: Bug,
    title: "Fumigation",
    description:
      "Non-toxic pest control using eco-friendly products. Safe for your family, effective against cockroaches, bedbugs, ants, and more.",
    href: "/services#fumigation",
    featured: false,
    color: "text-glow",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description:
      "Keep your workspace spotless and your team productive. Daily, weekly, or monthly corporate cleaning packages.",
    href: "/services#commercial",
    featured: false,
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out",
    description:
      "Moving into a new place? We'll make sure it's spotless before you settle in. Landlord-approved deep cleaning included.",
    href: "/services#moveinout",
    featured: true,
    color: "text-accent",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-20">
            <span className="text-glow font-sans tracking-[0.2em] uppercase text-xs mb-4 block font-medium">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold max-w-xl leading-tight">
              Our Cleaning Services
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <StaggerItem
              key={service.title}
              className={service.featured && i === 0 ? "md:col-span-2" : ""}
            >
              <Link
                href={service.href}
                className="group block h-full card-elevated p-6 md:p-8 lg:p-10 rounded-2xl"
              >
                <div className={`${service.color} mb-6`}>
                  <service.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
