"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavLink {
  name: string;
  href: string;
}

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "About me", href: "/#about-me" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string): void => {
    if (href.startsWith("/#")) {
      const targetId = href.slice(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 h-20 ${
        darkMode
          ? "bg-black/95 backdrop-blur-md border-b border-slate-900"
          : isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <title>Ayivugwe Kabemba</title>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/#home"
            scroll={false}
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`text-xl font-bold hover:opacity-80 transition-opacity ${
                darkMode ? "text-slate-200" : "text-slate-900"
              }`}
            >
              Ayivugwe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  scroll={true}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative transition duration-300 transform hover:scale-105 active:scale-95 ${
                    darkMode
                      ? "text-slate-500 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`relative transition duration-300 transform hover:scale-105 active:scale-95 ${
                    darkMode
                      ? "text-slate-500 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </button>
              )
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-90 ${
                darkMode
                  ? "text-slate-200 hover:bg-slate-800"
                  : "text-slate-900 hover:bg-slate-200"
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
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-90 ${
                darkMode
                  ? "text-slate-200 hover:bg-slate-800"
                  : "text-slate-900 hover:bg-slate-200"
              }`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-90 ${
                darkMode
                  ? "text-slate-500 hover:text-slate-200 hover:bg-slate-900/90"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          } overflow-hidden ${
            darkMode
              ? "bg-black/95 border-b border-slate-900"
              : "bg-white/80 border-b border-slate-200"
          } backdrop-blur-md`}
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  scroll={true}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 transform hover:scale-105 active:scale-95 ${
                    darkMode
                      ? "text-slate-500 hover:text-slate-200 hover:bg-slate-900/90"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`relative block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 transform hover:scale-105 active:scale-95 ${
                    darkMode
                      ? "text-slate-500 hover:text-slate-200 hover:bg-slate-900/90"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </button>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
