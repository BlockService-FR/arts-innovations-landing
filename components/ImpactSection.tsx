"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, Globe, Zap, TrendingUp, Clock, Shield, Eye } from "lucide-react";
import AnimatedCounter from './ui/AnimatedCounter'

export default function ImpactSection() {
  const { t } = useTranslation();

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
    <section id="impact" className="pt-20 relative min-h-screen flex flex-col gap-16 justify-start items-center overflow-hidden">
      <div className="w-full lg:max-w-[80vw] mx-auto my-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">

        <motion.div
          
          className="mb-10 lg:order-2 text-center lg:text-end"
        >
          <h2 className="mb-6 text-arts-light text-balance font-title">
            {t('impact.title')}
          </h2>
          <p className="text-arts-light ml-auto mt-10 font-subtitle">
            {t('impact.subtitle')}
          </p>
          <p className="text-arts-light max-w-3xl ml-auto mt-10 font-text">
            {t('impact.description')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:order-1">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-arts-teal/50 backdrop-blur-sm rounded-2xl border border-arts-light hover:border-arts-green transition-all duration-300"
              >
                <div className="w-16 h-16 bg-arts-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-arts-navy" />
                </div>
                <motion.div
                  className="text-arts-green mb-2 font-content-title"
                >
                  {/* <AnimatedCounter from={0} to={99} /> */}
                  {stat.valueKey ? t(stat.valueKey) : <AnimatedCounter from={0} to={stat.value!} suffix="%"/>}
                </motion.div>
                <h3 className="mb-2 text-arts-light font-content-subtitle-important">{t(stat.labelKey)}</h3>
                <p className="text-arts-light font-text-light">{t(stat.descriptionKey)}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
