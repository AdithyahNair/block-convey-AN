import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { ConsultingService } from "../components/services/ConsultingService";

export const ConsultingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ConsultingService />
      </main>
      <Footer />
    </div>
  );
};
