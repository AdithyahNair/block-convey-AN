import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Upload",
    description: "Securely upload your files through our intuitive interface"
  },
  {
    number: "02",
    title: "Encrypt",
    description: "Data is automatically encrypted using enterprise-grade encryption"
  },
  {
    number: "03",
    title: "Distribute",
    description: "Files are distributed across our decentralized network"
  },
  {
    number: "04",
    title: "Verify",
    description: "Blockchain verification ensures data integrity and ownership"
  }
];

export const StorageProcess: React.FC = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-xl text-gray-600">
          Our simple four-step process ensures your data is secure and accessible
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-light/30">
              <div className="text-4xl font-bold text-brand/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-brand-light/30 transform translate-x-1/2">
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-brand rounded-full transform translate-x-1/2 -translate-y-1/2" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};