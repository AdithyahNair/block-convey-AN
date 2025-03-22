import React from "react";
import { HeroTitle } from "./hero/HeroTitle";

export const FeatureHero: React.FC = () => {
  return (
    <div
      id="hero"
      className="relative w-full pt-16 pb-16 overflow-hidden bg-brand-lightest"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

      {/* Expanded Content Container */}
      <div className="relative mx-auto px-12 sm:px-16 lg:px-24 max-w-[100%]">
        <HeroTitle />
      </div>
    </div>
  );
};
