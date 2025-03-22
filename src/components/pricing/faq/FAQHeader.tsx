import React from "react";
import { motion } from "framer-motion";

export const FAQHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-gray-600">
        Everything you need to know about our pricing and features
      </p>
    </motion.div>
  );
};
