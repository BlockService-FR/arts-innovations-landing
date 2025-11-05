"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import LighningIcon from "@/public/lighning.svg";

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
      calloutKey: "solutions.metrafleet.callout",
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
      calloutKey: "solutions.metrasign.callout",
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
      calloutKey: "solutions.metraseal.callout",
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
      calloutKey: "solutions.metrafield.callout",
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
        <h2 className="mb-2 text-secondary text-balance font-title">
          {t("solutions.title")}
        </h2>
        <h2 className="mb-4 text-secondary text-balance font-title">
          {t("solutions.subtitle")}
        </h2>
        <p className="text-secondary mx-auto text-balance font-subtitle">
          {t("solutions.description")}
        </p>
      </motion.div>
      <div className="w-full 2xl:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 flex-grow items-center flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 h-full w-full">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.id}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.02,
                  y: prefersReducedMotion ? 0 : -5,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="bg-card backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-default hover:border-accent transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="flex-grow">
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
                    <p className="text-secondary font-subtitle-alt">
                      {t(solution.subtitleKey)}
                    </p>
                  </div>
                </motion.div>

                {/* Phase 2: Progressive Content Reveal */}
                <motion.div className="space-y-4">
                  {/* Description */}
                  <motion.div className="mt-4 lg:mt-6">
                    <p className="text-secondary leading-relaxed font-text">
                      {t(solution.descriptionKey)}
                    </p>
                  </motion.div>

                  {/* Features Section */}
                  <motion.div>
                    <h4 className="text-secondary mb-2 lg:mb-4 font-text-important">
                      {t("solutions.keyFeatures")}
                    </h4>

                    <motion.ul className="space-y-3 font-text">
                      {solution.featuresKeys.map((benefitKey, benefitIndex) => (
                        <motion.li
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                        >
                          <motion.div className="w-2 h-2 bg-neutral-50 rounded-full shrink-0" />
                          <span className="text-secondary">
                            {t(benefitKey)}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
                </div>

                {/* Bottom Callout Section - Always at bottom */}
                <div className="mt-auto pt-8">
                  <div
                    className="h-px mb-8"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.12) 0%, var(--color-brand-accent) 49%, transparent 100%)',
                      opacity: 1
                    }}
                  />
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex items-center justify-center">
                      <LighningIcon className="w-6 h-6 fill-icon-bright mt-0.5 mr-2" />
                      <p className="text-brand-accent-bright font-semibold text-sm sm:text-base leading-relaxed pt-1">
                        {t(solution.calloutKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
