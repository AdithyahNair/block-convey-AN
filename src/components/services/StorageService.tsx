import React from "react";
import { motion } from "framer-motion";
import { HardDrive, Shield, Lock, RefreshCw } from "lucide-react";
import { StorageFeature } from "./storage/StorageFeature";
import { StorageProcess } from "./storage/StorageProcess";

const features = [
  {
    icon: HardDrive,
    title: "High Scalability",
    description:
      "Easily scale your storage needs as your data grows, with no performance impact",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description:
      "Enterprise-grade encryption with immutable blockchain verification",
  },
  {
    icon: Lock,
    title: "True Data Ownership",
    description: "Maintain complete control with blockchain-verified ownership",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Instant updates and synchronization across all your devices",
  },
];

export const StorageService: React.FC = () => {
  return (
    <section
      id="storage"
      className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-brand-lightest to-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Decentralized Storage Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Block Convey's decentralized storage solutions ensure your data is
            secure, scalable, and easily accessible. Built on blockchain
            technology, our storage platform is designed for the modern
            enterprise seeking efficiency and security.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.blockconvey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors"
            >
              Access Block Convey Drive
            </a>
            <a
              href="https://calendly.com/arunprasad-11/60min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-light/20 text-gray-900 border border-brand-light px-8 py-4 rounded-xl font-medium hover:bg-brand-light/30 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <StorageFeature
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        <StorageProcess />
      </div>
    </section>
  );
};
