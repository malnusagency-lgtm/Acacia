"use client";

import { Shield, Leaf, Droplets } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ResidentialSection() {
  return (
    <section id="residential" className="py-24 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-glow-container/30 dark:bg-glow-container/30 border border-glow/20">
                <span className="w-1.5 h-1.5 rounded-full bg-glow mr-2" />
                <span className="text-glow text-[10px] font-bold uppercase tracking-wider">Home Cleaning</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight">
                Home Deep<br />Cleaning
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-on-surface-variant leading-relaxed">
                A thorough, top-to-bottom deep clean for your home. We handle every room — kitchens, bathrooms, bedrooms, living areas — using eco-friendly products that are safe for children and pets.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-surface-high flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Vetted & Insured Teams</h4>
                    <p className="text-xs text-on-surface-variant">Every cleaner is background-checked and fully insured.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-surface-high flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Eco-Friendly Products</h4>
                    <p className="text-xs text-on-surface-variant">Non-toxic, biodegradable cleaning agents safe for your family.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-surface-high flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    <Droplets size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Complete Sanitization</h4>
                    <p className="text-xs text-on-surface-variant">Kitchen degreasing, bathroom disinfection, floor polishing included.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <ScrollReveal delay={0.2} className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-mid">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXdkGIssw6fVY-R7YgU62U8V4Ra-fnEqk-LWgjor2mZsrZ50N33kMDHIZIWk0Gs7ERZmt9bPZpH-70DYHmXRUZKjKgwUVNKIkYP9Uv-S1vhxJnz7YGmRjGQeFsXhyTQgf98cKsbYsQSjrqio_0ya7CL6Ls4iZYsKk9iYgafrqy4cqmI1-8p3h-Ti8i3WX0VoFUT_sFJzfbMDfHPbkTId3hTva3D_r2YyUL57qeTVsruW_3Pow7n1YId91axD3uX8PjdHWXn21RVs8')",
                }}
              />
            </ScrollReveal>
            <div className="space-y-4 flex flex-col">
              <ScrollReveal delay={0.3} className="flex-1 rounded-2xl overflow-hidden bg-surface-mid">
                <div
                  className="w-full h-full min-h-[200px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXD9LRzS_xNys9Fd5pBuRdVsROCNUD2fuADi_L9KKQIROPtLSKhP0ltagGgk3Mdbd6m7L4eWL2GwtPujGS9aZgDrXCt1kbAnHMR9ReC03mwkLB3z4HW5lQenLmwKVCWrD5_-oQmFVPSYX8hn8FozTsEYNdyLD0O-K6BAHtFW56z_Ec2Zks6IpzmaomD_QDDrfvD9swSQHmJ6U5RiPYrtk9Ry3nqV9SFqWtnljOQN2iPBABOnHLXXxN28R0Qu8-icWSuVjtK0AQ80M')",
                  }}
                />
              </ScrollReveal>
              <ScrollReveal delay={0.4} className="p-6 bg-surface-high rounded-2xl border border-outline-variant/10">
                <h3 className="font-heading text-lg font-bold mb-3">What&apos;s Included</h3>
                <ul className="text-xs text-on-surface-variant space-y-2">
                  <li className="flex items-start gap-2"><span className="text-accent font-bold">/</span> All rooms dusted, mopped & sanitized</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold">/</span> Kitchen deep clean & degreasing</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold">/</span> Bathroom disinfection & descaling</li>
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
