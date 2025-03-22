import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { WhoWeServeHero } from "../components/who-we-serve/WhoWeServeHero";
import { FinancialInstitutions } from "../components/who-we-serve/sections/FinancialInstitutions";
import { FintechStartups } from "../components/who-we-serve/sections/FintechStartups";
import { Insurtech } from "../components/who-we-serve/sections/Insurtech";
import { SpecializedServices } from "../components/who-we-serve/sections/SpecializedServices";
import { WavyCTA } from "../components/common/cta/WavyCTA";

export const WhoWeServePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <WhoWeServeHero />
        <FinancialInstitutions />
        <FintechStartups />
        <Insurtech />
        <SpecializedServices />
        <WavyCTA />
      </main>
      <Footer />
    </div>
  );
};