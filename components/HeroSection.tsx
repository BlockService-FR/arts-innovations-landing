"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ArrowRight, Shield, Zap, Globe, ChevronDown } from "lucide-react"
import Image from "next/image"
import { WordRotate } from "@/components/ui/WordRotate";
import { useMemo, useRef } from "react"
import { Particles } from "@/components/ui/shadcn-io/particles";
import BlockchainIcon from "@/public/blockchain.svg";
import ComplianceIcon from "@/public/compliance.svg";
import EcosystemIcon from "@/public/ecosystem.svg";

export default function HeroSection() {
  const { t } = useTranslation()

  const heroWords = useMemo(
    () => [
      t("hero.title.words.0"),
      t("hero.title.words.1"),
      t("hero.title.words.2"),
      t("hero.title.words.3"),
    ],
    [t]
  )

  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Transform scroll progress to upward movement
  const heroLogoY = useTransform(scrollYProgress, [0, 0.25], [0, -200])
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const ctaOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const scrollToTechnology = () => {
    const technologySection = document.getElementById("intro")
    if (technologySection) {
      technologySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ opacity: heroOpacity }}
    >
      {/* Background with Overlay */}
      {/* <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div> */}

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center flex grow flex-col justify-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          style={{ y: heroLogoY }}
          className="flex justify-center mt-8 md:mt-0 md:mb-8"
        >
          <div className="w-40 h-40 rounded-2xl flex items-center justify-center p-4">
            <Image
              src="/logo-green.svg"
              alt="ARTS Innovations Logo"
              width={160}
              height={160}
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div style={{ y: heroContentY }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 pb-2 bg-linear-to-r text-secondary bg-clip-text font-hero-title max-w-4xl justify-center mx-auto text-balance text drop-shadow-lg">
              {t("hero.subtitle")}
            </h1>
            <p className="text-secondary/90 mb-8 max-w-3xl mx-auto text-balance font-hero-subtitle leading-relaxed">
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-secondary/80 font-hero-text mt-8"
          >
            <div className="flex items-center space-x-3 px-4 py-2 rounded-full glass-card hover:bg-white/5 transition-colors duration-300">
              <BlockchainIcon size={18} className="fill-arts-green" />
              <span className="tracking-wide">{t("hero.trustIndicators.sovereign")}</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-2 rounded-full glass-card hover:bg-white/5 transition-colors duration-300">
              <ComplianceIcon size={18} className="fill-arts-green" />
              <span className="tracking-wide">{t("hero.trustIndicators.compliant")}</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-2 rounded-full glass-card hover:bg-white/5 transition-colors duration-300">
              <EcosystemIcon size={18} className="fill-arts-green" />
              <span className="tracking-wide">{t("hero.trustIndicators.immutable")}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Button - Positioned at bottom of section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ opacity: ctaOpacity }}
        className="z-10 justify-center items-center hidden lg:flex relative mb-10"
      >
        <motion.button
          onClick={scrollToTechnology}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-accent px-8 py-10 flex items-center space-x-2  transition-all duration-300 cursor-pointer"
        >
          <ChevronDown size={40} className="text-arts-green"/>
        </motion.button>
      </motion.div>
      {/* Interactive particles */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#c0ff7e"
        size={0.8}
      />
    </motion.section>
  )
}
