import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Shield, BarChart2 } from "lucide-react";

const useCases = [
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    description: "AI-powered systems to identify anomalies and prevent financial crimes in real-time",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Automated AML/KYC processes for enhanced efficiency and accuracy",
  },
  {
    icon: BarChart2,
    title: "Credit Scoring",
    description: "Advanced AI models for precise creditworthiness evaluation",
  },
];

export const UseCaseList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {useCases.map((useCase, index) => (
        <motion.div
          key={useCase.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30"
        >
          <div className="inline-flex p-3 bg-brand-light/20 rounded-xl mb-6">
            <useCase.icon className="h-6 w-6 text-brand" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {useCase.title}
          </h3>
          <p className="text-gray-600">{useCase.description}</p>
        </motion.div>
      ))}
    </div>
  );
};