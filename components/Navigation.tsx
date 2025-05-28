'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'solutions', href: '#solutions' },
    { key: 'technology', href: '#technology' },
    { key: 'useCases', href: '#use-cases' },
    { key: 'contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-space-grotesk font-bold text-lg leading-none">
                  ARTS Innovations
                </span>
                <span className="text-xs text-amber-400 leading-none">
                  {t('hero.poweredBy')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {t(`navigation.${item.key}`)}
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800 rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(`navigation.${item.key}`)}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}