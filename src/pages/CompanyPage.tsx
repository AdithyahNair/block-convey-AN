import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { AboutSection } from "../components/company/AboutSection";
import { ContactSection } from "../components/company/ContactSection";

export const CompanyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
