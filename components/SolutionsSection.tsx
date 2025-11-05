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

  return (
    <section
      id="solutions"
      className="pt-16 lg:pt-20 relative flex flex-col justify-start items-center overflow-hidden"
    >
      <motion.div className="text-center mb-4 mt-4 lg:mb-10 lg:mt-10">
        <h2 className="mb-4 text-arts-light text-balance font-title">
          {t("solutions.title")}
        </h2>
        <p className="text-arts-light max-w-3xl mx-auto text-balance font-subtitle">
          {t("solutions.subtitle")}
        </p>
      </motion.div>
      <div className="w-full 2xl:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 flex-grow items-center flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 h-full">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.id}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.02,
                  y: prefersReducedMotion ? 0 : -5,
                  transition: {
                    duration: 0.3
                  },
                }}
                className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-arts-light hover:border-arts-green transition-all duration-300 overflow-hidden h-full"
              >
                {/* Phase 1: Initial Content - Image and Subtitle */}
                <motion.div>
                  <div className="w-full h-auto mb-6 lg:mb-8 max-w-xs items-start">
                    <Image
                      src={solution.image}
                      alt={t(solution.titleKey)}
                      className="w-full h-auto object-cover"
                      width={500} // placeholder, adjust as needed
                      height={300} // placeholder, adjust as needed
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-arts-light font-subtitle-alt">
                      {t(solution.subtitleKey)}
                    </p>
                  </div>
                </motion.div>

                {/* Phase 2: Progressive Content Reveal */}
                <motion.div className="space-y-4">
                  {/* Description */}
                  <motion.div className="mt-4 lg:mt-6">
                    <p className="text-arts-light leading-relaxed font-text">
                      {t(solution.descriptionKey)}
                    </p>
                  </motion.div>

                  {/* Features Section */}
                  <motion.div>
                    <h4 className="text-arts-light mb-2 lg:mb-4 font-text-important">
                      {t("solutions.keyFeatures")}
                    </h4>

                    <motion.ul className="space-y-3 font-text">
                      {solution.featuresKeys.map((benefitKey, benefitIndex) => (
                        <motion.li
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                        >
                          <motion.div className="w-2 h-2 bg-arts-green rounded-full flex-shrink-0" />
                          <span className="text-arts-light">{t(benefitKey)}</span>
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
