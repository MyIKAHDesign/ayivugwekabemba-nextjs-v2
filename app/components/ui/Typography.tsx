"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <h1
      className={`text-4xl sm:text-5xl font-bold tracking-tight ${
        darkMode ? "text-slate-100" : "text-slate-900"
      } ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <h2
      className={`text-3xl font-bold ${
        darkMode ? "text-slate-100" : "text-slate-900"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <h3
      className={`text-2xl font-semibold ${
        darkMode ? "text-slate-100" : "text-slate-900"
      } ${className}`}
    >
      {children}
    </h3>
  );
};

export const H4: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <h4
      className={`text-xl font-semibold ${
        darkMode ? "text-slate-100" : "text-slate-900"
      } ${className}`}
    >
      {children}
    </h4>
  );
};

export const BodyText: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <p
      className={`text-base leading-relaxed ${
        darkMode ? "text-slate-300" : "text-slate-700"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export const BodyTextLarge: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <p
      className={`text-xl leading-relaxed ${
        darkMode ? "text-slate-300" : "text-slate-700"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export const SmallText: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <p
      className={`text-sm ${
        darkMode ? "text-slate-400" : "text-slate-600"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export const MutedText: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const { darkMode } = useTheme();
  return (
    <p
      className={`text-sm ${
        darkMode ? "text-slate-500" : "text-slate-500"
      } ${className}`}
    >
      {children}
    </p>
  );
};
