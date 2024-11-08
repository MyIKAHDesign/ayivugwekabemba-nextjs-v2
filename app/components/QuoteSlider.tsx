"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface Quote {
  quote: string;
  author: string;
  group: string;
}

const allQuotes: Quote[] = [
  // Custom Quote
  {
    quote: "I am driven by what I don't know.",
    author: "Ayivugwe Kabemba Mukome",
    group: "Personal Motivation",
  },
  // Future of Technology
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    group: "Future of Technology",
  },
  {
    quote:
      "Innovation is the ability to see change as an opportunity, not a threat.",
    author: "Steve Jobs",
    group: "Future of Technology",
  },
  {
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    group: "Future of Technology",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    group: "Future of Technology",
  },
  // Technology and Innovation
  {
    quote: "Good ideas are always crazy until they're not.",
    author: "Larry Page",
    group: "Technology and Innovation",
  },
  {
    quote:
      "The art challenges the technology, and the technology inspires the art.",
    author: "John Lasseter",
    group: "Technology and Innovation",
  },
  // Technology and Human Development
  {
    quote: "The human spirit must prevail over technology.",
    author: "Albert Einstein",
    group: "Technology and Human Development",
  },
  {
    quote: "The biggest risk is not taking any risk.",
    author: "Mark Zuckerberg",
    group: "Technology and Human Development",
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    group: "Technology and Human Development",
  },
  // Visionaries of Technology
  {
    quote: "The future isn't AI vs humans, it's AI and humans.",
    author: "Anonymous",
    group: "Visionaries of Technology",
  },
  {
    quote:
      "Some people call this artificial intelligence, but the reality is this technology will enhance us.",
    author: "Ginni Rometty",
    group: "Visionaries of Technology",
  },
  {
    quote: "In technology, whatever can be done will be done.",
    author: "Andy Grove",
    group: "Visionaries of Technology",
  },
];

const QuoteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { darkMode } = useTheme();

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === allQuotes.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? allQuotes.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Improved touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === " ") {
        setIsPlaying((prev) => !prev);
      }
    },
    [goToNext, goToPrev]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(goToNext, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, goToNext]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <section
      className={`relative min-h-screen py-12 sm:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
    ${
      darkMode
        ? "bg-gradient-to-b from-slate-900 to-slate-800"
        : "bg-gradient-to-b from-slate-50 to-white"
    }`}
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center
      ${
        darkMode
          ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
          : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
      }`}
      />

      <div className="relative max-w-7xl mx-auto">
        {" "}
        {/* Expanded to max-w-7xl for wider section */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
        ${darkMode ? "text-white" : "text-slate-900"} 
        transition-colors duration-300`}
          >
            Curiosity: Source of My Inspiration
          </h2>
          <p
            className={`text-2xl font-semibold text-center my-4 
    ${darkMode ? "text-blue-500" : "text-blue-700"}
    transition-colors duration-300 max-w-xl mx-auto font-serif italic`}
          >
            &quot;I am driven by what I don&apos;t know.&quot;
          </p>
          <p
            className={`text-xl leading-relaxed 
          ${darkMode ? "text-slate-400" : "text-slate-600"} 
          transition-colors duration-300 max-w-xl mx-auto`}
          >
            Curiosity fuels my passion for impactful solutions. Driven by a
            desire to bridge the unknown, I find inspiration in technology and
            innovation as pathways to meaningful change. Below are some
            inspirational quotes.
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-16">
          {" "}
          {/* Expanded to max-w-4xl for a wider quote area */}
          {/* Navigation buttons - hidden on mobile, visible on desktop */}
          <button
            onClick={goToPrev}
            className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
          ${
            darkMode
              ? "bg-slate-800 hover:bg-slate-700 text-white"
              : "bg-white hover:bg-slate-100 text-slate-900"
          }
          shadow-lg hover:scale-110 -translate-x-6`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className={`hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
          ${
            darkMode
              ? "bg-slate-800 hover:bg-slate-700 text-white"
              : "bg-white hover:bg-slate-100 text-slate-900"
          }
          shadow-lg hover:scale-110 translate-x-6`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border min-h-[250px] sm:min-h-[300px]
          ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-gray-100"
          }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
          ${
            darkMode
              ? "bg-gradient-to-t from-slate-800 to-slate-700"
              : "bg-gradient-to-t from-slate-900 to-slate-800"
          }`}
            />

            <div className="relative p-4 sm:p-8 transition-colors duration-500 group-hover:text-white z-10">
              <span
                className={`absolute top-4 left-4 text-4xl sm:text-6xl leading-none font-serif
            ${darkMode ? "text-slate-700" : "text-slate-200"}
            group-hover:text-slate-700`}
              >
                &quot;
              </span>

              <p
                className={`relative text-lg sm:text-2xl leading-relaxed transition-colors duration-500 group-hover:text-white
            ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {allQuotes[currentIndex].quote}
              </p>

              <div className="mt-6 sm:mt-8 space-y-1">
                <p
                  className={`text-base sm:text-xl italic transition-colors duration-500 group-hover:text-white/80
              ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  — {allQuotes[currentIndex].author}
                </p>
                <p
                  className={`text-xs sm:text-sm font-medium uppercase tracking-wide transition-colors duration-500 group-hover:text-white/60
              ${darkMode ? "text-slate-500" : "text-slate-500"}`}
                >
                  {allQuotes[currentIndex].group}
                </p>
              </div>
            </div>
          </div>
          {/* Controls */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-4 items-center">
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className={`p-2 rounded-full transition-all duration-300 shadow-lg hover:scale-110
            ${
              darkMode
                ? "bg-slate-800 hover:bg-slate-700 text-white"
                : "bg-white hover:bg-slate-100 text-slate-900"
            }`}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>

            {/* Dot indicators - Scrollable container for mobile */}
            <div className="flex gap-2 overflow-x-auto pb-2 max-w-[200px] sm:max-w-none">
              {allQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 flex-shrink-0
                ${
                  index === currentIndex
                    ? darkMode
                      ? "bg-white"
                      : "bg-slate-900"
                    : darkMode
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
      ${darkMode ? "via-slate-700" : "via-slate-200"} 
      to-transparent`}
        />
      </div>
    </section>
  );
};

export default QuoteSlider;
