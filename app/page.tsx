"use client";

import { useRef, useState } from "react";
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

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll({ container: containerRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <main className="bg-gradient-to-br from-arts-dark/90 via-arts-navy/85 to-arts-teal/80 text-white overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />
      <div ref={containerRef} className="overflow-y-scroll h-screen">
        <HeroSection />

        <TechnologySection />

        <SolutionsSection />

        <ImpactSection />

        <AboutSection />

        <FAQSection />

        <ContactSection />

        <Footer />
      </div>
    </main>
  );
}
