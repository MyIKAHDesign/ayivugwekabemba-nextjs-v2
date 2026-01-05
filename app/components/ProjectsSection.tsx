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
    title: "Kifuliiru.com",
    description:
      "The main Kifuliiru language website and comprehensive digital ecosystem for learning, cultural preservation, and community engagement.",
    link: "https://kifuliiru.com",
    icon: Globe2,
  },
  {
    title: "Tabula Kifuliiru",
    description:
      "A comprehensive web application platform for creating and managing Kifuliiru language content.",
    link: "https://tabula.kifuliiru.com",
    icon: Rocket,
  },
  {
    title: "Imyazi.com",
    description:
      "News platform providing updates and information relevant to the Kifuliiru community in multiple languages.",
    link: "https://imyazi.com",
    icon: Newspaper,
  },
];

const ProjectsSection: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`relative py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-slate-100/80 to-white"
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

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2
            className={`font-sans text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-slate-100" : "text-slate-900"} 
            transition-colors duration-300`}
          >
            Featured Projects
          </h2>
          <p
            className={`font-sans text-lg sm:text-xl 
            ${darkMode ? "text-slate-300" : "text-slate-600"} 
            transition-colors duration-300 max-w-xl mx-auto`}
          >
            Innovative solutions for language and cultural preservation
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
