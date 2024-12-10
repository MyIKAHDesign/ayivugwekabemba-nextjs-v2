"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description?: string;
}

const ExperienceSection: React.FC = () => {
  const [showTimeline, setShowTimeline] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const experiences: Experience[] = [
    {
      company: "Kifuliiru Platform Project",
      position: "Founder & CTO",
      location: "Spokane, WA",
      period: "January 2020 - Present",
      description:
        "Leading the development of a comprehensive digital platform dedicated to preserving and promoting the Kifuliiru language and Bafuliiru cultural heritage. Architecting and building key components including Radio Ibufuliiru, an interactive dictionary platform, and language learning tools using Next.js, TypeScript, and cloud technologies. Coordinating with community elders and cultural experts to digitize Kifuliiru words and phrases, while managing a team of volunteer contributors to ensure authentic content preservation.",
    },
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

  return (
    <section
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 to-white"
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
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-white" : "text-slate-900"} 
            transition-colors duration-300`}
          >
            Professional Experiences
          </h2>
          <p
            className={`text-xl leading-relaxed
            ${darkMode ? "text-slate-400" : "text-slate-600"} 
            transition-colors duration-300 max-w-xl mx-auto`}
          >
            A demonstrated history of software development, project management,
            and operational excellence across various industries.
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
        </div>

        {/* Timeline button */}
        <div className="flex justify-end mb-8">
          <button
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all"
            onClick={() => setShowTimeline(true)}
            aria-label="Show Timeline"
          >
            <Calendar className="w-6 h-6" />
          </button>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border
                ${
                  darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-gray-100"
                }`}
            >
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                ${
                  darkMode
                    ? "bg-gradient-to-t from-slate-800 to-slate-700"
                    : "bg-gradient-to-t from-slate-900 to-slate-800"
                }`}
              />

              <div className="relative p-6 sm:p-8 transition-colors duration-500 group-hover:text-white z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3
                      className={`text-xl leading-relaxed font-semibold mb-1 transition-colors duration-500 group-hover:text-white
                      ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                      {exp.position}
                    </h3>
                    <div className="text-lg leading-relaxed text-blue-500 font-medium mb-1 transition-colors duration-500 group-hover:text-blue-300">
                      {exp.company}
                    </div>
                    <div
                      className={`text-sm font-medium uppercase tracking-wide mb-4 transition-colors duration-500 group-hover:text-slate-200
                      ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {exp.location} • {exp.period}
                    </div>
                  </div>
                </div>

                <p
                  className={`text-lg leading-relaxed transition-colors duration-500 group-hover:text-slate-200
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Modal */}
        {showTimeline && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowTimeline(false)}
          >
            <div
              className={`max-w-7xl w-full h-[90vh] mx-4 p-6 rounded-lg shadow-lg overflow-y-scroll relative
                ${
                  darkMode
                    ? "bg-slate-900 border border-slate-700"
                    : "bg-white border border-slate-200"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`absolute top-4 right-4 text-2xl font-bold
                  ${darkMode ? "text-slate-400" : "text-gray-500"}`}
                onClick={() => setShowTimeline(false)}
              >
                &times;
              </button>
              <h3
                className={`text-xl leading-relaxed font-semibold text-center mb-6
                ${darkMode ? "text-white" : "text-slate-900"}`}
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
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <Calendar className="w-4 h-4" />
                      </div>
                      {index < experiences.length - 1 && (
                        <div className="w-0.5 bg-blue-600 h-full mt-1" />
                      )}
                    </div>

                    <div
                      className={`group relative rounded-xl overflow-hidden w-full transition-all duration-300
                      ${
                        darkMode
                          ? "bg-slate-800 border-slate-700"
                          : "bg-white border-slate-200"
                      } border`}
                    >
                      <div
                        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                        ${
                          darkMode
                            ? "bg-gradient-to-t from-slate-800 to-slate-700"
                            : "bg-gradient-to-t from-slate-900 to-slate-800"
                        }`}
                      />

                      <div className="relative p-4 z-10 transition-colors duration-500 group-hover:text-white">
                        <div className="flex items-center mb-2">
                          <span
                            className={`text-sm font-medium uppercase tracking-wide transition-colors duration-500 group-hover:text-slate-200
                            ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <h4
                          className={`text-xl leading-relaxed font-semibold transition-colors duration-500 group-hover:text-white
                          ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                          {exp.company}
                        </h4>
                        <p
                          className={`text-lg leading-relaxed mt-2 transition-colors duration-500 group-hover:text-slate-200
                          ${darkMode ? "text-slate-400" : "text-slate-600"}`}
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
          ${darkMode ? "via-slate-700" : "via-slate-200"} 
          to-transparent`}
        ></div>
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
