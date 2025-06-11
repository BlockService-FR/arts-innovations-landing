"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Lock, Brain } from "lucide-react";

export default function TechnologySection() {
  const { t } = useTranslation();

  const technos = [
    {
      icon: Brain,
      titleKey: "technology.ai.title",
      descriptionKey: "technology.ai.description",
      benefitsKeys: [
        "technology.ai.features.learning",
        "technology.ai.features.recognition",
        "technology.ai.features.analytics",
      ],
    },
    {
      icon: Lock,
      titleKey: "technology.blockchain.title",
      descriptionKey: "technology.blockchain.description",
      benefitsKeys: [
        "technology.blockchain.features.ledger",
        "technology.blockchain.features.contracts",
        "technology.blockchain.features.security",
      ],
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animation values for the split effect
  const leftCardX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200]);

  const centerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section id="technology" className="py-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-start mb-5"
        >
          <span className="text-lg text-arts-green font-semibold tracking-wide">
            {t("technology.title")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {technos.map((techno, index) => {
            const Icon = techno.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-8 border border-arts-green/20 hover:border-arts-green transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-arts-green flex items-center justify-center mb-6">
                  <Icon size={32} className="text-arts-navy" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {t(techno.titleKey)}
                </h3>
                <p className="text-gray-300 mb-6">{t(techno.descriptionKey)}</p>

                <ul className="space-y-3">
                  {techno.benefitsKeys.map((benefitKey, benefitIndex) => (
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
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
