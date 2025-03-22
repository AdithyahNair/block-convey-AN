import { Shield, Award, Crown } from "lucide-react";
import { Plan } from "../types";

export const pricingData: Plan[] = [
  {
    name: "Silver",
    price: "$99",
    description:
      "Ideal for startups and small teams to build a foundation for managing financial AI models.",
    features: [
      "Key Features:",
      "Blockchain Logging: Immutable audit trails",
      "Credit Risk Assessment: Basic evaluation tools",
      "Fraud Detection: Foundational alerts",
      "Risk Monitoring: Standard tools",
    ],
    icon: Shield,
    theme: {
      background:
        "bg-gradient-to-br from-slate-50 via-slate-100/80 to-slate-200/50",
      hover:
        "bg-gradient-to-br from-slate-100 via-slate-200/80 to-slate-300/50",
      border: "border-slate-200",
      icon: "text-slate-600",
      text: "text-slate-900",
    },
  },
  {
    name: "Gold",
    price: "$299",
    description:
      "Perfect for growing organizations seeking advanced analytics and governance for financial AI models.",
    features: [
      "Everything in Silver, plus:",
      "Financial Advisory Tools: Data-driven insights for strategy",
      "Insurance Claims Processing: Simplified claims management",
      "Advanced Performance Monitoring: Detailed KPI dashboards",
    ],
    icon: Award,
    popular: true,
    theme: {
      background:
        "bg-gradient-to-br from-amber-50 via-amber-100/80 to-amber-200/50",
      hover:
        "bg-gradient-to-br from-amber-100 via-amber-200/80 to-amber-300/50",
      border: "border-amber-200",
      icon: "text-amber-600",
      text: "text-amber-900",
    },
  },
  {
    name: "Platinum",
    price: "$599",
    description:
      "Best for enterprises needing enterprise-grade tools and customization for financial AI governance.",
    features: [
      "Everything in Gold, plus:",
      "Advanced Risk Assessment Analytics: Comprehensive evaluation tools",
      "Enterprise-Grade Fraud Detection: Advanced detection and governance",
      "Unlimited events for monitoring and logging",
    ],
    icon: Crown,
    theme: {
      background:
        "bg-gradient-to-br from-indigo-50 via-indigo-100/80 to-indigo-200/50",
      hover:
        "bg-gradient-to-br from-indigo-100 via-indigo-200/80 to-indigo-300/50",
      border: "border-indigo-200",
      icon: "text-indigo-600",
      text: "text-indigo-900",
    },
  },
];
