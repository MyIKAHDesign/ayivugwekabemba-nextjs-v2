"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Building2, FlaskConical, ExternalLink } from "lucide-react";

interface Company {
  name: string;
  description: string;
  url?: string;
  subcompanies?: {
    name: string;
    description: string;
    url?: string;
  }[];
}

const CompaniesSection: React.FC = () => {
  const { darkMode } = useTheme();

  const companies: Company[] = [
    {
      name: "Wekify LLC",
      description:
        "Provides technical development and engineering expertise behind digital platforms, working to promote and provide Kifuliiru with modern and empowering digital tools.",
      subcompanies: [
        {
          name: "Kifuliiru Lab",
          description:
            "Part of Wekify LLC, specializing in language-related needs and serving as the dedicated research laboratory for Kifuliiru language preservation and revitalization.",
        },
      ],
    },
  ];

  return (
    <section
      id="companies"
      className={`relative min-h-screen pt-40 pb-24 md:pt-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 via-slate-50 to-white"
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

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-mono text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Companies
          </h2>
          <p
            className={`font-mono text-xl leading-relaxed
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            Organizations driving innovation in language preservation
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border
                hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                    : "bg-white/50 border-slate-200 hover:border-slate-300"
                }`}
            >
              {/* Subtle hover background */}
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                  ${
                    darkMode
                      ? "bg-gradient-to-br from-slate-700/40 via-slate-600/30 to-slate-700/40"
                      : "bg-gradient-to-br from-slate-100/60 via-slate-50/50 to-slate-100/60"
                  }`}
              />

              <div className="relative p-8 transition-colors duration-500 z-10">
                {/* Company Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl transition-colors duration-500
                      ${
                        darkMode
                          ? "bg-slate-700/50 group-hover:bg-slate-600/50"
                          : "bg-slate-100/50 group-hover:bg-slate-200/50"
                      }`}
                  >
                    <Building2
                      className={`w-6 h-6 transition-colors duration-500
                        ${
                          darkMode
                            ? "text-slate-300 group-hover:text-slate-100"
                            : "text-slate-600 group-hover:text-slate-800"
                        }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-mono text-2xl font-semibold mb-2 transition-colors duration-500
                        ${
                          darkMode
                            ? "text-slate-100 group-hover:text-slate-50"
                            : "text-slate-900 group-hover:text-slate-800"
                        }`}
                    >
                      {company.name}
                    </h3>
                    {company.url && (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-sm font-mono transition-colors duration-500
                          ${
                            darkMode
                              ? "text-slate-300 group-hover:text-slate-200"
                              : "text-slate-600 group-hover:text-slate-700"
                          }`}
                      >
                        Visit Website
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <p
                  className={`font-mono text-base leading-relaxed mb-6 transition-colors duration-500
                    ${
                      darkMode
                        ? "text-slate-300 group-hover:text-slate-200"
                        : "text-slate-700 group-hover:text-slate-800"
                    }`}
                >
                  {company.description}
                </p>

                {/* Subcompanies */}
                {company.subcompanies && company.subcompanies.length > 0 && (
                  <div className="space-y-4">
                    <h4
                      className={`font-mono text-sm font-semibold uppercase tracking-wide mb-3 transition-colors duration-500
                        ${
                          darkMode
                            ? "text-slate-200 group-hover:text-slate-100"
                            : "text-slate-600 group-hover:text-slate-700"
                        }`}
                    >
                      Subcompanies
                    </h4>
                    {company.subcompanies.map((subcompany, subIndex) => (
                      <div
                        key={subIndex}
                        className={`p-4 rounded-lg border transition-colors duration-500
                          ${
                            darkMode
                              ? "bg-slate-700/30 border-slate-600/30 group-hover:bg-slate-700/40"
                              : "bg-slate-50/50 border-slate-200 group-hover:bg-slate-100/50"
                          }`}
                      >
                        <div className="flex items-start gap-3">
                          <FlaskConical
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-500
                              ${
                                darkMode
                                  ? "text-slate-300 group-hover:text-slate-200"
                                  : "text-slate-600 group-hover:text-slate-700"
                              }`}
                          />
                          <div className="flex-1">
                            <h5
                              className={`font-mono font-semibold mb-1 transition-colors duration-500
                                ${
                                  darkMode
                                    ? "text-slate-100 group-hover:text-slate-50"
                                    : "text-slate-800 group-hover:text-slate-900"
                                }`}
                            >
                              {subcompany.name}
                            </h5>
                            <p
                              className={`font-mono text-sm leading-relaxed transition-colors duration-500
                                ${
                                  darkMode
                                    ? "text-slate-300 group-hover:text-slate-200"
                                    : "text-slate-600 group-hover:text-slate-700"
                                }`}
                            >
                              {subcompany.description}
                            </p>
                            {subcompany.url && (
                              <a
                                href={subcompany.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1 text-xs font-mono mt-2 transition-colors duration-500
                                  ${
                                    darkMode
                                      ? "text-slate-300 group-hover:text-slate-200"
                                      : "text-slate-600 group-hover:text-slate-700"
                                  }`}
                              >
                                Visit Website
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
          ${darkMode ? "via-slate-700/50" : "via-slate-200"} 
          to-transparent`}
        />
      </div>
    </section>
  );
};

export default CompaniesSection;

