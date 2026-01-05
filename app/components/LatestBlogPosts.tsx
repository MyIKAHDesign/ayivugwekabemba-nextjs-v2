"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const LatestBlogPosts: React.FC = () => {
  const { darkMode } = useTheme();

  // These would normally come from your blog data
  const latestPosts = [
    {
      title: "Building a Kifuliiru Dictionary: A Journey in Language Preservation",
      slug: "building-kifuliiru-dictionary-journey-language-preservation",
      excerpt: "Exploring the challenges and triumphs of creating a digital platform for preserving the Kifuliiru language.",
      date: "2024-03-14",
      category: "Language Preservation",
    },
    {
      title: "Modern Tech Stack for Cultural Heritage Projects",
      slug: "modern-tech-stack-cultural-heritage-projects",
      excerpt: "How we're using Next.js, TypeScript, and modern tools to build platforms that preserve cultural heritage.",
      date: "2024-03-10",
      category: "Technology",
    },
    {
      title: "Community-Driven Development: Lessons Learned",
      slug: "community-driven-development-lessons-learned",
      excerpt: "Insights from building platforms that empower communities to preserve their cultural heritage.",
      date: "2024-03-05",
      category: "Community",
    },
  ];

  return (
    <section
      className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-white via-slate-50/80 to-white"
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

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-sans text-4xl sm:text-5xl font-semibold tracking-tight mb-4
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Latest Insights
          </h2>
          <p
            className={`font-sans text-xl leading-relaxed
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            Thoughts on technology, entrepreneurship, and cultural preservation
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-xl border
                hover:-translate-y-1 hover:shadow-lg
                ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                    : "bg-white/50 border-slate-200 hover:border-slate-300"
                }`}
            >
              {/* Hover Background */}
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out
                  ${
                    darkMode
                      ? "bg-gradient-to-br from-slate-700/40 via-slate-600/30 to-slate-700/40"
                      : "bg-gradient-to-br from-slate-100/60 via-slate-50/50 to-slate-100/60"
                  }`}
              />

              <div className="relative p-6 transition-colors duration-300 z-10">
                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4
                    ${
                      darkMode
                        ? "bg-slate-600/20 text-slate-300 border border-slate-600/30"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h3
                  className={`text-xl font-semibold mb-3 line-clamp-2 transition-colors duration-300
                    ${
                      darkMode
                        ? "text-slate-100 group-hover:text-white"
                        : "text-slate-900 group-hover:text-slate-800"
                    }`}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className={`mb-4 line-clamp-3 text-sm leading-relaxed transition-colors duration-300
                    ${
                      darkMode
                        ? "text-slate-300 group-hover:text-slate-200"
                        : "text-slate-700 group-hover:text-slate-800"
                    }`}
                >
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex items-center gap-2 text-sm transition-colors duration-300
                      ${
                        darkMode
                          ? "text-slate-400 group-hover:text-slate-300"
                          : "text-slate-500 group-hover:text-slate-600"
                      }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300
                      ${
                        darkMode
                          ? "text-blue-400 group-hover:text-blue-300"
                          : "text-blue-600 group-hover:text-blue-700"
                      }`}
                  >
                    Read
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-lg font-sans text-lg font-semibold transition-all duration-300 hover:scale-105 border-2
              ${
                darkMode
                  ? "border-blue-500 text-slate-300 hover:border-blue-400 hover:text-slate-200"
                  : "border-blue-500 text-slate-700 hover:border-blue-400 hover:text-slate-800"
              }`}
          >
            <BookOpen className="w-5 h-5" />
            View All Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
