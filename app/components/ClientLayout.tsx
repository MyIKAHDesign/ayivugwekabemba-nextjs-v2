// components/ClientLayout.tsx
"use clien";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 
      ${darkMode ? "dark bg-slate-900 text-white" : "bg-white text-slate-900"}`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16 animate-fadeIn">{children}</main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};
