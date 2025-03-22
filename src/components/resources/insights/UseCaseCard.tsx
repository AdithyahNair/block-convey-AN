import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  source: string;
  index: number;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  icon: Icon,
  source,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30"
    >
      <div className="inline-flex p-3 bg-brand-light/20 rounded-xl mb-4">
        <Icon className="h-6 w-6 text-brand" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-brand hover:text-brand-dark transition-colors"
      >
        Learn More →
      </a>
    </motion.div>
  );
};