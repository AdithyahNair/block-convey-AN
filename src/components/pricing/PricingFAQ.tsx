import React from "react";
import { FAQHeader } from "./faq/FAQHeader";
import { FAQList } from "./faq/FAQList";
import { faqData } from "./data/faqData";

export const PricingFAQ: React.FC = () => {
  return (
    <div id="faq" className="py-24 bg-gradient-to-b from-brand-lightest to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQHeader />
        <FAQList items={faqData} />
      </div>
    </div>
  );
};