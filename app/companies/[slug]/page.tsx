"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  getCompanyBySlug,
  type Company,
} from "../../data/companies";

export default function CompanyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [company, setCompany] = React.useState<Company | undefined>(undefined);
  const [slug, setSlug] = React.useState<string>("");
  const { darkMode } = useTheme();

  React.useEffect(() => {
    async function loadCompany() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      const foundCompany = getCompanyBySlug(resolvedParams.slug);
      setCompany(foundCompany);
    }
    loadCompany();
  }, [params]);

  if (!company) {
    return (
      <section
        className={`relative min-h-screen pt-40 md:pt-48 lg:pt-52 px-4 sm:px-6 lg:px-8 pb-24 transition-all duration-300
          ${
            darkMode
              ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
              : "bg-gradient-to-b from-slate-50 via-slate-50/80 to-white"
          }`}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h1
            className={`font-mono text-4xl font-semibold mb-4
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Company Not Found
          </h1>
          <Link
            href="/"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
              ${
                darkMode
                  ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative min-h-screen pt-40 md:pt-48 lg:pt-52 px-4 sm:px-6 lg:px-8 pb-24 transition-all duration-300 font-mono
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-slate-50/80 to-white"
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
        {/* Back Button */}
        <Link
          href="/#companies"
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all duration-300
            ${
              darkMode
                ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }
            hover:scale-105`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Companies
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1
              className={`font-mono text-4xl sm:text-5xl font-semibold tracking-tight
                ${darkMode ? "text-slate-100" : "text-slate-900"}`}
            >
              {company.name}
            </h1>
            {company.status && (
              <span
                className={`text-sm font-mono px-3 py-1.5 rounded-md flex-shrink-0
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
            )}
          </div>
          <p
            className={`text-xl leading-relaxed mb-6
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            {company.description}
          </p>
          {company.category && (
            <p
              className={`text-sm mb-6
                ${darkMode ? "text-slate-400" : "text-slate-500"}`}
            >
              {company.category}
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            {company.ctaButtons && company.ctaButtons.length > 0 ? (
              company.ctaButtons.slice(0, 2).map((button, index) => (
                <a
                  key={index}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300
                    ${
                      button.primary
                        ? darkMode
                          ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                        : darkMode
                        ? "bg-slate-800/50 text-slate-200 hover:bg-slate-700/50 border border-slate-700"
                        : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                    }
                    hover:scale-105`}
                >
                  {button.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))
            ) : (
              company.externalUrl && (
                <a
                  href={company.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300
                    ${
                      darkMode
                        ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }
                    hover:scale-105`}
                >
                  Visit Platform
                  <ExternalLink className="w-4 h-4" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Overview */}
        {company.overview && (
          <section className="mb-12">
            <h2
              className={`text-2xl font-semibold mb-4
                ${darkMode ? "text-slate-100" : "text-slate-900"}`}
            >
              Overview
            </h2>
            {Array.isArray(company.overview) ? (
              company.overview.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base leading-relaxed mb-4
                    ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p
                className={`text-base leading-relaxed
                  ${darkMode ? "text-slate-300" : "text-slate-700"}`}
              >
                {company.overview}
              </p>
            )}
          </section>
        )}

        {/* Key Features */}
        {company.features && company.features.length > 0 && (
          <section className="mb-12">
            <h2
              className={`text-2xl font-semibold mb-6
                ${darkMode ? "text-slate-100" : "text-slate-900"}`}
            >
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {company.features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300
                    ${
                      darkMode
                        ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                        : "bg-white/50 border-slate-200 hover:border-slate-300"
                    }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-2
                      ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed
                      ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Sections */}
        {company.sections &&
          company.sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2
                className={`text-2xl font-semibold mb-6
                  ${darkMode ? "text-slate-100" : "text-slate-900"}`}
              >
                {section.title}
              </h2>
              {section.type === "stats" && section.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {section.stats.map((stat, idx: number) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl text-center border
                        ${
                          darkMode
                            ? "bg-slate-800/50 border-slate-700/50"
                            : "bg-white/50 border-slate-200"
                        }`}
                    >
                      <div
                        className={`text-2xl font-semibold mb-1
                          ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                      >
                        {stat.number}
                      </div>
                      <div
                        className={`text-xs
                          ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {section.type === "list" && Array.isArray(section.content) && (
                <ul className="space-y-2">
                  {section.content.map((item: string, idx: number) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2
                        ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      <span className="mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.type === "ordered-list" &&
                Array.isArray(section.content) && (
                  <ol className="space-y-2 list-decimal list-inside">
                    {section.content.map((item: string, idx: number) => (
                      <li
                        key={idx}
                        className={`${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              {(!section.type || section.type === "text") && (
                <div className="space-y-4">
                  {Array.isArray(section.content) ? (
                    section.content.map((paragraph: string, idx: number) => (
                      <p
                        key={idx}
                        className={`text-base leading-relaxed
                          ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p
                      className={`text-base leading-relaxed
                        ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {section.content}
                    </p>
                  )}
                </div>
              )}
            </section>
          ))}

        {/* Related Links */}
        {company.relatedCompanies &&
          company.relatedCompanies.length > 0 && (
            <section className="mb-12">
              <h2
                className={`text-2xl font-semibold mb-6
                  ${darkMode ? "text-slate-100" : "text-slate-900"}`}
              >
                Related Resources
              </h2>
              <div className="flex flex-wrap gap-4">
                {company.relatedCompanies.map((relatedSlug) => {
                  const relatedCompany = getCompanyBySlug(relatedSlug);
                  if (!relatedCompany) return null;
                  return (
                    <Link
                      key={relatedSlug}
                      href={`/companies/${relatedSlug}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                        ${
                          darkMode
                            ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                            : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                        }
                        hover:scale-105`}
                    >
                      Learn about {relatedCompany.name} →
                    </Link>
                  );
                })}
                <Link
                  href="/#companies"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${
                      darkMode
                        ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                        : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                    }
                    hover:scale-105`}
                >
                  View All Companies →
                </Link>
              </div>
            </section>
          )}
      </div>
    </section>
  );
}

