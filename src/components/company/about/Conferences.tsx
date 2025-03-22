import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import nyu_conf from "../../../assets/nyu_conf.png";
import wbs_conf from "../../../assets/wbs_conf.png";
import vs_conf from "../../../assets/vs_conf.png";
import cornell_conf from "../../../assets/cornell_conf.png";
const conferences = [
  {
    title: "World Blockchain Summit",
    description:
      "Showcased blockchain advancements and engaged with global leaders to drive innovation in decentralized technologies.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7205506945233940480",
    image: wbs_conf,
  },
  {
    title: "Cornell Blockchain",
    description:
      "Sponsored and contributed in a panel on blockchain's institutional adoption, exploring asset tokenization, Bitcoin ETFs, and regulatory trends.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7184200294921035777",
    image: cornell_conf,
  },
  {
    title: "YoungStartup Ventures",
    description:
      "Recognized among the top 150 global innovators and presented at the 11th annual Venture Summit West, connecting with investors and strategic partners.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7181663181428162560",
    image: vs_conf,
  },
  {
    title: "NYU Venture Showcase",
    description:
      "Presented a Blockchain AI use case, received feedback from investors, and engaged with over 700 attendees, including students and NYU professors.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7172938272736833536",
    image: nyu_conf,
  },
];

export const Conferences: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Conferences and Recognitions
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing our innovations and thought leadership in the blockchain
            and AI space
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {conferences.map((conference, index) => (
            <motion.div
              key={conference.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light/30"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
                <img
                  src={conference.image}
                  alt={conference.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                    <Award className="h-5 w-5 text-brand" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                  {conference.title}
                </h3>
                <p className="text-gray-600 mb-4">{conference.description}</p>
                <a
                  href={conference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand hover:text-brand-dark transition-colors"
                >
                  View Details →
                </a>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
