import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const serviceLinks = [
  { label: "Home Cleaning", href: "/services#residential" },
  { label: "Office Cleaning", href: "/services#commercial" },
  { label: "Fumigation", href: "/services#fumigation" },
  { label: "Move-In/Out", href: "/services#moveinout" },
  { label: "Post-Construction", href: "/services#postconstruction" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Pricing", href: "/booking" },
  { label: "Careers", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-lowest w-full pt-20 pb-24 md:pb-8 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-heading font-black tracking-tighter text-primary">
                GLACIER GROUP
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Nairobi&apos;s most trusted cleaning and fumigation service. Premium results, eco-friendly products, reliable teams.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-on-surface hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-on-surface font-heading font-bold text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant text-sm hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-on-surface font-heading font-bold text-sm uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant text-sm hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-on-surface font-heading font-bold text-sm uppercase tracking-widest mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-on-surface text-sm font-medium">+254 700 000 000</p>
                  <p className="text-on-surface-variant text-xs">Mon-Sat, 7AM - 7PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <p className="text-on-surface text-sm">hello@glaciergroup.co.ke</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <p className="text-on-surface-variant text-sm">
                  Westlands, Nairobi<br />Kenya
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-xs">
            © {new Date().getFullYear()} Glacier group. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-on-surface-variant">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
