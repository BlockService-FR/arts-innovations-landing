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
