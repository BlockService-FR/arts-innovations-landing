'use client'

import { useEffect, useState } from 'react'
import '@/lib/i18n'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import IndustryImpact from '@/components/IndustryImpact'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import TechnologySection from '@/components/TechnologySection'
import SolutionsSection from '@/components/SolutionsSection'

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
      <TechnologySection />
      <SolutionsSection />
      <AboutSection />
      <IndustryImpact />
      <ContactSection />

      {/* <SolutionsShowcase />
      <UseCases />
      <TechnologyStack />
      <ValueProposition /> */}
      <Footer />
    </main>
  )
}
