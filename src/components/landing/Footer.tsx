import React from "react";
import { FooterLogo } from "./footer/FooterLogo";
import { FooterNavLinks } from "./footer/FooterNavLinks";
import { FooterSocialLinks } from "./footer/FooterSocialLinks";
import { FooterCopyright } from "./footer/FooterCopyright";
import { NewsletterForm } from "./footer/NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-brand-lightest to-white border-t border-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8">
            <FooterLogo />
            <p className="text-gray-600 max-w-md">
              Revolutionizing enterprise AI with blockchain-powered governance
              solutions for transparent, compliant, and efficient operations.
            </p>
            <NewsletterForm />
          </div>
          <div className="lg:col-span-8">
            <FooterNavLinks />
          </div>
        </div>
        <div className="border-t border-brand-light/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <FooterCopyright />
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
};
