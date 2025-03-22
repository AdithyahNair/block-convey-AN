import React from "react";
import { motion } from "framer-motion";
import { partners } from "./partners/partnersData";

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-light/20 to-brand-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600">
            Partnering with global organizations to drive innovation in AI
            governance
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-brand-light/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-brand-light/20 to-transparent z-10" />

          {/* Single Scrolling Row */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex flex-col items-center mx-8 w-[200px]"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-light/30 mb-3">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 object-contain transition-all"
                    />
                  </div>
                  <span className="text-sm text-gray-600 text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
