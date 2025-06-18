"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Database, Shield, QrCode, Smartphone } from "lucide-react";

export default function SolutionsSection() {
  const { t } = useTranslation();

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
      icon: Database,
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
      icon: Shield,
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
      icon: QrCode,
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
      icon: Smartphone,
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
    <section id="solutions" className="py-20 border-b border-arts-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          
          className="text-start mb-5"
        >
          <span className="text-lg text-arts-green font-semibold tracking-wide">
            {t("solutions.title")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl p-8 border border-arts-green/20 hover:border-arts-green transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-arts-green flex items-center justify-center mb-6">
                  <Icon size={32} className="text-arts-navy" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {t(solution.titleKey)}
                  </h3>
                  <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                    {t(solution.subtitleKey)}
                  </p>
                </div>

                <div className="mt-8 mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed font-medium">
                    {t(solution.descriptionKey)}
                  </p>
                </div>
                <div className="mb-8">
                  <h4 className={`text-lg font-semibold text-gray-300 mb-4`}>
                    {t("solutions.keyFeatures")}
                  </h4>
                  <ul className="space-y-3">
                    {solution.featuresKeys.map((benefitKey, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-arts-green rounded-full"></div>
                        <span className="text-gray-200">{t(benefitKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button with improved accessibility */}
                {/* <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-arts-green w-full text-arts-navy font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {t("solutions.learnMore")}
                </motion.button> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
