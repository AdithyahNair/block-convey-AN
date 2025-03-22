import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  icon: Icon,
  title,
  description,
  details,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-50 rounded-lg">
          <Icon className="h-6 w-6 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </div>

      <p className="text-gray-600 mb-8">{description}</p>

      <ul className="space-y-4">
        {details.map((detail, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 text-gray-700"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-600" />
            {detail}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
