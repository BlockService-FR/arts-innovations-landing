'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Database, Shield, Smartphone, QrCode, Network, Sparkles } from 'lucide-react'

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
      textColor: 'text-blue-900',
      titleColor: 'text-blue-900'
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
      // Green theme for security (matching ARTS brand)
      primaryColor: '#166534',
      secondaryColor: '#16a34a',
      accentColor: '#22c55e',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverBorderColor: 'hover:border-green-400',
      iconBg: 'bg-green-600',
      textColor: 'text-green-900',
      titleColor: 'text-green-900'
    },
    {
      id: 'metrablockchain',
      icon: Network,
      titleKey: 'solutions.metrablockchain.title',
      subtitleKey: 'solutions.metrablockchain.subtitle',
      descriptionKey: 'solutions.metrablockchain.description',
      featuresKeys: [
        'solutions.metrablockchain.features.sovereign',
        'solutions.metrablockchain.features.immutable',
        'solutions.metrablockchain.features.smartContracts',
        'solutions.metrablockchain.features.interoperability'
      ],
      // Purple theme for blockchain infrastructure
      primaryColor: '#7c3aed',
      secondaryColor: '#8b5cf6',
      accentColor: '#a78bfa',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverBorderColor: 'hover:border-purple-400',
      iconBg: 'bg-purple-600',
      textColor: 'text-purple-900',
      titleColor: 'text-purple-900'
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
      titleColor: 'text-orange-900'
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
      titleColor: 'text-teal-900'
    }
  ]

  // Split solutions into rows: [2, 1, 2]
  const firstRowSolutions = solutions.slice(0, 2)
  const middleSolution = solutions[2] // MetraBlockchain
  const lastRowSolutions = solutions.slice(3, 5)

  const renderSolutionCard = (solution: any, index: number) => {
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
              
              {/* Title with better hierarchy */}
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

          {/* Features List - Enhanced Visual Hierarchy */}
          <div className="mb-8">
            <h4 className={`text-lg font-semibold ${solution.textColor} mb-4`}>
              {t('solutions.keyFeatures')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.featuresKeys.map((featureKey: string, featureIndex: number) => (
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

          {/* CTA Button with improved accessibility */}
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
            onFocus={(e) => (e.target as HTMLElement).style.boxShadow = `0 0 0 4px ${solution.accentColor}40`}
            onBlur={(e) => (e.target as HTMLElement).style.boxShadow = `0 4px 14px 0 ${solution.primaryColor}40`}
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
  }

  return (
    <section id="solutions" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="mb-6">
            <span className="inline-block text-base font-semibold tracking-wider uppercase text-white bg-arts-green px-6 py-3 rounded-full shadow-lg">
              {t('solutions.subtitle')}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-8 text-arts-navy leading-tight">
            {t('solutions.title')}
          </h2>
          <p className="text-xl md:text-2xl text-arts-gray max-w-4xl mx-auto leading-relaxed">
            {t('solutions.description')}
          </p>

          {/* Divider Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-arts-green to-transparent"
          />
        </motion.div>

        {/* Solutions Grid - Custom Layout */}
        <div className="space-y-8 lg:space-y-12">
          {/* First Row - 2 Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {firstRowSolutions.map((solution, index) => renderSolutionCard(solution, index))}
          </div>

          {/* Middle Row - MetraBlockchain Centered */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {renderSolutionCard(middleSolution, 2)}
            </div>
          </div>

          {/* Last Row - 2 Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {lastRowSolutions.map((solution, index) => renderSolutionCard(solution, index + 3))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-arts-navy rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
              {t('solutions.cta.title')}
            </h3>
            <p className="text-lg lg:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('solutions.cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-arts-green text-arts-navy font-semibold py-4 px-8 rounded-xl text-lg hover:bg-arts-lime transition-all duration-300 shadow-lg"
            >
              {t('solutions.cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
