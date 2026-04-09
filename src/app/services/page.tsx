import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ResidentialSection from "@/components/sections/services/ResidentialSection";
import CommercialSection from "@/components/sections/services/CommercialSection";
import FumigationSection from "@/components/sections/services/FumigationSection";

export const metadata: Metadata = {
  title: "Our Services | Acacia Cleaners — Nairobi",
  description:
    "Home cleaning, office cleaning, fumigation, move-in/out, and post-construction cleaning services across Nairobi.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ResidentialSection />
      <CommercialSection />
      <FumigationSection />
    </>
  );
}
