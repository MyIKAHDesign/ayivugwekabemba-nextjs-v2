"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "./context/ThemeContext";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-300 font-sans
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-slate-50/80 to-white"
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

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1
            className={`font-sans text-8xl sm:text-9xl font-bold mb-4
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            404
          </h1>
          <h2
            className={`font-sans text-2xl sm:text-3xl font-semibold mb-4
              ${darkMode ? "text-slate-200" : "text-slate-700"}`}
          >
            Page Not Found
          </h2>
          <p
            className={`font-sans text-base leading-relaxed mb-8
              ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95
              ${
                darkMode
                  ? "bg-blue-600 text-slate-100 hover:bg-blue-500"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 border
              ${
                darkMode
                  ? "bg-blue-600/50 text-slate-200 hover:bg-blue-500/50 border-blue-500"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
              }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </section>
  );
}

