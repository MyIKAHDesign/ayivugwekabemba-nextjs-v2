"use client";

import React, { useState } from "react";
import {
  Calendar,
  Tag,
  User,
  ArrowLeft,
  Share2,
  BookmarkPlus,
  MessageSquare,
  Check,
  X,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";

// Update the interfaces to include slugs
interface RelatedPost {
  id: number;
  title: string;
  slug: string; // Add slug field
  excerpt: string;
  imageUrl: string;
  date: string;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string; // Add slug field
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  relatedPosts: RelatedPost[];
}

// Example blog post data
const BLOG_POST: BlogPost = {
  id: 1,
  title: "Building a Kifuliiru Dictionary: A Journey in Language Preservation",
  slug: "building-kifuliiru-dictionary-journey-language-preservation",
  content: `
    <p class="mb-8">The journey of creating a digital platform for the Kifuliiru language has been both challenging and rewarding. As a software developer and cultural preservationist, I've had to balance technical requirements with cultural sensitivity and community needs.</p>
    
    <h2 class="mt-12 mb-6">The Challenge</h2>
    <p class="mb-8">Preserving a language digitally involves more than just creating a database of words. It requires capturing the nuances, context, and cultural significance that give each word its meaning. The Kifuliiru language, rich in oral tradition and cultural context, presented unique challenges in digital preservation.</p>
    
    <h2 class="mt-12 mb-6">Technical Implementation</h2>
    <p class="mb-8">We chose a modern tech stack including Next.js, TypeScript, and Supabase to build a platform that's both robust and scalable. The architecture needed to support:</p>
    <ul class="mb-8 list-disc pl-6">
      <li class="mb-2">Multiple word variations and dialects</li>
      <li class="mb-2">Audio recordings for proper pronunciation</li>
      <li class="mb-2">Cultural context and usage examples</li>
      <li class="mb-2">Community contributions and reviews</li>
    </ul>
    
    <h2 class="mt-12 mb-6">Community Involvement</h2>
    <p class="mb-8">A crucial aspect of this project has been involving the Bafuliiru community at every step. We've established a network of language experts, elders, and community members who contribute their knowledge and validate entries.</p>
    
    <h2 class="mt-12 mb-6">Looking Forward</h2>
    <p class="mb-8">This is just the beginning of our journey. We're continuing to expand the dictionary's features and content, always guided by our mission to preserve and promote the Kifuliiru language for future generations.</p>
  `,
  author: "Ayivugwe Kabemba Mukome",
  date: "2024-03-14",
  readTime: "5 min read",
  category: "Language Preservation",
  tags: ["Technology", "Culture", "Language"],
  imageUrl: "/kifuliiru1.png",
  relatedPosts: [
    {
      id: 2,
      title: "Modern Tech Stack for Cultural Heritage Projects",
      slug: "modern-tech-stack-cultural-heritage-projects",
      excerpt:
        "How we're using Next.js, TypeScript, and modern tools to build platforms that preserve cultural heritage.",
      imageUrl: "/kifuliiru2.png",
      date: "2024-03-10",
    },
    {
      id: 3,
      title: "Community-Driven Development: Lessons Learned",
      slug: "building-kifuliiru-dictionary-journey-language-preservation",
      excerpt:
        "Insights from building platforms that empower communities to preserve their cultural heritage.",
      imageUrl: "/kifuliiru1.png",
      date: "2024-03-05",
    },
  ],
};

interface CommentFormData {
  name: string;
  email: string;
  comment: string;
}

export default function BlogPostPage() {
  const { darkMode } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showShareSuccess, setShowShareSuccess] = useState(false);
  const [commentFormData, setCommentFormData] = useState<CommentFormData>({
    name: "",
    email: "",
    comment: "",
  });

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = BLOG_POST.title;

    try {
      switch (platform) {
        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              title
            )}&url=${encodeURIComponent(url)}`
          );
          break;
        case "linkedin":
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              url
            )}`
          );
          break;
        case "copy":
          await navigator.clipboard.writeText(url);
          setShowShareSuccess(true);
          setTimeout(() => setShowShareSuccess(false), 2000);
          break;
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
    setShowShareMenu(false);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission here
    console.log("Comment submitted:", commentFormData);
    setCommentFormData({ name: "", email: "", comment: "" });
    setShowCommentForm(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className={`relative min-h-screen pt-40 md:pt-48 lg:pt-52 px-4 sm:px-6 lg:px-8 pb-24 transition-all duration-300
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
        {/* Back Button */}
        <Link
          href="/blog"
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all duration-300
            ${
              darkMode
                ? "bg-blue-600 text-slate-100 hover:bg-blue-500"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }
            hover:scale-105`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <h1
              className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-8
                ${darkMode ? "text-slate-50" : "text-slate-900"}`}
            >
              {BLOG_POST.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <span
                className={`inline-flex items-center gap-2
                  ${darkMode ? "text-slate-200" : "text-slate-700"}`}
              >
                <User className="w-4 h-4" />
                {BLOG_POST.author}
              </span>
              <span
                className={`inline-flex items-center gap-2
                  ${darkMode ? "text-slate-200" : "text-slate-700"}`}
              >
                <Calendar className="w-4 h-4" />
                {new Date(BLOG_POST.date).toLocaleDateString()}
              </span>
              <span
                className={`inline-flex items-center gap-2
                  ${darkMode ? "text-slate-200" : "text-slate-700"}`}
              >
                {BLOG_POST.readTime}
              </span>
            </div>

            {/* Category and Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-medium
                  ${
                    darkMode
                          ? "bg-blue-600/20 text-slate-200"
                          : "bg-slate-100 text-slate-800"
                  }`}
              >
                {BLOG_POST.category}
              </span>
              {BLOG_POST.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
                    ${
                          darkMode
                            ? "bg-blue-600 text-slate-200"
                            : "bg-slate-100 text-slate-700"
                    }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={BLOG_POST.imageUrl}
                alt={BLOG_POST.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Action Buttons */}
          <div className="sticky top-24 z-20 flex justify-end gap-3 mb-12">
            {/* Share Button */}
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className={`p-3 rounded-lg transition-all duration-300 flex items-center gap-2
                  ${
                    darkMode
                      ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }
                  hover:scale-105`}
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>

              {showShareMenu && (
                <div
                  className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden
                  ${
                    darkMode
                      ? "bg-slate-800 border border-slate-700"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  <div className="py-1">
                    {[
                      {
                        name: "Twitter",
                        icon: Twitter,
                        action: () => handleShare("twitter"),
                      },
                      {
                        name: "LinkedIn",
                        icon: Linkedin,
                        action: () => handleShare("linkedin"),
                      },
                      {
                        name: "Copy Link",
                        icon: LinkIcon,
                        action: () => handleShare("copy"),
                      },
                    ].map((option) => (
                      <button
                        key={option.name}
                        onClick={option.action}
                        className={`w-full px-4 py-3 text-left text-sm hover:bg-blue-500/50 flex items-center gap-3
                          ${darkMode ? "text-slate-200" : "text-slate-700"}`}
                      >
                        <option.icon className="w-4 h-4" />
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bookmark Button */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-3 rounded-lg transition-all duration-300 flex items-center gap-2
                ${
                  isBookmarked
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "bg-blue-600 text-slate-200 hover:bg-blue-500"
                    : "bg-white text-slate-700 hover:bg-slate-50"
                }
                hover:scale-105`}
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-5 h-5" />
                  Saved
                </>
              ) : (
                <>
                  <Bookmark className="w-5 h-5" />
                  Save
                </>
              )}
            </button>

            {/* Comment Button */}
            <button
              onClick={() => setShowCommentForm(!showCommentForm)}
              className={`p-3 rounded-lg transition-all duration-300 flex items-center gap-2
                ${
                  darkMode
                    ? "bg-blue-600 text-slate-200 hover:bg-blue-500"
                    : "bg-white text-slate-700 hover:bg-slate-50"
                }
                hover:scale-105`}
            >
              <MessageSquare className="w-5 h-5" />
              Comment
            </button>
          </div>

          {/* Article Content */}
          <div
            className={`prose max-w-none mb-16 
              ${darkMode ? "prose-invert" : ""}
              prose-headings:font-semibold
              prose-p:text-lg
              prose-p:leading-relaxed
              prose-a:text-slate-600
              prose-strong:text-slate-600
              prose-ul:list-disc
              prose-ol:list-decimal`}
            dangerouslySetInnerHTML={{ __html: BLOG_POST.content }}
          />

          {/* Comment Form */}
          {showCommentForm && (
            <div
              className={`mb-16 p-8 rounded-xl border
              ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/50 border-slate-200"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3
                  className={`text-xl font-semibold
                  ${darkMode ? "text-slate-50" : "text-slate-900"}`}
                >
                  Leave a Comment
                </h3>
                <button
                  onClick={() => setShowCommentForm(false)}
                  className="text-slate-400 hover:text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCommentSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2
                     ${darkMode ? "text-slate-200" : "text-slate-700"}`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={commentFormData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-lg border
                        ${
                          darkMode
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-slate-200 text-slate-900"
                        }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2
                      ${darkMode ? "text-slate-200" : "text-slate-700"}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={commentFormData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-lg border
                        ${
                          darkMode
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-slate-200 text-slate-900"
                        }`}
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2
                    ${darkMode ? "text-slate-200" : "text-slate-700"}`}
                  >
                    Comment
                  </label>
                  <textarea
                    name="comment"
                    value={commentFormData.comment}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full p-3 rounded-lg border resize-none
                      ${
                        darkMode
                          ? "bg-slate-700 border-slate-600 text-white"
                          : "bg-white border-slate-200 text-slate-900"
                      }`}
                    placeholder="Write your comment..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 
                    transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Post Comment
                </button>
              </form>
            </div>
          )}

          {/* Related Posts */}
          <div className="border-t border-slate-900/30 pt-8">
            <h2
              className={`text-2xl font-semibold mb-6
                ${darkMode ? "text-slate-50" : "text-slate-900"}`}
            >
              Related Posts
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {BLOG_POST.relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`} // Use slug instead of ID
                  className={`group rounded-xl overflow-hidden transition-all duration-300
        ${
          darkMode
            ? "bg-slate-800/50 hover:bg-slate-800 border border-slate-900/30"
            : "bg-white/50 hover:bg-white border border-slate-200"
        }
        hover:scale-105`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3
                      className={`text-lg font-medium mb-2
                        ${darkMode ? "text-slate-50" : "text-slate-900"}`}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={`text-sm mb-2 line-clamp-2
                        ${darkMode ? "text-slate-200" : "text-slate-700"}`}
                    >
                      {post.excerpt}
                    </p>
                    <span
                      className={`text-sm
                        ${darkMode ? "text-slate-200/70" : "text-slate-500"}`}
                    >
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Share Success Toast */}
        {showShareSuccess && (
          <div className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg">
            <Check className="w-4 h-4" />
            Link copied to clipboard!
          </div>
        )}
      </div>
    </section>
  );
}
