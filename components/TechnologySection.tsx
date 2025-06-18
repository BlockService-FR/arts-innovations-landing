"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Lock, Brain } from "lucide-react";
import Image from "next/image";

export default function TechnologySection() {
  const { t } = useTranslation();

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

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-20 border-t border-arts-green/20"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-20">
          <motion.div
            key="technology.holder"
            initial={{ y: -50 }}
            transition={{ delay: 0.3 }}
            style={{
              opacity: centerOpacity
            }}
            className="md:col-span-2 mx-auto bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-8 border border-arts-green/20 hover:border-arts-green transition-all duration-300 min-w-1/4 min-h-50"
          >
          </motion.div>
        </div> */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-start mb-5"
        >
          <span className="text-lg text-arts-green font-semibold tracking-wide">
            {t("technology.title")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            key="technology.ai"
            initial={{ opacity: 0, x: "50%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              bounce: 0.25,
              velocity: 5
            }}
            whileHover={{ scale: 1.02 }}
            className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-8 border border-arts-green/20 hover:border-arts-green transition-all duration-300"
          >
            <motion.div>
              <div className="w-16 h-16 rounded-xl bg-arts-green flex items-center justify-center mb-6">
                <Image
                  src="/ai.svg"
                  alt="Artificial Intelligence"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {t("technology.ai.title")}
              </h3>
              <p className="text-gray-300 mb-6">
                {t("technology.ai.description")}
              </p>

              <ul className="space-y-3">
                {aiBenefitsKeys.map((benefitKey, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-arts-green rounded-full"></div>
                    <span className="text-gray-200">{t(benefitKey)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            key="technology.blockchain"
            initial={{ opacity: 0, x: "-50%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-8 border border-arts-green/20 hover:border-arts-green transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-arts-green flex items-center justify-center mb-6">
              <Image
                src="/blockchain.svg"
                alt="Artificial Intelligence"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">
              {t("technology.blockchain.title")}
            </h3>
            <p className="text-gray-300 mb-6">
              {t("technology.blockchain.description")}
            </p>

            <ul className="space-y-3">
              {blockchainBenefitsKeys.map((benefitKey, benefitIndex) => (
                <li key={benefitIndex} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-arts-green rounded-full"></div>
                  <span className="text-gray-200">{t(benefitKey)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
