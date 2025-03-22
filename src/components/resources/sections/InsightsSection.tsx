import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Shield, Brain } from "lucide-react";
import { InsightCard } from "../insights/InsightCard";
import { UseCaseCard } from "../insights/UseCaseCard";

const articles = [
  {
    title: "How AI is Transforming Financial Services",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQFxHfBMMerLNw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695240591175?e=2147483647&v=beta&t=GK8r88jLfxuQYgy8-1XYFfSOb_2xQZ2UxYZM_leOvP0",
    link: "https://www.forbes.com/sites/kathleenwalch/2024/09/14/how-ai-is-transforming-the-finance-industry/",
  },
  {
    title: "Overcoming Bias in AI Models for Finance",
    image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8957316/og_image/optimized/0919_Machines_and_Trust_Lina_Social-ac9acf8ebc252ec57a9a9014f6be62b2.png",
    link: "https://www.forbes.com/sites/kathleenwalch/2024/09/14/how-ai-is-transforming-the-finance-industry/",
  },
];

const useCases = [
  {
    icon: MessageSquare,
    title: "Customer Service and Personalization",
    description:
      "AI-powered chatbots and virtual assistants like Bank of America's Erica provide 24/7 support, handle inquiries, and offer personalized financial insights.",
    source:
      "https://litslink.com/blog/ai-use-cases-that-revolutionized-the-banking-industry",
  },
  {
    icon: Shield,
    title: "Fraud Detection and Security",
    description:
      "Banks use AI to analyze transaction patterns in real-time, identifying and preventing fraudulent activities more effectively than traditional methods.",
    source: "https://appinventiv.com/blog/ai-in-banking/",
  },
  {
    icon: Brain,
    title: "Credit Risk Assessment",
    description:
      "AI algorithms process vast amounts of data, including non-traditional sources, to provide more accurate and fair credit scoring, potentially expanding access to credit.",
    source:
      "https://www.forbes.com/sites/kathleenwalch/2024/09/14/how-ai-is-transforming-the-finance-industry/",
  },
];

export const InsightsSection: React.FC = () => {
  return (
    <section
      id="insights"
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
            Insights on AI in Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends and developments in AI-powered
            financial services
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Articles */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Articles and Guides
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <InsightCard key={article.title} {...article} index={index} />
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Top 3 Use Cases of AI in Banking
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <UseCaseCard key={useCase.title} {...useCase} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
