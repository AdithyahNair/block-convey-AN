import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FeatureCTA: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-brand-light/20 to-brand-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading enterprises in revolutionizing AI governance
          </p>
          <a
            href="https://calendly.com/arunprasad-11/product-demo-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors"
          >
            Request Demo
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
