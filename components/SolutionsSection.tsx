"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SolutionsSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
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
    <section id="solutions" className="py-20 border-b border-arts-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
          }}
          className="text-start mb-5"
        >
          <span className="text-lg text-arts-green font-semibold tracking-wide">
            {t("solutions.title")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.id}
                custom={index}
                variants={cardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.02,
                  y: prefersReducedMotion ? 0 : -5,
                  transition: { 
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  },
                }}
                className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-8 border border-arts-green/20 hover:border-arts-green transition-all duration-300 overflow-hidden"
              >
                {/* Phase 1: Initial Content - Image and Subtitle */}
                <motion.div
                  custom={index}
                  variants={initialContentVariants}
                  initial="hidden"
                  whileInView="visible"
                  // viewport={{ once: true }}
                >
                  <div className="w-full h-auto mb-6">
                    <img 
                      src={solution.image} 
                      alt={t(solution.titleKey)} 
                      className="w-full h-auto object-cover" 
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
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
                  className="space-y-8"
                >
                  {/* Description */}
                  <motion.div 
                    variants={contentItemVariants}
                    className="mt-8"
                  >
                    <p className="text-lg text-gray-300 leading-relaxed font-medium">
                      {t(solution.descriptionKey)}
                    </p>
                  </motion.div>

                  {/* Features Section */}
                  <motion.div variants={contentItemVariants}>
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">
                      {t("solutions.keyFeatures")}
                    </h4>
                    
                    <motion.ul
                      variants={featuresContainerVariants}
                      className="space-y-3"
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
    </section>
  );
}