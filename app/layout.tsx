"use client";

import "./globals.css";
import React, { useState, useEffect, ReactNode } from "react";
import { Menu, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

interface NavLink {
  name: string;
  href: string;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "About me", href: "/#about-me" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string): void => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  return (
    <html lang="en" className={`${darkMode ? "dark" : ""} scroll-smooth`}>
      <body
        className={`antialiased flex flex-col min-h-screen transition-colors duration-300 ${
          darkMode ? "dark bg-slate-900 text-white" : "bg-white text-slate-900"
        }`}
      >
        {/* Sticky Navigation Header */}
        <header
          className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled
              ? darkMode
                ? "bg-slate-900/50 backdrop-blur-md border-b border-slate-700/30"
                : "bg-white/10 backdrop-blur-md border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleNavigation("/#home")}
                className="text-xl font-bold hover:opacity-80 transition-opacity"
              >
                Ayivugwe
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={`transition-colors ${
                      darkMode ? "hover:text-white/80" : "hover:text-slate-600"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode ? "hover:bg-slate-800/50" : "hover:bg-white/10"
                  }`}
                  aria-label={
                    darkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode ? "hover:bg-slate-800/50" : "hover:bg-white/10"
                  }`}
                  aria-label={
                    darkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode ? "hover:bg-slate-800/50" : "hover:bg-white/10"
                  }`}
                  aria-label="Toggle menu"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`md:hidden transition-all duration-300 ${
                isMenuOpen ? "max-h-64" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="pt-4 pb-2 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                      darkMode ? "hover:bg-slate-800/50" : "hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-16 animate-fadeIn">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-800 text-slate-300">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Ayivugwe Kabemba</h3>
                <p className="text-slate-400">
                  Full Stack Developer specializing in Java and Python
                  development
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ayivugwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/ayivugwekabemba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="Contact Page"
                  >
                    <Mail size={24} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
              <p>
                © {new Date().getFullYear()} Ayivugwe Kabemba. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
