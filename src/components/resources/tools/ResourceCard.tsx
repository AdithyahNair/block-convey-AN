import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Download } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  index: number;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-brand-light/20 rounded-xl">
          <Icon className="h-6 w-6 text-brand" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors"
      >
        <Download className="h-4 w-4" />
        <span>Download Resource</span>
      </a>
    </motion.div>
  );
};