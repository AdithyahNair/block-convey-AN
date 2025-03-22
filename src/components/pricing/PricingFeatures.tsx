import React from "react";
import { motion } from "framer-motion";
import { Shield, Activity, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Enterprise-grade security with immutable blockchain records"
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Track AI performance and compliance in real-time"
  },
  {
    icon: Lock,
    title: "Smart Contracts",
    description: "Automated governance with customizable smart contracts"
  }
];

export const PricingFeatures: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Enterprise Features
          </h2>
          <p className="text-xl text-gray-600">
            Available across all plans to ensure secure AI governance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="inline-flex p-3 bg-emerald-50 rounded-xl mb-6">
                <feature.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};