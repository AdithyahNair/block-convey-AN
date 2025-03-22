import React from "react";
import { WavyBackground } from "./WavyBackground";
import { ServicesContent } from "./ServicesContent";

export const ServicesCTA: React.FC = () => {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      <WavyBackground />
      <ServicesContent />
    </section>
  );
};
