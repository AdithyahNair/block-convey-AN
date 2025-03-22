import React from "react";
import { Clipboard, Database, Shield } from "lucide-react";
import { ResourceCard } from "./ResourceCard";

const resources = [
  {
    icon: Clipboard,
    title: "AI Governance Checklist",
    description: "Comprehensive guides including NIST AI Risk Management Framework, FINOS AI Readiness Framework, and Holistic AI's Governance Guide.",
    link: "https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf",
  },
  {
    icon: Database,
    title: "Blockchain Adoption Strategy",
    description: "Essential resources including FTSI's Blockchain Guide and Business ABC's Implementation Strategies for financial institutions.",
    link: "https://ftsius.com/blockchain-and-crypto-for-financial-institutions-a-short-guide",
  },
  {
    icon: Shield,
    title: "Bias Detection Guide",
    description: "Complete toolkit featuring Optiblack's 7-Step AI Bias Audit Guide, Holistic AI's Resources, and NIST's Bias Management Guide.",
    link: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf",
  },
];

export const ResourceList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {resources.map((resource, index) => (
        <ResourceCard key={resource.title} {...resource} index={index} />
      ))}
    </div>
  );
};