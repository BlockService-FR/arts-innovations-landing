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
    <section id="technology" className="py-20 bg-linear-to-br from-slate-800 to-slate-900 relative overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-r from-cyan-500/10 to-blue-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('technology.subtitle')}
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
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{t(tech.titleKey)}</h3>
                      <p className="text-gray-400 mb-4">{t(tech.descriptionKey)}</p>
                      <ul className="space-y-1">
                        {tech.featuresKeys.map((featureKey, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
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

          {/* 3D Visualization */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md h-96"
            >
              {/* Central Brain/AI Node */}
              <motion.div
                animate={{
                  rotateY: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Brain size={32} className="text-white" />
              </motion.div>

              {/* Orbiting Elements */}
              {[0, 90, 180, 270].map((rotation, index) => (
                <motion.div
                  key={index}
                  animate={{
                    rotate: rotation + 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                  className="absolute top-1/2 left-1/2 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ transformOrigin: 'center' }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    {React.createElement(technologies[index]?.icon || Lock, { size: 20, className: "text-white" })}
                  </div>
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.circle
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  cx="50%"
                  cy="50%"
                  r="96"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
