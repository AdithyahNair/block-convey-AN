import React from "react";
import { motion } from "framer-motion";
import {
  Link2,
  Activity,
  BarChart2,
  Shield,
  AlertTriangle,
  LineChart,
} from "lucide-react";

const benefits = [
  {
    icon: Link2,
    title: "Blockchain-Powered Oversight",
    description:
      "Build confidence with stakeholders through transparent, explainable AI governance.",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    iconColor: "text-blue-600",
  },
  {
    icon: Activity,
    title: "Fairness and Bias",
    description:
      "Real-time detection of fairness issues, bias, and model drift to maintain optimal performance.",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconColor: "text-emerald-600",
  },
  {
    icon: Shield,
    title: "Compliance Reporting",
    description:
      "Automated audit trails and regulatory adherence with blockchain-verified documentation.",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-cyan-600",
  },
  {
    icon: BarChart2,
    title: "Real-time Dashboard",
    description:
      "Track model performance and compliance in real-time with comprehensive monitoring and analytics.",
    gradient: "from-rose-500/20 via-rose-500/10 to-transparent",
    iconColor: "text-rose-600",
  },

  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description:
      "Comprehensive risk mitigation insights powered by advanced analytics and predictive modeling.",
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconColor: "text-purple-600",
  },
  {
    icon: LineChart,
    title: "Model Performance Tracking",
    description:
      "Gain actionable insights into AI outcomes with detailed performance metrics and trend analysis.",
    gradient: "from-teal-500/20 via-teal-500/10 to-transparent",
    iconColor: "text-teal-600",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-light/20 to-brand-lightest relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Block Convey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The swift adoption of AI in the financial industry highlights the
            pressing need for strong governance. Our comprehensive platform
            provides the tools and oversight needed for responsible AI
            governance in financial services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light/30 h-full overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br ${benefit.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-150`}
                  />

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-white/80 blur-xl rounded-xl" />
                      <div className="relative flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg border border-brand-light/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon
                          className={`h-6 w-6 ${benefit.iconColor} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-brand transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-gray-50/50 to-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
