"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Users, Heart, Music, HandHeart } from "lucide-react";

const AbafuliiruPage: React.FC = () => {
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
                  ? "bg-purple-600/20 border border-purple-600/30"
                  : "bg-purple-100/70 border border-purple-200/50"
              }`}
            >
              <Users
                className={`w-12 h-12 ${
                  darkMode ? "text-purple-400" : "text-purple-700"
                }`}
              />
            </div>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300
            ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Abafuliiru
          </h1>
          <p
            className={`text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-300
            ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            The Bafuliiru People
          </p>
          <p
            className={`text-lg leading-relaxed transition-colors duration-300
            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            A vibrant community with rich cultural heritage and traditions
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
              <Users
                className={`w-6 h-6 ${
                  darkMode ? "text-purple-400" : "text-purple-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                About the Bafuliiru
              </h2>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <p>
                The Bafuliiru, also known as the Fuliru people, are a Bantu
                ethnic group primarily residing in the Uvira Territory of South
                Kivu Province in the eastern Democratic Republic of Congo. The
                name "Abafuliiru" (plural) or "Mufuliiru" (singular) refers to
                the people themselves, who speak the Kifuliiru language and
                inhabit the region known as Ibufuliiru.
              </p>
              <p>
                As part of the broader Great Lakes Bantu peoples, the Bafuliiru
                have a rich cultural heritage shaped by their ancestral
                traditions, proximity to Lake Tanganyika, and interactions with
                neighboring communities throughout history.
              </p>
            </div>
          </section>

          {/* Culture & Traditions Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Music
                className={`w-6 h-6 ${
                  darkMode ? "text-purple-400" : "text-purple-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Culture & Traditions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Oral Traditions",
                  description:
                    "Rich storytelling heritage including folklore, proverbs, and historical narratives",
                },
                {
                  title: "Music & Dance",
                  description:
                    "Traditional songs and dances that celebrate community events and ceremonies",
                },
                {
                  title: "Agriculture",
                  description:
                    "Time-honored farming practices suited to the region's fertile lands",
                },
                {
                  title: "Social Structure",
                  description:
                    "Strong community bonds and traditional leadership systems",
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

          {/* Values Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart
                className={`w-6 h-6 ${
                  darkMode ? "text-purple-400" : "text-purple-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Core Values
              </h2>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <p>
                The Bafuliiru people place great importance on community,
                respect for elders, and preservation of their cultural identity.
                Ubuntu, the philosophy of collective humanity and mutual support,
                is deeply embedded in their social fabric.
              </p>
              <p>
                Family and kinship ties form the foundation of Bafuliiru society,
                with extended families playing crucial roles in child-rearing,
                decision-making, and maintaining cultural continuity across
                generations.
              </p>
            </div>
          </section>

          {/* Contemporary Life Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <HandHeart
                className={`w-6 h-6 ${
                  darkMode ? "text-purple-400" : "text-purple-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Contemporary Life
              </h2>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <p>
                Today, the Bafuliiru people continue to maintain their cultural
                identity while adapting to modern challenges. Many have migrated
                to urban areas for education and economic opportunities, forming
                diaspora communities around the world while maintaining strong
                ties to their homeland.
              </p>
              <p>
                Efforts to preserve and promote Bafuliiru culture, language, and
                heritage are ongoing through community initiatives, cultural
                organizations, and digital platforms that connect Bafuliiru
                people across generations and geographical boundaries.
              </p>
              <p>
                The Bafuliiru continue to contribute to the cultural diversity
                of the Great Lakes region while looking toward a future that
                honors their past and embraces new possibilities for their
                community.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AbafuliiruPage;
