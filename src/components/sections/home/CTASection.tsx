"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-primary-container dark:bg-primary-container">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent" />
        <div
          className="w-full h-full bg-cover bg-center opacity-10 dark:opacity-10 grayscale"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXncIK5ZtNnGmYIgCz9z6AVQDmftv3cDgJluHxIOaL8RGP0BEuY1Q-pjyYwFoV-bKmCmxrd7JFXc8YMqEhR0G-PTVcPkMkmiYDBbGDJdQq--2CvmQ_lJiOV6nj4h36JUXkDVLZU6y023o1wK5Wz1F2HF_Qg7Ntwx_hrV4zmBt1N9KPDRyFaQChBHei96f4bbTn1HOTf6CNzVKFiFXRPo134-kbGsSIhCw6uNRUVXoF8LJdI-38pL46YrZS42cC6BTtnpszW4HoPeE')",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Experience Nairobi&apos;s Most{" "}
            <span className="text-accent">Trusted</span> Cleaning Service
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-xl text-primary dark:text-primary mb-12 max-w-2xl mx-auto font-light">
            Professional cleaning, reliable teams, and eco-friendly products.
            Book today and see the difference.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 bg-accent text-on-accent px-12 py-5 rounded-full font-heading font-black text-xl shadow-[0_0_30px_var(--glow-secondary)]"
              >
                Book Your Clean
                <ArrowRight size={22} />
              </Link>
            </motion.div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-foreground dark:text-white font-heading font-bold text-lg hover:gap-3 transition-all"
            >
              Chat on WhatsApp <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
