"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MapPin, Github, Twitter, Linkedin, Facebook, AtSign, Instagram, Globe } from "lucide-react";

export default function Contact() {
  const { darkMode } = useTheme();

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Spokane, Washington, USA",
      href: null,
    },
    {
      icon: Globe,
      label: "Content Creator",
      value: "Ibufuliiru Platform",
      href: "https://ibufuliiru.com",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@Ayivugwe",
      href: "https://github.com/Ayivugwe",
      color: "text-slate-700 dark:text-slate-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "ayivugwekabemba",
      href: "https://www.linkedin.com/in/ayivugwekabemba/",
      color: "text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      username: "@ayivugwekabemba",
      href: "https://x.com/ayivugwekabemba",
      color: "text-slate-900 dark:text-slate-100",
    },
    {
      icon: Facebook,
      label: "Facebook",
      username: "ayivugwekabemba",
      href: "https://facebook.com/ayivugwekabemba",
      color: "text-blue-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@ayivugwekabemba",
      href: "https://instagram.com/ayivugwekabemba",
      color: "text-pink-500",
    },
    {
      icon: AtSign,
      label: "Threads",
      username: "@ayivugwekabemba",
      href: "https://www.threads.net/@ayivugwekabemba",
      color: "text-slate-800 dark:text-slate-200",
    },
    {
      icon: AtSign,
      label: "TikTok",
      username: "@ayivugwekabemba",
      href: "https://www.tiktok.com/@ayivugwekabemba",
      color: "text-slate-900 dark:text-slate-100",
    },
  ];

  return (
    <section
      className={`relative min-h-screen font-inter py-40 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-slate-950 via-[#1c1917] to-slate-950 text-white"
          : "bg-gradient-to-b from-slate-50 via-slate-100/80 to-white text-slate-900"
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

      <div className="relative max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Get In Touch
          </h1>
          <p
            className={`text-lg transition-colors duration-300 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Let&apos;s connect and discuss how we can work together
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-blue-600/50"
                    : "bg-white/70 border-slate-200 hover:border-blue-500/50"
                } backdrop-blur-sm rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-blue-600/20" : "bg-blue-100/70"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-1 ${
                        darkMode ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-sm transition-colors duration-300 hover:underline ${
                          darkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-700"
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={`text-sm ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Media Section */}
        <div
          className={`${
            darkMode
              ? "bg-slate-800/50 border-slate-700/50"
              : "bg-white/70 border-slate-200"
          } backdrop-blur-sm rounded-xl border p-8 transition-all duration-300`}
        >
          <h2
            className={`text-2xl font-semibold mb-6 text-center ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Connect on Social Media
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-3 p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "bg-slate-700/30 hover:bg-slate-700/50"
                      : "bg-slate-50/50 hover:bg-slate-100/70"
                  }`}
                >
                  <div
                    className={`p-4 rounded-full transition-all duration-300 ${
                      darkMode ? "bg-slate-600/50" : "bg-white"
                    } group-hover:scale-110`}
                  >
                    <Icon className={`w-8 h-8 ${social.color}`} />
                  </div>
                  <div className="text-center">
                    <h3
                      className={`font-semibold mb-1 ${
                        darkMode ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      {social.label}
                    </h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {social.username}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Additional Message */}
        <div className="mt-8 text-center">
          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>
      </div>
    </section>
  );
}
