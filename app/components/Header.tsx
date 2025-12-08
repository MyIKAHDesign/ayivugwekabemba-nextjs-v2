"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Moon,
  Sun,
  X,
  Sparkles,
  Wrench,
  Rocket,
  MessageSquare,
  ChevronDown,
  Home,
  User,
  FileText,
  Award,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [isEmojiAnimating, setIsEmojiAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const bannerMessages = [
    {
      icon: <Wrench className="w-4 h-4 text-slate-600 dark:text-slate-300" />,
      text: "I'm Ayivugwe Kabemba Mukome!",
    },
    {
      icon: <Wrench className="w-4 h-4 text-slate-600 dark:text-slate-300" />,
      text: "Welcome to my portfolio!",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-slate-600 dark:text-slate-300" />,
      text: "Check out my latest projects!",
    },
    {
      icon: <Rocket className="w-4 h-4 text-slate-600 dark:text-slate-300" />,
      text: "Let's build something amazing together!",
    },
  ];

  const mainNavLinks = [
    { name: "Home", href: "/", icon: Home },
  ];

  const aboutLink = { name: "More about me", href: "/about", icon: User };

  const contentDropdown = {
    name: "Content",
    icon: FileText,
    items: [
      { name: "Blog", href: "/blog" },
      { name: "Videos", href: "/videos" },
      { name: "Quotes", href: "/quotes" },
    ],
  };

  const professionalDropdown = {
    name: "Professional",
    icon: Award,
    items: [
      { name: "Experiences", href: "/experience" },
      { name: "Technical Skills", href: "/skills" },
    ],
  };

  const allNavLinks = [
    ...mainNavLinks,
    aboutLink,
    contentDropdown,
    professionalDropdown,
  ];

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
    const interval = setInterval(() => {
      setIsEmojiAnimating(true);
      setTimeout(() => {
        setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length);
        setIsEmojiAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        const offset = showBanner ? 120 : 80;
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
      {showBanner && (
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between py-3">
              <div className="flex-1 flex justify-center items-center space-x-4">
                <div
                  className={`transform transition-all duration-500 ${
                    isEmojiAnimating
                      ? "scale-150 rotate-180 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  }`}
                >
                  {bannerMessages[currentBannerIndex].icon}
                </div>
                <p className="text-sm md:text-base font-medium font-mono bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-300 dark:to-slate-400 bg-clip-text text-transparent">
                  {bannerMessages[currentBannerIndex].text}
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="ml-4 p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                aria-label="Close banner"
              >
                <X className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          </div>
        </div>
      )}

      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="relative flex items-center justify-between h-16">
            <Link href="/#home" className="flex items-center gap-2 text-2xl font-bold relative group font-mono">
              <img
                src="/favicon.ico"
                alt="Ayivugwe"
                className="w-8 h-8"
              />
              <span className="bg-gradient-to-r from-slate-700 to-slate-600 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                Ayivugwe
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-400 dark:to-slate-300 transition-all group-hover:w-full" />
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {allNavLinks.map((item) => {
                  if ("items" in item) {
                    // Dropdown menu
                    const isOpen = openDropdown === item.name;
                    return (
                      <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          className={`px-3 py-2 rounded-lg relative group transition-colors duration-200 flex items-center gap-1 z-20
                            ${
                              item.items.some((subItem) =>
                                isActive(subItem.href)
                              )
                                ? "text-slate-800 dark:text-slate-100"
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
                            }`}
                        >
                          <span className="relative z-30">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 relative z-30 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                          <span
                            className={`absolute inset-0 rounded-lg transition-all duration-200 z-10
                              ${
                                item.items.some((subItem) =>
                                  isActive(subItem.href)
                                )
                                  ? "bg-slate-200 dark:bg-slate-700/70 scale-100"
                                  : "bg-slate-100 dark:bg-slate-800/50 scale-0 group-hover:scale-100"
                              }`}
                          />
                        </button>
                        {isOpen && (
                          <>
                            {/* Bridge area to make it easier to move mouse into dropdown */}
                            <div className="absolute top-full left-0 w-full h-2 z-40" />
                            <div
                              className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg border backdrop-blur-xl z-50 overflow-hidden
                                bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-700"
                              onMouseEnter={() => setOpenDropdown(item.name)}
                            >
                              {item.items.map((subItem) => (
                                <button
                                  key={subItem.name}
                                  onClick={() => handleNavigation(subItem.href)}
                                  className={`w-full px-4 py-2 text-left transition-colors duration-200 font-mono
                                    ${
                                      isActive(subItem.href)
                                        ? "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-700 dark:hover:text-slate-200"
                                    }`}
                                >
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  } else {
                    // Regular link
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className={`px-3 py-2 rounded-lg relative group transition-colors duration-200 flex items-center gap-1 z-20
                          ${
                            isActive(item.href)
                              ? "text-slate-800 dark:text-slate-100"
                              : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
                          }`}
                      >
                        <span className="relative z-30">{item.name}</span>
                        <span
                          className={`absolute inset-0 rounded-lg transition-all duration-200 z-10
                            ${
                              isActive(item.href)
                                ? "bg-slate-200 dark:bg-slate-700/70 scale-100"
                                : "bg-slate-100 dark:bg-slate-800/50 scale-0 group-hover:scale-100"
                            }`}
                        />
                      </button>
                    );
                  }
                })}
              </div>
              {/* Contact CTA Button */}
              <button
                onClick={() => handleNavigation("/contact")}
                className="ml-2 px-4 py-2 flex items-center gap-2 rounded-lg bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact</span>
              </button>
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
                      <span className="text-slate-600 dark:text-slate-300 font-medium font-mono">
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
                {allNavLinks.map((item) => {
                  if ("items" in item) {
                    // Dropdown for mobile
                    const isOpen = openDropdown === item.name;
                    return (
                      <div key={item.name}>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              isOpen ? null : item.name
                            )
                          }
                          className={`w-full px-4 py-2 text-left rounded-lg transition-colors flex items-center justify-between font-mono
                            ${
                              item.items.some((subItem) =>
                                isActive(subItem.href)
                              )
                                ? "text-slate-800 dark:text-slate-100 bg-slate-200 dark:bg-slate-700/70"
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                            }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="pl-6 mt-2 space-y-2">
                            {item.items.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavigation(subItem.href)}
                                className={`w-full px-4 py-2 text-left rounded-lg transition-colors font-mono
                                  ${
                                    isActive(subItem.href)
                                      ? "text-slate-800 dark:text-slate-100 bg-slate-200 dark:bg-slate-700/70"
                                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                                  }`}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    // Regular link
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className={`w-full px-4 py-2 text-left rounded-lg transition-colors flex items-center gap-2 font-mono
                          ${
                            isActive(item.href)
                              ? "text-slate-800 dark:text-slate-100 bg-slate-200 dark:bg-slate-700/70"
                              : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                          }`}
                      >
                        {item.name}
                      </button>
                    );
                  }
                })}

                {/* Mobile Contact Button */}
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="w-full px-4 py-2 flex items-center justify-center gap-2 rounded-lg bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
