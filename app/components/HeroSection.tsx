"use client";

import React from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HeroSection: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 to-white"
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
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start min-h-[calc(100vh-8rem)]">
          <div className="order-2 md:order-1 h-full flex flex-col justify-center">
            <div
              className={`rounded-2xl overflow-hidden ${
                darkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-700"
                  : "bg-gradient-to-br from-slate-100 to-slate-200"
              } p-1`}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/ayiv-profile.jpg"
                  alt="Profile picture of Ayivugwe"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-4 text-sm">
                <span
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
                  ${
                    darkMode
                      ? "bg-slate-800 text-slate-400"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  Google Certified PM
                </span>
                <span
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
                  ${
                    darkMode
                      ? "bg-slate-800 text-slate-400"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  Software Developer
                </span>
                <span
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
                  ${
                    darkMode
                      ? "bg-slate-800 text-slate-400"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  Kifuliiru Language Advocate
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 h-full flex flex-col justify-center">
            <div className="space-y-6">
              <h1
                className={`text-4xl sm:text-5xl font-semibold tracking-tight transition-colors duration-300
                ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Hi. I&apos;m Ayivugwe Kabemba Mukome
              </h1>
              <p
                className={`text-lg leading-relaxed font-medium transition-colors duration-300
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Project Manager, Software Developer & Kifuliiru Language
                Advocate
              </p>
              <p
                className={`leading-relaxed transition-colors duration-300
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Combining technical expertise with cultural preservation to
                create innovative solutions that empower communities.
                Specialized in project management, software development, and
                language advocacy.
              </p>
              <p
                className={`leading-relaxed transition-colors duration-300
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Currently focused on developing digital platforms that promote
                the Kifuliiru language and culture, while leveraging technology
                to bridge traditional practices with modern solutions.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => (window.location.href = "/#projects")}
                  className={`px-8 py-3 rounded-lg transition-colors font-medium
                  ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  View Projects
                </button>
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className={`px-8 py-3 rounded-lg transition-colors font-medium
                  ${
                    darkMode
                      ? "border-2 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white"
                      : "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div
              className={`mt-12 pt-12 transition-colors duration-300
              ${
                darkMode
                  ? "border-t border-slate-700"
                  : "border-t border-slate-200"
              }`}
            >
              <h3
                className={`font-montserrat text-sm font-medium mb-4 tracking-wider transition-colors duration-300
                ${darkMode ? "text-slate-500" : "text-slate-400"}`}
              >
                CONNECT WITH ME
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://github.com/Ayivugwe"
                  className={`transition-colors duration-300
                    ${
                      darkMode
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://x.com/ayivugwekabemba"
                  className={`transition-colors duration-300
                    ${
                      darkMode
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  aria-label="Twitter Profile"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayivugwekabemba/"
                  className={`transition-colors duration-300
                    ${
                      darkMode
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
