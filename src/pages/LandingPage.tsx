import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { CircleTextSection } from "../components/landing/CircleTextSection";
// import { Statistics } from "../components/landing/Statistics";
import { Partners } from "../components/landing/Partners";
import { WhyChooseUs } from "../components/landing/WhyChooseUs";
import { Footer } from "../components/landing/Footer";
import { WavyCTA } from "../components/common/cta/WavyCTA";

export const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <CircleTextSection />
        <WhyChooseUs />

        <WavyCTA />
        <Footer />
      </main>
    </div>
  );
};
