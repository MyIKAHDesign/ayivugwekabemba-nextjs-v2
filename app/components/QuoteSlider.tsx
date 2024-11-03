// ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// QuoteSlider.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "./ThemeContext";

interface Quote {
  quote: string;
  author: string;
  group: string;
}

const allQuotes: Quote[] = [
  // General Quotes on Language Preservation
  {
    quote:
      "Language is the road map of a culture. It tells you where its people came from and where they are going.",
    author: "Rita Mae Brown",
    group: "General Quotes on Language Preservation",
  },
  {
    quote: "A language is a dialect with an army and a navy.",
    author: "Max Weinreich",
    group: "General Quotes on Language Preservation",
  },
  {
    quote: "When a language dies, a world view dies.",
    author: "Edward Sapir",
    group: "General Quotes on Language Preservation",
  },
  {
    quote:
      "Language is the blood of the soul into which thoughts run and out of which they grow.",
    author: "Oliver Wendell Holmes Sr.",
    group: "General Quotes on Language Preservation",
  },
  {
    quote:
      "Language is not just a tool of communication, it's the vessel of culture.",
    author: "Anonymous",
    group: "General Quotes on Language Preservation",
  },

  // Technology and Language Preservation
  {
    quote:
      "Technology is a powerful tool to bridge the digital divide and preserve linguistic diversity.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote: "In the digital age, language is not just spoken, it's clicked.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote: "Innovation is the key to revitalizing endangered languages.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote:
      "Let's use technology to amplify the voices of marginalized languages.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote:
      "The internet can be a powerful tool for language preservation, but it's not a magic wand.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },

  // Community and Language Preservation
  {
    quote:
      "A language is a community's soul, and a community is a language's heart.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "Together, we can weave a tapestry of language and culture.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "Language preservation is a collective responsibility.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "By strengthening our community, we strengthen our language.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "A strong community is the bedrock of language revitalization.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },

  // Commitment and Language Preservation
  {
    quote: "Commitment is the cornerstone of language revitalization.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote: "Let's pass on our linguistic heritage to future generations.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote:
      "Every word spoken, every story shared, is a step towards language preservation.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote:
      "Small steps, big impact: Every effort counts in language revitalization.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote: "Language preservation is a marathon, not a sprint.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },

  // Inspirational Quotes
  {
    quote: "Don't let a language die. Let it sing.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "In every language, there's a world waiting to be discovered.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "Language is the key to unlocking cultural heritage.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "Language is the mirror of the soul.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "Every language deserves to be heard.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
];

const QuoteSlider: React.FC = () => {
  const { darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === allQuotes.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? allQuotes.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center ${
          darkMode
            ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
            : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
        }`}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
            <div className="absolute top-0 -left-24 w-48 h-full bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 animate-bounce transition-transform duration-1000 ease-in-out" />
          </div>
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Language Preservation Quotes
          </h2>
          <div
            className={`space-y-4 ${
              darkMode ? "text-white/80" : "text-slate-700"
            }`}
          >
            <p className="text-xl">
              Inspiring words that highlight the importance of preserving our
              linguistic heritage and cultural diversity.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div
            className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-100"} 
              border min-h-[300px]`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`absolute inset-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
              ${darkMode ? "bg-gradient-to-r from-slate-800 to-slate-700" : "bg-gradient-to-r from-slate-900 to-slate-800"}
              opacity-0`}
            />

            <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
              <span
                className={`absolute top-4 left-4 text-6xl leading-none font-serif 
                ${darkMode 
                  ? "text-slate-700 group-hover:text-slate-600" 
                  : "text-slate-200 group-hover:text-slate-700"}`}
              >
                &quot;
              </span>

              <p
                className={`relative text-2xl leading-relaxed transition-colors duration-500 group-hover:text-white
                ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {allQuotes[currentIndex].quote}
              </p>
              
              <div className="mt-8 space-y-1">
                <p
                  className={`text-xl italic transition-colors duration-500 group-hover:text-white/80
                  ${darkMode ? "text-white/60" : "text-slate-600"}`}
                >
                  — {allQuotes[currentIndex].author}
                </p>
                <p
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-500 group-hover:text-white/60
                  ${darkMode ? "text-white/40" : "text-slate-500"}`}
                >
                  {allQuotes[currentIndex].group}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300
              ${darkMode 
                ? "bg-slate-700 hover:bg-slate-600 text-white" 
                : "bg-white hover:bg-slate-100 text-slate-900"}
              shadow-lg hover:scale-110`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300
              ${darkMode 
                ? "bg-slate-700 hover:bg-slate-600 text-white" 
                : "bg-white hover:bg-slate-100 text-slate-900"}
              shadow-lg hover:scale-110`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? darkMode
                      ? "bg-white"
                      : "bg-slate-900"
                    : darkMode
                    ? "bg-slate-600"
                    : "bg-slate-300"
                } hover:scale-150`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;
