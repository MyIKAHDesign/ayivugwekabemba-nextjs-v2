"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hover = false }) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`rounded-xl p-10 md:p-12 backdrop-blur-xl border transition-all duration-300 ${
        hover ? "hover:-translate-y-1 hover:shadow-lg" : ""
      } ${
        darkMode
          ? "bg-slate-800/30 border-slate-700/50"
          : "bg-white/30 border-slate-200"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const SmallCard: React.FC<CardProps> = ({ children, className = "", hover = true }) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`p-5 rounded-lg transition-all duration-300 ${
        hover ? "hover:-translate-y-0.5" : ""
      } ${
        darkMode
          ? "bg-slate-700/30 hover:bg-slate-700/50"
          : "bg-slate-50/50 hover:bg-slate-100/70"
      } ${className}`}
    >
      {children}
    </div>
  );
};
