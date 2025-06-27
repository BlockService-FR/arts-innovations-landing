"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const contentVariants = {
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
    <section id="faq" className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left side - Title and description */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          >
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-6 text-white">
              FAQ
            </h2>
            <p className="text-arts-gray">
              {t("faq.description")}{" "}
              <a
                href="#contact"
                className="text-arts-green hover:text-arts-lime transition-colors"
              >
                {t("faq.cta")}
              </a>
              .
            </p>
          </motion.div>
        </div>

        {/* Right side - FAQ Items */}
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            
            className="space-y-3"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-arts-teal/50 backdrop-blur-sm rounded-2xl border border-arts-light hover:border-arts-green transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                
                transition={{ delay: index * 0.1 }}
              >
                {/* Question header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={openItemId === item.id}
                >
                  <div className="flex items-center">
                    <span className="text-arts-green mr-3">•</span>
                    <span className="text-white text-lg font-medium">
                      {t(item.questionKey)}
                    </span>
                  </div>
                  <motion.div
                    variants={iconVariants}
                    initial="closed"
                    animate={openItemId === item.id ? "open" : "closed"}
                    transition={{ duration: 0.3, ease: [0.3, 0, 0, 1] }}
                    className="text-arts-green"
                  >
                    {openItemId === item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
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
                        className="px-4 sm:px-6 pb-6 pt-0 text-arts-gray"
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
    </section>
  );
}
