import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroTitle: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Financial Innovation with{" "}
            <span className="text-emerald-600">Responsible AI Governance</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tailored solutions for financial institutions, fintech, insurtech,
            and specialized services to harness AI with transparency,
            compliance, and trust.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors"
            >
              Explore Features
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://calendly.com/arunprasad-11/product-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Book Demo
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
