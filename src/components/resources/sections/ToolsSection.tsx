import React from "react";
import { motion } from "framer-motion";
import { ResourceList } from "../tools/ResourceList";

export const ToolsSection: React.FC = () => {
  return (
    <section
      id="tools"
      className="py-24 bg-gradient-to-b from-brand-light/40 to-brand-lightest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tools and Frameworks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential resources and tools for implementing effective AI
            governance
          </p>
        </motion.div>

        <ResourceList />
      </div>
    </section>
  );
};
