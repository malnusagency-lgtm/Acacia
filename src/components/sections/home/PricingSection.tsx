"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Studio / 1BR",
    price: { monthly: "3,500", oneTime: "4,500" },
    features: [
      { text: "Full dust & mop", included: true },
      { text: "Kitchen cleaning", included: true },
      { text: "Bathroom sanitization", included: true },
      { text: "Window cleaning", included: true },
      { text: "Carpet deep clean", included: false },
      { text: "Fumigation", included: false },
    ],
    popular: false,
    accent: "text-accent",
  },
  {
    name: "2–3 Bedroom",
    price: { monthly: "6,200", oneTime: "8,000" },
    features: [
      { text: "Everything in Studio", included: true },
      { text: "Up to 3 bedrooms", included: true },
      { text: "Kitchen degreasing", included: true },
      { text: "Floor buffing & polish", included: true },
      { text: "Balcony cleaning", included: true },
      { text: "Fumigation (add-on)", included: true },
    ],
    popular: true,
    accent: "text-accent",
  },
  {
    name: "4+ Bedroom / Villa",
    price: { monthly: "12,000", oneTime: "15,000" },
    features: [
      { text: "Everything in 2–3BR", included: true },
      { text: "Post-construction grade", included: true },
      { text: "Heavy stain removal", included: true },
      { text: "Carpet extraction", included: true },
      { text: "Full fumigation included", included: true },
      { text: "Dedicated team lead", included: true },
    ],
    popular: false,
    accent: "text-glow",
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "oneTime">("monthly");

  return (
    <section className="py-24 lg:py-32 bg-surface-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-sans tracking-[0.2em] uppercase text-xs mb-4 block font-medium">
                Transparent Pricing
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Our Packages
              </h2>
            </div>
            <div className="bg-surface-mid p-1 rounded-full flex gap-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full font-heading font-bold text-sm transition-all ${
                  billingCycle === "monthly"
                    ? "bg-accent text-on-accent"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("oneTime")}
                className={`px-5 py-2 rounded-full font-heading font-bold text-sm transition-all ${
                  billingCycle === "oneTime"
                    ? "bg-accent text-on-accent"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                One-Time
              </button>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col h-full transition-all ${
                  plan.popular
                    ? "bg-primary-container dark:bg-primary-container border-2 border-primary/30 shadow-[0_0_40px_var(--glow-primary)] z-10 scale-[1.02]"
                    : "glass"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-on-accent px-3 py-1 rounded-full text-[10px] font-black tracking-tight uppercase">
                    Most Popular
                  </div>
                )}
                <h4 className="text-xl font-heading font-bold mb-2">
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-4xl font-heading font-black ${plan.accent}`}>
                    KES {plan.price[billingCycle]}
                  </span>
                  <span className="text-on-surface-variant text-sm">
                    /{billingCycle === "monthly" ? "month" : "session"}
                  </span>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-3 text-sm ${
                        feature.included ? "" : "opacity-40"
                      }`}
                    >
                      {feature.included ? (
                        <Check size={16} className="text-primary shrink-0" />
                      ) : (
                        <X size={16} className="shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className={`block w-full py-4 rounded-xl font-heading font-bold text-center transition-all ${
                    plan.popular
                      ? "bg-accent text-on-accent glow-accent hover:brightness-110"
                      : "border border-outline-variant text-on-surface hover:bg-surface-variant/30"
                  }`}
                >
                  {plan.popular ? "Book Now" : "Select Plan"}
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-on-surface-variant text-sm mt-10">
            All prices in KES. Monthly plans include one visit per week. Need custom pricing?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Get a free quote
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
