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
      // Blue theme for data management
      primaryColor: '#1e40af',
      secondaryColor: '#3b82f6',
      accentColor: '#60a5fa',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorderColor: 'hover:border-blue-400',
      iconBg: 'bg-blue-600',
      textColor: 'text-blue-900', // Dark blue for excellent contrast
      titleColor: 'text-blue-900' // Dark blue instead of green
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
      // Green theme for security but with dark text
      primaryColor: '#166534',
      secondaryColor: '#16a34a',
      accentColor: '#22c55e',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverBorderColor: 'hover:border-green-400',
      iconBg: 'bg-green-600',
      textColor: 'text-green-900',
      titleColor: 'text-green-900' // Dark green for good contrast (not bright green)
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
      // Orange theme for authentication
      primaryColor: '#7c2d12',
      secondaryColor: '#ea580c',
      accentColor: '#fb923c',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverBorderColor: 'hover:border-orange-400',
      iconBg: 'bg-orange-600',
      textColor: 'text-orange-900',
      titleColor: 'text-orange-900' // Dark orange for good contrast
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
      // Teal theme for mobile/field work
      primaryColor: '#134e4a',
      secondaryColor: '#0f766e',
      accentColor: '#14b8a6',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      hoverBorderColor: 'hover:border-teal-400',
      iconBg: 'bg-teal-600',
      textColor: 'text-teal-900',
      titleColor: 'text-teal-900' // Dark teal for good contrast
    }
  ]

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Fixed with dark navy for excellent contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="mb-6">
            <span className="inline-block text-base font-semibold tracking-wider uppercase text-white bg-arts-green px-4 py-2 rounded-full">
              {t('solutions.subtitle')}
            </span>
          </div>
          {/* Main title now uses dark navy instead of green for excellent contrast */}
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-8 text-arts-navy leading-tight">
            {t('solutions.title')}
          </h2>
          <p className="text-xl md:text-2xl text-arts-gray max-w-4xl mx-auto leading-relaxed">
            {t('solutions.description')}
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isActive = activeCard === index

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setActiveCard(index)}
                className={`
                  relative overflow-hidden rounded-3xl border-2 transition-all duration-300 shadow-lg
                  ${solution.bgColor} ${solution.borderColor} ${solution.hoverBorderColor}
                  ${isActive ? `shadow-2xl ${solution.hoverBorderColor.replace('hover:', '')}` : ''}
                `}
              >
                {/* Card Content */}
                <div className="relative p-8 lg:p-10">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      {/* Icon with improved contrast */}
                      <div 
                        className={`w-20 h-20 ${solution.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon size={36} className="text-white" />
                      </div>
                      
                      {/* Title with proper contrast - using dark colors instead of bright green */}
                      <div className="space-y-2">
                        <h3 className={`text-3xl lg:text-4xl font-bold ${solution.titleColor} leading-tight`}>
                          {t(solution.titleKey)}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                          {t(solution.subtitleKey)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description with improved readability */}
                  <div className="mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {t(solution.descriptionKey)}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className={`text-lg font-semibold ${solution.textColor} mb-4`}>
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.featuresKeys.map((featureKey, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex }}
                          className="flex items-start space-x-3 p-3 bg-white/60 rounded-lg"
                        >
                          <div 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: solution.accentColor }}
                          ></div>
                          <span className="text-sm font-medium text-gray-700 leading-relaxed">
                            {t(featureKey)}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300
                      ${solution.iconBg} text-white shadow-lg hover:shadow-xl
                      focus:outline-none focus:ring-4 focus:ring-opacity-50
                    `}
                    style={{ 
                      backgroundColor: solution.primaryColor,
                      boxShadow: `0 4px 14px 0 ${solution.primaryColor}40`
                    }}
                  >
                    {t('solutions.learnMore')}
                  </motion.button>
                </div>

                {/* Animated Background Accent */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-10"
                  style={{ backgroundColor: solution.accentColor }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section - Fixed contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-arts-navy rounded-3xl p-8 lg:p-12 text-white">
            {/* Using white text on dark background for excellent contrast */}
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-lg lg:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how METRA's blockchain backbone can bring security, traceability, 
              and regulatory trust to your aerospace asset management.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-arts-green text-arts-navy font-semibold py-4 px-8 rounded-xl text-lg hover:bg-arts-lime transition-all duration-300 shadow-lg"
            >
              Contact Our Experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
