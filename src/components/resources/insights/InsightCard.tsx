import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  description?: string;
  image?: string;
  link: string;
  index: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  description,
  image,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};