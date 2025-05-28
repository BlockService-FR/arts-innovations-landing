'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Shield, Clock, FileCheck, Users } from 'lucide-react'

export default function ValueProposition() {
  const { t } = useTranslation()

  const benefits = [
    {
      icon: Shield,
      titleKey: 'valueProposition.benefits.tamperProof.title',
      descriptionKey: 'valueProposition.benefits.tamperProof.description'
    },
    {
      icon: Clock,
      titleKey: 'valueProposition.benefits.realTime.title',
      descriptionKey: 'valueProposition.benefits.realTime.description'
    },
    {
      icon: FileCheck,
      titleKey: 'valueProposition.benefits.compliance.title',
      descriptionKey: 'valueProposition.benefits.compliance.description'
    },
    {
      icon: Users,
      titleKey: 'valueProposition.benefits.experience.title',
      descriptionKey: 'valueProposition.benefits.experience.description'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            {t('valueProposition.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('valueProposition.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-96"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.1)'
                }}
                className={`md:col-span-2 bg-linear-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500 transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t(benefit.titleKey)}</h3>
                    <p className="text-gray-400">{t(benefit.descriptionKey)}</p>
                  </div>
                  

                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
