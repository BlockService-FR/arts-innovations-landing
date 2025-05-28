'use client'

import { useState } from 'react'
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

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-600 hover:border-cyan-500 transition-all duration-300"
      >
        <Globe size={16} className="text-gray-400" />
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-sm text-gray-300">{currentLanguage.name}</span>
        <ChevronDown 
          size={16} 
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-slate-800 rounded-lg border border-slate-600 shadow-xl z-50 min-w-[150px]"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  language.code === i18n.language 
                    ? 'bg-cyan-500/10 text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
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