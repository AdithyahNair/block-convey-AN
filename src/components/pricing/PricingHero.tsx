import React from "react";
import { motion } from "framer-motion";

export const PricingHero: React.FC = () => {
  return (
    <div
      id="plans"
      className="pt-40 bg-gradient-to-b from-brand-lightest to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-brand mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600">
            Secure, scalable blockchain-powered AI governance solutions for
            organizations of all sizes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
