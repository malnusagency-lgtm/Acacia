import HeroSection from "@/components/sections/home/HeroSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import HowItWorks from "@/components/sections/home/HowItWorks";
import CoverageSection from "@/components/sections/home/CoverageSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CTASection from "@/components/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <CoverageSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
