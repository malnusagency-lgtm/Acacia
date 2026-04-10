"use client";

import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    text: "I've never seen my Westlands office so clean. Glacier group's team was professional, on time, and left the place smelling amazing. We now have them on a weekly contract.",
    name: "David O.",
    role: "Tech Executive, Westlands",
    rating: 5,
  },
  {
    text: "Their move-in cleaning was incredible. Every corner of our new Kileleshwa apartment felt brand new and safe for the baby. Highly recommend!",
    name: "Sarah M.",
    role: "Interior Designer, Kileleshwa",
    rating: 5,
  },
  {
    text: "Fumigation usually smells terrible, but Glacier group used eco-friendly products that left no harsh odor. The cockroaches haven't come back in 6 months!",
    name: "James K.",
    role: "Homeowner, Karen",
    rating: 5,
  },
  {
    text: "We switched from our previous cleaning company to Glacier group and the difference is night and day. The team is thorough, honest, and very reliable.",
    name: "Grace W.",
    role: "Property Manager, Kilimani",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-heading font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-on-surface-variant mb-16 max-w-md mx-auto">
            Trusted by hundreds of homes and offices across Nairobi.
          </p>
        </ScrollReveal>

        {/* Outer overflow container for physics calculations */}
        <motion.div className="cursor-grab active:cursor-grabbing overflow-hidden pb-8 -mx-6 px-6">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }} // Note: in sophisticated production, left constraint is mapped to scrollWidth dynamcally. -1000 is safe padding fallback.
            className="flex gap-6 w-max"
          >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="min-w-[85vw] sm:min-w-[340px] md:min-w-[380px]"
            >
              <div className="glass p-8 rounded-2xl h-full flex flex-col">
                <div className="flex gap-1 text-accent mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg mb-8 font-light leading-relaxed italic flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="text-primary font-heading font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-on-surface-variant">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
