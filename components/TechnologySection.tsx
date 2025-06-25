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
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Split container that starts as one and splits into two
  const splitContainerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Individual card variants for the split effect
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      x: 0, // Start at center
      y: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      x: 0, // Move to final position
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: custom * 0.15,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Content animation variants
  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.98,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6,
        delay: 0.2,
      },
    },
    exit: {
      scale: 0.8,
      rotate: 90,
      transition: {
        duration: 0.3,
      },
    },
  };

  const featureListVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const featureItemVariants = {
    hidden: {
      opacity: 0,
      x: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="technology"
      ref={sectionRef}
      className="py-20 relative min-h-screen flex flex-col justify-start items-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16 mt-16"
      >
        <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 text-white text-balance">
          {t("technology.title")}
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto text-balance">
          {t("technology.subtitle")}
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow items-center flex">
        <motion.div
          variants={splitContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 relative"
        >
          {/* AI Technology Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="backdrop-blur-sm p-8 transition-all duration-300"
          >
            <motion.div variants={contentVariants}>
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
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
                variants={itemVariants}
                className="text-4xl font-bold mb-4 text-white"
              >
                {t("technology.ai.title")}
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-2xl text-gray-300 mb-4"
              >
                {t("technology.ai.subtitle")}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 mb-6"
              >
                {t("technology.ai.description")}
              </motion.p>

              <motion.ul
                variants={featureListVariants}
                className="text-xl space-y-3"
              >
                {aiBenefitsKeys.map((benefitKey, benefitIndex) => (
                  <motion.li
                    key={benefitIndex}
                    variants={featureItemVariants}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-arts-green rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.8 + benefitIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    />
                    <span className="text-gray-200">{t(benefitKey)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Vertical Line Divider */}
          <motion.div
            className="invisible md:visible absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-arts-lime"
            transition={{ delay: 2 }}
            initial={{ height: 0 }}
            style={{ height: scrollYProgressLine }}
          ></motion.div>

          {/* Blockchain Technology Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="backdrop-blur-sm p-8 transition-all duration-300"
          >
            <motion.div variants={contentVariants}>
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-xl bg-arts-green flex items-center justify-center mb-6"
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
                variants={itemVariants}
                className="text-4xl font-bold mb-4 text-white"
              >
                {t("technology.blockchain.title")}
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-2xl mb-4 text-gray-300"
              >
                {t("technology.blockchain.subtitle")}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 mb-6"
              >
                {t("technology.blockchain.description")}
              </motion.p>

              <motion.ul
                variants={featureListVariants}
                className="text-xl space-y-3"
              >
                {blockchainBenefitsKeys.map((benefitKey, benefitIndex) => (
                  <motion.li
                    key={benefitIndex}
                    variants={featureItemVariants}
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
                    <span className="text-gray-200">{t(benefitKey)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

            {/* CTA Button - Positioned at bottom of section */}
      <motion.div
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
      </motion.div>
    </motion.section>
  );
}
