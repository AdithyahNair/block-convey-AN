import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToFeature } from "../../../utils/scroll";

const navLinks = {
  Product: [
    { name: "Features", path: "/solutions", external: false },
    { name: "Pricing", path: "/pricing#plans", external: false },
  ],
  Company: [
    { name: "About", path: "/company#aboutus", external: false },
    { name: "Contact", path: "/company#contact", external: false },
  ],
  Resources: [
    {
      name: "AI Governance Monitor",
      path: "/resources#governance",
      external: false,
    },
    {
      name: "Insights on AI in Finance",
      path: "/resources#insights",
      external: false,
    },
    {
      name: "Blockchain in Finance",
      path: "/resources#blockchain",
      external: false,
    },
    { name: "Tools and Frameworks", path: "/resources#tools", external: false },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/privacy#hero", external: false },
    { name: "Terms of Service", path: "/terms#hero", external: false },
  ],
};

export const FooterNavLinks: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    const [route, hash] = path.split("#");

    // Navigate to the page first
    navigate(route);

    // If there's a hash, scroll to the section
    if (hash) {
      scrollToFeature(hash);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {Object.entries(navLinks).map(([category, links]) => (
        <div key={category}>
          <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    onClick={() => handleClick(link.path)}
                    className="text-gray-600 hover:text-brand transition-colors text-left"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
