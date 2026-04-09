import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import StorySection from "@/components/sections/about/StorySection";
import TeamSection from "@/components/sections/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us | Acacia Cleaners — Nairobi",
  description: "Learn about Acacia Cleaners — Nairobi's most trusted cleaning and fumigation company. Our story, team, and commitment to eco-friendly cleaning.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <TeamSection />
    </>
  );
}
