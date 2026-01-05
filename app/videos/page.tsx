"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function VideosPage() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen pt-40 md:pt-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-slate-100/80 to-white"
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

      <div className="relative max-w-6xl mx-auto py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1
            className={`font-sans text-4xl sm:text-5xl font-semibold tracking-tight mb-6
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Kifuliiru Video Collection
          </h1>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div
            className={`p-8 rounded-2xl border backdrop-blur-xl
              ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white/50 border-slate-200"
              }`}
          >
            <p
              className={`font-sans text-lg leading-relaxed mb-6
                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              Welcome to our collection of Kifuliiru language videos. These videos are part of our ongoing mission to preserve, document, and promote the Kifuliiru language and Bafuliiru cultural heritage. Through digital storytelling, educational content, and cultural documentation, we aim to ensure that the Kifuliiru language continues to thrive for future generations.
            </p>
            <p
              className={`font-sans text-lg leading-relaxed mb-6
                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              Our videos cover a wide range of topics including language lessons, cultural stories, traditional practices, community events, and educational content designed to help both native speakers and learners engage with the Kifuliiru language in meaningful ways.
            </p>
            <p
              className={`font-sans text-lg leading-relaxed
                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              Each video is carefully crafted to showcase the beauty and richness of the Kifuliiru language while providing valuable learning resources for those interested in understanding and preserving this important cultural heritage.
            </p>
          </div>

          {/* Channel Reference */}
          <div
            className={`p-8 rounded-2xl border backdrop-blur-xl
              ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white/50 border-slate-200"
              }`}
          >
            <h2
              className={`font-sans text-2xl font-semibold mb-4
                ${darkMode ? "text-slate-100" : "text-slate-900"}`}
            >
              Visit Our YouTube Channel
            </h2>
            <p
              className={`font-sans text-base leading-relaxed mb-6
                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              For more Kifuliiru videos and content, visit our YouTube channel:
            </p>
            <a
              href="https://www.youtube.com/@ibufuliiru"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-6 py-4 rounded-lg font-sans text-lg font-semibold transition-all duration-300 hover:scale-105 border-2
                ${
                  darkMode
                    ? "bg-slate-700 text-slate-100 border-slate-600 hover:bg-slate-600 hover:border-slate-500"
                    : "bg-slate-700 text-white border-slate-600 hover:bg-slate-600 hover:border-slate-500"
                }`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>@ibufuliiru</span>
            </a>
          </div>
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
          ${darkMode ? "via-slate-700/50" : "via-slate-200"} 
          to-transparent`}
        />
      </div>
    </section>
  );
}
