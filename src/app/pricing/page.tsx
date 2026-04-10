import PricingSection from "@/components/sections/home/PricingSection";
import CTASection from "@/components/sections/home/CTASection";

export const metadata = {
  title: "Pricing | Glacier group — Nairobi",
  description: "View our transparent pricing for premium cleaning and fumigation services in Nairobi.",
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingSection />
      <CTASection />
    </div>
  );
}
