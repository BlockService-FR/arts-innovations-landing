"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Lock, Brain, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function TechnologySection() {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const section = document.getElementById("solutions");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const aiBenefitsKeys = [
    "technology.ai.features.learning",
    "technology.ai.features.recognition",
    "technology.ai.features.analytics",
  ];

  const blockchainBenefitsKeys = [
    "technology.blockchain.features.ledger",
    "technology.blockchain.features.contracts",
    "technology.blockchain.features.security",
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scrollYProgressLine = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "100%"]
  );

  // Animation variants for the split-reveal effect
  

  return (
    <motion.section
      id="technology"
      ref={sectionRef}
      className="py-20 relative min-h-screen flex flex-col justify-start items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-6 mt-6 lg:mb-10 lg:mt-10"
      >
        <h2 className="mb-6 text-arts-light text-balance font-title">
          {t("technology.title")}
        </h2>
        <p className="text-arts-light max-w-3xl mx-auto text-balance font-subtitle">
          {t("technology.subtitle")}
        </p>
      </motion.div>
      <div className="w-full 2xl:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 flex-grow items-center flex">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative"
        >
          {/* AI Technology Card */}
          <motion.div
            custom={0}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="backdrop-blur-sm p-6 transition-all duration-300"
          >
            <motion.div>
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              >
                <Image
                  src="/ai.svg"
                  alt="Artificial Intelligence"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3
                className="mb-4 text-arts-light font-content-title"
              >
                {t("technology.ai.title")}
              </motion.h3>
              <motion.p
                className="text-arts-light mb-4 font-content-subtitle"
              >
                {t("technology.ai.subtitle")}
              </motion.p>

              <motion.p
                className="text-arts-light mb-4 font-text"
              >
                {t("technology.ai.description")}
              </motion.p>

              <motion.ul
                className="text-md lg:text-lg space-y-2"
              >
                {aiBenefitsKeys.map((benefitKey, benefitIndex) => (
                  <motion.li
                    key={benefitIndex}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-arts-green rounded-full"
                    />
                    <span className="text-arts-light font-text"><span className="font-text-important">{t(benefitKey + '.title')}</span>{t(benefitKey + '.description')}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Vertical Line Divider */}
          <motion.div
            className="invisible lg:visible absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-arts-lime"
            transition={{ delay: 2 }}
            initial={{ height: 0 }}
            style={{ height: scrollYProgressLine }}
          ></motion.div>

          {/* Blockchain Technology Card */}
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="backdrop-blur-sm p-6 transition-all duration-300"
          >
            <motion.div>
              <motion.div
                className="w-12 h-12 rounded-xl bg-arts-green flex items-center justify-center mb-4"
              >
                <Image
                  src="/blockchain.svg"
                  alt="Blockchain Technology"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3
                className="mb-4 text-arts-light font-content-title"
              >
                {t("technology.blockchain.title")}
              </motion.h3>

              <motion.p
                className="mb-4 text-arts-light font-content-subtitle"
              >
                {t("technology.blockchain.subtitle")}
              </motion.p>

              <motion.p
                className="text-arts-light mb-6 font-text"
              >
                {t("technology.blockchain.description.before")}<span className="font-text-important">METRA</span>{t("technology.blockchain.description.after")}
              </motion.p>

              <motion.ul
                className="text-md lg:text-lg space-y-3"
              >
                {blockchainBenefitsKeys.map((benefitKey, benefitIndex) => (
                  <motion.li
                    key={benefitIndex}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-arts-green rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.95 + benefitIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    />
                    <span className="text-arts-light font-text"><span className="font-text-important">{t(benefitKey + '.title')}</span>{t(benefitKey + '.description')}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

            {/* CTA Button - Positioned at bottom of section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute z-10 flex justify-center items-center bottom-0"
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
    </motion.section>
  );
}
