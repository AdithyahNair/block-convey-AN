import React from "react";
import { Feature } from "./types";
import { motion } from "framer-motion";

interface FeatureDetailsProps {
  feature: Feature;
}

export const FeatureDetails: React.FC<FeatureDetailsProps> = ({ feature }) => {
  const { icon: Icon, title, description, details, frameworks } = feature;

  return (
    <div className="flex-1 ">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-brand-light/20 rounded-lg">
          <Icon className="h-6 w-6 text-brand" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-xl text-gray-600 mb-8">{description}</p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Key Features
        </h3>
        <div className="grid gap-4">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, x: 0 }}
              className="flex items-start gap-4"
            >
              <div className="h-2 w-2 mt-2 rounded-full bg-brand" />
              <p className="text-gray-600">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Compliance Frameworks
        </h3>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((framework) => (
            <span
              key={framework}
              className="px-3 py-1 bg-brand-light/20 text-brand rounded-full text-sm"
            >
              {framework}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
