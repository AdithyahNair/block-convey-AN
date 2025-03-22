import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, LucideIcon } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  popular?: boolean;
  price: string;
  theme: {
    background: string;
    hover: string;
    border: string;
    icon: string;
    text: string;
  };
}

interface PricingCardProps {
  plan: Plan;
  index: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 ${
        plan.theme.background
      } backdrop-blur-sm
        ${plan.popular ? "scale-105 shadow-xl border-2" : "shadow-lg border"}
        ${plan.theme.border} hover:shadow-2xl transition-all duration-300`}
    >
      <div className="mb-8">
        <div
          className={`inline-flex p-3 rounded-xl mb-4 bg-white/80 shadow-inner`}
        >
          <Icon className={`h-6 w-6 ${plan.theme.icon}`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

        <p className="text-gray-600">{plan.description}</p>
      </div>

      <a
        href="https://calendly.com/arunprasad-11/product-demo-call"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-center gap-2 rounded-xl py-4 px-6 font-medium 
          transition-all duration-300 shadow-lg hover:shadow-xl
          ${
            plan.popular
              ? `${plan.theme.background} ${plan.theme.text} hover:${plan.theme.hover}`
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
      >
        Request Demo
        <ArrowRight className="h-4 w-4" />
      </a>

      <ul className="space-y-4 mt-8">
        {plan.features.map((feature) => {
          const isHeader = feature.endsWith(":");
          return (
            <li key={feature} className="flex items-start gap-3">
              {!isHeader && (
                <Check
                  className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.theme.icon}`}
                />
              )}
              <span
                className={`${
                  isHeader
                    ? "text-gray-900 font-semibold -ml-3"
                    : "text-gray-600"
                }`}
              >
                {feature}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
