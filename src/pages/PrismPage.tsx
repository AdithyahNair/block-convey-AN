import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PrismPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand">
      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <Sparkles className="h-8 w-8 text-white animate-pulse" />
              <span className="text-2xl text-white font-medium">
                Launching Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              PRISM : Predictive Risk and Intelligence Surveillance Monitor
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-6"
            >
              Your personalized AI Governance Monitor
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 max-w-3xl mx-auto"
            >
              Transform your risk management with AI-powered predictive
              analytics and real-time surveillance. Stay ahead of threats with
              intelligent monitoring and proactive risk mitigation.
            </motion.p>
          </div>
        </div>
      </main>
    </div>
  );
};
