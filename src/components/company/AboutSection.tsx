import React from "react";
import { AboutHero } from "./about/AboutHero";
import { Vision } from "./about/Vision";
import { Conferences } from "./about/Conferences";
import { Team } from "./about/Team";
import { Commitment } from "./about/Commitment";
import { Approach } from "./about/Approach";

export const AboutSection: React.FC = () => {
  return (
    <div className="relative ">
      <AboutHero />
      <Vision />
      <Conferences />
      <Team />
      <Commitment />
      <Approach />
    </div>
  );
};
