import HeroSection from "@/components/sections/home/HeroSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import HowItWorks from "@/components/sections/home/HowItWorks";
import PricingSection from "@/components/sections/home/PricingSection";
import CoverageSection from "@/components/sections/home/CoverageSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import TransformationSection from "@/components/sections/home/TransformationSection";
import CTASection from "@/components/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <PricingSection />
      <TransformationSection />
      <CoverageSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
