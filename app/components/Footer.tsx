// app/components/Footer.tsx
"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`transition-colors duration-300 
      ${
        darkMode ? "bg-slate-900 text-slate-300" : "bg-slate-100 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 
              ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Ayivugwe Kabemba
            </h3>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Full Stack Developer specializing in Java and Python development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 
              ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Projects",
                "Experience",
                "Skills",
                "About me",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase().replace(" ", "-")}`}
                    className={`hover:underline ${
                      darkMode
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 
              ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ayivugwe"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                } 
                  transition-colors duration-300`}
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ayivugwekabemba"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                } 
                  transition-colors duration-300`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="/contact"
                className={`${
                  darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                } 
                  transition-colors duration-300`}
                aria-label="Contact Page"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-8 pt-8 border-t 
          ${
            darkMode
              ? "border-slate-800 text-slate-400"
              : "border-slate-200 text-slate-600"
          }
          text-center`}
        >
          <p>
            © {new Date().getFullYear()} Ayivugwe Kabemba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
