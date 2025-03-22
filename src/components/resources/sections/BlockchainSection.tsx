import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Brain, Scale, Banknote } from "lucide-react";
import { ExplainerCard } from "../blockchain/ExplainerCard";
import { EnhancementCard } from "../blockchain/EnhancementCard";

const explainers = [
  {
    title: "Why Blockchain is Critical for Secure Financial Operations",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQGee1m0RK1dMw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1696676280590?e=2147483647&v=beta&t=7mF09OtB3RCFrqFBGAimCi48k3g8VHgPnkmwtud46R8",
    link: "https://www.enterprisesecuritymag.com/news/opportunities-of-aiintegrated-blockchain-technology-nid-4162-cid-56.html",
  },
  {
    title: "The Role of Decentralized Storage in Financial Compliance",
    image:
      "https://www.ccn.com/wp-content/uploads/2023/07/Decentralized-Storage-Explained.webp",
    link: "https://www.leewayhertz.com/10-use-cases-of-blockchain-in-finance/",
  },
];

const enhancements = [
  {
    icon: Shield,
    title: "Fraud Detection and Prevention",
    description:
      "AI algorithms analyze vast amounts of blockchain transaction data to identify suspicious patterns and anomalies in real-time.",
    source:
      "https://www.enterprisesecuritymag.com/news/opportunities-of-aiintegrated-blockchain-technology-nid-4162-cid-56.html",
  },
  {
    icon: Cpu,
    title: "Smart Contracts and Process Automation",
    description:
      "AI-powered smart contracts automate complex financial transactions and self-execute when predefined conditions are met.",
    source:
      "https://redresscompliance.com/blockchain-and-ai-a-powerful-combination-in-finance/",
  },
  {
    icon: Brain,
    title: "Credit Scoring and Risk Assessment",
    description:
      "AI models analyze blockchain financial data to provide real-time credit scoring and personalized financial services.",
    source:
      "https://www.enterprisesecuritymag.com/news/opportunities-of-aiintegrated-blockchain-technology-nid-4162-cid-56.html",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance and Auditing",
    description:
      "The combination creates a transparent and immutable audit trail for financial transactions with AI-powered compliance monitoring.",
    source: "https://fepbl.com/index.php/farj/article/download/855/1082",
  },
  {
    icon: Banknote,
    title: "Cross-Border Payments",
    description:
      "Blockchain-based payment systems enhanced by AI algorithms improve speed and cost-effectiveness of international transfers.",
    source:
      "https://www.leewayhertz.com/10-use-cases-of-blockchain-in-finance/",
  },
];

export const BlockchainSection: React.FC = () => {
  return (
    <section
      id="blockchain"
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
            Blockchain in Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how blockchain technology is transforming financial services
            and governance
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Explainers */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Explainers and Blogs
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {explainers.map((explainer, index) => (
                <ExplainerCard
                  key={explainer.title}
                  {...explainer}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Enhancements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              5 Ways Blockchain Enhances AI Governance in Finance
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancements.map((enhancement, index) => (
                <EnhancementCard
                  key={enhancement.title}
                  {...enhancement}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
