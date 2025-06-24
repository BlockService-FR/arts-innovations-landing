"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ArrowRight, Shield, Zap, Globe, ChevronDown } from "lucide-react"
import Image from "next/image"
import { WordRotate } from "@/components/ui/WordRotate";
import { FloatingPaths } from "@/components/ui/FloatingPaths";
import { useMemo, useRef } from "react"

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
    const technologySection = document.getElementById("technology")
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
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          style={{ y: heroLogoY }}
          className="flex justify-center mt-8 md:mt-0 md:mb-8"
        >
          <div className="w-40 h-40 rounded-lg flex items-center justify-center p-2">
            <Image
              src="/logo-green.svg"
              alt="ARTS Innovations Logo"
              width={160}
              height={160}
              className="w-24 h-24 md:w-40 md:h-40 object-contain"
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
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 pb-2 bg-gradient-to-r text-arts-light bg-clip-text">
              {t("hero.title.before")}{" "}
              <WordRotate className="text-arts-lime" words={heroWords} />{" "}
              {t("hero.title.after")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto text-balance">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-arts-green" />
              <span>{t("hero.trustIndicators.sovereign")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-arts-lime" />
              <span>{t("hero.trustIndicators.compliant")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe size={16} className="text-arts-green" />
              <span>{t("hero.trustIndicators.immutable")}</span>
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
        className="relative z-10 flex justify-center items-center pb-8"
      >
        <motion.button
          onClick={scrollToTechnology}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-arts-lime px-8 py-10 font-semibold flex items-center space-x-2 text-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <ChevronDown size={60} />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
