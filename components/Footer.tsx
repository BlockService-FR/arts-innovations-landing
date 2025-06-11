'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  // const footerSections = [
  //   {
  //     titleKey: 'footer.sections.solutions.title',
  //     linksKeys: [
  //       'footer.sections.solutions.links.realtime',
  //       'footer.sections.solutions.links.blockchain',
  //       'footer.sections.solutions.links.digital',
  //       'footer.sections.solutions.links.mobile'
  //     ]
  //   }
  // ]

  return (
    <footer className="bg-arts-navy border-t border-arts-green/20">
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
                <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1">
                  <Image
                    src="/logo-white.svg"
                    alt="ARTS Innovations Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-space-grotesk font-bold text-xl text-white">ARTS Innovations</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
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
                      className="w-10 h-10 bg-arts-teal rounded-lg flex items-center justify-center hover:bg-arts-green transition-colors duration-300"
                    >
                      <Icon size={20} className="text-white" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
          
          {/* <div className="lg:col-span-2"></div> */}
          {/* Footer Links */}
          {/* {footerSections.map((section, index) => (
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
                      className="text-gray-300 hover:text-arts-green transition-colors duration-200"
                    >
                      {t(linkKey)}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))} */}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-arts-green/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 text-sm">
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
                className="text-gray-300 hover:text-arts-green text-sm transition-colors duration-200"
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
