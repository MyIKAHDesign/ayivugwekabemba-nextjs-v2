"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Mountain, MapPin, Leaf, Sunrise } from "lucide-react";

const IbufuliiruPage: React.FC = () => {
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
                  ? "bg-green-600/20 border border-green-600/30"
                  : "bg-green-100/70 border border-green-200/50"
              }`}
            >
              <Mountain
                className={`w-12 h-12 ${
                  darkMode ? "text-green-400" : "text-green-700"
                }`}
              />
            </div>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300
            ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Ibufuliiru
          </h1>
          <p
            className={`text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-300
            ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            The Land of the Bafuliiru
          </p>
          <p
            className={`text-lg leading-relaxed transition-colors duration-300
            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            A region of natural beauty in the heart of the Great Lakes
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
              <MapPin
                className={`w-6 h-6 ${
                  darkMode ? "text-green-400" : "text-green-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                About Ibufuliiru
              </h2>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <p>
                Ibufuliiru, meaning "the land of the Bafuliiru," refers to the
                traditional territory inhabited by the Bafuliiru people. Located
                in the Uvira Territory of South Kivu Province in the eastern
                Democratic Republic of Congo, this region is characterized by
                its stunning natural landscapes and proximity to Lake Tanganyika.
              </p>
              <p>
                The territory encompasses a diverse geography, from the shores of
                Lake Tanganyika to the mountainous highlands of the Great Rift
                Valley, creating a unique ecosystem that has shaped the culture
                and livelihoods of the Bafuliiru people for generations.
              </p>
            </div>
          </section>

          {/* Geography Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Leaf
                className={`w-6 h-6 ${
                  darkMode ? "text-green-400" : "text-green-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Geography & Environment
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Lake Tanganyika",
                  description:
                    "One of the African Great Lakes, providing vital resources and trade routes",
                },
                {
                  title: "Mountainous Terrain",
                  description:
                    "Part of the Great Rift Valley system with fertile highlands and valleys",
                },
                {
                  title: "Tropical Climate",
                  description:
                    "Warm temperatures and seasonal rainfall supporting diverse agriculture",
                },
                {
                  title: "Rich Biodiversity",
                  description:
                    "Home to unique flora and fauna characteristic of the Great Lakes region",
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

          {/* Cultural Significance Section */}
          <section
            className={`p-8 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sunrise
                className={`w-6 h-6 ${
                  darkMode ? "text-green-400" : "text-green-700"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Cultural Significance
              </h2>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <p>
                Ibufuliiru is more than just a geographical location; it
                represents the ancestral homeland and spiritual connection of the
                Bafuliiru people. The land has shaped their traditions,
                agricultural practices, and cultural identity throughout history.
              </p>
              <p>
                The region's natural resources, including fertile soils for
                farming and access to Lake Tanganyika for fishing and trade, have
                been integral to the sustenance and prosperity of the Bafuliiru
                community across generations.
              </p>
              <p>
                Today, Ibufuliiru continues to serve as the cultural and
                spiritual heartland of the Bafuliiru people, preserving their
                connection to their ancestors and traditional way of life.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IbufuliiruPage;
