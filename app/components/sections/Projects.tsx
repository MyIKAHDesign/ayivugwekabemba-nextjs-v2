// components/sections/Projects.tsx
"use client";

import {
  Rocket,
  Globe,
  Languages,
  Newspaper,
  Radio,
  BookOpen,
} from "lucide-react";
import { projects } from "./data/projects";

const iconMap = {
  Rocket,
  Globe,
  Languages,
  Newspaper,
  Radio,
  BookOpen,
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];

            return (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
