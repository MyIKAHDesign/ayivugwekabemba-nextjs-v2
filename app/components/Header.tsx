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
  Briefcase,
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

  const portfolioDropdown = {
    name: "Portfolio",
    icon: Briefcase,
    items: [
      { name: "Projects", href: "/#projects" },
      { name: "Skills", href: "/#skills" },
      { name: "FAQ", href: "/#faq" },
    ],
  };

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
      { name: "Certificates", href: "/certificates" },
    ],
  };

  const aboutLink = { name: "About", href: "/about", icon: User };

  const allNavLinks = [
    ...mainNavLinks,
    portfolioDropdown,
    contentDropdown,
    professionalDropdown,
    aboutLink,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only check sections if we're on the home page
      if (pathname === "/") {
        const sectionIds = navLinks
          .map((link) => link.href.replace("/#", ""))
          .filter((id) => id && document.getElementById(id));

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
                <p className="text-sm md:text-base font-medium bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-300 dark:to-slate-400 bg-clip-text text-transparent">
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
            <Link href="/#home" className="text-2xl font-bold relative group">
              <span className="bg-gradient-to-r from-slate-700 to-slate-600 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                Ayivugwe
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-400 dark:to-slate-300 transition-all group-hover:w-full" />
            </Link>

            {/* Update the spacing in the desktop menu container */}
            <div className="hidden md:flex items-center space-x-4">
              {" "}
              {/* Changed from space-x-1 to space-x-4 */}
              {/* Navigation Links Group */}
              <div className="flex items-center space-x-2">
                {" "}
                {/* Added a wrapper div with space-x-2 */}
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={`px-3 py-2 rounded-lg relative group transition-colors duration-200
          ${
            isActive(link.href)
              ? "text-slate-700 dark:text-slate-200"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span
                      className={`absolute inset-0 rounded-lg transition-transform duration-200
            ${
              isActive(link.href)
                ? "bg-slate-100 dark:bg-slate-800/50 scale-100"
                : "bg-slate-100 dark:bg-slate-800/50 scale-0 group-hover:scale-100"
            }`}
                    />
                  </button>
                ))}
              </div>
              {/* Contact CTA Button - increased left margin */}
              <button
                onClick={() => handleNavigation("/contact")}
                className="ml-6 px-4 py-2 flex items-center gap-2 rounded-lg bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact</span>
              </button>
              {/* Theme Toggle Button - increased left margin */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-6 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group"
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
                      <span className="text-slate-600 dark:text-slate-300 font-medium">
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
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={`w-full px-4 py-2 text-left rounded-lg transition-colors
            ${
              isActive(link.href)
                ? "text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
            }`}
                  >
                    {link.name}
                  </button>
                ))}

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
