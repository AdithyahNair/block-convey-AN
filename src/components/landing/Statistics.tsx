import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

// Stats data remains the same
const stats = [
  {
    icon: BarChart2,
    value: "75%",
    label: "of Financial Firms Already Use AI",
    description:
      "with an additional 10% planning implementation within 3 years",
    source: "https://www.lumenova.ai/blog/governing-generative-ai-finance/",
  },
  {
    icon: Users,
    value: "33%",
    label: "of AI Use Cases Involve Third Parties",
    description:
      "highlighting the critical need for managing outsourcing risks",
    source: "https://www.lumenova.ai/blog/governing-generative-ai-finance/",
  },
  {
    icon: AlertTriangle,
    value: "100%",
    label: "Risk Mitigation Coverage",
    description:
      "identifying and addressing biases, operational failures, and reputational risks",
    source:
      "https://www.holisticai.com/blog/ai-governance-in-financial-services",
  },
];

const theses = [
  {
    title: "Build Trust & Transparency",
    description:
      "When stakeholders can understand how decisions are made, confidence in AI systems grows—especially in critical areas like credit scoring, fraud detection, and insurance claims.",
    color: "bg-blue-500",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Many regulations now require organizations to demonstrate the fairness and impartiality of their AI models. Explainable AI helps prove that decisions are based on objective, bias-free reasoning.",
    color: "bg-emerald-500",
  },
  {
    title: "Bias Detection & Mitigation",
    description:
      "By revealing the inner workings of AI models, businesses can pinpoint sources of bias, correct them, and ensure equitable outcomes for all customers.",
    color: "bg-purple-500",
  },
  {
    title: "Efficient Decision Validation",
    description:
      "With clear explanations, reviewers can quickly validate or dispute AI-driven conclusions, streamlining processes and reducing costly errors.",
    color: "bg-amber-500",
  },
  {
    title: "Enhanced Stakeholder Confidence",
    description:
      "From customers to regulators, transparent AI fosters trust, leading to stronger brand reputation and better adoption of AI-driven solutions.",
    color: "bg-rose-500",
  },
];

export const Statistics: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The swift adoption of AI in the financial industry highlights the
            pressing need for strong governance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30">
                  <div
                    className={`inline-flex p-3 rounded-lg ${
                      index === 0 ? "bg-green-50" : "bg-yellow-50"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        index === 0 ? "text-green-600" : "text-yellow-600"
                      }`}
                    />
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 mb-4">{stat.description}</p>
                  <Link
                    to={stat.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand hover:text-brand-dark transition-colors"
                  >
                    View Source →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Theses */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

          {theses.map((thesis, index) => (
            <motion.div
              key={thesis.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center mb-12"
            >
              {/* Left Content */}
              {index % 2 === 0 && (
                <div className="w-5/12">
                  <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light/30">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-brand transition-colors duration-300">
                      {thesis.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {thesis.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Center Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full ${thesis.color} shadow-lg`}
                />
              </div>

              {/* Connector Lines */}
              <div
                className={`absolute top-1/2 ${
                  index % 2 === 0 ? "right-1/2 mr-2" : "left-1/2 ml-2"
                } w-[calc(8.333%-8px)] h-0.5 ${
                  thesis.color
                } transform -translate-y-1/2`}
              />

              {/* Right Content */}
              {index % 2 === 1 && (
                <div className="w-5/12 ml-auto">
                  <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light/30">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-brand transition-colors duration-300">
                      {thesis.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {thesis.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
