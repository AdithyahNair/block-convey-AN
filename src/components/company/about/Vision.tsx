import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Vision: React.FC = () => {
  return (
    <div className="py-24 bg-brand from-brand-light/20 to-brand-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            {/* Top Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-white" />

            {/* Opening Quote */}
            <div className="absolute -top-4 left-8 text-white transform -translate-y-full">
              <Quote className="h-12 w-12 rotate-180" />
            </div>

            {/* Content */}
            <div className="pt-16 pb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Our vision is to pioneer AI solutions that are transparent,
                accountable, and aligned with human values.
              </h2>
              <p className="text-xl text-white">— Block Convey</p>
            </div>

            {/* Closing Quote */}
            <div className="absolute -bottom-4 right-8 text-white translate-y-full">
              <Quote className="h-12 w-12" />
            </div>

            {/* Bottom Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-white" />

            {/* Bottom Arrow */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
