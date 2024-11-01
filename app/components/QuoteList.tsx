"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

const quotes = [
  {
    group: "General Quotes on Language Preservation",
    quotes: [
      {
        quote:
          "Language is the road map of a culture. It tells you where its people came from and where they are going.",
        author: "Rita Mae Brown",
      },
      {
        quote: "A language is a dialect with an army and a navy.",
        author: "Max Weinreich",
      },
    ],
  },
  {
    group: "Technology and Language Preservation",
    quotes: [
      {
        quote:
          "Technology is a powerful tool to bridge the digital divide and preserve linguistic diversity.",
        author: "Anonymous",
      },
      {
        quote: "In the digital age, language is not just spoken, it's clicked.",
        author: "Anonymous",
      },
    ],
  },
  {
    group: "Community and Language Preservation",
    quotes: [
      {
        quote:
          "A language is a community's soul, and a community is a language's heart.",
        author: "Anonymous",
      },
      {
        quote: "Together, we can weave a tapestry of language and culture.",
        author: "Anonymous",
      },
    ],
  },
  {
    group: "Commitment and Language Preservation",
    quotes: [
      {
        quote: "Commitment is the cornerstone of language revitalization.",
        author: "Anonymous",
      },
      {
        quote: "Let's pass on our linguistic heritage to future generations.",
        author: "Anonymous",
      },
    ],
  },
  {
    group: "Inspirational Quotes",
    quotes: [
      { quote: "Don't let a language die. Let it sing.", author: "Anonymous" },
      {
        quote: "In every language, there's a world waiting to be discovered.",
        author: "Anonymous",
      },
    ],
  },
  {
    group: "The Power of Words",
    quotes: [
      { quote: "The power of words can shape the world.", author: "Anonymous" },
      {
        quote: "Words have the power to inspire, to heal, and to destroy.",
        author: "Anonymous",
      },
    ],
  },
];

const QuoteCard = ({ quote, author }: { quote: string; author: string }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-gray-100"
        } border`}
    >
      <div
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
        ${
          darkMode
            ? "bg-gradient-to-r from-slate-800 to-slate-700"
            : "bg-gradient-to-r from-slate-900 to-slate-800"
        }`}
      />

      <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
        <p
          className={`text-lg transition-colors duration-500 group-hover:text-white
          ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          {quote}
        </p>
        <p
          className={`mt-4 text-sm italic transition-colors duration-500 group-hover:text-white/80
          ${darkMode ? "text-white/60" : "text-slate-600"}`}
        >
          — {author}
        </p>
      </div>
    </div>
  );
};

const QuoteSection = ({
  group,
  quotes,
}: {
  group: string;
  quotes: Array<{ quote: string; author: string }>;
}) => {
  const { darkMode } = useTheme();

  return (
    <div className="mb-16 last:mb-0">
      <h3
        className={`text-2xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {group}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((quoteData, index) => (
          <QuoteCard
            key={index}
            quote={quoteData.quote}
            author={quoteData.author}
          />
        ))}
      </div>
    </div>
  );
};

const QuoteList = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center ${
          darkMode
            ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
            : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
        }`}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
            <div className="absolute top-0 -left-24 w-48 h-full bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 animate-bounce transition-transform duration-1000 ease-in-out"></div>
          </div>
          <h2
            className={`text-4xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Language Preservation Quotes
          </h2>
        </div>

        <div className="space-y-16">
          {quotes.map((section, index) => (
            <QuoteSection
              key={index}
              group={section.group}
              quotes={section.quotes.slice(0, 2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteList;
