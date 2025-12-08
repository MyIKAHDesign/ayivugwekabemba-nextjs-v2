"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { getAllCompanies } from "../data/companies";

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description?: string;
  category?: string;
}

const ExperienceSection: React.FC = () => {
  const [isTimelineVisible, setIsTimelineVisible] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const toggleTimeline = () => {
    setIsTimelineVisible(!isTimelineVisible);
  };

  // Get all companies/products and convert to experiences
  const companies = getAllCompanies();
  const companyExperiences: Experience[] = companies.map((company) => {
    let position = "Founder";
    let location = "Remote";
    let period = "January 2020 - Present";

    if (company.type === "company") {
      position = "Founder & CEO";
    } else if (company.type === "subcompany") {
      position = "Founder & Director";
    } else if (company.type === "product") {
      position = "Founder & Developer";
      if (company.status === "Development") {
        period = "In Development";
      }
    }

    return {
      company: company.name,
      position: position,
      location: location,
      period: period,
      description: company.shortDescription || company.description,
      category: company.category || company.type,
    };
  });

  // Traditional work experiences
  const workExperiences: Experience[] = [
    {
      company: "Amazon Fulfillment Center",
      position: "Fulfillment Center Associate",
      location: "Spokane, WA",
      period: "Sep 2024 - Present",
      description:
        "Played a key role in driving operational excellence within the warehouse environment.",
    },
    {
      company: "Walmart",
      position: "Field Associate",
      location: "Spokane Valley, WA",
      period: "Nov 2023 - Sep 2024",
      description:
        "Managed inventory and provided excellent customer service to enhance store operations.",
    },
    {
      company: "ASYST Resources LTD",
      position: "Project Manager",
      location: "Bujumbura, Burundi",
      period: "Feb 2022 - Aug 2023",
      description:
        "Led cross-functional teams and managed Agile project timelines and budgets.",
    },
    {
      company: "ASYST Resources LTD",
      position: "DevOps Engineer",
      location: "Bujumbura, Burundi",
      period: "Feb 2022 - Aug 2023",
      description:
        "Implemented CI/CD practices and optimized cloud infrastructure.",
    },
    {
      company: "ASYST Resources LTD",
      position: "Software Developer",
      location: "Bujumbura, Burundi",
      period: "Jan 2017 - Feb 2022",
      description:
        "Developed and maintained web applications for government and financial systems.",
    },
  ];

  const experiences: Experience[] = [...companyExperiences, ...workExperiences];

  return (
    <section
      className={`relative min-h-screen pt-60 md:pt-44 pb-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 via-slate-50 to-white"
        }`}
      id="experience"
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

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-mono text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Professional Experiences
          </h2>
          <p
            className={`font-mono text-xl leading-relaxed
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            A demonstrated history of software development, project management,
            and operational excellence across various industries.
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Timeline Toggle Button */}
        <div className="flex justify-center md:justify-end mb-12">
          <button
            onClick={toggleTimeline}
            className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 overflow-hidden transform hover:scale-105 shadow-lg
              ${
                darkMode
                  ? "bg-slate-700 text-slate-100 hover:bg-slate-600 ring-1 ring-slate-600/50"
                  : "bg-slate-800 text-white hover:bg-slate-700 ring-1 ring-slate-700/50"
              }`}
          >
            <div className="relative z-10 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {isTimelineVisible ? "Hide Timeline" : "View Timeline"}
              </span>
            </div>
          </button>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 border
                ${
                  darkMode
                    ? "bg-slate-800/30 border-slate-700/30 hover:border-slate-600/50"
                    : "bg-white/40 border-slate-200/50 hover:border-slate-300/70"
                }`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Left side - Position and Company */}
                  <div className="flex-1 md:min-w-[200px]">
                    <h3
                      className={`font-mono text-lg font-semibold mb-2 transition-colors duration-300
                        ${
                          darkMode
                            ? "text-slate-100 group-hover:text-slate-50"
                            : "text-slate-900 group-hover:text-slate-800"
                        }`}
                    >
                      {exp.position}
                    </h3>
                    <div
                      className={`text-base font-medium mb-2 transition-colors duration-300
                        ${
                          darkMode
                            ? "text-slate-300 group-hover:text-slate-200"
                            : "text-slate-700 group-hover:text-slate-800"
                        }`}
                    >
                      {exp.company}
                    </div>
                    {exp.category && (
                      <div
                        className={`text-xs font-medium uppercase tracking-wide mb-2 transition-colors duration-300
                          ${
                            darkMode
                              ? "text-slate-400 group-hover:text-slate-300"
                              : "text-slate-500 group-hover:text-slate-600"
                          }`}
                      >
                        {exp.category}
                      </div>
                    )}
                    <div
                      className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300
                        ${
                          darkMode
                            ? "text-slate-400 group-hover:text-slate-300"
                            : "text-slate-500 group-hover:text-slate-600"
                        }`}
                    >
                      {exp.location} • {exp.period}
                    </div>
                  </div>

                  {/* Right side - Description */}
                  <div className="flex-1 md:flex-[2]">
                    {exp.description && (
                      <p
                        className={`font-mono text-sm leading-relaxed transition-colors duration-300
                          ${
                            darkMode
                              ? "text-slate-300 group-hover:text-slate-200"
                              : "text-slate-600 group-hover:text-slate-700"
                          }`}
                      >
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Modal */}
        {isTimelineVisible && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsTimelineVisible(false)}
          >
            <div
              className={`max-w-7xl w-full h-[90vh] mx-4 p-6 rounded-lg shadow-lg overflow-y-scroll relative transition-all duration-300
                ${
                  darkMode
                    ? "bg-slate-900/95 border border-slate-700/50"
                    : "bg-white/95 border-2 border-slate-200/50 backdrop-blur-xl"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`font-mono absolute top-4 right-4 text-2xl font-bold transition-colors duration-300
                  ${darkMode ? "text-slate-300 hover:text-slate-100" : "text-slate-600 hover:text-slate-800"}`}
                onClick={() => setIsTimelineVisible(false)}
              >
                &times;
              </button>
              <h3
                className={`font-mono text-xl leading-relaxed font-semibold text-center mb-6
                  ${darkMode ? "text-slate-100" : "text-slate-900"}`}
              >
                Professional Timeline
              </h3>

              <div className="relative">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative flex gap-4 mb-8 opacity-0 translate-y-full"
                    style={{
                      animation: `slideUp 0.5s ease-out ${
                        index * 0.15
                      }s forwards`,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center
                        ${darkMode ? "bg-slate-600" : "bg-slate-700"}
                        ${darkMode ? "text-slate-200" : "text-white"}`}>
                        <Calendar className="w-4 h-4" />
                      </div>
                      {index < experiences.length - 1 && (
                        <div className={`w-0.5 h-full mt-1
                          ${darkMode ? "bg-slate-600" : "bg-slate-300"}`} />
                      )}
                    </div>

                    <div
                      key={index}
                      className={`group relative rounded-xl overflow-hidden w-full transition-all duration-300 border hover:shadow-xl
                        ${
                          darkMode
                            ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                            : "bg-white/80 border-slate-200 hover:border-slate-300"
                        }`}
                    >
                      <div
                        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                          ${
                            darkMode
                              ? "bg-gradient-to-br from-slate-700/40 via-slate-600/30 to-slate-700/40"
                              : "bg-gradient-to-br from-slate-100/60 via-slate-50/50 to-slate-100/60"
                          }`}
                      />

                      <div className="relative p-4 z-10 transition-colors duration-500">
                        <div className="flex items-center mb-2">
                          <span
                            className={`font-mono text-sm font-medium uppercase tracking-wide transition-colors duration-500
                              ${
                                darkMode
                                  ? "text-slate-400 group-hover:text-slate-300"
                                  : "text-slate-500 group-hover:text-slate-600"
                              }`}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <h4
                          className={`font-mono text-xl leading-relaxed font-semibold transition-colors duration-500
                            ${
                              darkMode
                                ? "text-slate-100 group-hover:text-slate-50"
                                : "text-slate-900 group-hover:text-slate-800"
                            }`}
                        >
                          {exp.company}
                        </h4>
                        <p
                          className={`font-mono text-lg leading-relaxed mt-2 transition-colors duration-500
                            ${
                              darkMode
                                ? "text-slate-300 group-hover:text-slate-200"
                                : "text-slate-600 group-hover:text-slate-700"
                            }`}
                        >
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
            ${darkMode ? "via-slate-700/50" : "via-slate-200"} 
            to-transparent`}
        />
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
