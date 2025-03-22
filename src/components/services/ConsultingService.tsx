import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Shield, MessageSquare } from "lucide-react";
import { ContactForm } from "./consulting/ContactForm";

const consultingServices = [
  {
    icon: Brain,
    title: "AI Consulting",
    features: [
      "AI Governance frameworks",
      "Bias detection and removal strategies",
      "Explainable AI (XAI) solutions",
      "Compliance integration",
    ],
  },
  {
    icon: Database,
    title: "Blockchain Consulting",
    features: [
      "Decentralized storage integration",
      "Smart contract implementation",
      "Blockchain-based security",
      "Audit trail setup",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    features: [
      "Risk assessment frameworks",
      "Regulatory compliance",
      "Security best practices",
      "Audit preparation",
    ],
  },
  {
    icon: MessageSquare,
    title: "Implementation Support",
    features: [
      "Technical architecture",
      "Integration assistance",
      "Performance optimization",
      "Team training",
    ],
  },
];

export const ConsultingService: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        id="hero"
        className="relative w-full pt-16 pb-16 overflow-hidden bg-brand-lightest"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

        {/* Content */}
        <div className="relative mx-auto px-12 sm:px-16 lg:px-24 max-w-[100%]">
          <div className="relative pt-32 pb-20">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
              >
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Expert Consulting for{" "}
                  <span className="text-brand">AI and Blockchain Success</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Partner with our experts to implement cutting-edge solutions,
                  enhance security, and unlock new opportunities in finance.
                  Let's transform your business together.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-gradient-to-b from-brand-light/40 to-brand-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {consultingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30"
                >
                  <div className="inline-flex p-3 bg-brand-light/20 rounded-xl mb-6">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 flex items-center gap-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
};
