"use client";

import React from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HeroSection: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 to-white"
        }`}
    >
      {/* Background Pattern with subtle animation */}
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center animate-subtle-float
          ${
            darkMode
              ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
              : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
          }`}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start min-h-[calc(100vh-8rem)]">
          {/* Image Column */}
          <div className="order-2 md:order-1 h-full flex flex-col justify-center">
            <div
              className={`group relative rounded-2xl overflow-hidden animate-gentle-bounce hover:scale-[1.02] transition-all duration-500
                ${
                  darkMode
                    ? "bg-gradient-to-br from-slate-800 to-slate-700"
                    : "bg-gradient-to-br from-slate-100 to-slate-200"
                } p-1`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

              {/* Image container with continuous subtle movement */}
              <div className="relative w-full aspect-[4/3] animate-faster-float">
                <Image
                  src="/ayiv-profile.jpg"
                  alt="Profile picture of Ayivugwe"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="rounded-xl object-cover transform transition-transform duration-500"
                />
              </div>
            </div>

            {/* Tags with hover effects */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  { text: "Google Certified PM", delay: 0 },
                  { text: "Software Developer", delay: 1 },
                  { text: "Kifuliiru Language Advocate", delay: 2 },
                ].map((tag, index) => (
                  <span
                    key={tag.text}
                    className={`group relative px-4 py-2 rounded-full font-medium overflow-hidden animate-tag-float
                      ${
                        darkMode
                          ? "bg-slate-800 text-slate-400"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    style={{
                      animationDelay: `${tag.delay * 1.2}s`,
                    }}
                  >
                    {/* Continuous gradient animation */}
                    <div
                      className={`absolute inset-0 animate-gradient-shift
                        ${
                          darkMode
                            ? "bg-gradient-to-r from-slate-800 via-blue-900/30 to-slate-800"
                            : "bg-gradient-to-r from-slate-100 via-blue-100/30 to-slate-100"
                        }`}
                      style={{
                        animationDelay: `${tag.delay * 1.2}s`,
                      }}
                    />
                    {/* Hover gradient remains */}
                    <div
                      className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                        ${
                          darkMode
                            ? "bg-gradient-to-t from-blue-900/50 to-slate-800/50"
                            : "bg-gradient-to-t from-blue-100 to-slate-100/50"
                        }`}
                    />
                    <span className="relative z-10">{tag.text}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2 h-full flex flex-col justify-center">
            <div className="space-y-6">
              <h1
                className={`text-4xl sm:text-5xl font-semibold tracking-tight transition-colors duration-300 animate-text-reveal
                ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Hi. I&apos;m Ayivugwe Kabemba Mukome
              </h1>
              {/* Animated highlight text */}
              <div
                className={`text-lg leading-relaxed font-medium transition-colors duration-300 animate-slide-up
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                style={{ animationDelay: "200ms" }}
              >
                <span
                  className={`group relative inline-block px-4 py-2 rounded-full font-medium overflow-hidden animate-tag-float
                    ${
                      darkMode
                        ? "bg-slate-800 text-slate-400"
                        : "bg-slate-100 text-slate-600"
                    }`}
                >
                  {/* Continuous gradient animation */}
                  <div
                    className={`absolute inset-0 animate-gradient-shift
                      ${
                        darkMode
                          ? "bg-gradient-to-r from-slate-800 via-blue-900/30 to-slate-800"
                          : "bg-gradient-to-r from-slate-100 via-blue-100/30 to-slate-100"
                      }`}
                  />
                  {/* Hover gradient remains */}
                  <div
                    className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                      ${
                        darkMode
                          ? "bg-gradient-to-t from-blue-900/50 to-slate-800/50"
                          : "bg-gradient-to-t from-blue-100 to-slate-100/50"
                      }`}
                  />
                  <span className="relative z-10">
                    Technologist & Kifuliiru Language Advocate
                  </span>
                </span>
              </div>
              {/* Animated paragraphs */}
              <p
                className={`leading-relaxed transition-colors duration-300 animate-slide-up
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                style={{ animationDelay: "400ms" }}
              >
                A technologist combining software development and project
                management expertise with cultural preservation. Creating
                innovative solutions that bridge technology and community
                empowerment through Google-certified project management and
                modern development practices.
              </p>
              {/* Buttons with gradient animations */}
              {/* Buttons with gradient animations */}
              <div className="flex gap-4">
                {[
                  {
                    text: "View Projects",
                    href: "/#projects",
                    primary: true,
                  },
                  {
                    text: "Contact Me",
                    href: "/contact",
                    primary: false,
                  },
                ].map((button, index) => (
                  <button
                    key={button.text}
                    onClick={() => (window.location.href = button.href)}
                    className={`group relative px-8 py-3 rounded-lg overflow-hidden transition-all duration-500 animate-subtle-pulse border-2
                      ${
                        button.primary
                          ? darkMode
                            ? "bg-slate-900 text-white border-slate-700"
                            : "bg-slate-800 text-white border-slate-700"
                          : darkMode
                          ? "border-slate-700 text-slate-400"
                          : "border-slate-900 text-slate-900"
                      }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Unified hover gradient for both buttons */}
                    <div
                      className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                        ${
                          darkMode
                            ? "bg-gradient-to-t from-slate-700 to-slate-600"
                            : "bg-gradient-to-t from-slate-800 to-slate-700"
                        }`}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      {button.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Social links section */}
            <div
              className={`mt-12 pt-12 transition-colors duration-300
              ${
                darkMode
                  ? "border-t border-slate-700"
                  : "border-t border-slate-200"
              }`}
            >
              <h3
                className={`font-montserrat text-sm font-medium mb-4 tracking-wider transition-colors duration-300
                ${darkMode ? "text-slate-500" : "text-slate-400"}`}
              >
                CONNECT WITH ME
              </h3>
              <div className="flex gap-6">
                {/* Social icons with hover effects */}
                {[
                  {
                    Icon: Github,
                    href: "https://github.com/Ayivugwe",
                    label: "GitHub Profile",
                  },
                  {
                    Icon: Twitter,
                    href: "https://x.com/ayivugwekabemba",
                    label: "Twitter Profile",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/ayivugwekabemba/",
                    label: "LinkedIn Profile",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={`group relative p-2 rounded-full overflow-hidden transition-all duration-300 hover:scale-110
                      ${
                        darkMode
                          ? "text-slate-400 hover:text-white"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    aria-label={label}
                  >
                    <div
                      className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                        ${darkMode ? "bg-slate-700/50" : "bg-slate-200/50"}`}
                    />
                    <Icon size={24} className="relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes faster-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes tag-float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.02);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            transform: translateX(-50%);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-faster-float {
          animation: faster-float 4s ease-in-out infinite;
        }

        .animate-tag-float {
          animation: tag-float 3s ease-in-out infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
