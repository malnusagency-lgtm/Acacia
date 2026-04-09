"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EcoSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6">
              Eco-Friendly<br /><span className="text-accent">Products</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
              We believe effective cleaning shouldn&apos;t compromise your health or the environment. All our products are biodegradable, non-toxic, and certified safe for households with children and pets.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-heading font-black text-accent mb-1">0%</p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">Harsh Chemicals</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-black text-primary mb-1">100%</p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">Biodegradable</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXdkGIssw6fVY-R7YgU62U8V4Ra-fnEqk-LWgjor2mZsrZ50N33kMDHIZIWk0Gs7ERZmt9bPZpH-70DYHmXRUZKjKgwUVNKIkYP9Uv-S1vhxJnz7YGmRjGQeFsXhyTQgf98cKsbYsQSjrqio_0ya7CL6Ls4iZYsKk9iYgafrqy4cqmI1-8p3h-Ti8i3WX0VoFUT_sFJzfbMDfHPbkTId3hTva3D_r2YyUL57qeTVsruW_3Pow7n1YId91axD3uX8PjdHWXn21RVs8')" }} />
              <div className="aspect-square rounded-2xl bg-cover bg-center mt-8" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXD9LRzS_xNys9Fd5pBuRdVsROCNUD2fuADi_L9KKQIROPtLSKhP0ltagGgk3Mdbd6m7L4eWL2GwtPujGS9aZgDrXCt1kbAnHMR9ReC03mwkLB3z4HW5lQenLmwKVCWrD5_-oQmFVPSYX8hn8FozTsEYNdyLD0O-K6BAHtFW56z_Ec2Zks6IpzmaomD_QDDrfvD9swSQHmJ6U5RiPYrtk9Ry3nqV9SFqWtnljOQN2iPBABOnHLXXxN28R0Qu8-icWSuVjtK0AQ80M')" }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
