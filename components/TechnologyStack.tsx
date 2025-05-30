'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Brain, Lock, Zap, CheckCircle } from 'lucide-react'
import React from 'react'

export default function TechnologyStack() {
  const { t } = useTranslation()

  const technologies = [
    {
      icon: Lock,
      titleKey: 'technology.blockchain.title',
      descriptionKey: 'technology.blockchain.description',
      featuresKeys: [
        'technology.blockchain.features.ledger',
        'technology.blockchain.features.contracts',
        'technology.blockchain.features.security'
      ]
    },
    {
      icon: Brain,
      titleKey: 'technology.ai.title',
      descriptionKey: 'technology.ai.description',
      featuresKeys: [
        'technology.ai.features.learning',
        'technology.ai.features.recognition',
        'technology.ai.features.analytics'
      ]
    },
    {
      icon: Zap,
      titleKey: 'technology.realtime.title',
      descriptionKey: 'technology.realtime.description',
      featuresKeys: [
        'technology.realtime.features.streams',
        'technology.realtime.features.notifications',
        'technology.realtime.features.dashboards'
      ]
    },
    {
      icon: CheckCircle,
      titleKey: 'technology.compliance.title',
      descriptionKey: 'technology.compliance.description',
      featuresKeys: [
        'technology.compliance.features.tracking',
        'technology.compliance.features.reports',
        'technology.compliance.features.trails'
      ]
    }
  ]

  return (
    <section id="technology" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-r from-arts-green/10 to-arts-lime/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-arts-navy/10 to-arts-teal/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <span className="inline-block text-base font-semibold tracking-wider uppercase text-white bg-arts-green px-4 py-2 rounded-full">
              {t('technology.metraBackbone')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6 text-arts-navy text-balance">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-arts-gray max-w-3xl mx-auto text-balance">
            {t('technology.metraDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-arts-green transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-arts-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-arts-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-arts-navy">{t(tech.titleKey)}</h3>
                      <p className="text-arts-gray mb-4 text-balance">{t(tech.descriptionKey)}</p>
                      <ul className="space-y-1">
                        {tech.featuresKeys.map((featureKey, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-arts-gray flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-arts-green rounded-full"></div>
                            <span>{t(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="flex items-center justify-center">
            <img src="reactor.png" alt="Reactor" style={{ borderRadius: '20px' }}/>
          </div>
        </div>
      </div>
    </section>
  )
}
