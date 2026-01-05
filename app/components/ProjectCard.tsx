import React from "react";
import { ExternalLink, LucideIcon } from "lucide-react";
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
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 border
        hover:-translate-y-1 hover:shadow-lg
        ${
          darkMode
              ? "bg-slate-800/40 border-blue-700/40 hover:border-blue-600/60"
            : "bg-white/60 border-slate-200/60 hover:border-slate-300/80"
        }`}
    >
      {/* Subtle hover background */}
      <div
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out
          ${
            darkMode
              ? "bg-gradient-to-br from-blue-700/30 via-blue-600/20 to-blue-700/30"
              : "bg-gradient-to-br from-slate-100/40 via-slate-50/30 to-slate-100/40"
          }`}
      />

      <div className="relative p-6 transition-colors duration-300 z-10">
        {/* Icon */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl transition-colors duration-300
              ${
                darkMode
                  ? "bg-blue-700/50 group-hover:bg-blue-600/50"
                  : "bg-slate-100/70 group-hover:bg-slate-200/70"
              }`}
          >
            <Icon
              size={24}
              className={`transition-colors duration-300
                ${
                  darkMode
                    ? "text-slate-300 group-hover:text-slate-100"
                    : "text-slate-600 group-hover:text-slate-800"
                }`}
            />
          </div>
          <ExternalLink
            size={18}
            className={`transition-all duration-300 opacity-0 group-hover:opacity-100
              ${
                darkMode
                  ? "text-slate-400 group-hover:text-slate-300"
                  : "text-slate-400 group-hover:text-slate-600"
              }`}
          />
        </div>

        {/* Content */}
        <h3
          className={`font-sans text-lg font-semibold mb-2 transition-colors duration-300
            ${
              darkMode
                ? "text-slate-100 group-hover:text-slate-50"
                : "text-slate-900 group-hover:text-slate-800"
            }`}
        >
          {title}
        </h3>
        <p
          className={`font-sans text-sm leading-relaxed transition-colors duration-300
            ${
              darkMode
                ? "text-slate-300 group-hover:text-slate-200"
                : "text-slate-600 group-hover:text-slate-700"
            }`}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
