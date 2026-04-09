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
          {/* Map Placeholder */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-outline-variant/20">
              <div
                className="w-full h-full bg-cover bg-center grayscale dark:grayscale contrast-110 dark:contrast-125 opacity-60 dark:opacity-50"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWM_6CxQpiwx-mCMn-mndk3xc9_77K7Nlpjwzg9_Iy99gKPLMDGnHqvWzyHvwJwl068eUz1aq6WWPA3ZbCdyT64QREf6tW4JgDDAgc9TWmrwvSWnF-tbCPekyqAoDz38vU9Kb58Iu_WXcmybE9Knp7gs7VtuQ-FmdVYW_vre2NpBRteRDVZsOmlZv4dC7WqUFsg_LiVdOLiJVRjWn_NQZrBgHRNspoGB8a6G4s9of1VAQXt8mtN0nHFthh1ZpeOh_E7CI5fT8rvek')",
                }}
              />
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5 mix-blend-overlay" />
              {/* Animated Pins */}
              <div className="absolute top-1/4 left-1/3">
                <div className="w-3 h-3 bg-accent rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-accent rounded-full relative shadow-[0_0_12px_var(--secondary-fixed)]" />
              </div>
              <div className="absolute bottom-1/3 right-1/2">
                <div className="w-3 h-3 bg-glow rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-glow rounded-full relative shadow-[0_0_12px_var(--tertiary)]" />
              </div>
              <div className="absolute top-1/2 right-1/4">
                <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-primary rounded-full relative shadow-[0_0_12px_var(--primary)]" />
              </div>
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
