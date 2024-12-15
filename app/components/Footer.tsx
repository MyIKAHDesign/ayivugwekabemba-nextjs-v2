"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.slice(2);
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`transition-colors duration-300 
      ${
        darkMode ? "bg-slate-900 text-slate-300" : "bg-slate-100 text-slate-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
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
              className={`font-inter text-lg font-bold mb-4 
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
                "FAQ",
                "Contact",
                "Videos",
                "Blog",
              ].map((link) => {
                const href = `/#${link.toLowerCase().replace(" ", "-")}`;
                return (
                  <li key={link}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(href);
                      }}
                      className="group relative inline-block py-1"
                    >
                      <span
                        className={`relative transition duration-300 ${
                          darkMode
                            ? "text-slate-400 group-hover:text-white"
                            : "text-slate-600 group-hover:text-slate-900"
                        }`}
                      >
                        {link}
                      </span>
                      {/* Animated underline for hover */}
                      <div className="absolute bottom-0 right-1/2 w-1/2 h-[2px] bg-blue-500 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100">
                        <div
                          className={`absolute inset-0 bg-[url('/grid.svg')] bg-center ${
                            darkMode
                              ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
                              : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
                          }`}
                        ></div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 w-1/2 h-[2px] bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100">
                        <div
                          className={`absolute inset-0 bg-[url('/grid.svg')] bg-center ${
                            darkMode
                              ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
                              : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
                          }`}
                        ></div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className={`font-inter text-lg font-bold mb-4 
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
