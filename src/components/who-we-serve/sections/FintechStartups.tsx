import React from "react";
import { motion } from "framer-motion";
import { UseCaseList } from "./fintech/UseCaseList";
import { ComplianceInfo } from "./fintech/ComplianceInfo";

export const FintechStartups: React.FC = () => {
  return (
    <section
      id="fintech-startups"
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
            Fintech Startups
          </h2>
          <p className="text-xl text-gray-600">
            Digital lending platforms, robo-advisors, and payment processors
            thrive on disruptive innovation powered by AI. We help fintech
            startups maintain compliance while accelerating growth.
          </p>
        </motion.div>

        <UseCaseList />
        <ComplianceInfo />
      </div>
    </section>
  );
};
