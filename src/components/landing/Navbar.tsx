import React, { useState } from "react";
import { NavContainer } from "./nav/NavContainer";
import { NavLogo } from "./nav/NavLogo";
import { NavLinks } from "./nav/NavLinks";
import { NavActions } from "./nav/NavActions";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Solutions",
    mainPath: "/solutions",
    subitems: [
      {
        title: "Credit Risk Assessment Module",
        description:
          "Ensure fairness and compliance in credit scoring with real-time bias detection and explainable decision-making tools",
        path: "/solutions#credit-risk-assessment",
      },
      {
        title: "Insurance Claims Module",
        description:
          "Streamline claims processing with fair, transparent, and compliant AI-powered decisions",
        path: "/solutions#insurance-claims",
      },
      {
        title: "Fraud Detection Module",
        description:
          "Monitor AI-driven fraud detection systems for accuracy, transparency, and ethical anomaly detection",
        path: "/solutions#fraud-detection",
      },
      {
        title: "Financial Advisory & Customer Service Module",
        description:
          "Enhance customer interactions with AI models that deliver personalized, unbiased, and explainable recommendations",
        path: "/solutions#financial-advisory",
      },
    ],
  },
  {
    label: "Who We Serve",
    mainPath: "/who-we-serve",
    subitems: [
      {
        title: "Financial Institutions",
        description: "Banks, investment firms, and asset managers",
        path: "/who-we-serve#hero",
      },
      {
        title: "Fintech Startups",
        description: "Digital lending and payment platforms",
        path: "/who-we-serve#fintech-startups",
      },
      {
        title: "Insurtech Companies",
        description: "Insurance providers and insurtech startups",
        path: "/who-we-serve#insurtech",
      },
      {
        title: "Specialized Services",
        description: "Fraud detection and RegTech providers",
        path: "/who-we-serve#specialized-services",
      },
    ],
  },
  {
    label: "Pricing",
    mainPath: "/pricing",
    subitems: [
      {
        title: "Pricing Plans",
        description: "Explore our Silver, Gold, and Platinum plans",
        path: "/pricing#plans",
      },
      {
        title: "Compare Plans",
        description: "Detailed feature comparison across all plans",
        path: "/pricing#compare",
      },
      {
        title: "FAQs",
        description: "Common questions about our pricing",
        path: "/pricing#faq",
      },
    ],
  },
  {
    label: "Resources",
    mainPath: "/resources",
    subitems: [
      {
        title: "AI Governance Monitor",
        description: "Track developments in AI governance and compliance",
        path: "/resources#hero",
      },
      {
        title: "Insights on AI in Finance",
        description:
          "Latest trends and developments in AI-powered financial services",
        path: "/resources#insights",
      },
      {
        title: "Blockchain in Finance",
        description: "How blockchain technology transforms financial services",
        path: "/resources#blockchain",
      },
      {
        title: "Tools and Frameworks",
        description: "Essential resources for implementing AI governance",
        path: "/resources#tools",
      },
    ],
  },
  {
    label: "Company",
    mainPath: "/company",
    subitems: [
      {
        title: "About Us",
        description: "Our mission and team",
        path: "/company#aboutus",
      },
      {
        title: "Contact",
        description: "Get in touch with us",
        path: "/company#contact",
      },
    ],
  },
  {
    label: "Services",
    mainPath: "/services",
    subitems: [
      {
        title: "Storage",
        description: "Comprehensive Storage Solution",
        path: "/services#storage",
      },
      {
        title: "Consulting",
        description: "Strategic AI governance advice",
        path: "/consulting#hero",
      },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-8">
          <NavLogo />
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavLinks items={navItems} />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <NavActions />
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 pb-4 px-4">
          <div className="border-t pt-4">
            <NavLinks items={navItems} />
            <div className="mt-4">
              <NavActions />
            </div>
          </div>
        </div>
      )}
    </NavContainer>
  );
};
