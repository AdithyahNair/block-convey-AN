import React from "react";
import { motion } from "framer-motion";
import { BarChart, LineChart, PieChart } from "lucide-react";

const metrics = [
  {
    icon: BarChart,
    title: "60%",
    description: "Cost reduction in compliance management"
  },
  {
    icon: LineChart,
    title: "99.9%",
    description: "Platform uptime guarantee"
  },
  {
    icon: PieChart,
    title: "24/7",
    description: "Real-time monitoring and alerts"
  }
];

export const FeatureMetrics: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-brand-lightest to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-brand-light/20 rounded-xl mb-6">
                <metric.icon className="h-8 w-8 text-brand" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {metric.title}
              </div>
              <p className="text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};