"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Building2, Users, Globe, Award } from "lucide-react";

const PersonalBrand: React.FC = () => {
  const { darkMode } = useTheme();

  const stats = [
    { icon: Building2, number: "15+", label: "Products & Projects" },
    { icon: Globe, number: "3+", label: "Countries Reached" },
    { icon: Users, number: "1000+", label: "Community Members" },
    { icon: Award, number: "3", label: "Professional Certifications" },
  ];

  return (
    <section
      className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-white via-slate-50/80 to-white"
        }`}
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center
          ${
            darkMode
              ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
              : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
          }`}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-xl p-6 transition-all duration-300 backdrop-blur-xl border text-center
                  hover:-translate-y-1 hover:shadow-lg
                  ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700/50 hover:border-blue-600/50"
                      : "bg-white/50 border-slate-200 hover:border-blue-500/50"
                  }`}
              >
                <div
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl
                    ${
                      darkMode
                        ? "bg-gradient-to-br from-blue-900/20 to-slate-800/20"
                        : "bg-gradient-to-br from-blue-50/50 to-slate-50/50"
                    }`}
                />

                <div className="relative z-10">
                  <div className="flex justify-center mb-3">
                    <div
                      className={`p-3 rounded-lg transition-colors duration-300
                        ${
                          darkMode
                            ? "bg-blue-600/20 group-hover:bg-blue-600/30"
                            : "bg-blue-100/70 group-hover:bg-blue-200/70"
                        }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-300
                          ${
                            darkMode
                              ? "text-blue-400 group-hover:text-blue-300"
                              : "text-blue-600 group-hover:text-blue-700"
                          }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`text-3xl font-bold mb-1 transition-colors duration-300
                      ${
                        darkMode
                          ? "text-slate-100 group-hover:text-white"
                          : "text-slate-900 group-hover:text-slate-800"
                      }`}
                  >
                    {stat.number}
                  </div>

                  <div
                    className={`text-sm font-medium transition-colors duration-300
                      ${
                        darkMode
                          ? "text-slate-400 group-hover:text-slate-300"
                          : "text-slate-600 group-hover:text-slate-700"
                      }`}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Summary */}
        <div
          className={`mt-12 rounded-xl p-8 backdrop-blur-xl border transition-all duration-300
            ${
              darkMode
                ? "bg-slate-800/30 border-slate-700/50"
                : "bg-white/30 border-slate-200"
            }`}
        >
          <p
            className={`text-lg leading-relaxed text-center max-w-4xl mx-auto transition-colors duration-300
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            I&apos;m a software engineer and tech entrepreneur passionate about using technology
            to preserve cultural heritage. From the Democratic Republic of Congo to the United States,
            my journey has been driven by a mission to bridge the gap between innovation and tradition,
            creating digital solutions that empower communities and preserve the Kifuliiru language for future generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalBrand;
