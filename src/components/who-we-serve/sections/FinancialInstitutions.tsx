import React from "react";
import { motion } from "framer-motion";
import { ComplianceInfo } from "./financial/ComplianceInfo";
import { UseCaseList } from "./financial/UseCaseList";

export const FinancialInstitutions: React.FC = () => {
  return (
    <section
      id="financial-institutions"
      className="py-24 bg-gradient-to-b from-brand-light/40 to-brand-lightest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Financial Institutions
          </h2>
          <p className="text-xl text-gray-600">
            Traditional banks, investment firms, asset management companies, and
            payment processors are increasingly integrating AI to optimize
            operations, enhance customer experiences, and improve
            decision-making.
          </p>
        </motion.div>

        <UseCaseList />
        <ComplianceInfo />
      </div>
    </section>
  );
};
