"use client";

import { useEffect, useRef, useState } from "react";
import "@/lib/i18n";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TechnologySection from "@/components/TechnologySection";
import SolutionsSection from "@/components/SolutionsSection";
import FAQSection from "@/components/FAQSection";
import { useMotionValueEvent, useScroll } from "framer-motion";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

   const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-gradient-to-br from-arts-navy to-arts-teal text-arts-light overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />
        <HeroSection />
        <IntroSection />
        <TechnologySection />

        <SolutionsSection />

        {/* <ImpactSection /> */}

        <AboutSection />

        <FAQSection />

        <ContactSection />

        <Footer />
      
    </main>
  );
}
