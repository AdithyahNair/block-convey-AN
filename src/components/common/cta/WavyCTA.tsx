import React from "react";
import { WavyBackground } from "./WavyBackground";
import { CTAContent } from "./CTAContent";

export const WavyCTA: React.FC = () => {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      <WavyBackground />
      <CTAContent />
    </section>
  );
};
