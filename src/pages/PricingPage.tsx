import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { PricingHero } from "../components/pricing/PricingHero";
import { PricingTiers } from "../components/pricing/PricingTiers";
import { PlanComparison } from "../components/pricing/PlanComparison";
import { PricingFAQ } from "../components/pricing/PricingFAQ";
import { WavyCTA } from "../components/common/cta/WavyCTA";

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PricingHero />
        <PricingTiers />
        <PlanComparison />
        <PricingFAQ />
        <WavyCTA />
      </main>
      <Footer />
    </div>
  );
};
