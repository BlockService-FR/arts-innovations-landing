"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, Globe, Zap } from "lucide-react";
import Image from "next/image";
import LogoIcon from "@/public/logo-white.svg";

export default function AboutSection() {
  const { t } = useTranslation();

  

  const aboutStats = [
    {
      icon: Award,
      labelKey: "about.stats.experience.label",
      sublabelKey: "about.stats.experience.sublabel",
    },
    {
      icon: Users,
      labelKey: "about.stats.clients.label",
      sublabelKey: "about.stats.clients.sublabel",
    },
    {
      icon: Globe,
      labelKey: "about.stats.countries.label",
      sublabelKey: "about.stats.countries.sublabel",
    },
    {
      icon: Zap,
      labelKey: "about.stats.reliability.label",
      sublabelKey: "about.stats.reliability.sublabel",
    },
  ];

  return (
    <section
      id="about"
      className="pt-16 lg:pt-20 relative flex flex-col gap-16 justify-start items-center overflow-hidden"
    >
      <div className="w-full 2xl:max-w-[80vw] mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-slate-950 rounded-2xl border-2 border-lime-400 shadow-lg"
          style={{
            boxShadow:
              "0 0 30px rgba(164, 255, 43, 0.3), inset 0 0 30px rgba(164, 255, 43, 0.05)",
          }}
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Content Section */}
            <div className="flex-1">
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-sans">
                {t("about.title")}
              </h2>

              {/* Descriptive Text - Italicized */}
              <p className="text-base md:text-lg text-gray-300 mb-8 italic font-sans leading-relaxed">
                {t("about.description")}
              </p>

              {/* Stats with Checkmarks */}
              <div className="space-y-2">
                {aboutStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-lime-400 text-xl font-bold">✓</div>
                    <span className="text-white text-base font-sans">
                      {t(stat.labelKey)} {t(stat.sublabelKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Branding Section */}
            <div className="flex flex-col items-center justify-center md:ml-8">
              <LogoIcon className="mb-2"/>

              {/* ARTS GROUP Text */}
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white font-sans tracking-wide">
                  ARTS
                </p>
                <p className="text-lg md:text-xl text-gray-400 font-sans tracking-widest">
                  GROUP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
