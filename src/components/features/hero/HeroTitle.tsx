import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroTitle: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionize <br />
            <span>Financial AI Governance with </span>
            <span className="text-brand">Blockchain-Powered Oversight</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empower financial models with immutable compliance, risk management,
            and fraud detection using blockchain-enabled governance. Streamline
            your financial processes with cutting-edge blockchain technology.
          </p>
          <Link
            to="https://calendly.com/arunprasad-11/product-demo-call"
            target="_blank"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors"
          >
            Request Demo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
