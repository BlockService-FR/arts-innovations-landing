"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, Globe, Zap } from "lucide-react";

export default function AboutSection() {
  const { t } = useTranslation();

  const milestones = [
    {
      year: "2010",
      eventKey: "about.timeline.2000.event",
      descriptionKey: "about.timeline.2000.description",
    },
    {
      year: "2020",
      eventKey: "about.timeline.2020.event",
      descriptionKey: "about.timeline.2020.description",
    },
    {
      year: "2024",
      eventKey: "about.timeline.2024.event",
      descriptionKey: "about.timeline.2024.description",
    },
    {
      year: "2025",
      eventKey: "about.timeline.2025.event",
      descriptionKey: "about.timeline.2025.description",
    },
  ];

  const stats = [
    {
      icon: Award,
      labelKey: "about.stats.experience.label",
      sublabelKey: "about.stats.experience.sublabel",
    },
    {
      icon: Users,
      labelKey: "about.stats.clients.label",
      sublabelKey: "about.stats.clients.sublabel",
    },
    {
      icon: Globe,
      labelKey: "about.stats.countries.label",
      sublabelKey: "about.stats.countries.sublabel",
    },
    {
      icon: Zap,
      labelKey: "about.stats.reliability.label",
      sublabelKey: "about.stats.reliability.sublabel",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 text-white text-balance">
                {t("about.title")}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
                {t("about.subtitle")}
              </p>
            </motion.div>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <p
                className="text-xl text-arts-gray mb-8"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {t("about.description")}
              </p>

              <motion.ul className="text-xl space-y-3">
                {stats.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-arts-green rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    />
                    <span className="text-gray-200">
                      {t(item.labelKey)} {t(item.sublabelKey)}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-16 h-16 bg-arts-green rounded-full flex items-center justify-center text-arts-navy font-bold">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {t(milestone.eventKey)}
                    </h3>
                    <p className="text-arts-gray">
                      {t(milestone.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
