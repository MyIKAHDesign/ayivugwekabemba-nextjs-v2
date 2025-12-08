"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Calendar, Tag, User, ChevronRight } from "lucide-react";
import Link from "next/link";

const DUMMY_POSTS = [
  {
    id: 1,
    title:
      "Building a Kifuliiru Dictionary: A Journey in Language Preservation",
    slug: "building-kifuliiru-dictionary-journey-language-preservation",
    excerpt:
      "Exploring the challenges and triumphs of creating a digital platform for preserving the Kifuliiru language.",
    author: "Ayivugwe Kabemba Mukome",
    date: "2024-03-14",
    category: "Language Preservation",
    tags: ["Technology", "Culture", "Language"],
    imageUrl: "/kifuliiru1.png",
  },
  {
    id: 2,
    title: "Modern Tech Stack for Cultural Heritage Projects",
    slug: "modern-tech-stack-cultural-heritage-projects",
    excerpt:
      "How we're using Next.js, TypeScript, and modern tools to build platforms that preserve cultural heritage.",
    author: "Ayivugwe Kabemba Mukome",
    date: "2024-03-10",
    category: "Technology",
    tags: ["Development", "Web", "Culture"],
    imageUrl: "/kifuliiru2.png",
  },
  {
    id: 3,
    title: "Community-Driven Development: Lessons Learned",
    slug: "building-kifuliiru-dictionary-journey-language-preservation",
    excerpt:
      "Insights from building platforms that empower communities to preserve their cultural heritage.",
    author: "Ayivugwe Kabemba Mukome",
    date: "2024-03-05",
    category: "Community",
    tags: ["Community", "Development", "Culture"],
    imageUrl: "/kifuliiru1.png",
  },
];

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

export default function BlogPage() {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(DUMMY_POSTS.map((post) => post.category))
  );
  const filteredPosts = selectedCategory
    ? DUMMY_POSTS.filter((post) => post.category === selectedCategory)
    : DUMMY_POSTS;

  return (
    <section
      className={`relative min-h-screen pt-48 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
    ${
      darkMode
        ? "bg-gradient-to-b from-slate-950 via-[#1c1917] to-slate-950"
        : "bg-gradient-to-b from-slate-50 via-slate-50/80 to-white"
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
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-slate-50" : "text-slate-900"}`}
          >
            Blog
          </h1>
          <p
            className={`text-xl leading-relaxed
              ${darkMode ? "text-slate-200" : "text-slate-700"}`}
          >
            Thoughts on technology, language preservation, and community
            building
          </p>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                ${
                  !selectedCategory
                    ? darkMode
                      ? "bg-slate-600 text-white"
                      : "bg-slate-600 text-white"
                    : darkMode
                    ? "bg-slate-800 text-slate-200"
                    : "bg-white text-slate-700"
                }
                hover:scale-105`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300
                  ${
                    selectedCategory === category
                      ? darkMode
                        ? "bg-slate-600 text-white"
                        : "bg-slate-600 text-white"
                      : darkMode
                      ? "bg-slate-800 text-slate-200"
                      : "bg-white text-slate-700"
                  }
                  hover:scale-105`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 
                ${
                  darkMode
                    ? "bg-slate-800/50 hover:bg-slate-800 border border-slate-900/30"
                    : "bg-white/50 hover:bg-white border border-slate-200"
                }
                hover:scale-105`}
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm mb-4
                    ${
                      darkMode
                        ? "bg-slate-600/20 text-slate-200"
                        : "bg-slate-100 text-slate-800"
                    }`}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h2
                  className={`text-xl font-semibold mb-3 
                    ${darkMode ? "text-slate-50" : "text-slate-900"}`}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  className={`mb-4 line-clamp-2
                    ${darkMode ? "text-slate-200" : "text-slate-700"}`}
                >
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-sm px-2 py-1 rounded-full
                        ${
                          darkMode
                            ? "bg-slate-700 text-slate-200"
                            : "bg-slate-50 text-slate-700"
                        }`}
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div
                  className={`flex items-center justify-between text-sm
                    ${darkMode ? "text-slate-200/70" : "text-slate-500"}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author.split(" ")[0]}
                    </span>
                  </div>
                  <span className="flex items-center">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
