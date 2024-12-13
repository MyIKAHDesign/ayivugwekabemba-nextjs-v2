"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../context/ThemeContext";
import {
  Globe2,
  Radio,
  BookOpen,
  Newspaper,
  Languages,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    title: "Kifuliiru Dictionary Platform",
    description:
      "A digital platform preserving the Kifuliiru language through an interactive dictionary and cultural resources.",
    link: "https://dictionary.kifuliiru.net/",
    icon: Rocket,
  },
  {
    title: "Ibufuliiru",
    description:
      "My main project focusing on preserving and promoting Kifuliiru language and culture through digital innovation and community engagement.",
    link: "https://ibufuliiru.wixstudio.io/ibufuliiru",
    icon: Rocket,
  },
  {
    title: "Kifuliiru",
    description:
      "A comprehensive platform dedicated to the documentation, teaching, and preservation of the Kifuliiru language for future generations.",
    link: "https://ibufuliiru.wixstudio.io/kifuliiru",
    icon: Languages,
  },
  {
    title: "Kifuliiru.net",
    description:
      "Interactive learning platform offering structured courses, resources, and tools for mastering the Kifuliiru language.",
    link: "https://kifuliiru.net",
    icon: Globe2,
  },
  {
    title: "Imyazi mu Kifuliiru",
    description:
      "Digital media agency creating engaging content in Kifuliiru, from educational materials to cultural documentaries.",
    link: "https://imyazi.substack.com/",
    icon: Newspaper,
  },
  {
    title: "Radio Ibufuliiru",
    description:
      "Community radio station broadcasting news, cultural programs, and educational content in the Kifuliiru language.",
    link: "https://radioibufuliiru.substack.com/",
    icon: Radio,
  },
  // {
  //   title: "Digital Dictionary",
  //   description:
  //     "Comprehensive digital dictionary and language resource featuring Kifuliiru words, phrases, and cultural context.",
  //   link: "https://ibufuliiru.wixstudio.io/kifuliiru/sobaanura",
  //   icon: BookOpen,
  // },
];

const ProjectsSection: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
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
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-inter font-montserrat text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-white" : "text-slate-900"} 
            transition-colors duration-300`}
          >
            Featured Projects
          </h2>
          <p
            className={`font-inter text-lg sm:text-xl 
            ${darkMode ? "text-slate-400" : "text-slate-600"} 
            transition-colors duration-300 max-w-xl mx-auto`}
          >
            Innovative solutions for language and cultural preservation
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              icon={project.icon}
              link={project.link}
            />
          ))}
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

export default ProjectsSection;
