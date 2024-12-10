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
      className={`relative min-h-screen pt-40 md:pt-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
  ${
    darkMode
      ? "bg-gradient-to-b from-slate-950 via-[#1c1917] to-slate-950"
      : "bg-gradient-to-b from-slate-50 via-orange-50/80 to-white"
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
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start min-h-[calc(100vh-8rem)]">
          {/* Image Column */}
          <div className="order-2 md:order-1 h-full flex flex-col justify-center">
            <div
              className={`group relative rounded-2xl overflow-hidden animate-gentle-bounce hover:scale-[1.02] transition-all duration-500
  ${
    darkMode
      ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-orange-900/30"
      : "bg-gradient-to-br from-white/80 to-orange-50 border border-orange-200"
  } p-1`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-xl" />

              {/* Image container with continuous subtle movement */}
              <div className="relative w-full aspect-[4/3] animate-faster-float hover:scale-105 transition-transform duration-500">
                <Image
                  src="/ayiv-profile.jpg"
                  alt="Profile picture of Ayivugwe"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="rounded-xl object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
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
                    className={`group relative px-4 py-2 rounded-full font-medium overflow-hidden animate-tag-float hover:scale-105 transition-transform duration-300 border
  ${
    darkMode
      ? "bg-slate-800/80 text-orange-200 hover:text-orange-100 border-orange-900/30"
      : "bg-white/80 text-slate-700 hover:text-slate-900 border-orange-200"
  }`}
                    style={{ animationDelay: `${tag.delay * 1.2}s` }}
                  >
                    <div
                      className={`absolute inset-0 animate-gradient-shift
                        ${
                          darkMode
                            ? "bg-gradient-to-r from-slate-800 via-orange-900/30 to-slate-800"
                            : "bg-gradient-to-r from-white via-orange-100/30 to-white"
                        }`}
                      style={{ animationDelay: `${tag.delay * 1.2}s` }}
                    />
                    <div
                      className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                        ${
                          darkMode
                            ? "bg-gradient-to-t from-orange-900/50 to-slate-800/50"
                            : "bg-gradient-to-t from-orange-100 to-white/50"
                        }`}
                    />
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                      {tag.text}
                    </span>
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
                ${darkMode ? "text-orange-50" : "text-slate-900"}`}
              >
                Hi. I&apos;m Ayivugwe Kabemba Mukome
              </h1>

              <div
                className={`text-xl leading-relaxed font-medium transition-colors duration-300 animate-slide-up
                ${darkMode ? "text-orange-200" : "text-slate-700"}`}
                style={{ animationDelay: "200ms" }}
              >
                <span
                  className={`group relative inline-block px-4 py-2 rounded-full font-medium overflow-hidden animate-tag-float
                    ${
                      darkMode
                        ? "bg-slate-800/80 text-orange-200"
                        : "bg-white/80 text-slate-700"
                    }`}
                >
                  <span className="relative z-10">
                    Technologist & Kifuliiru Language Advocate
                  </span>
                </span>
              </div>

              <p
                className={`text-lg leading-relaxed transition-colors duration-300 animate-slide-up
  ${darkMode ? "text-white" : "text-slate-700"}`}
                style={{ animationDelay: "400ms" }}
              >
                A technologist combining software development and project
                management expertise with cultural preservation. Creating
                innovative solutions that bridge technology and community
                empowerment through Google-certified project management and
                modern development practices.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                {[
                  { text: "View Projects", href: "/#projects", primary: true },
                  { text: "Contact Me", href: "/contact", primary: false },
                ].map((button, index) => (
                  <button
                    key={button.text}
                    onClick={() => (window.location.href = button.href)}
                    className={`group relative px-8 py-3 rounded-lg overflow-hidden transition-all duration-500 animate-subtle-pulse hover:scale-105 border-2
                      ${
                        button.primary
                          ? darkMode
                            ? "bg-orange-600 text-white border-orange-500"
                            : "bg-orange-600 text-white border-orange-500"
                          : darkMode
                          ? "border-orange-600 text-orange-400"
                          : "border-orange-600 text-orange-600"
                      }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                        ${
                          darkMode
                            ? "bg-gradient-to-t from-orange-700 to-orange-600"
                            : "bg-gradient-to-t from-orange-700 to-orange-600"
                        }`}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      {button.text}
                    </span>
                  </button>
                ))}
              </div>

              {/* Social links section */}
              <div
                className={`mt-12 pt-12 transition-colors duration-300
                ${
                  darkMode
                    ? "border-t border-orange-900/30"
                    : "border-t border-orange-100"
                }`}
              >
                <h3
                  className={`text-sm font-medium uppercase tracking-wide mb-4 transition-colors duration-300
                  ${darkMode ? "text-orange-200/70" : "text-slate-500"}`}
                >
                  CONNECT WITH ME
                </h3>
                <div className="flex gap-6">
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
                            ? "text-orange-200 hover:text-orange-100"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      aria-label={label}
                    >
                      <div
                        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                          ${
                            darkMode ? "bg-orange-600/50" : "bg-orange-200/50"
                          }`}
                      />
                      <Icon
                        size={24}
                        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
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
