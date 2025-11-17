"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, Globe, Zap } from "lucide-react";
import Image from "next/image";
import LogoIcon from "@/public/logo-white.svg";
import CheckboxIcon from "@/public/checkbox.svg";
import LogoGroup from "@/public/logo-group.svg";


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
      className="pt-40 lg:pt-48 relative flex flex-col gap-16 justify-start items-center overflow-hidden"
    >
      <div className="w-full 2xl:max-w-[80vw] mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-elevated rounded-2xl border border-arts-light/70 shadow-md"
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Content Section */}
            <div className="flex-1">
              {/* Main Heading */}
              <h2 className="font-title">
                {t("about.title")}
              </h2>

              {/* Descriptive Text - Italicized */}
              <p className="text-base md:text-lg text-muted mb-8 italic max-w-6xl font-sans leading-relaxed">
                {t("about.description")}
              </p>

              {/* Stats with Checkmarks */}
              <div className="space-y-2">
                {aboutStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckboxIcon size={16} className="fill-arts-green" />
                    <span className="text-primary text-base font-sans">
                      {t(stat.labelKey)} {t(stat.sublabelKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Branding Section */}
            <div className="flex flex-col items-center justify-center md:m-10 mx-auto">
              <Image
                                  src="/logo-group.svg"
                                  alt="ARTS Group Logo"
                                  height={270}
                                  width={180}
                                  className="m-2"
                                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
