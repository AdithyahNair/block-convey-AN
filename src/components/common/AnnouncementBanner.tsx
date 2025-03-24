import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brand">
      <div className="absolute inset-0">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated gradient orbs */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-1/4 w-1/2 h-full bg-white/10 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
          className="absolute -right-1/4 w-1/2 h-full bg-white/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <Sparkles className="h-10 w-10 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-white/20 rounded-full blur-md"
            />
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white font-medium"
            >
              PRISM : Predictive Risk and Intelligence Surveillance Monitor
            </motion.span>
            <motion.a
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              href="/prism"
              className="group text-xl text-white/90 hover:text-white transition-colors font-medium hover:underline flex items-center gap-2"
            >
              Learn More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
