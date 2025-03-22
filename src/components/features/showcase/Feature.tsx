import React from "react";
import { motion } from "framer-motion";
import { Feature as FeatureType } from "./types";

interface FeatureProps {
  feature: FeatureType;
  index: number;
}

export const Feature: React.FC<FeatureProps> = ({ feature, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={feature.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      className="relative scroll-mt-32 py-16" // Added padding and scroll margin
    >
      <div className={`flex flex-col gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Content */}
        <div className="flex-1 lg:py-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-brand-light/20 rounded-lg">
              <feature.icon className="h-6 w-6 text-brand" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
          </div>

          <p className="text-xl text-gray-600 mb-8">{feature.description}</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-4">
                {feature.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="h-2 w-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span className="text-gray-600">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {feature.frameworks.map((framework) => (
                  <span
                    key={framework}
                    className="px-3 py-1 bg-brand-light/20 text-brand rounded-full text-sm"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-brand-light/30"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};