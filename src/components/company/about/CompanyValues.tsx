import React from "react";
import { Shield, Code, Users, Rocket } from "lucide-react";
import { CompanyValue } from "./CompanyValue";

const values = [
  {
    icon: Shield,
    title: "Excellence",
    description:
      "Committed to delivering top-quality blockchain solutions for AI companies",
  },
  {
    icon: Code,
    title: "Innovation",
    description: "Pushing boundaries with next-generation data infrastructure",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Dedicated to meeting diverse client needs across industries",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Enabling AI companies to scale with optimized data solutions",
  },
];

export const CompanyValues: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <CompanyValue key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
