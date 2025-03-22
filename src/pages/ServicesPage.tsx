import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { StorageService } from "../components/services/StorageService";
import { ServicesCTA } from "../components/common/cta/ServicesCTA";

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <StorageService />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};
