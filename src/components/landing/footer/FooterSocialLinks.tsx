import React from "react";
import { Linkedin, Twitter, Link, Instagram } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/block-convey-llc/mycompany/?viewAsMember=true",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/blockconvey?s=20",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/blockconvey/profilecard/?igsh=MTdvZTMzNHRmZ25tMA==",
    label: "Instagram",
  },
  {
    icon: Link,
    href: "https://www.threads.net/@blockconvey?igshid=MzRlODBiNWFlZA%3D%3D",
    label: "Threads",
  },
];

export const FooterSocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-brand transition-colors"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};
