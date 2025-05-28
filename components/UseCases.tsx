'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Plane, Wrench, Building2 } from 'lucide-react'

export default function UseCases() {
  const { t } = useTranslation()

  const useCases = [
    {
      icon: Building2,
      titleKey: 'useCases.lessor.title',
      descriptionKey: 'useCases.lessor.description',
      benefitsKeys: [
        'useCases.lessor.benefits.handovers',
        'useCases.lessor.benefits.documentation',
        'useCases.lessor.benefits.preservation',
        'useCases.lessor.benefits.audit'
      ],
      color: 'from-cyan-600 to-blue-700'
    },
    {
      icon: Wrench,
      titleKey: 'useCases.oems.title',
      descriptionKey: 'useCases.oems.description',
      benefitsKeys: [
        'useCases.oems.benefits.verification',
        'useCases.oems.benefits.fraud',
        'useCases.oems.benefits.compliance',
        'useCases.oems.benefits.supply'
      ],
      color: 'from-emerald-600 to-teal-700'
    },
    {
      icon: Plane,
      titleKey: 'useCases.operators.title',
      descriptionKey: 'useCases.operators.description',
      benefitsKeys: [
        'useCases.operators.benefits.centralized',
        'useCases.operators.benefits.compliance',
        'useCases.operators.benefits.risk',
        'useCases.operators.benefits.efficiency'
      ],
      color: 'from-amber-600 to-orange-700'
    }
  ]

  return (
    <section id="use-cases" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            {t('useCases.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${useCase.color} flex items-center justify-center mb-6`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{t(useCase.titleKey)}</h3>
                <p className="text-gray-400 mb-6">{t(useCase.descriptionKey)}</p>
                
                <ul className="space-y-3">
                  {useCase.benefitsKeys.map((benefitKey, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{t(benefitKey)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
