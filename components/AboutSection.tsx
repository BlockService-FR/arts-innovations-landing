"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, Globe, Zap, TrendingUp, Clock, Shield, Eye } from "lucide-react";
import AnimatedCounter from './ui/AnimatedCounter'

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

    const impactStats = [
    {
      icon: Shield,
      value: 99.9,
      labelKey: 'impact.stats.integrity.label',
      descriptionKey: 'impact.stats.integrity.description'
    },
    {
      icon: Clock,
      value: 50,
      labelKey: 'impact.stats.inspections.label',
      descriptionKey: 'impact.stats.inspections.description'
    },
    {
      icon: Eye,
      value: 100,
      labelKey: 'impact.stats.audit.label',
      descriptionKey: 'impact.stats.audit.description'
    },
    {
      icon: TrendingUp,
      valueKey: 'impact.stats.monitoring.value',
      labelKey: 'impact.stats.monitoring.label',
      descriptionKey: 'impact.stats.monitoring.description'
    }
  ]

  return (
    <section id="about" className="py-20 relative min-h-screen flex flex-col gap-16 justify-start items-center overflow-hidden mt-10">
      <div className="max-w-[70vw] mx-auto my-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-40">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          className="mb-10 md:order-2 text-end"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 text-white text-balance">
            {t('impact.title')}
          </h2>
          <p className="text-4xl text-gray-300 ml-auto mt-10">
            {t('impact.subtitle')}
          </p>
          <p className="text-2xl text-gray-300 max-w-3xl ml-auto mt-10">
            {t('impact.description')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:order-1">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-arts-teal/50 backdrop-blur-sm rounded-2xl border border-arts-light hover:border-arts-green transition-all duration-300"
              >
                <div className="w-16 h-16 bg-arts-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-arts-navy" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="text-4xl font-bold text-arts-green mb-2"
                >
                  {/* <AnimatedCounter from={0} to={99} /> */}
                  {stat.valueKey ? t(stat.valueKey) : <AnimatedCounter from={0} to={stat.value!} suffix="%"/>}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">{t(stat.labelKey)}</h3>
                <p className="text-gray-300 text-sm">{t(stat.descriptionKey)}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
      <div className="max-w-[70vw] mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-start mb-10"
            >
              <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 text-white text-balance">
                {t("about.title")}
              </h2>
              <p className="text-4xl text-gray-300 mr-auto mt-10">
                {t("about.subtitle")}
              </p>
            </motion.div>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <p
                className="text-2xl text-arts-gray mb-8"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {t("about.description")}
              </p>

              <motion.ul className="text-xl space-y-3">
                {aboutStats.map((item, index) => (
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
            className="relative mx-auto"
          >
            <div className="space-y-16 pt-8 z-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-20 h-20 bg-arts-green rounded-full flex items-center justify-center text-arts-navy font-bold">
                    {milestone.year}
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-2">
                        {t(milestone.eventKey)}
                      </h3>
                      <p className="text-xl text-gray-300">
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
