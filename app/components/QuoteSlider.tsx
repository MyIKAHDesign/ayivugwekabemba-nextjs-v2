"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface Quote {
  quote: string;
  author: string;
  group: string;
}

const allQuotes: Quote[] = [
  // Future of Technology & AI-Human Collaboration
  {
    quote: "AI is not replacing programmers, it's upgrading human capabilities.",
    author: "Anonymous",
    group: "Future of Technology",
  },
  {
    quote: "The next programming language will be English.",
    author: "Andrej Karpathy",
    group: "Future of Technology",
  },
  {
    quote: "AI is the amplifier, humans are the creators of meaning.",
    author: "Anonymous",
    group: "Future of Technology",
  },
  {
    quote: "The future isn't AI vs humans, it's AI and humans.",
    author: "Anonymous",
    group: "Future of Technology",
  },
  {
    quote: "Code is the poetry of logic, AI is becoming its translation tool.",
    author: "Anonymous",
    group: "Future of Technology",
  },
  {
    quote: "Natural language is becoming the new command line interface.",
    author: "Anonymous",
    group: "Future of Technology",
  },
  {
    quote: "In the AI era, creativity becomes our greatest technological advantage.",
    author: "Anonymous",
    group: "Future of Technology",
  },

  // Technology & Cultural Preservation
  {
    quote: "Technology is a powerful tool to bridge the digital divide and preserve linguistic diversity.",
    author: "Anonymous",
    group: "Technology and Cultural Preservation",
  },
  {
    quote: "In the digital age, language is not just spoken, it's clicked.",
    author: "Anonymous",
    group: "Technology and Cultural Preservation",
  },
  {
    quote: "Innovation is the key to revitalizing endangered languages.",
    author: "Anonymous",
    group: "Technology and Cultural Preservation",
  },
  {
    quote: "Let's use technology to amplify the voices of marginalized languages.",
    author: "Anonymous",
    group: "Technology and Cultural Preservation",
  },
  {
    quote: "Language is the road map of a culture. It tells you where its people came from and where they are going.",
    author: "Rita Mae Brown",
    group: "Technology and Cultural Preservation",
  }
];

const QuoteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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
  };

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
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === " ") {
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
            <div className="absolute top-0 -left-24 w-48 h-full bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 animate-bounce transition-transform duration-1000 ease-in-out" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            AI & Human Collaboration
          </h2>
          <p className="text-xl text-slate-700">
            Exploring the synergy between human creativity and artificial intelligence,
            where technology amplifies our capabilities and preserves our cultural heritage.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-16">
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
              bg-white hover:bg-slate-100 text-slate-900 shadow-lg hover:scale-110 -translate-x-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
              bg-white hover:bg-slate-100 text-slate-900 shadow-lg hover:scale-110 translate-x-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              bg-white border-gray-100 border min-h-[300px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
              bg-gradient-to-t from-slate-900 to-slate-800 opacity-0"
            />

            <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
              <span className="absolute top-4 left-4 text-6xl leading-none font-serif text-slate-200 group-hover:text-slate-700">
                &quot;
              </span>

              <p className="relative text-2xl leading-relaxed transition-colors duration-500 group-hover:text-white text-slate-900">
                {allQuotes[currentIndex].quote}
              </p>

              <div className="mt-8 space-y-1">
                <p className="text-xl italic transition-colors duration-500 group-hover:text-white/80 text-slate-600">
                  — {allQuotes[currentIndex].author}
                </p>
                <p className="text-sm font-medium uppercase tracking-wide transition-colors duration-500 group-hover:text-white/60 text-slate-500">
                  {allQuotes[currentIndex].group}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4 items-center">
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="p-2 rounded-full transition-all duration-300
                bg-white hover:bg-slate-100 text-slate-900 shadow-lg hover:scale-110"
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${index === currentIndex ? "bg-slate-900" : "bg-slate-300"} 
                    hover:scale-150`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;