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

  // Animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md border-b border-accent/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
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
            {navItems.map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="text-secondary hover:text-accent transition-colors duration-200 font-menu-text"
              >
                {t(`navigation.${item.key}`)}
              </motion.a>
            ))}
            {/* <LanguageSwitcher /> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="md:hidden flex items-center space-x-4"
          >
            {/* <LanguageSwitcher /> */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="text-primary hover:text-accent transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-primary/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-accent/20"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                custom={i}
                variants={mobileMenuItemVariants}
                initial="hidden"
                animate="visible"
                className="block py-2 text-secondary hover:text-accent transition-colors duration-200 font-menu-text"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(`navigation.${item.key}`)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
