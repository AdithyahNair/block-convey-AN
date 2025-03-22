import React from "react";
import { motion } from "framer-motion";
import about1 from "../../../assets/about1.png";
import about2 from "../../../assets/about2.png";
import about3 from "../../../assets/about3.png";
import about4 from "../../../assets/about4.png";

export const AboutHero: React.FC = () => {
  return (
    <div id="aboutus" className="relative w-full pt-40 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About Block Convey
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our team is a dynamic group of innovators deeply passionate
                about the intersection of explainable AI and blockchain
                technology. United by a shared vision, we are committed to
                creating more transparent, secure, and ethical AI systems,
                particularly in the financial sector.
              </p>
            </motion.div>

            {/* Right Column - Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative grid grid-cols-2 gap-4"
            >
              {/* Top Row */}
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={about1}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={about2}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={about3}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={about4}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-light/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
