"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CommercialSection() {
  return (
    <section id="commercial" className="py-24 lg:py-32 bg-surface-low scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden">
                <div
                  className="w-full h-[400px] lg:h-[500px] bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDA4U5ib864-Wr-hzX2B86v6cfovR03M-2j--8j51j331EshvhCuPpZ9VZM_9qMqRmhBvLVuYJRTBp8X-Z1M9SoX_5Y4-Pi9vYbUL2tRG0aLJmlbJmXbiEGISJ0B4krFU23ukm2Ys_WhQrp6WJpe9Z8t6sNsh0hlEI-HqziKgC2fctizDaLb3y8E7Z9RRynhXDcOutFqNirYxNVA7Fnxbe9-ubMiFEvmIMkQ4sM6efOCvlAwsEaI5f90PIsx9NXS-OVt6RWH2u8mFo')",
                  }}
                />
                <div className="absolute bottom-6 right-6 p-5 glass rounded-xl max-w-xs">
                  <p className="text-xs font-sans uppercase tracking-wider text-glow mb-2 font-medium">Professional Equipment</p>
                  <p className="text-sm text-on-surface leading-relaxed">Industrial-grade machines and hospital-grade disinfectants for thorough commercial cleaning.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <ScrollReveal direction="right">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-glow-container/30 border border-glow/20">
                <span className="w-1.5 h-1.5 rounded-full bg-glow mr-2" />
                <span className="text-glow text-[10px] font-bold uppercase tracking-wider">Office & Commercial</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mt-4">
                Office &amp;<br />Commercial Cleaning
              </h2>
              <p className="text-on-surface-variant leading-relaxed mt-4">
                A clean office means a productive team. We provide daily, weekly, or monthly cleaning packages for offices, retail spaces, warehouses, and restaurants across Nairobi.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 w-full py-4 border border-outline-variant hover:border-accent text-on-surface-variant hover:text-accent font-sans text-sm font-bold uppercase tracking-widest transition-all duration-500 rounded-xl text-center"
              >
                Request a Quote
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
