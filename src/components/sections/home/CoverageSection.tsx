"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const locations = [
  "Westlands",
  "Kilimani",
  "Kileleshwa",
  "Lavington",
  "Muthaiga",
  "Karen",
  "Langata",
  "South B / C",
  "Parklands",
  "Gigiri",
];

export default function CoverageSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Real Google Map Embed */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-outline-variant/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127878.50294711696!2d36.76822079089761!3d-1.303191143891461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1712740000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="max-w-full"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-primary/5 dark:bg-primary/5 mix-blend-overlay" />
            </div>
          </ScrollReveal>

          {/* Coverage Info */}
          <ScrollReveal direction="right">
            <span className="text-accent font-sans tracking-[0.2em] uppercase text-xs mb-4 block font-medium">
              We Cover All of Nairobi
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Same-Day Service Across Nairobi
            </h2>
            <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
              Our teams are strategically based across the city for fast,
              reliable, same-day deployment. We serve both residential
              and commercial properties in all major neighborhoods.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {locations.map((loc) => (
                <div key={loc} className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-primary" />
                  <span className="font-heading font-semibold text-sm">
                    {loc}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
