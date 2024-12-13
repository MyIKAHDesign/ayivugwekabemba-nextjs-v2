import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

const CertificatesSection = () => {
  const { darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const certificates: Certificate[] = [
    {
      title: "Project Management Professional",
      issuer: "Google",
      date: "2024",
      description:
        "Professional certification in Project Management methodologies and best practices",
      image: "/certificates/GooglePM.jpg",
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "2024",
      description:
        "Professional certification in Project Management methodologies and best practices",
      image: "/certificates/GitHubFoundations_Badge.jpg",
    },
    {
      title: "Slack",
      issuer: "Coursera",
      date: "2024",
      description: "Communication",
      image: "/certificates/Slack.jpg",
    },
  ];

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
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
  };

  return (
    <section
      id="certificates"
      className={`relative min-h-screen mt-20 sm:mt-24 py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
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
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-inter text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-white" : "text-slate-900"} 
            transition-colors duration-300`}
          >
            Professional Certifications
          </h2>
          <p
            className={`font-inter text-xl leading-relaxed
            ${darkMode ? "text-slate-400" : "text-slate-600"} 
            transition-colors duration-300 max-w-xl mx-auto`}
          >
            Continuous learning and professional development achievements
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Certificate Slider */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-16">
          {/* Navigation buttons - hidden on mobile */}
          <button
            onClick={goToPrev}
            className={`font-inter hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
              ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-white hover:bg-slate-100 text-slate-900"
              }
              shadow-lg hover:scale-110 -translate-x-6 z-10`}
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className={`font-inter  hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
              ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-white hover:bg-slate-100 text-slate-900"
              }
              shadow-lg hover:scale-110 translate-x-6 z-10`}
            aria-label="Next certificate"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Certificate Card */}
          <div
            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border
              ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/50 border-gray-100"
              }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
              ${
                darkMode
                  ? "bg-gradient-to-t from-slate-800 to-slate-700"
                  : "bg-gradient-to-t from-slate-100 to-white"
              }`}
            />

            <div className="relative p-6 sm:p-8 space-y-6">
              {/* Certificate Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={certificates[currentIndex].image}
                  alt={certificates[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <h3
                  className={`font-inter text-2xl font-semibold transition-colors duration-500
                  ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {certificates[currentIndex].title}
                </h3>

                <div className="flex justify-between items-center">
                  <p
                    className={`font-inter text-lg transition-colors duration-500
                    ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                  >
                    {certificates[currentIndex].issuer}
                  </p>
                  <p
                    className={`font-inter text-sm transition-colors duration-500
                    ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {certificates[currentIndex].date}
                  </p>
                </div>

                <p
                  className={`font-inter text-base transition-colors duration-500
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {certificates[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-6 gap-4 items-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-2 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700 text-white"
                    : "bg-white hover:bg-slate-100 text-slate-900"
                }`}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {certificates.map((_, index) => (
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
                  aria-label={`Go to certificate ${index + 1}`}
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

export default CertificatesSection;
