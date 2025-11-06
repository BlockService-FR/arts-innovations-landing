"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, Globe, Zap } from "lucide-react";
import Image from "next/image";
import LogoIcon from "@/public/logo-white.svg";

export default function AboutSection() {
  const { t } = useTranslation();

  

  const aboutStats = [
    {
      icon: Award,
      labelKey: "about.stats.experience.label",
      sublabelKey: "about.stats.experience.sublabel",
    },
    {
      icon: Users,
      labelKey: "about.stats.clients.label",
      sublabelKey: "about.stats.clients.sublabel",
    },
    {
      icon: Globe,
      labelKey: "about.stats.countries.label",
      sublabelKey: "about.stats.countries.sublabel",
    },
    {
      icon: Zap,
      labelKey: "about.stats.reliability.label",
      sublabelKey: "about.stats.reliability.sublabel",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.section
      id="about"
      className="pt-16 lg:pt-20 relative flex flex-col gap-16 justify-start items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: false }}
    >
      <div className="w-full 2xl:max-w-[80vw] mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={cardVariants}
          className="bg-elevated rounded-2xl border-2 border-brand-accent-bright shadow-lg"
          style={{
            boxShadow:
              "0 0 30px rgb(from var(--color-brand-accent-bright) r g b / 0.3), inset 0 0 30px rgb(from var(--color-brand-accent-bright) r g b / 0.05)",
          }}
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Content Section */}
            <motion.div variants={contentVariants} className="flex-1">
              {/* Main Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight font-sans"
              >
                {t("about.title")}
              </motion.h2>

              {/* Descriptive Text - Italicized */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-muted mb-8 italic font-sans leading-relaxed"
              >
                {t("about.description")}
              </motion.p>

              {/* Stats with Checkmarks */}
              <motion.div variants={contentVariants} className="space-y-2">
                {aboutStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4"
                  >
                    <div className="text-brand-accent-bright text-xl font-bold">✓</div>
                    <span className="text-primary text-base font-sans">
                      {t(stat.labelKey)} {t(stat.sublabelKey)}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Branding Section */}
            <motion.div
              variants={logoVariants}
              className="flex flex-col items-center justify-center md:m-10 mx-auto"
            >
              <LogoIcon className="mb-2"/>

              {/* ARTS GROUP Text */}
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary font-sans tracking-wide">
                  ARTS
                </p>
                <p className="text-lg md:text-xl text-disabled font-sans tracking-widest">
                  GROUP
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
