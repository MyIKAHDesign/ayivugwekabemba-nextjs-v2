import React from "react";
import Image from "next/image";
import { Download, Share2, Maximize2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const certificates = [
  {
    title: "Project Management Professional",
    issuer: "Google",
    date: "2024",
    description:
      "Professional certification in Project Management methodologies and best practices",
    imgURL: "/certificates/google-pm.jpg",
    skills: [
      "Project Planning",
      "Risk Management",
      "Team Leadership",
      "Agile Methodologies",
    ],
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2024",
    description:
      "Professional certification in foundational GitHub usage and best practices",
    imgURL: "/certificates/GitHubFoundations_Badge.jpg",
    skills: ["Version Control", "Collaboration", "Repository Management"],
  },
  {
    title: "Slack",
    issuer: "Coursera",
    date: "2024",
    description:
      "Certification in effective communication and collaboration using Slack",
    imgURL: "/certificates/Slack.jpg",
    skills: ["Communication", "Team Collaboration", "Productivity Tools"],
  },
];

const CertificatesSection = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen pt-60 md:pt-44 px-4 sm:px-6 pb-24 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-[#1c1917] to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-orange-50/80 to-white"
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
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-inter text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-orange-50" : "text-slate-900"}`}
          >
            Professional Certifications
          </h2>
          <p
            className={`text-xl leading-relaxed
              ${darkMode ? "text-orange-200" : "text-slate-700"}`}
          >
            Continuous learning and professional development achievements
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                    : "bg-white/50 border-slate-200 hover:border-slate-300"
                }`}
            >
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                  ${
                    darkMode
                      ? "bg-gradient-to-r from-slate-800/90 via-slate-700/80 to-slate-600/90"
                      : "bg-gradient-to-r from-slate-100/90 via-slate-50/80 to-slate-200/90"
                  }`}
              />

              <div className="relative p-6 transition-colors duration-500 z-10">
                {/* Certificate Preview */}
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-6">
                  <Image
                    src={cert.imgURL}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      className={`p-2 rounded-lg transition-colors duration-300
                        ${
                          darkMode
                            ? "bg-slate-800/80 text-orange-200 hover:bg-slate-700/80"
                            : "bg-white/80 text-slate-700 hover:bg-slate-50/80"
                        }`}
                      aria-label="Download certificate"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      className={`p-2 rounded-lg transition-colors duration-300
                        ${
                          darkMode
                            ? "bg-slate-800/80 text-orange-200 hover:bg-slate-700/80"
                            : "bg-white/80 text-slate-700 hover:bg-slate-50/80"
                        }`}
                      aria-label="View full screen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-4">
                  <h3
                    className={`text-xl font-semibold transition-colors duration-500
                      ${darkMode ? "text-orange-50" : "text-slate-900"}
                      ${
                        darkMode
                          ? "group-hover:text-white"
                          : "group-hover:text-white"
                      }`}
                  >
                    {cert.title}
                  </h3>

                  <div className="flex justify-between items-center">
                    <span
                      className={`text-lg font-medium transition-colors duration-500
                        ${darkMode ? "text-orange-200" : "text-slate-700"}
                        ${
                          darkMode
                            ? "group-hover:text-orange-100"
                            : "group-hover:text-white"
                        }`}
                    >
                      {cert.issuer}
                    </span>
                    <span
                      className={`text-sm transition-colors duration-500
                        ${darkMode ? "text-orange-200/70" : "text-slate-500"}
                        ${
                          darkMode
                            ? "group-hover:text-orange-100"
                            : "group-hover:text-white"
                        }`}
                    >
                      {cert.date}
                    </span>
                  </div>

                  <p
                    className={`text-base transition-colors duration-500
                      ${darkMode ? "text-orange-200" : "text-slate-600"}
                      ${
                        darkMode
                          ? "group-hover:text-orange-100"
                          : "group-hover:text-white"
                      }`}
                  >
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`text-sm px-3 py-1 rounded-full transition-colors duration-500
                          ${
                            darkMode
                              ? "bg-slate-700/50 text-orange-200 group-hover:bg-orange-800/50"
                              : "bg-slate-100 text-slate-700 group-hover:bg-orange-100/50"
                          }
                          ${
                            darkMode
                              ? "group-hover:text-white"
                              : "group-hover:text-white"
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
