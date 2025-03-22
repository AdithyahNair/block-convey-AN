import React, { useState, useEffect } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const descriptions = [
  {
    title: "Cost Savings",
    text: "Save up to 60% on compliance costs with blockchain-powered transparency.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Credit Risk",
    text: "Ensure fair lending with bias-free credit risk assessments.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Fraud Prevention",
    text: "Detect and prevent fraud with explainable AI and blockchain security.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Insurance Claims",
    text: "Automate claims processing for unbiased and faster settlements.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Financial Advisory",
    text: "Provide personalized advice with ethical, data-driven AI.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Regulatory Compliance",
    text: "Ensure compliance with industry regulations and privacy laws.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % descriptions.length);
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <div
      id="main"
      className="relative min-h-screen bg-brand-lightest overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lightest to-transparent" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 text-brand mb-6"></div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionize Enterprise AI with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
                Blockchain Governance and Explainable AI
              </span>
            </h1>

            <div
              className="relative min-h-[160px] mb-12"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div
                    className={`bg-gradient-to-br ${descriptions[currentIndex].color} backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg relative group hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {isPaused ? (
                        <Play className="h-5 w-5 text-gray-600" />
                      ) : (
                        <Pause className="h-5 w-5 text-gray-600" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {descriptions[currentIndex].title}
                    </h3>
                    <p className="text-gray-700">
                      {descriptions[currentIndex].text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/arunprasad-11/product-demo-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition-colors"
              >
                Book Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 bg-brand-light/30 text-gray-900 border border-brand-light px-8 py-4 rounded-full font-medium hover:bg-brand-light/50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-light"
          >
            <iframe
              allow="fullscreen;autoplay"
              allowFullScreen
              height="100%"
              src="https://streamable.com/e/i7gdzj?autoplay=1&muted=1&nocontrols=1"
              width="100%"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
