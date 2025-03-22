import React from "react";
import { PricingCard } from "./PricingCard";
import { pricingData } from "./data/pricingData";

export const PricingTiers: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};