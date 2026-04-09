"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Lock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const services = [
  { id: "deep-clean", name: "Home Deep Clean", desc: "Complete home cleaning with eco-friendly products.", price: 4500 },
  { id: "fumigation", name: "Fumigation", desc: "Eco-friendly pest control for your home or office.", price: 6000 },
  { id: "office", name: "Office Cleaning", desc: "Professional cleaning for workspaces of all sizes.", price: 8000 },
  { id: "moveinout", name: "Move-In/Out Clean", desc: "Thorough cleaning for property transitions.", price: 7500 },
];

const locations = ["Westlands / Kilimani", "Kileleshwa / Lavington", "Karen / Langata", "South B / South C", "Parklands / Gigiri", "Muthaiga / Runda"];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [frequency, setFrequency] = useState<"once" | "weekly" | "biweekly">("once");

  const basePrice = services.find((s) => s.id === selectedService)?.price || 4500;
  const discount = frequency === "weekly" ? 0.15 : frequency === "biweekly" ? 0.1 : 0;
  const finalPrice = Math.round(basePrice * (1 - discount));

  return (
    <>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left — Form */}
            <div className="lg:col-span-2 space-y-10">
              {/* Step 1 */}
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-accent text-on-accent flex items-center justify-center font-heading font-bold text-sm">01</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Choose a Service</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`text-left p-5 rounded-xl border-2 transition-all ${
                        selectedService === s.id
                          ? "border-accent bg-accent/5"
                          : "border-outline-variant/20 hover:border-outline-variant/40"
                      }`}
                    >
                      <h3 className="font-heading font-bold mb-1">{s.name}</h3>
                      <p className="text-xs text-on-surface-variant">{s.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-3">Frequency</label>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { val: "once" as const, label: "One-time" },
                      { val: "weekly" as const, label: "Weekly (Save 15%)" },
                      { val: "biweekly" as const, label: "Bi-weekly (Save 10%)" },
                    ].map((f) => (
                      <button
                        key={f.val}
                        onClick={() => setFrequency(f.val)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                          frequency === f.val
                            ? "bg-accent text-on-accent"
                            : "bg-surface-mid text-on-surface-variant hover:bg-surface-high"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-accent text-on-accent flex items-center justify-center font-heading font-bold text-sm">02</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Location &amp; Schedule</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Nairobi Area</label>
                    <select className="w-full bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent text-sm">
                      {locations.map((l) => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Preferred Date</label>
                    <input type="date" className="w-full bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent text-sm" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Address</label>
                  <input type="text" placeholder="Apartment name, building, street" className="w-full bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent text-sm" />
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={0.2}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-accent text-on-accent flex items-center justify-center font-heading font-bold text-sm">03</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Your Details</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
                    <input type="text" placeholder="Your name" className="w-full bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Phone / WhatsApp</label>
                    <input type="tel" placeholder="+254 7XX XXX XXX" className="w-full bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent text-sm" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Summary */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="right" delay={0.3}>
                <div className="sticky top-28 glass p-8 rounded-2xl">
                  <h3 className="text-xl font-heading font-bold text-accent mb-6">Booking Summary</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Service</span>
                      <span className="font-bold">{services.find((s) => s.id === selectedService)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Frequency</span>
                      <span className="font-bold capitalize">{frequency === "biweekly" ? "Bi-weekly" : frequency}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-accent">
                        <span>Discount</span>
                        <span className="font-bold">-{Math.round(discount * 100)}%</span>
                      </div>
                    )}
                    <div className="border-t border-outline-variant/20 pt-4">
                      <div className="flex justify-between items-end">
                        <span className="text-on-surface-variant">Total</span>
                        <span className="text-3xl font-heading font-black text-accent">KES {finalPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-1">{frequency === "once" ? "per session" : "per visit"}</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-on-accent py-4 rounded-xl font-heading font-bold text-base mt-6 inline-flex items-center justify-center gap-2 glow-accent"
                  >
                    Confirm Booking <ArrowRight size={18} />
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-on-surface-variant">
                    <Lock size={12} />
                    <span>Pay via M-Pesa after service</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
