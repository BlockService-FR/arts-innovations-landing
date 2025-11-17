"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="intro"
      className="pt-16 lg:pt-20 pl-10 pr-10 relative flex flex-col justify-start items-center overflow-hidden"
    >
      <motion.div className="text-center">
        <h2 className="mb-2 text-secondary text-balance font-title">
          {t("intro.title")}
        </h2>
        <p className="text-secondary mx-auto text-balance font-subtitle">
          {t("intro.description")}
        </p>
      </motion.div>
    </section>
  );
}
