"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Building2,
  FlaskConical,
  ExternalLink,
  Globe,
  Radio,
  BookOpen,
  Newspaper,
  Languages,
  Rocket,
  Database,
  Smartphone,
  Code,
  Settings,
} from "lucide-react";

interface Item {
  name: string;
  description: string;
  url?: string;
  type: "company" | "subcompany" | "product";
  status?: "Active" | "Development";
  category?: string;
}

const CompaniesSection: React.FC = () => {
  const { darkMode } = useTheme();

  const getIcon = (type: string, category?: string) => {
    if (type === "company") return Building2;
    if (type === "subcompany") return FlaskConical;
    if (category?.toLowerCase().includes("web") || category?.toLowerCase().includes("website")) return Globe;
    if (category?.toLowerCase().includes("mobile") || category?.toLowerCase().includes("app")) return Smartphone;
    if (category?.toLowerCase().includes("audio") || category?.toLowerCase().includes("radio")) return Radio;
    if (category?.toLowerCase().includes("news")) return Newspaper;
    if (category?.toLowerCase().includes("dictionary")) return BookOpen;
    if (category?.toLowerCase().includes("social")) return Languages;
    if (category?.toLowerCase().includes("tool") || category?.toLowerCase().includes("internal")) return Settings;
    if (category?.toLowerCase().includes("learning") || category?.toLowerCase().includes("educational")) return BookOpen;
    return Rocket;
  };

  const items: Item[] = [
    // Companies
    {
      name: "Wekify LLC",
      description:
        "Provides technical development and engineering expertise behind digital platforms, working to promote and provide Kifuliiru with modern and empowering digital tools.",
      type: "company",
    },
    // Subcompanies
    {
      name: "Kifuliiru Lab",
      description:
        "Part of Wekify LLC, specializing in language-related needs and serving as the dedicated research laboratory for Kifuliiru language preservation and revitalization.",
      type: "subcompany",
    },
    // Products
    {
      name: "Tabula Kifuliiru",
      description:
        "A comprehensive web application platform for creating and managing Kifuliiru language content. Web app contribution platform for admins and contributors to create and manage Kifuliiru content.",
      url: "https://tabula.kifuliiru.com",
      type: "product",
      status: "Active",
      category: "Web App",
    },
    {
      name: "Kifuliiru.com",
      description:
        "The main Kifuliiru language website and comprehensive digital ecosystem for learning, cultural preservation, and community engagement.",
      url: "https://kifuliiru.com",
      type: "product",
      status: "Active",
      category: "Website",
    },
    {
      name: "Imyazi.com",
      description:
        "News website providing updates and information relevant to the Kifuliiru community (Bufuliiru) in Kifuliiru and other languages. 'Imyazi' means 'The News' in Kifuliiru.",
      url: "https://imyazi.com",
      type: "product",
      status: "Development",
      category: "News Platform",
    },
    {
      name: "Wempily",
      description:
        "Multi-Platform Project Management System for Kifuliiru Lab - Managing all our projects easily with the help of AI agents, tracking feature development and cross-platform parity.",
      url: "https://wempily.com",
      type: "product",
      status: "Active",
      category: "Internal Tool",
    },
    {
      name: "Kifuliiru.net",
      description:
        "Purely in Kifuliiru - our first platform where we started writing numbers one by one. Numbers from here were used to generate formulas. 100% content created by Ayivugwe Kabemba Mukome without AI assistance.",
      url: "https://kifuliiru.net",
      type: "product",
      status: "Active",
      category: "Learning Platform",
    },
    {
      name: "dictionary.kifuliiru.net",
      description:
        "Kifuliiru dictionary and language reference. All content created by Ayivugwe Kabemba Mukome.",
      url: "https://dictionary.kifuliiru.net",
      type: "product",
      status: "Active",
      category: "Dictionary",
    },
    {
      name: "lola.kifuliiru.com",
      description:
        "Social media platform for Kifuliiru community. Created by Ayivugwe Kabemba Mukome with AI assistance for development, including Kifuliiru translations.",
      url: "https://lola.kifuliiru.com",
      type: "product",
      status: "Active",
      category: "Social Media",
    },
    {
      name: "Radio Ibufuliiru",
      description:
        "Audio broadcasting platform available on Imyazi.com, Substack, Spotify, Amazon Music, Audible.com, and more. All content created by Ayivugwe Kabemba Mukome.",
      url: "https://imyazi.com/radio-ibufuliiru",
      type: "product",
      status: "Active",
      category: "Audio Platform",
    },
    {
      name: "Imyazi mu Kifuliiru",
      description:
        "News and content in Kifuliiru on Substack. All content created by Ayivugwe Kabemba Mukome.",
      url: "https://imyazi.substack.com",
      type: "product",
      status: "Active",
      category: "Newsletter",
    },
    {
      name: "Kifuliiru Ndeto ngale",
      description:
        "100% content in Kifuliiru. Designed and content created by Ayivugwe Kabemba Mukome without AI assistance.",
      url: "https://ibufuliiru.wixstudio.com/kifuliiru",
      type: "product",
      status: "Active",
      category: "Educational Site",
    },
    {
      name: "Ibufuliiru / Tumenye Ibufuliiru",
      description:
        "100% content in Kifuliiru. Designed and content created by Ayivugwe Kabemba Mukome without AI assistance. Cultural site focusing on Ibufuliiru, the homeland of the Bafuliiru people.",
      url: "https://ibufuliiru.wixstudio.com/ibufuliiru",
      type: "product",
      status: "Active",
      category: "Cultural Site",
    },
    {
      name: "Kifuliiru HQ",
      description:
        "Mobile application built with Flutter for Android and iOS. Currently in development and testing phase. All content created by Ayivugwe Kabemba Mukome.",
      url: "https://kifuliiru.com/app",
      type: "product",
      status: "Development",
      category: "Mobile App",
    },
    {
      name: "Fuliiru Hub",
      description:
        "Your gateway to Ibufuliiru, our motherland. Discover, learn, and contribute to the preservation of Kifuliiru. Join our mission to document and celebrate the richness of our heritage.",
      url: "https://fuliiruhub.com",
      type: "product",
      status: "Active",
      category: "Web Platform",
    },
    {
      name: "Kifuliiru Data Generators",
      description:
        "Data generation system for creating Kifuliiru language content at scale. Supports systematic content generation for educational materials.",
      type: "product",
      status: "Active",
      category: "Development Tool",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = getIcon(item.type, item.category);

            return (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-xl border
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                  ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                      : "bg-white/50 border-slate-200 hover:border-slate-300"
                  }`}
              >
                {/* Subtle hover background */}
                <div
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out
                    ${
                      darkMode
                        ? "bg-gradient-to-br from-slate-700/40 via-slate-600/30 to-slate-700/40"
                        : "bg-gradient-to-br from-slate-100/60 via-slate-50/50 to-slate-100/60"
                    }`}
                />

                <div className="relative p-6 transition-colors duration-300 z-10">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`p-2.5 rounded-lg transition-colors duration-300 flex-shrink-0
                        ${
                          darkMode
                            ? "bg-slate-700/50 group-hover:bg-slate-600/50"
                            : "bg-slate-100/50 group-hover:bg-slate-200/50"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300
                          ${
                            darkMode
                              ? "text-slate-300 group-hover:text-slate-100"
                              : "text-slate-600 group-hover:text-slate-800"
                          }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3
                          className={`font-mono text-lg font-semibold transition-colors duration-300
                            ${
                              darkMode
                                ? "text-slate-100 group-hover:text-slate-50"
                                : "text-slate-900 group-hover:text-slate-800"
                            }`}
                        >
                          {item.name}
                        </h3>
                        {item.status && (
                          <span
                            className={`text-xs font-mono px-2 py-0.5 rounded-md flex-shrink-0 transition-colors duration-300
                              ${
                                item.status === "Active"
                                  ? darkMode
                                    ? "bg-green-600/20 text-green-400 border border-green-600/30"
                                    : "bg-green-100/70 text-green-700 border border-green-200/50"
                                  : darkMode
                                  ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30"
                                  : "bg-yellow-100/70 text-yellow-700 border border-yellow-200/50"
                              }`}
                          >
                            {item.status}
                          </span>
                        )}
                      </div>
                      {item.category && (
                        <p
                          className={`font-mono text-xs mb-2 transition-colors duration-300
                            ${
                              darkMode
                                ? "text-slate-400 group-hover:text-slate-300"
                                : "text-slate-500 group-hover:text-slate-600"
                            }`}
                        >
                          {item.category}
                        </p>
                      )}
                    </div>
                  </div>

                  <p
                    className={`font-mono text-sm leading-relaxed mb-4 transition-colors duration-300
                      ${
                        darkMode
                          ? "text-slate-300 group-hover:text-slate-200"
                          : "text-slate-700 group-hover:text-slate-800"
                      }`}
                  >
                    {item.description}
                  </p>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-mono transition-colors duration-300
                        ${
                          darkMode
                            ? "text-slate-300 group-hover:text-slate-200"
                            : "text-slate-600 group-hover:text-slate-700"
                        }`}
                    >
                      Visit Website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
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

