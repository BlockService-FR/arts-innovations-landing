'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Database, Shield, Smartphone, QrCode } from 'lucide-react'

export default function SolutionsShowcase() {
  const { t } = useTranslation()
  const [activeCard, setActiveCard] = useState(0)

  const solutions = [
    {
      id: 'pselion',
      icon: Database,
      titleKey: 'solutions.pselion.title',
      subtitleKey: 'solutions.pselion.subtitle',
      descriptionKey: 'solutions.pselion.description',
      featuresKeys: [
        'solutions.pselion.features.lifecycle',
        'solutions.pselion.features.compliance',
        'solutions.pselion.features.preservation',
        'solutions.pselion.features.monitoring'
      ],
      color: 'from-cyan-600 to-blue-700'
    },
    {
      id: 'metrasign',
      icon: Shield,
      titleKey: 'solutions.metrasign.title',
      subtitleKey: 'solutions.metrasign.subtitle',
      descriptionKey: 'solutions.metrasign.description',
      featuresKeys: [
        'solutions.metrasign.features.immutable',
        'solutions.metrasign.features.certification',
        'solutions.metrasign.features.audit',
        'solutions.metrasign.features.security'
      ],
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'metraseal',
      icon: QrCode,
      titleKey: 'solutions.metraseal.title',
      subtitleKey: 'solutions.metraseal.subtitle',
      descriptionKey: 'solutions.metraseal.description',
      featuresKeys: [
        'solutions.metraseal.features.nfc',
        'solutions.metraseal.features.identity',
        'solutions.metraseal.features.security',
        'solutions.metraseal.features.antiCounterfeiting'
      ],
      color: 'from-amber-600 to-orange-700'
    },
    {
      id: 'metrafield',
      icon: Smartphone,
      titleKey: 'solutions.metrafield.title',
      subtitleKey: 'solutions.metrafield.subtitle',
      descriptionKey: 'solutions.metrafield.description',
      featuresKeys: [
        'solutions.metrafield.features.mobile',
        'solutions.metrafield.features.reports',
        'solutions.metrafield.features.blockchain',
        'solutions.metrafield.features.inspections'
      ],
      color: 'from-purple-600 to-indigo-700'
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-lg text-amber-400 font-semibold tracking-wide uppercase">
              {t('solutions.subtitle')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('solutions.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isActive = activeCard === index

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveCard(index)}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isActive ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' : 'border-slate-600'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-10`}></div>
                
                <div className="relative p-8 bg-slate-800/90 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-1">{t(solution.titleKey)}</h3>
                      <span className="text-sm text-gray-400 uppercase tracking-wide">{t(solution.subtitleKey)}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {t(solution.descriptionKey)}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.featuresKeys.map((featureKey, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{t(featureKey)}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg bg-gradient-to-r ${solution.color} text-white font-semibold transition-all duration-300`}
                  >
                    {t('solutions.learnMore')}
                  </motion.button>
                </div>

                {/* Animated Background Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-400/10 rounded-full"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
