import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { ResourcesHero } from "../components/resources/ResourcesHero";
import { InsightsSection } from "../components/resources/sections/InsightsSection";
import { BlockchainSection } from "../components/resources/sections/BlockchainSection";
import { GovernanceMonitor } from "../components/resources/sections/GovernanceMonitor";
import { ToolsSection } from "../components/resources/sections/ToolsSection";
import { WavyCTA } from "../components/common/cta/WavyCTA";

export const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main className="relative">
        <ResourcesHero />
        <GovernanceMonitor />
        <InsightsSection />
        <BlockchainSection />
        <ToolsSection />
        <WavyCTA />
      </main>
      <Footer />
    </div>
  );
};
