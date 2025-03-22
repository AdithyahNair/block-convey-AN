import React from "react";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, CreditCard, Building } from "lucide-react";
import { CaseStudyCard } from "../governance/CaseStudyCard";
import { DeepDiveCard } from "../governance/DeepDiveCard";

const deepDives = [
  {
    title: "The Essentials of AI Governance in Fintech",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    link: "https://www.finextra.com/blogposting/27235/governance-risk-and-compliance-how-ai-will-make-fintech-comply",
  },
  {
    title: "Using Blockchain to Ensure Transparent AI Operations",
    image: "https://bc.army/wp-content/uploads/2023/05/image.png",
    link: "https://proveai.com/blog/augmenting-ai-with-blockchain",
  },
];

const caseStudies = [
  {
    icon: Shield,
    company: "HSBC",
    title: "Anti-Money Laundering (AML) Monitoring",
    points: [
      "Uses machine learning algorithms to analyze real-time transactions",
      "Detects unusual patterns and potential illegal activities",
      "Improved detection rates of suspicious transactions",
      "Quick adaptation to new regulatory changes",
    ],
  },
  {
    icon: AlertTriangle,
    company: "Wells Fargo",
    title: "Fraud Detection",
    points: [
      "Deep learning algorithms scrutinize real-time transaction patterns",
      "Compares transactions against known fraudulent behaviors",
      "Higher accuracy in identifying fraudulent transactions",
      "Enhanced transaction security and cost efficiency",
    ],
  },
  {
    icon: CreditCard,
    company: "Mastercard",
    title: "Compromised Card Detection",
    points: [
      "Generative AI scans transaction data across millions of merchants",
      "Predicts and detects compromised cards faster",
      "Doubled detection rate of compromised cards",
      "300% increase in merchant fraud detection speed",
    ],
  },
  {
    icon: Building,
    company: "FinSecure Bank",
    title: "Real-Time Fraud Analysis",
    points: [
      "Analyzes vast amounts of real-time transaction data",
      "Identifies patterns indicating potential fraud",
      "Uses supervised and unsupervised learning techniques",
      "Significant improvements in fraud detection and prevention",
    ],
  },
];

export const GovernanceMonitor: React.FC = () => {
  return (
    <section
      id="governance"
      className="py-24 bg-gradient-to-b from-brand-light/40 to-brand-lightest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Governance Monitor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track the latest developments in AI governance and regulatory
            compliance
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Deep Dives */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Deep Dives
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {deepDives.map((dive, index) => (
                <DeepDiveCard key={dive.title} {...dive} index={index} />
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Industry Case Studies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.company} {...study} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
