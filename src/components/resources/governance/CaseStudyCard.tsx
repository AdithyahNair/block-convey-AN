import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CaseStudyCardProps {
  company: string;
  title: string;
  points: string[];
  icon: LucideIcon;
  index: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  company,
  title,
  points,
  icon: Icon,
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
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      
      <ul className="space-y-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="h-2 w-2 mt-2 rounded-full bg-brand flex-shrink-0" />
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};