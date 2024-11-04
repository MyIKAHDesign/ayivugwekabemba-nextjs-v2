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
  // Future of Technology
  {
    quote: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    group: "Future of Technology",
  },
  {
    quote:
      "Innovation is the ability to see change as an opportunity, not a threat.",
    author: "Steve Jobs",
    group: "Future of Technology",
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
    group: "Future of Technology",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    group: "Future of Technology",
  },
  {
    quote: "Technology is a useful servant but a dangerous master.",
    author: "Christian Lous Lange",
    group: "Future of Technology",
  },
  {
    quote: "The real problem is not whether machines think but whether men do.",
    author: "B. F. Skinner",
    group: "Future of Technology",
  },
  {
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
    author: "Bill Gates",
    group: "Future of Technology",
  },
  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it.",
    author: "Bill Gates",
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
    quote: "The great growling engine of change – technology.",
    author: "Alvin Toffler",
    group: "Technology and Innovation",
  },
  {
    quote:
      "Technology, like art, is a soaring exercise of the human imagination.",
    author: "Daniel Bell",
    group: "Technology and Innovation",
  },
  {
    quote: "We're changing the world with technology.",
    author: "Bill Gates",
    group: "Technology and Innovation",
  },
  {
    quote:
      "A good scientist is a person with original ideas. A good engineer makes a design that works.",
    author: "Freeman Dyson",
    group: "Technology and Innovation",
  },
  {
    quote:
      "Computers themselves, and software yet to be developed, will revolutionize the way we learn.",
    author: "Steve Jobs",
    group: "Technology and Innovation",
  },
  {
    quote: "Good ideas are always crazy until they’re not.",
    author: "Larry Page",
    group: "Technology and Innovation",
  },
  {
    quote:
      "The art challenges the technology, and the technology inspires the art.",
    author: "John Lasseter",
    group: "Technology and Innovation",
  },
  {
    quote: "If you define the problem correctly, you almost have the solution.",
    author: "Steve Jobs",
    group: "Technology and Innovation",
  },
  {
    quote:
      "Sometimes when you innovate, you make mistakes. It is best to admit them quickly.",
    author: "Steve Jobs",
    group: "Technology and Innovation",
  },

  // Technology and Human Development
  {
    quote: "The human spirit must prevail over technology.",
    author: "Albert Einstein",
    group: "Technology and Human Development",
  },
  {
    quote:
      "You are not just here to fill space or be a background character in someone else’s movie.",
    author: "Anonymous",
    group: "Technology and Human Development",
  },
  {
    quote: "AI is the new electricity.",
    author: "Andrew Ng",
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
  {
    quote: "The more we automate, the more we have to trust.",
    author: "Chris Skinner",
    group: "Technology and Human Development",
  },
  {
    quote:
      "In the AI era, creativity becomes our greatest technological advantage.",
    author: "Anonymous",
    group: "Technology and Human Development",
  },
  {
    quote: "Natural language is becoming the new command line interface.",
    author: "Anonymous",
    group: "Technology and Human Development",
  },

  // Technology and Cultural Preservation
  {
    quote:
      "Technology is a powerful tool to bridge the digital divide and preserve linguistic diversity.",
    author: "Anonymous",
    group: "Technology and Cultural Preservation",
  },
  {
    quote: "In the digital age, language is not just spoken, it's clicked.",
    author: "Anonymous",
    group: "Technology and Cultural Preservation",
  },
  {
    quote:
      "Let's use technology to amplify the voices of marginalized languages.",
    author: "Anonymous",
    group: "Technology and Cultural Preservation",
  },
  {
    quote:
      "Language is the road map of a culture. It tells you where its people came from and where they are going.",
    author: "Rita Mae Brown",
    group: "Technology and Cultural Preservation",
  },

  // Visionaries of Technology
  {
    quote: "The next programming language will be English.",
    author: "Andrej Karpathy",
    group: "Visionaries of Technology",
  },
  {
    quote: "Code is the poetry of logic, AI is becoming its translation tool.",
    author: "Anonymous",
    group: "Visionaries of Technology",
  },
  {
    quote: "AI is the amplifier, humans are the creators of meaning.",
    author: "Anonymous",
    group: "Visionaries of Technology",
  },
  {
    quote: "The future isn't AI vs humans, it's AI and humans.",
    author: "Anonymous",
    group: "Visionaries of Technology",
  },
  {
    quote: "Our technology forces us to live mythically.",
    author: "Marshall McLuhan",
    group: "Visionaries of Technology",
  },
  {
    quote:
      "The technology you use impresses no one. The experience you create with it is everything.",
    author: "Sean Gerety",
    group: "Visionaries of Technology",
  },
  {
    quote: "In technology, whatever can be done will be done.",
    author: "Andy Grove",
    group: "Visionaries of Technology",
  },
  {
    quote:
      "Some people call this artificial intelligence, but the reality is this technology will enhance us.",
    author: "Ginni Rometty",
    group: "Visionaries of Technology",
  },
  {
    quote:
      "If it keeps up, man will atrophy all his limbs but the push-button finger.",
    author: "Frank Lloyd Wright",
    group: "Visionaries of Technology",
  },
];

const QuoteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
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

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart === null) return;
      const currentTouch = e.touches[0].clientX;
      const diff = touchStart - currentTouch;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrev();
        }
        setTouchStart(null);
      }
    },
    [touchStart, goToNext, goToPrev]
  );

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

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, goToNext]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <section
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
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
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-white" : "text-slate-900"} 
            transition-colors duration-300`}
          >
            Thoughts That Drive Me: Inspiring Philosophies in Technology and
            Innovation
          </h2>
          <p
            className={`text-xl leading-relaxed
            ${darkMode ? "text-slate-400" : "text-slate-600"} 
            transition-colors duration-300 max-w-xl mx-auto`}
          >
            Before you explore other sections, would you please take a moment to
            read some quotes that inspire my journey? These ideas fuel my
            passion for creating impactful solutions, grounded in the belief
            that technology can drive meaningful change.
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-16">
          <button
            onClick={goToPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
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
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
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
            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border min-h-[300px]
              ${
                darkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-gray-100"
              }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
              ${
                darkMode
                  ? "bg-gradient-to-t from-slate-800 to-slate-700"
                  : "bg-gradient-to-t from-slate-900 to-slate-800"
              }`}
            />

            <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
              <span
                className={`absolute top-4 left-4 text-6xl leading-none font-serif
                ${darkMode ? "text-slate-700" : "text-slate-200"}
                group-hover:text-slate-700`}
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
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  — {allQuotes[currentIndex].author}
                </p>
                <p
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-500 group-hover:text-white/60
                  ${darkMode ? "text-slate-500" : "text-slate-500"}`}
                >
                  {allQuotes[currentIndex].group}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4 items-center">
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

            <div className="flex gap-2">
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150
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
        ></div>
      </div>
    </section>
  );
};

export default QuoteSlider;
