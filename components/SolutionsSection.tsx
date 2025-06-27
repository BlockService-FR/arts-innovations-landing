"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function SolutionsSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

   const scrollToNextSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const solutions = [
    {
      id: "metrafleet",
      image: "/metrafleet.svg",
      titleKey: "solutions.metrafleet.title",
      subtitleKey: "solutions.metrafleet.subtitle",
      descriptionKey: "solutions.metrafleet.description",
      featuresKeys: [
        "solutions.metrafleet.features.lifecycle",
        "solutions.metrafleet.features.compliance",
        "solutions.metrafleet.features.preservation",
        "solutions.metrafleet.features.monitoring",
      ],
    },
    {
      id: "metrasign",
      image: "/metrasign.svg",
      titleKey: "solutions.metrasign.title",
      subtitleKey: "solutions.metrasign.subtitle",
      descriptionKey: "solutions.metrasign.description",
      featuresKeys: [
        "solutions.metrasign.features.immutable",
        "solutions.metrasign.features.certification",
        "solutions.metrasign.features.audit",
        "solutions.metrasign.features.security",
      ],
    },
    {
      id: "metraseal",
      image: "/metraseal.svg",
      titleKey: "solutions.metraseal.title",
      subtitleKey: "solutions.metraseal.subtitle",
      descriptionKey: "solutions.metraseal.description",
      featuresKeys: [
        "solutions.metraseal.features.nfc",
        "solutions.metraseal.features.identity",
        "solutions.metraseal.features.security",
        "solutions.metraseal.features.antiCounterfeiting",
      ],
    },
    {
      id: "metrafield",
      image: "/metrafield.svg",
      titleKey: "solutions.metrafield.title",
      subtitleKey: "solutions.metrafield.subtitle",
      descriptionKey: "solutions.metrafield.description",
      featuresKeys: [
        "solutions.metrafield.features.mobile",
        "solutions.metrafield.features.reports",
        "solutions.metrafield.features.blockchain",
        "solutions.metrafield.features.inspections",
      ],
    },
  ];

  // Main container animation for the entire card
  const cardContainerVariants = {
    hidden: {
      // x: "100%",
      opacity: 0,
    },
    visible: (index: number) => ({
      // x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 1,
        delay: prefersReducedMotion ? 0 : index * 0.3,
        duration: prefersReducedMotion ? 0.1 : 1.2,
      },
    }),
  };

  // Initial content (image + subtitle) that appears with the card
  const initialContentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: prefersReducedMotion ? 0 : index * 0.3 + 0.4,
        duration: prefersReducedMotion ? 0.1 : 0.8,
      },
    }),
  };

  // Progressive content reveal container
  const progressiveContentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        delay: prefersReducedMotion ? 0 : index * 0.3 + 1.0,
        duration: prefersReducedMotion ? 0.1 : 0.3,
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    }),
  };

  // Individual content elements
  const contentItemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: prefersReducedMotion ? 0.1 : 0.6,
      },
    },
  };

  // Features list container
  const featuresContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  // Individual feature items
  const featureItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 18,
        duration: prefersReducedMotion ? 0.1 : 0.5,
      },
    },
  };

  // Bullet point animation
  const bulletVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: prefersReducedMotion ? 0.1 : 0.4,
      },
    },
  };

  return (
    <section id="solutions" className="py-20 relative min-h-screen flex flex-col justify-start items-center overflow-hidden">
            <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-6 mt-6 lg:mb-10 lg:mt-10"
        >
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 text-white text-balance">
            {t("solutions.title")}
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto text-balance">
            {t("solutions.subtitle")}
          </p>
        </motion.div>
      <div className="w-full lg:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 flex-grow items-center flex">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 h-full">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.id}
                custom={index}
                variants={cardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.02,
                  y: prefersReducedMotion ? 0 : -5,
                  transition: { 
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  },
                }}
                className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-8 border border-arts-light hover:border-arts-green transition-all duration-300 overflow-hidden h-full"
              >
                {/* Phase 1: Initial Content - Image and Subtitle */}
                <motion.div
                  custom={index}
                  variants={initialContentVariants}
                  initial="hidden"
                  whileInView="visible"
                  // viewport={{ once: true }}
                >
                  <div className="w-full h-auto mb-8 max-w-xs items-start">
                    <Image 
                      src={solution.image} 
                      alt={t(solution.titleKey)} 
                      className="w-full h-auto object-cover" 
                      width={500} // placeholder, adjust as needed
                      height={300} // placeholder, adjust as needed
                      style={{
                        objectFit: "cover",
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg lg:text-xl font-medium text-gray-300 uppercase tracking-wider">
                      {t(solution.subtitleKey)}
                    </p>
                  </div>
                </motion.div>

                {/* Phase 2: Progressive Content Reveal */}
                <motion.div
                  custom={index}
                  variants={progressiveContentVariants}
                  initial="hidden"
                  whileInView="visible"
                  // viewport={{ once: true }}
                  className="space-y-4"
                >
                  {/* Description */}
                  <motion.div 
                    variants={contentItemVariants}
                    className="mt-6"
                  >
                    <p className="text-xl text-gray-300 leading-relaxed font-medium">
                      {t(solution.descriptionKey)}
                    </p>
                  </motion.div>

                  {/* Features Section */}
                  <motion.div variants={contentItemVariants}>
                    <h4 className="text-xl font-semibold text-gray-300 mb-4">
                      {t("solutions.keyFeatures")}
                    </h4>
                    
                    <motion.ul
                      variants={featuresContainerVariants}
                      className="space-y-3 text-xl"
                    >
                      {solution.featuresKeys.map((benefitKey, benefitIndex) => (
                        <motion.li
                          key={benefitIndex}
                          variants={featureItemVariants}
                          className="flex items-center space-x-3"
                        >
                          <motion.div
                            variants={bulletVariants}
                            className="w-2 h-2 bg-arts-green rounded-full flex-shrink-0"
                          />
                          <span className="text-gray-200">{t(benefitKey)}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
             {/* CTA Button - Positioned at bottom of section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 z-10 flex justify-center items-center"
      >
        <motion.button
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-arts-lime px-8 py-10 font-semibold flex items-center space-x-2 text-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <ChevronDown size={40} />
        </motion.button>
      </motion.div> */}
    </section>
  );
}
