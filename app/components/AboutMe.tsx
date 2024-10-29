"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Clock } from "lucide-react";

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

const TimelineSection: React.FC = () => {
  const { darkMode } = useTheme();

  const experiences: Experience[] = [
    {
      year: "2024",
      title: "Fulfillment Center Associate",
      company: "Amazon Fulfillment Center",
      description:
        "Managing picking, packing, and shipping of customer orders while maintaining quality standards and operational goals.",
    },
    {
      year: "2023",
      title: "Field Associate",
      company: "Walmart",
      description:
        "Managed inventory and improved stock accuracy while providing excellent customer service.",
    },
    {
      year: "2022-2023",
      title: "Project Manager & DevOps Engineer",
      company: "ASYST Resources LTD",
      description:
        "Led Agile projects and implemented CI/CD practices, achieving 30% faster project delivery and 40% reduced deployment time.",
    },
    {
      year: "2017-2022",
      title: "Software Developer",
      company: "ASYST Resources LTD",
      description:
        "Developed enterprise applications using Java, contributing to government and financial systems with 30% reduced downtime.",
    },
    {
      year: "2015",
      title: "Bachelor's Degree - Computer Science",
      company: "Université de Ngozi",
      description:
        "Completed computer science degree with a focus on software development.",
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
      id="about-me"
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

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="pt-24">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2
              className={`font-montserrat text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-white" : "text-slate-900"} 
              transition-colors duration-300`}
            >
              About Me
            </h2>
            <p
              className={`text-lg sm:text-xl 
              ${darkMode ? "text-slate-400" : "text-slate-600"} 
              transition-colors duration-300 max-w-xl mx-auto`}
            >
              A passionate developer preserving cultural heritage
            </p>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
          </div>

          {/* About Content */}
          <div
            className={`relative backdrop-blur-xl rounded-2xl transition-all duration-300
            ${
              darkMode
                ? "bg-slate-800/80 shadow-2xl border-slate-700/50"
                : "bg-white/80 shadow-xl border-slate-200/50"
            }
            border overflow-hidden`}
          >
            <div className="relative p-8 space-y-8">
              {/* About sections */}
              <div
                className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                ${
                  darkMode
                    ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                    : "hover:bg-white hover:shadow-lg"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 transition-colors duration-300
                  ${
                    darkMode
                      ? "text-white group-hover:text-blue-400"
                      : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  Professional Journey & Roots
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-300
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  I&apos;m Ayivugwe Kabemba Mukome, a project manager and
                  software developer deeply connected to my roots in Congo
                  Kinshasa and the Bafuliiru community. My journey in the tech
                  and project management fields began in Africa, where I worked
                  with ASYST Resources LTD, gaining valuable experience in
                  software development, DevOps, and project management.
                </p>
              </div>

              <div
                className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                ${
                  darkMode
                    ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                    : "hover:bg-white hover:shadow-lg"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 transition-colors duration-300
                  ${
                    darkMode
                      ? "text-white group-hover:text-blue-400"
                      : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  Building Ibufuliiru for Cultural Preservation
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-300
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  At the core of my work is a project that combines my
                  professional expertise with my cultural heritage. I&apos;m
                  building the Ibufuliiru platform, a community-driven
                  initiative dedicated to preserving the Kifuliiru language and
                  Bafuliiru culture.
                </p>
              </div>

              <div
                className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                ${
                  darkMode
                    ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                    : "hover:bg-white hover:shadow-lg"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 transition-colors duration-300
                  ${
                    darkMode
                      ? "text-white group-hover:text-blue-400"
                      : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  Technical Skills & Vision
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-300
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  With expertise in Java, Python, and project management,
                  I&apos;m leveraging technology to bridge traditional practices
                  with modern solutions. My vision is to create digital
                  platforms that not only preserve cultural heritage but also
                  make it accessible to future generations.
                </p>
              </div>

              <div
                className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                ${
                  darkMode
                    ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                    : "hover:bg-white hover:shadow-lg"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 transition-colors duration-300
                  ${
                    darkMode
                      ? "text-white group-hover:text-blue-400"
                      : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  Community Impact
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-300
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  Based in Spokane, Washington, I&apos;m actively working to
                  connect my heritage with my new community. Through various
                  initiatives and the Ibufuliiru project, I&apos;m creating
                  spaces for cultural exchange and preservation that benefit
                  both current and future generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
          ${darkMode ? "via-slate-700" : "via-slate-200"} 
          to-transparent`}
        ></div>
      </div>
    </section>
  );
};

export default TimelineSection;
