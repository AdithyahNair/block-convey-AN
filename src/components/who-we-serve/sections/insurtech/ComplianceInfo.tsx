import React from "react";
import { motion } from "framer-motion";
import { Scale, Shield } from "lucide-react";

const regulations = [
  {
    name: "State Regulators",
    description: "Compliance with state-specific insurance regulations",
  },
  {
    name: "NAIC Guidelines",
    description: "National Association of Insurance Commissioners standards",
  },
  {
    name: "FCRA Compliance",
    description: "Fair Credit Reporting Act requirements for risk assessment",
  },
  {
    name: "Consumer Protection",
    description: "Insurance consumer protection and fairness guidelines",
  },
];

export const ComplianceInfo: React.FC = () => {
  return (
    <div className="mt-16 bg-brand-light/5 rounded-2xl p-8 border border-brand-light/30">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="h-6 w-6 text-brand" />
        <h3 className="text-xl font-semibold text-gray-900">
          Regulatory Oversight
        </h3>
      </div>
      
      <p className="text-gray-600 mb-8">
        Our platform ensures insurtech companies maintain robust AI governance while
        meeting regulatory requirements. We help build consumer confidence through
        fair risk assessments and transparent operations.
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