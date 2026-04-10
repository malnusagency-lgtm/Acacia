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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width for accurate sliding
  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".testimonial-card");
      if (firstCard) {
        setCardWidth(firstCard.clientWidth + 24); // Width + Gap
      }
    }

    const handleResize = () => {
      const firstCard = containerRef.current?.querySelector(".testimonial-card");
      if (firstCard) setCardWidth(firstCard.clientWidth + 24);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play interval
  useEffect(() => {
    if (isHovered || isDragging || !cardWidth) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, cardWidth]);

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

        {/* Outer overflow container */}
        <div 
          className="relative overflow-hidden pb-8 -mx-6 px-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ 
                right: 0, 
                left: -(cardWidth * (testimonials.length - 1)) 
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={{ 
              x: isDragging ? undefined : -(currentIndex * cardWidth) 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="testimonial-card w-[calc(100vw-3rem)] sm:w-[340px] md:w-[380px] shrink-0"
            >
              <div className="glass p-8 rounded-2xl h-full flex flex-col">
                <div className="flex gap-1 text-accent mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.div
                      key={j}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: j * 0.5 
                      }}
                    >
                      <Star size={16} fill="currentColor" />
                    </motion.div>
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

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "bg-accent w-6" : "bg-outline-variant"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
