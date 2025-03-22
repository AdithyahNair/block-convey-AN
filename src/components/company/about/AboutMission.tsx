import React from "react";
import { motion } from "framer-motion";

export const AboutMission: React.FC = () => {
  return (
    <div className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-600 ">
            Our motivation stems from a steadfast dedication to excellence,
            innovation, and customer satisfaction. We take pride in providing
            top-quality solutions tailored to meet the diverse challenges and
            needs of AI clients in various industries.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
