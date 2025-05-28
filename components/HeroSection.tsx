'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        {/* Blockchain network visualization */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: i * 0.5, duration: 2 }}
              className="absolute w-32 h-32 border border-cyan-500/30 rounded-lg"
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
          <div className="mb-6">
            <span className="text-lg text-amber-400 font-semibold tracking-wide uppercase">
              {t('hero.poweredBy')}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-amber-400 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
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
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(8, 145, 178, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 text-lg"
          >
            <span>{t('hero.cta')}</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <Shield size={16} className="text-emerald-400" />
            <span>{t('hero.trustIndicators.sovereign')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap size={16} className="text-amber-400" />
            <span>{t('hero.trustIndicators.compliant')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe size={16} className="text-cyan-400" />
            <span>{t('hero.trustIndicators.immutable')}</span>
          </div>
        </motion.div>
      </div>

      {/* 3D Elements */}
      <motion.div
        animate={{ 
          rotateY: 360,
          rotateX: [0, 10, 0],
        }}
        transition={{ 
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute right-10 top-1/3 w-32 h-32 opacity-20"
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg transform perspective-1000 rotateY-45"></div>
      </motion.div>
    </section>
  )
}