"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { Globe, Radio, BookOpen, Smartphone, ArrowRight } from "lucide-react";

const FeaturedCompanies: React.FC = () => {
  const { darkMode } = useTheme();

  const featuredCompanies = [
    {
      name: "Kifuliiru.com",
      slug: "kifuliiru",
      description: "The comprehensive digital platform for learning, preserving, and promoting the Kifuliiru language and Bafuliiru cultural heritage.",
      icon: Globe,
      status: "Active",
    },
    {
      name: "Wempily",
      slug: "wempily",
      description: "Social media platform connecting Bafuliiru people worldwide, fostering community and cultural exchange.",
      icon: Smartphone,
      status: "In Development",
    },
    {
      name: "Radio Ibufuliiru",
      slug: "radio-ibufuliiru",
      description: "Digital radio station broadcasting in Kifuliiru, featuring cultural programs, news, and music.",
      icon: Radio,
      status: "Active",
    },
    {
      name: "Tabula Kifuliiru",
      slug: "tabula-kifuliiru",
      description: "Interactive Kifuliiru alphabet learning application with pronunciation guides and exercises.",
      icon: BookOpen,
      status: "Active",
    },
  ];

  return (
    <section
      id="featured-companies"
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
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-sans text-4xl sm:text-5xl font-semibold tracking-tight mb-4
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Featured Companies
          </h2>
          <p
            className={`font-sans text-xl leading-relaxed
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            Key platforms in the Kifuliiru digital ecosystem
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredCompanies.map((company, index) => {
            const Icon = company.icon;

            return (
              <Link
                key={index}
                href={`/companies/${company.slug}`}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-xl border
                  hover:-translate-y-1 hover:shadow-xl
                  ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700/50 hover:border-blue-600/50"
                      : "bg-white/50 border-slate-200 hover:border-blue-500/50"
                  }`}
              >
                {/* Hover Background */}
                <div
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out
                    ${
                      darkMode
                        ? "bg-gradient-to-br from-blue-900/20 via-slate-800/20 to-blue-900/20"
                        : "bg-gradient-to-br from-blue-50/50 via-slate-50/50 to-blue-50/50"
                    }`}
                />

                <div className="relative p-6 transition-colors duration-300 z-10">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`p-3 rounded-lg transition-colors duration-300 flex-shrink-0
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
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3
                          className={`font-sans text-xl font-semibold transition-colors duration-300
                            ${
                              darkMode
                                ? "text-slate-100 group-hover:text-white"
                                : "text-slate-900 group-hover:text-slate-800"
                            }`}
                        >
                          {company.name}
                        </h3>
                        <span
                          className={`text-xs font-sans px-2 py-1 rounded-md flex-shrink-0 transition-colors duration-300
                            ${
                              company.status === "Active"
                                ? darkMode
                                  ? "bg-green-600/20 text-green-400 border border-green-600/30"
                                  : "bg-green-100/70 text-green-700 border border-green-200/50"
                                : darkMode
                                ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30"
                                : "bg-yellow-100/70 text-yellow-700 border border-yellow-200/50"
                            }`}
                        >
                          {company.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`font-sans text-base leading-relaxed mb-4 transition-colors duration-300
                      ${
                        darkMode
                          ? "text-slate-300 group-hover:text-slate-200"
                          : "text-slate-700 group-hover:text-slate-800"
                      }`}
                  >
                    {company.description}
                  </p>

                  <div
                    className={`flex items-center gap-2 text-sm font-sans font-medium transition-colors duration-300
                      ${
                        darkMode
                          ? "text-blue-400 group-hover:text-blue-300"
                          : "text-blue-600 group-hover:text-blue-700"
                      }`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/companies"
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-lg font-sans text-lg font-semibold transition-all duration-300 hover:scale-105 border-2
              ${
                darkMode
                  ? "bg-blue-600 text-white border-blue-500 hover:bg-blue-500"
                  : "bg-blue-600 text-white border-blue-500 hover:bg-blue-500"
              }`}
          >
            View All 17 Companies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
