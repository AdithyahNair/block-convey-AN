import { LucideIcon } from "lucide-react";

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  popular?: boolean;
  theme: {
    background: string;
    hover: string;
    border: string;
    icon: string;
    text: string;
  };
}

export interface ComparisonItem {
  name: string;
  silver: string | boolean;
  gold: string | boolean;
  platinum: string | boolean;
}

export interface ComparisonCategory {
  category: string;
  items: ComparisonItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}
