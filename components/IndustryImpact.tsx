'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { TrendingUp, Clock, Shield, Eye } from 'lucide-react'

export default function IndustryImpact() {
  const { t } = useTranslation()

  const stats = [
    {
      icon: Shield,
      valueKey: 'impact.stats.integrity.value',
      labelKey: 'impact.stats.integrity.label',
      descriptionKey: 'impact.stats.integrity.description'
    },
    {
      icon: Clock,
      valueKey: 'impact.stats.inspections.value',
      labelKey: 'impact.stats.inspections.label',
      descriptionKey: 'impact.stats.inspections.description'
    },
    {
      icon: Eye,
      valueKey: 'impact.stats.audit.value',
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
    <section className="py-20 bg-arts-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 text-white text-balance">
            {t('impact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            {t('impact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="text-4xl font-bold text-arts-green mb-2"
                >
                  {t(stat.valueKey)}
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
