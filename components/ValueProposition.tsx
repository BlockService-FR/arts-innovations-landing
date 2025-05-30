'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Shield, Clock, FileCheck, Users, ArrowDown } from 'lucide-react'

export default function ValueProposition() {
  const { t } = useTranslation()

  const benefits = [
    {
      icon: Shield,
      titleKey: 'valueProposition.benefits.tamperProof.title',
      descriptionKey: 'valueProposition.benefits.tamperProof.description',
      size: "medium"
    },
    {
      icon: Clock,
      titleKey: 'valueProposition.benefits.realTime.title',
      descriptionKey: 'valueProposition.benefits.realTime.description',
      size: "medium"
    },
    {
      icon: FileCheck,
      titleKey: 'valueProposition.benefits.compliance.title',
      descriptionKey: 'valueProposition.benefits.compliance.description',
      size: "medium"
    },
    {
      icon: Users,
      titleKey: 'valueProposition.benefits.experience.title',
      descriptionKey: 'valueProposition.benefits.experience.description',
      size: "small"
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
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6 text-arts-navy">
            {t('valueProposition.title')}
          </h2>
          <p className="text-xl text-arts-gray max-w-3xl mx-auto">
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
            const gridClass = benefit.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                             benefit.size === 'medium' ? 'md:col-span-2' : 'md:col-span-2'
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(154, 255, 0, 0.1)'
                }}
                className={`${gridClass} bg-white rounded-2xl p-6 border border-gray-200 hover:border-arts-green transition-all duration-300 shadow-lg`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-arts-green rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-arts-navy" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-arts-navy">{t(benefit.titleKey)}</h3>
                    <p className="text-arts-gray">{t(benefit.descriptionKey)}</p>
                  </div>
                  
                  {benefit.size === 'large' && (
                    <div className="mt-auto">
                      <div className="w-full h-32 bg-linear-to-r from-arts-green/10 to-arts-lime/10 rounded-lg flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="text-6xl opacity-30"
                        >
                          🔗
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Transition Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg text-arts-gray font-medium">
              {t('valueProposition.transition')}
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 bg-arts-green rounded-full flex items-center justify-center"
            >
              <ArrowDown size={24} className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arts-green/30 to-transparent"></div>
    </section>
  )
}
