import type { Metadata } from "next";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessSteps from "@/components/sections/process/ProcessSteps";
import EcoSection from "@/components/sections/process/EcoSection";

export const metadata: Metadata = {
  title: "Our Process | Glacier group — Nairobi",
  description: "Learn how Glacier group delivers world-class cleaning results using professional methods and eco-friendly products.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessSteps />
      <EcoSection />
    </>
  );
}
