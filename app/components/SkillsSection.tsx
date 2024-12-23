"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  LayoutGrid,
  Settings,
  Gitlab,
  Terminal,
  Monitor,
  Server,
  Cloud,
  Library,
} from "lucide-react";

const SkillsSection: React.FC = () => {
  const { darkMode } = useTheme();

  const skills = [
    {
      category: "Frontend Development",
      icon: Monitor,
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5/CSS3",
        "JavaScript",
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      technologies: [
        "Node.js",
        "Python",
        "Django",
        "FastAPI",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      category: "Database Management",
      icon: Database,
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Supabase",
        "Firebase",
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Linux",
        "Terraform",
      ],
    },
    {
      category: "Version Control",
      icon: GitBranch,
      technologies: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Git Flow",
        "Code Review",
      ],
    },
    {
      category: "Project Management",
      icon: Settings,
      technologies: [
        "Agile",
        "Scrum",
        "Jira",
        "Trello",
        "Confluence",
        "Documentation",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative min-h-screen pt-40 md:pt-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-orange-900/20 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-orange-100 to-white"
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
            className={`font-inter text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-orange-50" : "text-slate-900"}`}
          >
            Technical Skills
          </h2>
          <p
            className={`font-inter text-xl leading-relaxed
              ${darkMode ? "text-orange-200" : "text-slate-700"}`}
          >
            A comprehensive toolkit for building and managing modern
            applications
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border hover:shadow-xl hover:-translate-y-1
                ${
                  darkMode
                    ? "bg-slate-800/50 border-orange-500/30 hover:border-orange-400/50"
                    : "bg-white/50 border-orange-400/30 hover:border-orange-500"
                }`}
            >
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                  ${
                    darkMode
                      ? "bg-gradient-to-t from-orange-950 via-orange-900 to-orange-800"
                      : "bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400"
                  }`}
              />

              <div className="relative p-6 sm:p-8 transition-colors duration-500 group-hover:text-white z-10">
                <div className="flex items-center gap-4 mb-6">
                  <skill.icon
                    className={`w-8 h-8 transition-colors duration-500
                    ${darkMode ? "text-orange-400" : "text-orange-600"}
                    ${
                      darkMode
                        ? "group-hover:text-orange-200"
                        : "group-hover:text-white"
                    }`}
                  />
                  <h3
                    className={`font-inter text-xl font-semibold transition-colors duration-500
                    ${darkMode ? "text-orange-50" : "text-slate-900"}
                    ${
                      darkMode
                        ? "group-hover:text-white"
                        : "group-hover:text-white"
                    }`}
                  >
                    {skill.category}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className={`font-inter flex items-center gap-2 transition-colors duration-500
                        ${darkMode ? "text-orange-200" : "text-slate-600"}
                        ${
                          darkMode
                            ? "group-hover:text-orange-100"
                            : "group-hover:text-white"
                        }`}
                    >
                      <Code2 className="w-4 h-4" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
            ${darkMode ? "via-orange-900/30" : "via-orange-200"} 
            to-transparent`}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
