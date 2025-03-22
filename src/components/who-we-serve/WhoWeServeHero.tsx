import React from "react";
import { HeroTitle } from "./hero/HeroTitle";

export const WhoWeServeHero: React.FC = () => {
  return (
    <div id="hero" className="relative w-full pt-16 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Expanded Content Container */}
      <div className="relative mx-auto px-12 sm:px-16 lg:px-24 max-w-[100%]">
        <HeroTitle />
      </div>
    </div>
  );
};
