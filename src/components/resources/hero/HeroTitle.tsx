import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export const HeroTitle: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-2 text-brand mb-6">
        <BookOpen className="h-6 w-6" />
        <span className="text-sm font-medium">Knowledge Hub</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Explore Insights on Explainable AI, Blockchain, and Governance in
        Finance
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover expert insights, tools, and content to navigate AI and
        blockchain in the financial industry while mastering AI governance.
      </p>
      <p className="text-lg text-gray-600">
        Whether you're a fintech startup, financial institution, insurtech
        provider, or regtech company, our comprehensive resources will help you
        implement and maintain robust AI governance frameworks while leveraging
        the latest in blockchain technology.
      </p>
    </motion.div>
  );
};
