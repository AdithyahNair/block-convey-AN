import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brand">
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <Sparkles className="h-10 w-10 text-white animate-pulse" />
          </motion.div>
          <div className="flex items-center gap-6">
            <span className="text-2xl text-white font-medium">
              PRISM : Predictive Risk and Intelligence Surveillance Monitor
            </span>
            <a
              href="/prism"
              rel="noopener noreferrer"
              className="text-xl text-white/90 hover:text-white transition-colors font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/20 to-transparent pointer-events-none" />
    </div>
  );
};
