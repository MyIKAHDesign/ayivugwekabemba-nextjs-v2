"use client";

import React from "react";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  icon: Icon,
}) => {
  const { darkMode } = useTheme();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-gray-100"
        } border`}
    >
      <div
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
        ${
          darkMode
            ? "bg-gradient-to-r from-slate-800 to-slate-700"
            : "bg-gradient-to-r from-slate-900 to-slate-800"
        }`}
      />

      <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
        <div className="mb-6">
          <Icon
            size={32}
            className={`transition-colors duration-500
              ${
                darkMode
                  ? "text-slate-400 group-hover:text-white"
                  : "text-slate-700 group-hover:text-white"
              }`}
          />
        </div>
        <h3
          className={`text-xl font-medium mb-3 transition-colors duration-500 group-hover:text-white
          ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          {title}
        </h3>
        <p
          className={`mb-6 transition-colors duration-500 group-hover:text-slate-200
          ${darkMode ? "text-slate-400" : "text-gray-600"}`}
        >
          {description}
        </p>
        <div
          className={`flex items-center gap-2 font-medium transition-colors duration-500 group-hover:text-white
          ${darkMode ? "text-slate-300" : "text-slate-900"}`}
        >
          View Project
          <ArrowUpRight
            size={18}
            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
