'use client'

import { useState, useEffect } from 'react'
import { motion, MotionValue } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

type NavigationProps = {
  isScrolled: boolean;
};

export default function Navigation({
  isScrolled
}: NavigationProps) {
  const { t } = useTranslation()
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { key: 'technology', href: '#technology' },
    { key: 'solutions', href: '#solutions' },
    { key: 'about', href: '#about' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-arts-navy/95 backdrop-blur-md border-b border-arts-green/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <a href='#'>
              <Image
                src="/logo-navigation.svg"
                alt="ARTS Innovations Logo"
                width={40}
                height={40}
                className="h-6 w-auto object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-200 hover:text-arts-green transition-colors duration-200 font-menu-text"
              >
                {t(`navigation.${item.key}`)}
              </motion.a>
            ))}
            {/* <LanguageSwitcher /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <LanguageSwitcher /> */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-arts-green transition-colors duration-200"
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
            className="md:hidden bg-arts-navy/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-arts-green/20"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2 text-gray-200 hover:text-arts-green transition-colors duration-200 font-menu-text"
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
