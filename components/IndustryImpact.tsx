'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { TrendingUp, Clock, Shield, Eye } from 'lucide-react'
import AnimatedCounter from './ui/AnimatedCounter'

export default function IndustryImpact() {
  const { t } = useTranslation()

  const stats = [
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
    <section id="impact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          className="text-center mb-16 md:order-2"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 text-white text-balance">
            {t('impact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            {t('impact.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:order-1">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-arts-teal/50 backdrop-blur-sm rounded-2xl border border-arts-green/20 hover:border-arts-green transition-all duration-300"
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
    </section>
  )
}
