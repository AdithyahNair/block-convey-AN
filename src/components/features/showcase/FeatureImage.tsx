import React from "react";
import { motion } from "framer-motion";
import { Feature } from "./types";

interface FeatureImageProps {
  feature: Feature;
}

export const FeatureImage: React.FC<FeatureImageProps> = ({ feature }) => {
  return (
    <div className="flex-1">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-brand-light/30"
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent" />
      </motion.div>
    </div>
  );
};