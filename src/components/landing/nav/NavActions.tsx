import React from "react";
import { ArrowRight } from "lucide-react";

export const NavActions: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://calendly.com/arunprasad-11/product-demo-call"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand text-white px-4 py-2 rounded-xl hover:bg-brand-dark transition-colors font-medium text-center flex items-center gap-2"
      >
        Book Demo
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
};
