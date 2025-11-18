"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="intro"
      className="w-full 2xl:max-w-[80vw] mx-auto sm:px-8 lg:px-10 py-16 lg:py-20 relative flex flex-col justify-start items-center overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-5xl mx-auto"
      >
        <h2 className="mb-6 text-secondary text-balance font-title tracking-tight">
          {t("intro.title")}
        </h2>
        <p className="text-secondary/90 mx-auto text-balance font-subtitle leading-relaxed max-w-4xl">
          {t("intro.description")}
        </p>
      </motion.div>
    </section>
  );
}
