import React from "react";
import { FeatureSection } from "./showcase/FeatureSection";
import { featureData } from "./showcase/featureData";

export const FeatureShowcase: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {featureData.map((feature, index) => (
          <FeatureSection
            key={feature.id}
            feature={feature}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};
