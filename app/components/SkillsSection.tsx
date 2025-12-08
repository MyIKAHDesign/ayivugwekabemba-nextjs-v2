"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Database,
  Monitor,
  Server,
  Container,
} from "lucide-react";

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  technologies: string[];
  details: string[];
}

const SkillsSection: React.FC = () => {
  const { darkMode } = useTheme();

  const skills: SkillGroup[] = [
    {
      category: "Frontend Development",
      icon: Monitor,
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      details: [
        "Building responsive and interactive user interfaces",
        "Server-side rendering and static site generation",
        "Modern CSS frameworks and styling approaches",
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      technologies: ["Node.js", "Python", "Django", "FastAPI", "RESTful APIs"],
      details: [
        "Server architecture and API design",
        "Authentication and authorization systems",
        "Database integration and ORM usage",
      ],
    },
    {
      category: "Database & Cloud",
      icon: Database,
      technologies: ["PostgreSQL", "Supabase", "Firebase", "AWS", "Vercel"],
      details: [
        "Database design and optimization",
        "Cloud infrastructure management",
        "Serverless architecture deployment",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: Container,
      technologies: ["Docker", "CI/CD", "Git", "GitHub"],
      details: [
        "Container orchestration and deployment",
        "Continuous Integration/Deployment pipelines",
        "Version control and collaboration workflows",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative min-h-screen pt-40 pb-24 md:pt-32 px-4 sm:px-6 lg:px-8 transition-all duration-300
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
            Technical Skills
          </h2>
          <p
            className={`font-mono text-xl leading-relaxed
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            A comprehensive toolkit for building and managing modern
            applications
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
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
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2 rounded-lg transition-colors duration-300
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
                    <h3
                      className={`font-mono text-lg font-semibold transition-colors duration-300
                        ${
                          darkMode
                            ? "text-slate-100 group-hover:text-slate-50"
                            : "text-slate-900 group-hover:text-slate-800"
                        }`}
                    >
                      {skill.category}
                    </h3>
                  </div>

                  {/* Technologies - Simple Badge Style */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`font-mono text-xs px-3 py-1.5 rounded-md transition-all duration-300
                          ${
                            darkMode
                              ? "bg-slate-700/50 text-slate-200 border border-slate-600/30 group-hover:bg-slate-600/50 group-hover:border-slate-500/50"
                              : "bg-slate-100/70 text-slate-700 border border-slate-200/50 group-hover:bg-slate-200/70 group-hover:border-slate-300/70"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details - Always Visible */}
                  <div className="space-y-2">
                    <ul className="font-mono space-y-1.5">
                      {skill.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm leading-relaxed transition-colors duration-300
                            ${
                              darkMode
                                ? "text-slate-300 group-hover:text-slate-200"
                                : "text-slate-600 group-hover:text-slate-700"
                            }`}
                        >
                          <span
                            className={`mt-1.5 transition-colors duration-300
                              ${
                                darkMode
                                  ? "text-slate-400 group-hover:text-slate-300"
                                  : "text-slate-400 group-hover:text-slate-500"
                              }`}
                          >
                            •
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
