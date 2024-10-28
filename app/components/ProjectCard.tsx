"use client";

import React from "react";
import { ArrowUpRight, LucideIcon } from "lucide-react";

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
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

      <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
        <div className="mb-6">
          <Icon
            size={32}
            className="text-slate-700 group-hover:text-white transition-colors"
          />
        </div>
        <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="mb-6 text-gray-600 group-hover:text-slate-200 transition-colors">
          {description}
        </p>
        <div className="flex items-center gap-2 text-slate-900 font-medium group-hover:text-white transition-colors">
          View Project
          <ArrowUpRight
            size={18}
            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
