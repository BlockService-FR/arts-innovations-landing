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

  return (
    <section
      id="faq"
      className="w-full 2xl:max-w-[80vw] mx-auto px-8 lg:px-10 py-16 lg:py-20 relative flex flex-col justify-start items-center overflow-hidden"
    >
      <motion.div className="text-center mb-4 lg:mb-10">
        <h2 className="mb-2 text-secondary text-balance font-title">
          {t("faq.title")}
        </h2>
        <p className="text-secondary mx-auto max-w-4xl text-balance font-subtitle">
          {t("faq.description")}{" "}
          <a
            href="#contact"
            className="text-accent hover:text-arts-green transition-colors font-text-important"
          >
            {t("faq.cta")}
          </a>!
        </p>
      </motion.div>
      <motion.div className="space-y-3 w-full">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="glass-card rounded-2xl border border-white/5 transition-all duration-300 cursor-pointer hover:border-arts-green/30 hover:shadow-lg hover:shadow-arts-green/5 group"
                >
                  {/* Question header */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none cursor-pointer"
                    aria-expanded={openItemId === item.id}
                  >
                    <div className="flex items-center flex-1 min-w-0">
                      <span className="text-secondary font-text-important group-hover:text-arts-green transition-colors duration-300">
                        {t(item.questionKey)}
                      </span>
                    </div>
                    <motion.div
                      variants={iconVariants}
                      initial="closed"
                      animate={openItemId === item.id ? "open" : "closed"}
                      transition={{ duration: 0.3, ease: [0.3, 0, 0, 1] }}
                      className="text-accent shrink-0 ml-4"
                    >
                      {openItemId === item.id ? (
                        <ChevronUp size={20} className="text-arts-green"/>
                      ) : (
                        <ChevronDown size={20} className="text-arts-green"/>
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
                        <p
                          className="px-4 sm:px-6 pb-6 pt-0 text-secondary font-text"
                          style={{ whiteSpace: "normal", wordBreak: "normal", overflowWrap: "break-word" }}
                        >
                          {t(item.answerKey)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
      </motion.div>
    </section>
  );
}
