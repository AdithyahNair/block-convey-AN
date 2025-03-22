import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CompanyValueProps {
  value: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}

export const CompanyValue: React.FC<CompanyValueProps> = ({ value, index }) => {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-50 rounded-2xl p-8"
    >
      <div className="inline-flex p-3 bg-emerald-50 rounded-xl mb-6">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {value.title}
      </h3>
      <p className="text-gray-600">{value.description}</p>
    </motion.div>
  );
};
