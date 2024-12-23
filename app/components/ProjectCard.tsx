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
      className={`font-inter group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        ${
          darkMode
            ? "bg-slate-800/50 border-orange-900/30"
            : "bg-white/50 border-orange-200"
        } border`}
    >
      <div
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
        ${
          darkMode
            ? "bg-gradient-to-r from-orange-900/80 to-orange-800/80"
            : "bg-gradient-to-r from-orange-100 to-orange-50"
        }`}
      />

      <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
        <div className="mb-6">
          <Icon
            size={32}
            className={`transition-colors duration-500
              ${
                darkMode
                  ? "text-orange-200 group-hover:text-white"
                  : "text-orange-600 group-hover:text-orange-800"
              }`}
          />
        </div>
        <h3
          className={`font-inter text-xl leading-relaxed font-medium mb-3 transition-colors duration-500
          ${
            darkMode
              ? "text-orange-50 group-hover:text-white"
              : "text-slate-900 group-hover:text-orange-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-inter text-lg leading-relaxed mb-6 transition-colors duration-500
          ${
            darkMode
              ? "text-orange-200 group-hover:text-orange-100"
              : "text-slate-600 group-hover:text-orange-800"
          }`}
        >
          {description}
        </p>
        <div
          className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors duration-500
          ${
            darkMode
              ? "text-orange-200 group-hover:text-white"
              : "text-orange-600 group-hover:text-orange-900"
          }`}
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
