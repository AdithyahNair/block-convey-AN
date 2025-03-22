import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Scale, Lightbulb } from "lucide-react";

const commitments = [
  {
    icon: Shield,
    title: "Transparency",
    description:
      "We develop tools that make AI decisions in finance more interpretable and explainable.",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: Lock,
    title: "Security",
    description:
      "Leveraging blockchain technology, we enhance the security and immutability of AI-driven financial processes.",
    gradient: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-600",
  },
  {
    icon: Scale,
    title: "Ethics",
    description:
      "We are committed to creating AI systems that are fair, unbiased, and respectful of individual privacy.",
    gradient: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore new methodologies to improve AI governance in financial applications.",
    gradient: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-600",
  },
];

export const Commitment: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-brand-light/10 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building trust through transparent and ethical AI governance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light/30 h-full">
                  {/* Icon Container */}
                  <div
                    className={`absolute -top-4 -left-4 p-4 rounded-xl bg-gradient-to-br ${commitment.gradient} backdrop-blur-sm border border-white/20 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    <Icon className={`h-6 w-6 ${commitment.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600">{commitment.description}</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-brand/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
