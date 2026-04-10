"use client";

import { Phone, Mail, MapPin, MessageCircle, Clock, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "What areas in Nairobi do you cover?", a: "We cover all major neighborhoods including Westlands, Kilimani, Kileleshwa, Lavington, Karen, Muthaiga, Langata, South B/C, Parklands, and Gigiri. Contact us for areas not listed." },
  { q: "Do you offer same-day service?", a: "Yes! We offer same-day booking for most services. Book before 10 AM for same-day deployment. For fumigation, we recommend at least 24 hours notice." },
  { q: "Are your cleaning products safe for children and pets?", a: "Absolutely. We use 100% biodegradable, non-toxic cleaning products. All our products are certified safe for homes with children and pets." },
  { q: "How do I pay?", a: "We accept M-Pesa, bank transfer, and cash. Payment is made after the service is completed and you're satisfied with the results." },
  { q: "What if I'm not happy with the cleaning?", a: "We have a 100% satisfaction guarantee. If you're not happy, we'll come back and redo the clean for free within 24 hours." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center opacity-20 dark:opacity-25" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOsWesgx61VI8t7EZAgRlflhS1q47SSIogaiTpC4M_ydbSTTCVMMZGjxJ0k3TijZM0smslhWYaw7jHVA05I2nCzEulqGmAwFrwZiIaljxUasgmzAuwC9lgGEDoGaCw93FVY1Jgd2pQhBK2Ef53LTtZqZZ_RWVoW9htPSPSDQs4-judJU1Z7tqw2ETAnlCnBPRlfHO4L6UQWpt4hac3-53Qyko0zfP6Pp5g3-POFHyAWALQfPU1lXpGoX6n7jkKLGxmKTcCUC3Fmow')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-glow font-sans tracking-[0.15em] text-xs uppercase font-medium block mb-4">Get In Touch</span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[0.9] tracking-tighter mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg text-on-surface-variant max-w-lg font-light leading-relaxed">
              Have a question or ready to book? Reach out through any of our channels — we typically respond within 30 minutes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="card-elevated p-8 rounded-2xl text-center h-full">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-5">
                  <FaWhatsapp size={24} className="text-[#25D366]" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-sm text-on-surface-variant mb-4">Fastest response. Chat with us directly for bookings and questions.</p>
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Open WhatsApp <MessageCircle size={16} />
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card-elevated p-8 rounded-2xl text-center h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                <p className="text-sm text-on-surface-variant mb-4">For detailed inquiries, quotes, and corporate partnerships.</p>
                <a href="mailto:hello@glaciergroup.co.ke" className="text-primary font-bold text-sm">hello@glaciergroup.co.ke</a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card-elevated p-8 rounded-2xl text-center h-full">
                <div className="w-14 h-14 rounded-full bg-glow/10 flex items-center justify-center mx-auto mb-5">
                  <Phone size={24} className="text-glow" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Call Us</h3>
                <p className="text-sm text-on-surface-variant mb-4">Speak directly with our team for urgent bookings.</p>
                <a href="tel:+254700000000" className="text-glow font-bold text-sm">+254 700 000 000</a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Inquiry Form + Map */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-outline-variant/20 mb-6">
                <div className="w-full h-full bg-cover bg-center grayscale dark:grayscale contrast-110 dark:contrast-125 opacity-60 dark:opacity-50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWM_6CxQpiwx-mCMn-mndk3xc9_77K7Nlpjwzg9_Iy99gKPLMDGnHqvWzyHvwJwl068eUz1aq6WWPA3ZbCdyT64QREf6tW4JgDDAgc9TWmrwvSWnF-tbCPekyqAoDz38vU9Kb58Iu_WXcmybE9Knp7gs7VtuQ-FmdVYW_vre2NpBRteRDVZsOmlZv4dC7WqUFsg_LiVdOLiJVRjWn_NQZrBgHRNspoGB8a6G4s9of1VAQXt8mtN0nHFthh1ZpeOh_E7CI5fT8rvek')" }} />
              </div>
              <div className="glass p-5 rounded-xl inline-flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="font-heading font-bold text-sm">Current Coverage:</span>
                <span className="text-on-surface-variant text-sm">Westlands · Kilimani · Karen · Gigiri</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="text-3xl font-heading font-bold mb-2">Quick Inquiry</h2>
              <p className="text-on-surface-variant mb-8">Fill out the form and we&apos;ll get back to you within 30 minutes.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Your Name</label>
                  <input type="text" className="w-full bg-surface-lowest dark:bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent outline-none text-sm" placeholder="John Kamau" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Service</label>
                    <select className="w-full bg-surface-lowest dark:bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent text-sm">
                      <option>Home Cleaning</option>
                      <option>Office Cleaning</option>
                      <option>Fumigation</option>
                      <option>Move-In/Out</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Urgency</label>
                    <select className="w-full bg-surface-lowest dark:bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent text-sm">
                      <option>Routine</option>
                      <option>Same Day</option>
                      <option>Emergency</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-on-surface-variant mb-2">Message (Optional)</label>
                  <textarea rows={3} className="w-full bg-surface-lowest dark:bg-surface-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-accent outline-none text-sm resize-none" placeholder="Tell us more about what you need..." />
                </div>
                <button type="submit" className="w-full bg-accent text-on-accent py-4 rounded-xl font-heading font-bold text-base glow-accent transition-all hover:brightness-110">
                  Send Inquiry
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-surface-low">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant text-center mb-12">Everything you need to know about our cleaning services.</p>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="glass rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-heading font-bold text-sm pr-4">{faq.q}</span>
                    <ChevronDown size={18} className={`text-on-surface-variant shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p className="px-5 pb-5 text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
