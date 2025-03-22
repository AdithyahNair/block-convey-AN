import React from "react";
import { motion } from "framer-motion";
import { Scale, Shield } from "lucide-react";

const regulations = [
  {
    name: "ECOA",
    description: "Equal Credit Opportunity Act compliance",
  },
  {
    name: "BSA",
    description: "Bank Secrecy Act requirements",
  },
  {
    name: "CFPB",
    description: "Consumer Financial Protection Bureau guidelines",
  },
  {
    name: "FinCEN",
    description: "Financial Crimes Enforcement Network regulations",
  },
];

export const ComplianceInfo: React.FC = () => {
  return (
    <div className="mt-16 bg-brand-light/5 rounded-2xl p-8 border border-brand-light/30">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="h-6 w-6 text-brand" />
        <h3 className="text-xl font-semibold text-gray-900">
          Regulatory Compliance
        </h3>
      </div>
      
      <p className="text-gray-600 mb-8">
        Financial institutions face heightened scrutiny in AI operations. Our platform ensures
        transparency, fairness, and accountability in AI-driven decisions to maintain
        compliance with major regulatory bodies.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {regulations.map((reg, index) => (
          <motion.div
            key={reg.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <Shield className="h-5 w-5 text-brand mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">{reg.name}</h4>
              <p className="text-sm text-gray-600">{reg.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};