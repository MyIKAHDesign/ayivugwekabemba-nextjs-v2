import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Quote } from "lucide-react";

const QuotesSection = () => {
  const { darkMode } = useTheme();

  const quotes = [
    // Custom Quote
    {
      quote: "I am driven by what I don't know.",
      author: "Ayivugwe Kabemba Mukome",
      group: "Personal Motivation",
      context: "On the journey of continuous learning and growth",
    },
    // Future of Technology
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      group: "Future of Technology",
      context: "On finding passion in technological innovation",
    },
    {
      quote:
        "Innovation is the ability to see change as an opportunity, not a threat.",
      author: "Steve Jobs",
      group: "Future of Technology",
      context: "On embracing technological advancement",
    },
    {
      quote:
        "Any sufficiently advanced technology is indistinguishable from magic.",
      author: "Arthur C. Clarke",
      group: "Future of Technology",
      context: "On the transformative power of advanced technologies",
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      group: "Future of Technology",
      context: "On shaping technological progress",
    },
    // Technology and Innovation
    {
      quote: "Good ideas are always crazy until they're not.",
      author: "Larry Page",
      group: "Technology and Innovation",
      context: "On the potential of unconventional ideas",
    },
    {
      quote:
        "The art challenges the technology, and the technology inspires the art.",
      author: "John Lasseter",
      group: "Technology and Innovation",
      context:
        "On the symbiotic relationship between creativity and technology",
    },
    // Technology and Human Development
    {
      quote: "The human spirit must prevail over technology.",
      author: "Albert Einstein",
      group: "Technology and Human Development",
      context: "On maintaining humanity in technological advancement",
    },
    {
      quote: "The biggest risk is not taking any risk.",
      author: "Mark Zuckerberg",
      group: "Technology and Human Development",
      context: "On the importance of taking bold steps in tech development",
    },
    {
      quote:
        "Your most unhappy customers are your greatest source of learning.",
      author: "Bill Gates",
      group: "Technology and Human Development",
      context: "On customer-driven innovation",
    },
    // Visionaries of Technology
    {
      quote: "The future isn't AI vs humans, it's AI and humans.",
      author: "Anonymous",
      group: "Visionaries of Technology",
      context: "On the collaborative future of AI",
    },
    {
      quote:
        "Some people call this artificial intelligence, but the reality is this technology will enhance us.",
      author: "Ginni Rometty",
      group: "Visionaries of Technology",
      context: "On how AI augments human capabilities",
    },
    {
      quote: "In technology, whatever can be done will be done.",
      author: "Andy Grove",
      group: "Visionaries of Technology",
      context: "On the inevitability of technological progress",
    },
  ];

  return (
    <section
      className={`relative min-h-screen pt-60 md:pt-44 px-4 sm:px-6 pb-24 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-slate-100 to-white"
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
            className={`font-mono text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Inspiration
          </h2>
          <p
            className={`text-xl leading-relaxed font-mono
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            Thoughts that drive innovation and progress
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border hover:shadow-xl hover:-translate-y-1
                ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-600/30 hover:border-slate-500/50"
                    : "bg-white/50 border-slate-300/30 hover:border-slate-400"
                }`}
            >
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                  ${
                    darkMode
                      ? "bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600"
                      : "bg-gradient-to-t from-slate-500 via-slate-400 to-slate-300"
                  }`}
              />

              <div className="relative p-6 transition-colors duration-500 z-10">
                <Quote
                  className={`w-8 h-8 mb-4 transition-colors duration-500
                    ${darkMode ? "text-slate-300" : "text-slate-600"}
                    ${
                      darkMode
                        ? "group-hover:text-slate-100"
                        : "group-hover:text-white"
                    }`}
                />

                <blockquote className="mb-6">
                  <p
                    className={`text-xl font-medium mb-4 transition-colors duration-500 font-mono
                      ${darkMode ? "text-slate-100" : "text-slate-900"}
                      ${
                        darkMode
                          ? "group-hover:text-white"
                          : "group-hover:text-white"
                      }`}
                  >
                    &ldquo;{quote.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-2">
                  <p
                    className={`text-lg font-medium transition-colors duration-500 font-mono
                      ${darkMode ? "text-slate-300" : "text-slate-700"}
                      ${
                        darkMode
                          ? "group-hover:text-slate-100"
                          : "group-hover:text-white"
                      }`}
                  >
                    {quote.author}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`text-sm px-3 py-1 rounded-full transition-colors duration-500 font-mono
                        ${
                          darkMode
                            ? "bg-slate-700/50 text-slate-300 group-hover:bg-slate-600/50"
                            : "bg-slate-100 text-slate-700 group-hover:bg-slate-200/50"
                        }
                        ${
                          darkMode
                            ? "group-hover:text-white"
                            : "group-hover:text-white"
                        }`}
                    >
                      {quote.group}
                    </span>
                  </div>

                  <p
                    className={`text-sm italic transition-colors duration-500 font-mono
                      ${darkMode ? "text-slate-300/70" : "text-slate-500"}
                      ${
                        darkMode
                          ? "group-hover:text-slate-100"
                          : "group-hover:text-white"
                      }`}
                  >
                    {quote.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
