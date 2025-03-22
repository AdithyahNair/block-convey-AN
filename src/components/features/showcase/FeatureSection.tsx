import React from "react";
import { motion } from "framer-motion";
import { FeatureDetails } from "./FeatureDetails";
import { FeatureImage } from "./FeatureImage";
import { Feature } from "./types";

interface FeatureSectionProps {
  feature: Feature;
  isReversed: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  feature,
  isReversed,
}) => {
  return (
    <motion.div
      id={feature.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-12 items-center mb-24 last:mb-0 scroll-mt-32 bg-gradient-to-b from-brand-light/40 to-brand-lightest backdrop-blur-sm rounded-2xl p-8 border border-brand-light/20 shadow-sm hover:shadow-md`}
    >
      <FeatureDetails feature={feature} />
      <FeatureImage feature={feature} />
    </motion.div>
  );
};
