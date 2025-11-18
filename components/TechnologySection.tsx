"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function TechnologySection() {
  const { t } = useTranslation();

  // Detect if screen is lg+ (1024px)
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [maxY, setMaxY] = useState(0);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Calculate height difference between left and right sections
  useEffect(() => {
    const calculateHeightDifference = () => {
      if (leftRef.current && rightRef.current && isLargeScreen) {
        const leftHeight = leftRef.current.offsetHeight;
        const rightHeight = rightRef.current.offsetHeight;
        const difference = rightHeight - leftHeight;
        setMaxY(difference > 0 ? difference : 0);
      } else {
        setMaxY(0);
      }
    };

    // Calculate on mount and when screen size changes
    calculateHeightDifference();

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeightDifference);

    // Cleanup
    return () => window.removeEventListener("resize", calculateHeightDifference);
  }, [isLargeScreen]);

  const scrollToNextSection = () => {
    const section = document.getElementById("solutions");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

  // Left section Y movement: uses calculated pixel difference for consistent behavior
  const leftY = useTransform(scrollYProgress, [0, 1], [-100, maxY]);

  // Animation variants for the split-reveal effect

  return (
    <motion.section
      id="technology"
      ref={sectionRef}
      className="w-full 2xl:max-w-[80vw] mx-auto sm:px-8 lg:px-10 py-16 lg:py-20 relative flex flex-col justify-start items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      <div className="grid gap-0 lg:grid-cols-2 lg:gap-16">
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ y: isLargeScreen ? leftY : 0 }}
          className="flex flex-col text-center lg:text-left mb-4 mt-4 lg:mb-10 lg:mt-10 lg:self-start"
        >
          <h2 className="mb-4 lg:mb-6 text-secondary text-balance font-title">
            {t("technology.title")}
          </h2>
          <p className="text-secondary text-balance font-subtitle">
            {t("technology.subtitle")}
          </p>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToNextSection}
            className="mt-4 bg-button-primary text-button-text font-semibold py-4 px-6 rounded-lg space-x-2 hover:bg-button-primary-hover transition-all duration-300 cursor-pointer self-center lg:self-start hidden lg:block"
          >
            <span className="font-text-important">{t("technology.cta")}</span>
          </motion.button>
        </motion.div>
        <div ref={rightRef} className="sm:px-6 lg:px-8 items-center flex flex-col gap-6 ">
          {/* Blockchain Technology Card */}
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="glass-card rounded-2xl p-6 lg:p-8 hover:border-arts-green/50 transition-all duration-500 group"
          >
            <motion.div>
              <motion.div className="w-12 h-12 rounded-2xl bg-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/blockchain.svg"
                  alt="Blockchain Technology"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3 className="mb-4 text-secondary font-content-title">
                {t("technology.blockchain.title")}
              </motion.h3>

              <motion.p className="mb-4 text-secondary font-content-subtitle">
                {t("technology.blockchain.subtitle")}
              </motion.p>

              <motion.p className="text-secondary mb-6 font-text">
                {t("technology.blockchain.description.before")}
                <span className="font-text-important">METRA</span>
                {t("technology.blockchain.description.after")}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* AI Technology Card */}
          <motion.div
            custom={0}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="glass-card rounded-2xl p-6 lg:p-8 hover:border-arts-green/50 transition-all duration-500 group"
          >
            <motion.div>
              <motion.div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/ai.svg"
                  alt="Artificial Intelligence"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3 className="mb-4 text-secondary font-content-title">
                {t("technology.ai.title")}
              </motion.h3>
              <motion.p className="text-secondary mb-4 font-content-subtitle">
                {t("technology.ai.subtitle")}
              </motion.p>

              <motion.p className="text-secondary mb-4 font-text">
                {t("technology.ai.description")}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
