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
      className="w-full 2xl:max-w-[80vw] mx-auto pt-16 lg:pt-20 relative flex flex-col justify-start items-center overflow-hidden py-12 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col text-center lg:text-left mb-4 mt-4 lg:mb-10 lg:mt-10"
        >
          <h2 className="mb-4 lg:mb-6 text-arts-light text-balance font-title">
            {t("technology.title")}
          </h2>
          <p className="text-arts-light max-w-3xl text-balance font-subtitle">
            {t("technology.subtitle")}
          </p>
          <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 bg-arts-green text-arts-navy font-semibold py-4 px-6 rounded-lg space-x-2 hover:bg-arts-lime transition-all duration-300 cursor-pointer self-center lg:self-start"
              >
                <span className='font-text-important'>{t('technology.cta')}</span>
              </motion.button>
        </motion.div>
        <div className="p-4 sm:px-6 lg:px-8 items-center flex flex-col gap-6 ">
            {/* AI Technology Card */}
            <motion.div
              custom={0}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-arts-light hover:border-arts-green transition-all duration-300"
            >
              <motion.div>
                <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Image
                    src="/ai.svg"
                    alt="Artificial Intelligence"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.h3 className="mb-4 text-arts-light font-content-title">
                  {t("technology.ai.title")}
                </motion.h3>
                <motion.p className="text-arts-light mb-4 font-content-subtitle">
                  {t("technology.ai.subtitle")}
                </motion.p>

                <motion.p className="text-arts-light mb-4 font-text">
                  {t("technology.ai.description")}
                </motion.p>
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
              className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-arts-light hover:border-arts-green transition-all duration-300"
            >
              <motion.div>
                <motion.div className="w-12 h-12 rounded-xl bg-arts-green flex items-center justify-center mb-4">
                  <Image
                    src="/blockchain.svg"
                    alt="Blockchain Technology"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.h3 className="mb-4 text-arts-light font-content-title">
                  {t("technology.blockchain.title")}
                </motion.h3>

                <motion.p className="mb-4 text-arts-light font-content-subtitle">
                  {t("technology.blockchain.subtitle")}
                </motion.p>

                <motion.p className="text-arts-light mb-6 font-text">
                  {t("technology.blockchain.description.before")}
                  <span className="font-text-important">METRA</span>
                  {t("technology.blockchain.description.after")}
                </motion.p>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
