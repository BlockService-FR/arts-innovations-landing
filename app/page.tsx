'use client'

import { useEffect, useState } from 'react'
import '@/lib/i18n'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ValueProposition from '@/components/ValueProposition'
import SolutionsShowcase from '@/components/SolutionsShowcase'
import UseCases from '@/components/UseCases'
import TechnologyStack from '@/components/TechnologyStack'
import IndustryImpact from '@/components/IndustryImpact'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <SolutionsShowcase />
      <UseCases />
      <TechnologyStack />
      <IndustryImpact />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
