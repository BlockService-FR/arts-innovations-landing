'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const { t } = useTranslation()

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions')
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        {/* Corrected gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-arts-dark/90 via-arts-navy/85 to-arts-teal/80"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: i * 0.5, duration: 2 }}
              className="absolute w-32 h-32 border border-arts-green/30 rounded-lg"
              style={{
                left: `${20 + (i % 3) * 30}%`,
                top: `${20 + Math.floor(i / 3) * 40}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="w-40 h-40 rounded-lg flex items-center justify-center p-2">
              <Image
                src="/logo-green.svg"
                alt="ARTS Innovations Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-white via-arts-light to-arts-green bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto text-balance">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            onClick={scrollToSolutions}
            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-arts)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-arts-green to-arts-lime text-arts-dark px-8 py-4 rounded-full font-semibold flex items-center space-x-2 text-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span>{t('hero.cta')}</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300"
        >
          <div className="flex items-center space-x-2">
            <Shield size={16} className="text-arts-green" />
            <span>{t('hero.trustIndicators.sovereign')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap size={16} className="text-arts-lime" />
            <span>{t('hero.trustIndicators.compliant')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe size={16} className="text-arts-green" />
            <span>{t('hero.trustIndicators.immutable')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
