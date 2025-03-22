import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StorageFeatureProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}

export const StorageFeature: React.FC<StorageFeatureProps> = ({
  feature,
  index,
}) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30"
    >
      <div className="inline-flex p-3 bg-brand-light/20 rounded-xl mb-6">
        <Icon className="h-6 w-6 text-brand" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};