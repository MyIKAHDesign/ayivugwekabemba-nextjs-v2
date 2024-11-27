"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X, Sparkles, Wrench, Rocket } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [isEmojiAnimating, setIsEmojiAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const bannerMessages = [
    {
      icon: <Wrench className="w-4 h-4 text-amber-800 dark:text-amber-200" />,
      text: "Welcome to my portfolio!",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-amber-800 dark:text-amber-200" />,
      text: "Check out my latest projects!",
    },
    {
      icon: <Rocket className="w-4 h-4 text-amber-800 dark:text-amber-200" />,
      text: "Let's build something amazing together!",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Quotes", href: "/#quotes" },
    { name: "Projects", href: "/#projects" },
    { name: "Experiences", href: "/#experience" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Skills", href: "/#skills" },
    { name: "About me", href: "/#about-me" },
    { name: "FAQ", href: "/#faq" },
    { name: "Videos", href: "/videos" },
    { name: "Contact", href: "/contact" },
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
        <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
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
                <p className="text-sm md:text-base font-medium bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-200 dark:to-orange-200 bg-clip-text text-transparent">
                  {bannerMessages[currentBannerIndex].text}
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="ml-4 p-1 rounded-full hover:bg-amber-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <X className="w-4 h-4 text-amber-600 dark:text-amber-200" />
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
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Ayivugwe
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all group-hover:w-full" />
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`px-3 py-2 rounded-lg relative group transition-colors duration-200
                    ${
                      isActive(link.href)
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className={`absolute inset-0 rounded-lg transition-transform duration-200
                    ${
                      isActive(link.href)
                        ? "bg-orange-50 dark:bg-orange-900/30 scale-100"
                        : "bg-orange-50 dark:bg-orange-900/30 scale-0 group-hover:scale-100"
                    }`}
                  />
                </button>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-amber-400 transition-transform duration-500 group-hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 transition-transform duration-500 group-hover:-rotate-90" />
                )}
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </nav>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={`w-full px-4 py-2 text-left rounded-lg transition-colors
                      ${
                        isActive(link.href)
                          ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30"
                          : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30"
                      }`}
                  >
                    {link.name}
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
