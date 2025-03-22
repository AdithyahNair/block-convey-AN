import React from "react";
import { motion } from "framer-motion";
import { featureData } from "./showcase/featureData";
import { Feature } from "./showcase/Feature";

export const Features: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise AI Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our platform helps you maintain transparency and
            compliance in your AI operations.
          </p>
        </motion.div>

        <div className="space-y-32">
          {featureData.map((feature, index) => (
            <Feature key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
