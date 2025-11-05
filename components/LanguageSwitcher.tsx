'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fix hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Get current language, fallback to 'en' if not found
  const getCurrentLanguage = () => {
    if (!mounted) return languages[0] // Return default during SSR
    return languages.find(lang => lang.code === i18n.language.substring(0,2)) || languages[0]
  }

  const currentLanguage = getCurrentLanguage()

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center space-x-2 px-3 py-2 bg-elevated/50 rounded-lg border border-neutral-600">
        <Globe size={16} className="text-muted" />
        {/* <span className="text-sm">🇺🇸</span>
        <span className="text-sm text-muted">English</span> */}
        <ChevronDown size={16} className="text-muted" />
      </div>
    )
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-elevated/50 rounded-lg border border-neutral-600 hover:border-accent transition-all duration-300"
      >
        <Globe size={16} className="text-muted" />
        <span className="text-sm">{currentLanguage.flag}</span>
        {/* <span className="text-sm text-muted">{currentLanguage.name}</span> */}
        <ChevronDown
          size={16}
          className={`text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-elevated rounded-lg border border-neutral-600 shadow-xl z-50 min-w-[150px]"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                whileHover={{ backgroundColor: 'rgb(from var(--color-brand-accent) r g b / 0.1)' }}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  language.code === i18n.language
                    ? 'bg-brand-accent/10 text-accent'
                    : 'text-muted hover:text-primary'
                }`}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
