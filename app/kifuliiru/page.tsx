"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { BookOpen, Globe, Users, Sparkles } from "lucide-react";

const KifuliiruPage: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 font-sans
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-slate-100/80 to-white"
        }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div
              className={`p-4 rounded-2xl ${
                darkMode
                  ? "bg-blue-600/20 border border-blue-600/30"
                  : "bg-blue-100/70 border border-blue-200/50"
              }`}
            >
              <BookOpen
                className={`w-12 h-12 ${
                  darkMode ? "text-blue-400" : "text-blue-700"
                }`}
              />
            </div>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300
            ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Kifuliiru
          </h1>
          <p
            className={`text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-300
            ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            The Language of the Bafuliiru People
          </p>
          <p
            className={`text-lg leading-relaxed transition-colors duration-300
            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            A Bantu language spoken in the eastern Democratic Republic of Congo
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Overview Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe
                className={`w-6 h-6 ${
                  darkMode ? "text-blue-400" : "text-blue-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                About Kifuliiru
              </h2>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <p>
                Kifuliiru is a Bantu language spoken by the Bafuliiru people,
                primarily in the Uvira Territory of South Kivu Province in the
                eastern Democratic Republic of Congo. The language is part of
                the larger Niger-Congo language family and shares linguistic
                features with other Great Lakes Bantu languages.
              </p>
              <p>
                As a vital part of Bafuliiru cultural identity, Kifuliiru serves
                as the primary means of communication within the community,
                preserving oral traditions, folklore, and cultural knowledge
                passed down through generations.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles
                className={`w-6 h-6 ${
                  darkMode ? "text-blue-400" : "text-blue-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Language Features
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Bantu Language Family",
                  description:
                    "Part of the Great Lakes Bantu language group with rich grammatical structures",
                },
                {
                  title: "Tonal System",
                  description:
                    "Uses tones to distinguish meaning, characteristic of many Bantu languages",
                },
                {
                  title: "Noun Classes",
                  description:
                    "Features the traditional Bantu noun class system with concordial agreements",
                },
                {
                  title: "Oral Tradition",
                  description:
                    "Rich oral literature including proverbs, songs, and storytelling traditions",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-900/50 border border-slate-700/30"
                      : "bg-slate-50 border border-slate-200/50"
                  }`}
                >
                  <h3
                    className={`font-semibold text-lg mb-2 ${
                      darkMode ? "text-slate-200" : "text-slate-800"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Preservation Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users
                className={`w-6 h-6 ${
                  darkMode ? "text-blue-400" : "text-blue-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Language Preservation
              </h2>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <p>
                Through initiatives like Kifuliiru Lab, efforts are being made
                to preserve and promote the Kifuliiru language in the digital
                age. These include developing learning resources, documenting
                vocabulary, and creating digital tools to help new generations
                maintain their linguistic heritage.
              </p>
              <p>
                The preservation of Kifuliiru is not just about maintaining a
                means of communication, but safeguarding the unique worldview,
                cultural knowledge, and identity of the Bafuliiru people.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KifuliiruPage;
