"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
}

export default function FAQSection() {
  const { t } = useTranslation();
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: "ecosystem",
      questionKey: "faq.ecosystem.question",
      answerKey: "faq.ecosystem.answer",
    },
    {
      id: "documents",
      questionKey: "faq.documents.question",
      answerKey: "faq.documents.answer",
    },
    {
      id: "ai",
      questionKey: "faq.ai.question",
      answerKey: "faq.ai.answer",
    },
    {
      id: "clients",
      questionKey: "faq.clients.question",
      answerKey: "faq.clients.answer",
    },
    {
      id: "data",
      questionKey: "faq.data.question",
      answerKey: "faq.data.answer",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const contentVariants: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
          ease: [0.2, 0, 0, 1], // ease-snappy
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.3, 0, 0, 1], // ease-fluid
        },
        opacity: {
          duration: 0.25,
          delay: 0.1,
        },
      },
    },
  };

  // Animation variants for stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemCardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const titleSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.section
      id="faq"
      className="pt-16 lg:pt-20 relative flex flex-col justify-start items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: false }}
    >
      <div className="w-full 2xl:max-w-[80vw] mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleSectionVariants}
          className="text-center mb-4 mt-4 lg:mb-10 lg:mt-10"
        >
        <h2 className="mb-2 text-secondary text-balance font-title">
          {t("faq.title")}
        </h2>
        <p className="text-secondary mx-auto text-balance font-subtitle">
          {t("faq.description")}{" "}
                <a
                  href="#contact"
                  className="text-accent hover:text-hover-accent transition-colors font-text-important"
                >
                  {t("faq.cta")}
                </a>!
        </p>
      </motion.div>
        <div className="grid grid-cols-1 gap-10 lg:gap-20">
          <div>
            <motion.div variants={containerVariants} className="space-y-3">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemCardVariants}
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-card backdrop-blur-sm rounded-2xl border border-default hover:border-accent transition-all duration-300 cursor-pointer"
                >
                  {/* Question header */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none cursor-pointer"
                    aria-expanded={openItemId === item.id}
                  >
                    <div className="flex items-center">
                      <span className="text-secondary font-text-important">
                        {t(item.questionKey)}
                      </span>
                    </div>
                    <motion.div
                      variants={iconVariants}
                      initial="closed"
                      animate={openItemId === item.id ? "open" : "closed"}
                      transition={{ duration: 0.3, ease: [0.3, 0, 0, 1] }}
                      className="text-accent"
                    >
                      {openItemId === item.id ? (
                        <ChevronUp size={20} className="text-brand-accent"/>
                      ) : (
                        <ChevronDown size={20} className="text-brand-accent"/>
                      )}
                    </motion.div>
                  </button>

                  {/* Answer content */}
                  <AnimatePresence>
                    {openItemId === item.id && (
                      <motion.div
                        key={`content-${item.id}`}
                        variants={contentVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="overflow-hidden"
                      >
                        <div
                          className="px-4 sm:px-6 pb-6 pt-0 text-secondary font-text"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          {t(item.answerKey)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
