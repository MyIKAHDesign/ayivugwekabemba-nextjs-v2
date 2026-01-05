"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Moon,
  Sun,
  X,
  Rocket,
  MessageSquare,
  Home,
  User,
  FileText,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const mainNavLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Companies", href: "/companies", icon: Rocket },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ];

  const allNavLinks = mainNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only check sections if we're on the home page
      if (pathname === "/") {
        const sectionIds = [
          "projects",
          "companies",
          "faq",
        ].filter((id) => id && document.getElementById(id));

        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Set active section based on pathname for non-home pages
    if (pathname !== "/") {
      const section = pathname.slice(1);
      setActiveSection(section);
    }
  }, [pathname]);

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return activeSection === href.slice(2);
    }
    return pathname === href;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Banner removed */}

      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="relative flex items-center justify-between h-16">
            <Link href="/#home" className="flex items-center gap-2 text-2xl font-bold relative group font-sans">
              <img
                src="/favicon.ico"
                alt="Ayivugwe"
                className="w-8 h-8"
              />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                Ayivugwe
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-400 dark:to-slate-300 transition-all group-hover:w-full" />
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {allNavLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`px-3 py-2 rounded-lg relative group transition-colors duration-200 flex items-center gap-1 z-20
                      ${
                        isActive(item.href)
                          ? "text-blue-700 dark:text-blue-200"
                          : "text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-200"
                      }`}
                  >
                    <span className="relative z-30">{item.name}</span>
                    <span
                      className={`absolute inset-0 rounded-lg transition-all duration-200 z-10
                        ${
                          isActive(item.href)
                            ? "bg-blue-50 dark:bg-blue-900/50 scale-100"
                            : "bg-slate-100 dark:bg-slate-800/50 scale-0 group-hover:scale-100"
                        }`}
                    />
                  </button>
                ))}
              </div>
              {/* Theme Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-slate-300 transition-transform duration-500 group-hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600 transition-transform duration-500 group-hover:-rotate-90" />
                )}
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="p-4 space-y-3">
                {/* Theme Toggle for Mobile - Made more prominent */}
                <div className="pb-3 mb-3 border-b border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full px-4 py-3 flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {darkMode ? (
                        <Sun className="w-5 h-5 text-slate-300" />
                      ) : (
                        <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      )}
                      <span className="text-slate-600 dark:text-slate-300 font-medium font-sans">
                        {darkMode
                          ? "Switch to Light Mode"
                          : "Switch to Dark Mode"}
                      </span>
                    </div>
                    <div className="w-8 h-4 bg-slate-300 dark:bg-slate-600 rounded-full relative">
                      <div
                        className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full transition-transform duration-200 ${
                          darkMode
                            ? "translate-x-4 bg-slate-300"
                            : "translate-x-0 bg-slate-500"
                        }`}
                      />
                    </div>
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                {allNavLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full px-4 py-2 text-left rounded-lg transition-colors flex items-center gap-2 font-sans
                      ${
                        isActive(item.href)
                          ? "text-blue-700 dark:text-blue-200 bg-blue-50 dark:bg-blue-900/50"
                          : "text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
