import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Linkedin } from "lucide-react";
import arun_team from "../../../assets/arun_team.png";
import tim_team from "../../../assets/tim_team.png";
import cam_team from "../../../assets/cam_team.png";
import wei_adv from "../../../assets/wei_adv.png";
import gou_adv from "../../../assets/gou_adv.png";
import veera_adv from "../../../assets/veera_adv.png";
import illias_adv from "../../../assets/illias_adv.png";
import son_le from "../../../assets/son_le.png";
import connor from "../../../assets/connor.png";
const teamMembers = {
  leadership: [
    {
      name: "Arun Prasad",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/arun-p-0b037688/",
      image: arun_team,
    },
    {
      name: "Tim Adamson",
      role: "CTO",
      linkedin: "https://www.linkedin.com/in/tim-adamson21/",
      image: tim_team,
    },
    {
      name: "Cameron Kawato",
      role: "VP of Compliance",
      linkedin: "https://www.linkedin.com/in/cameronkawato/",
      image: cam_team,
    },
    {
      name: "Connor McCoy",
      role: "Investor Relations Manager",
      linkedin: "https://www.linkedin.com/in/cp-mccoy/",
      image: connor,
    },
  ],
  advisors: [
    {
      name: "Son Le",
      role: "Fractional CFO, Advisor",
      linkedin: "https://www.facebook.com/share/1BQm6sjkmS/?mibextid=wwXIfr",
      image: son_le,
    },
    {
      name: "Weiyee In",
      role: "Banking and AI Governance",
      linkedin: "https://www.linkedin.com/in/weiyee/",
      image: wei_adv,
    },
    {
      name: "Gourab Mukerjee",
      role: "Insurtech",
      linkedin: "https://www.linkedin.com/in/gourabmukherjee/",
      image: gou_adv,
    },
    {
      name: "Veera Budhi",
      role: "Blockchain and AI",
      linkedin: "https://www.linkedin.com/in/veerabudhi/",
      image: veera_adv,
    },
    {
      name: "Ilais Anwar",
      role: "Marketing and Community Building",
      linkedin: "https://www.linkedin.com/in/iliasanwar/",
      image: illias_adv,
    },
  ],
};

interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  image: string;
}

const TeamSection: React.FC<{
  title: string;
  members: TeamMember[];
  icon: typeof Users;
  delay: number;
}> = ({ title, members, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.2 }}
      className="space-y-6 "
    >
      <div className="flex items-center gap-3 mb-6 ">
        <div className="p-2 bg-brand-light/20 rounded-lg">
          <Icon className="h-6 w-6 text-brand" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 border border-brand-light/30">
              {/* Image Container */}
              <div className="relative  overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-brand-light">{member.role}</p>
                </div>
              </div>

              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-30 p-2 bg-white/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-brand hover:text-brand-dark transition-colors" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const Team: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-brand-light/75 to-brand-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            A diverse group of experts dedicated to revolutionizing AI
            governance
          </p>
        </motion.div>

        <div className="space-y-24">
          <TeamSection
            title="Core Team"
            members={teamMembers.leadership}
            icon={Users}
            delay={0}
          />
          <TeamSection
            title="Advisors"
            members={teamMembers.advisors}
            icon={Lightbulb}
            delay={1}
          />
        </div>
      </div>
    </div>
  );
};
