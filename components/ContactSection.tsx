'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Send, User } from 'lucide-react'

export default function ContactSection() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const teamContacts = [
    {
      name: 'Romain NUGUES',
      phone: '+33.(0)6.38.11.19.16',
      email: 'romain-nugues@arts-innovations.com'
    },
    {
      name: 'Pierre PUISSEGUR',
      phone: '+33.(0)6.74.96.60.68',
      email: 'pierre.puissegur@arts-innovations.com'
    },
    {
      name: 'Marc BOUZAID',
      phone: '+33.(0)6.73.87.37.31',
      email: 'marc.bouzaid@arts.eu'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-arts-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6 text-white">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Team Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">{t('contact.team')}</h3>
              <p className="text-gray-300 mb-8">
                {t('contact.teamDescription')}
              </p>
            </div>

            <div className="space-y-6">
              {teamContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="p-6 bg-arts-teal/50 rounded-lg border border-arts-green/20 hover:border-arts-green transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-arts-green rounded-lg flex items-center justify-center">
                      <User size={20} className="text-arts-navy" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{contact.name}</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <Phone size={14} />
                          <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <Mail size={14} />
                          <span>{contact.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-arts-navy mb-2">
                    {t('contact.form.name')} {t('contact.form.required')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-arts-navy placeholder-arts-gray"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-arts-navy mb-2">
                    {t('contact.form.email')} {t('contact.form.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-arts-navy placeholder-arts-gray"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-arts-navy mb-2">
                  {t('contact.form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-arts-navy placeholder-arts-gray"
                  placeholder={t('contact.form.companyPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-arts-navy mb-2">
                  {t('contact.form.message')} {t('contact.form.required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-arts-navy placeholder-arts-gray resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-arts-green text-arts-navy font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-arts-lime transition-all duration-300 cursor-pointer"
              >
                <span>{t('contact.form.send')}</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
