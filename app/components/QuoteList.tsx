import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { ChevronDown } from "lucide-react";

interface Quote {
  quote: string;
  author: string;
  group: string;
}

const allQuotes: Quote[] = [
  // General Quotes on Language Preservation
  {
    quote:
      "Language is the road map of a culture. It tells you where its people came from and where they are going.",
    author: "Rita Mae Brown",
    group: "General Quotes on Language Preservation",
  },
  {
    quote: "A language is a dialect with an army and a navy.",
    author: "Max Weinreich",
    group: "General Quotes on Language Preservation",
  },
  {
    quote: "When a language dies, a world view dies.",
    author: "Edward Sapir",
    group: "General Quotes on Language Preservation",
  },
  {
    quote:
      "Language is the blood of the soul into which thoughts run and out of which they grow.",
    author: "Oliver Wendell Holmes Sr.",
    group: "General Quotes on Language Preservation",
  },
  {
    quote:
      "Language is not just a tool of communication, it's the vessel of culture.",
    author: "Anonymous",
    group: "General Quotes on Language Preservation",
  },

  // Technology and Language Preservation
  {
    quote:
      "Technology is a powerful tool to bridge the digital divide and preserve linguistic diversity.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote: "In the digital age, language is not just spoken, it's clicked.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote: "Innovation is the key to revitalizing endangered languages.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote:
      "Let's use technology to amplify the voices of marginalized languages.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },
  {
    quote:
      "The internet can be a powerful tool for language preservation, but it's not a magic wand.",
    author: "Anonymous",
    group: "Technology and Language Preservation",
  },

  // Community and Language Preservation
  {
    quote:
      "A language is a community's soul, and a community is a language's heart.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "Together, we can weave a tapestry of language and culture.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "Language preservation is a collective responsibility.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "By strengthening our community, we strengthen our language.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },
  {
    quote: "A strong community is the bedrock of language revitalization.",
    author: "Anonymous",
    group: "Community and Language Preservation",
  },

  // Commitment and Language Preservation
  {
    quote: "Commitment is the cornerstone of language revitalization.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote: "Let's pass on our linguistic heritage to future generations.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote:
      "Every word spoken, every story shared, is a step towards language preservation.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote:
      "Small steps, big impact: Every effort counts in language revitalization.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },
  {
    quote: "Language preservation is a marathon, not a sprint.",
    author: "Anonymous",
    group: "Commitment and Language Preservation",
  },

  // Inspirational Quotes
  {
    quote: "Don't let a language die. Let it sing.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "In every language, there's a world waiting to be discovered.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "Language is the key to unlocking cultural heritage.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "Language is the mirror of the soul.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },
  {
    quote: "Every language deserves to be heard.",
    author: "Anonymous",
    group: "Inspirational Quotes",
  },

  // The Power of Words
  {
    quote: "The power of words can shape the world.",
    author: "Anonymous",
    group: "The Power of Words",
  },
  {
    quote: "Words have the power to inspire, to heal, and to destroy.",
    author: "Anonymous",
    group: "The Power of Words",
  },
  {
    quote: "Words are the building blocks of thought.",
    author: "Anonymous",
    group: "The Power of Words",
  },
  {
    quote: "The right word can change everything.",
    author: "Anonymous",
    group: "The Power of Words",
  },
  {
    quote: "Let's use our words to preserve our languages.",
    author: "Anonymous",
    group: "The Power of Words",
  },
];

interface QuoteCardProps extends Quote {}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author, group }) => {
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
        <span
          className={`absolute top-4 left-4 text-6xl leading-none font-serif 
          ${
            darkMode
              ? "text-slate-700 group-hover:text-slate-600"
              : "text-slate-200 group-hover:text-slate-700"
          }`}
        >
          &quot;
        </span>

        <p
          className={`relative text-xl leading-relaxed transition-colors duration-500 group-hover:text-white
          ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          {quote}
        </p>
        <div className="mt-4 space-y-1">
          <p
            className={`text-lg italic transition-colors duration-500 group-hover:text-white/80
            ${darkMode ? "text-white/60" : "text-slate-600"}`}
          >
            — {author}
          </p>
          <p
            className={`text-sm font-medium uppercase tracking-wide transition-colors duration-500 group-hover:text-white/60
            ${darkMode ? "text-white/40" : "text-slate-500"}`}
          >
            {group}
          </p>
        </div>
      </div>
    </div>
  );
};

const QuoteList: React.FC = () => {
  const { darkMode } = useTheme();
  const [visibleQuotes, setVisibleQuotes] = useState(6);

  const showMoreQuotes = () => {
    setVisibleQuotes((prev) => Math.min(prev + 6, allQuotes.length));
  };

  const hasMoreQuotes = visibleQuotes < allQuotes.length;

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
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
            <div className="absolute top-0 -left-24 w-48 h-full bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 animate-bounce transition-transform duration-1000 ease-in-out"></div>
          </div>
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Language Preservation Quotes
          </h2>
          <div
            className={`space-y-4 ${
              darkMode ? "text-white/80" : "text-slate-700"
            }`}
          >
            <p className="text-xl">
              Inspiring words that highlight the importance of preserving our
              linguistic heritage and cultural diversity.
            </p>
            <p className="text-lg">
              Take a moment to explore these quotes and discover my vision for
              language preservation. They offer a glimpse into the heart of my
              mission and the profound impact of protecting linguistic
              diversity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allQuotes.slice(0, visibleQuotes).map((quote, index) => (
            <QuoteCard
              key={index}
              quote={quote.quote}
              author={quote.author}
              group={quote.group}
            />
          ))}
        </div>

        {hasMoreQuotes && (
          <div className="flex justify-center">
            <button
              onClick={showMoreQuotes}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300
                ${
                  darkMode
                    ? "bg-slate-700 hover:bg-slate-600 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
            >
              <span>Load More</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteList;
