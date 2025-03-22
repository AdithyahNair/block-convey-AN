import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ServicesContent: React.FC = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to try Block Convey Drive
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Decentralized Storage Made Simple
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://drive.blockconvey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Access Block Convey Drive
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
