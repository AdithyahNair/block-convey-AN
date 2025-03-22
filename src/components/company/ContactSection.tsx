import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Embark on your AI Development with Block Convey Today
          </h2>
          <p className="text-xl text-white mb-8">
            Schedule a consultation with our experts to learn more about how we
            can serve your AI needs.
          </p>
          <a
            href="https://calendly.com/arunprasad-11/product-demo-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Book a Discussion
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
