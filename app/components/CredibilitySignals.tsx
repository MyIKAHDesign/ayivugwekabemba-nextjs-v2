"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const CredibilitySignals: React.FC = () => {
  const { darkMode } = useTheme();

  const workHistory = [
    { company: "Amazon", role: "Software Engineer", logo: "💼" },
    { company: "Walmart", role: "Software Engineer", logo: "💼" },
    { company: "ASYST", role: "Software Engineer", logo: "💼" },
  ];

  const certifications = [
    { name: "Google Project Management", issuer: "Google", year: "2024" },
    { name: "Meta Back-End Developer", issuer: "Meta", year: "2024" },
    { name: "GitHub Foundations", issuer: "GitHub", year: "2024" },
  ];

  return (
    <section
      className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
            : "bg-gradient-to-b from-slate-50 via-white to-slate-50"
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
            Experience & Credentials
          </h2>
          <p
            className={`font-sans text-xl leading-relaxed
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            Professional background and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work History */}
          <div
            className={`rounded-xl p-8 backdrop-blur-xl border transition-all duration-300
              ${
                darkMode
                  ? "bg-slate-800/30 border-slate-700/50"
                  : "bg-white/30 border-slate-200"
              }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 rounded-lg
                  ${
                    darkMode
                      ? "bg-blue-600/20"
                      : "bg-blue-100/70"
                  }`}
              >
                <Briefcase
                  className={`w-6 h-6
                    ${
                      darkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                    }`}
                />
              </div>
              <h3
                className={`text-2xl font-semibold
                  ${darkMode ? "text-slate-100" : "text-slate-900"}`}
              >
                Work Experience
              </h3>
            </div>

            <div className="space-y-4">
              {workHistory.map((job, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5
                    ${
                      darkMode
                        ? "bg-slate-700/30 hover:bg-slate-700/50"
                        : "bg-slate-50/50 hover:bg-slate-100/70"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{job.logo}</span>
                    <div>
                      <h4
                        className={`font-semibold text-lg
                          ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                      >
                        {job.company}
                      </h4>
                      <p
                        className={`text-sm
                          ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {job.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`rounded-xl p-8 backdrop-blur-xl border transition-all duration-300
              ${
                darkMode
                  ? "bg-slate-800/30 border-slate-700/50"
                  : "bg-white/30 border-slate-200"
              }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 rounded-lg
                  ${
                    darkMode
                      ? "bg-green-600/20"
                      : "bg-green-100/70"
                  }`}
              >
                <Award
                  className={`w-6 h-6
                    ${
                      darkMode
                        ? "text-green-400"
                        : "text-green-600"
                    }`}
                />
              </div>
              <h3
                className={`text-2xl font-semibold
                  ${darkMode ? "text-slate-100" : "text-slate-900"}`}
              >
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5
                    ${
                      darkMode
                        ? "bg-slate-700/30 hover:bg-slate-700/50"
                        : "bg-slate-50/50 hover:bg-slate-100/70"
                    }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4
                        className={`font-semibold text-base mb-1
                          ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                      >
                        {cert.name}
                      </h4>
                      <p
                        className={`text-sm
                          ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {cert.issuer}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-md flex-shrink-0
                        ${
                          darkMode
                            ? "bg-green-600/20 text-green-400 border border-green-600/30"
                            : "bg-green-100/70 text-green-700 border border-green-200/50"
                        }`}
                    >
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySignals;
