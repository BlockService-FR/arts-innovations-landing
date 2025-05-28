'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      titleKey: 'footer.sections.solutions.title',
      linksKeys: [
        'footer.sections.solutions.links.realtime',
        'footer.sections.solutions.links.blockchain',
        'footer.sections.solutions.links.digital',
        'footer.sections.solutions.links.mobile'
      ]
    },
    {
      titleKey: 'footer.sections.company.title',
      linksKeys: [
        'footer.sections.company.links.about',
        'footer.sections.company.links.team',
        'footer.sections.company.links.careers',
        'footer.sections.company.links.news'
      ]
    },
    {
      titleKey: 'footer.sections.resources.title',
      linksKeys: [
        'footer.sections.resources.links.documentation',
        'footer.sections.resources.links.api',
        'footer.sections.resources.links.cases',
        'footer.sections.resources.links.papers'
      ]
    }
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-space-grotesk font-bold text-xl">ARTS Innovations</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footer.description')}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Mail, href: 'mailto:innovations@arts.aero' }
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
                    >
                      <Icon size={20} className="text-gray-400 hover:text-white" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-white mb-4">{t(section.titleKey)}</h3>
              <ul className="space-y-3">
                {section.linksKeys.map((linkKey, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {t(linkKey)}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} ARTS Innovations. {t('footer.legal.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              'footer.legal.privacy',
              'footer.legal.terms',
              'footer.legal.cookies'
            ].map((linkKey, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                {t(linkKey)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
