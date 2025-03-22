import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DeepDiveCardProps {
  title: string;
  image: string;
  link: string;
  index: number;
}

export const DeepDiveCard: React.FC<DeepDiveCardProps> = ({
  title,
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
      className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-light hover:text-white transition-colors"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};
