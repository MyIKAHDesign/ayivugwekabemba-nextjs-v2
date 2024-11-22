"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X, Sparkles, Wrench, Rocket } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface NavLink {
  name: string;
  href: string;
}

interface BannerItem {
  icon: React.ReactNode;
  text: string;
}

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [isEmojiAnimating, setIsEmojiAnimating] = useState(false);

  const bannerMessages: BannerItem[] = [
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

  const navLinks: NavLink[] = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experiences", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "About me", href: "/#about-me" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEmojiAnimating(true);
      setTimeout(() => {
        setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length);
        setIsEmojiAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      const element = document.getElementById(href.slice(2));
      if (element) {
        const offset = showBanner ? 120 : 80;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {showBanner && (
        <div className="relative overflow-hidden bg-amber-100 dark:bg-gray-800 border-b border-amber-200 dark:border-gray-700">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
          </div>

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

                <p className="text-sm md:text-base font-medium text-amber-800 dark:text-amber-200">
                  <span className="inline-block animate-fade-in">
                    {bannerMessages[currentBannerIndex].text}
                  </span>
                </p>

                <div className="hidden md:flex items-center space-x-2">
                  {bannerMessages.map((_, index) => (
                    <span
                      key={index}
                      className={`animate-pulse ${
                        index === 1
                          ? "delay-100"
                          : index === 2
                          ? "delay-200"
                          : ""
                      } 
                      h-2 w-2 rounded-full ${
                        index === currentBannerIndex
                          ? "bg-amber-400 dark:bg-amber-600"
                          : "bg-amber-300 dark:bg-amber-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowBanner(false)}
                className="ml-4 p-1 rounded-full hover:bg-amber-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4 text-amber-800 dark:text-amber-200" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 dark:via-amber-700 to-transparent" />
        </div>
      )}

      <header
        className={`sticky top-0 ${
          darkMode
            ? "bg-gray-900 border-b border-gray-700"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/#home"
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
            >
              <span className="flex items-center gap-2">Ayivugwe</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out group"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
                )}
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
