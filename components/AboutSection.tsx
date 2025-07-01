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

  const aboutStats = [
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
    <section id="about" className="pt-20 relative min-h-screen flex flex-col gap-16 justify-start items-center overflow-hidden">
      <div className="w-full lg:max-w-[80vw] mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="text-start mb-10"
            >
              <h2 className="mb-6 text-arts-light text-balance font-title">
                {t("about.title")}
              </h2>
              <p className="text-arts-light mr-auto mt-10 font-subtitle">
                {t("about.subtitle")}
              </p>
            </motion.div>
            {/* Content */}
            <motion.div>
              <p
                className="text-arts-light mb-8 font-text"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {t("about.description")}
              </p>

              <motion.ul className="space-y-3 font-text">
                {aboutStats.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-arts-green rounded-full"
                    />
                    <span className="text-arts-light">
                      {t(item.labelKey)} {t(item.sublabelKey)}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            className="relative mx-auto"
          >
            <div className="space-y-16 pt-8 z-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-6"
                >
                  <div className="w-20 h-20 bg-arts-teal/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-arts-green text-arts-light font-subtitle-alt">
                    {milestone.year}
                  </div>
                  <div>
                     <h3 className="text-arts-light mb-2 font-text-important">
                        {t(milestone.eventKey)}
                      </h3>
                      <p className="text-arts-light font-text">
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
