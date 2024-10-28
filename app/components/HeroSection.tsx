// components/HeroSection.tsx
("use client");

import React from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
        <div className="order-2 md:order-1">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 p-1">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/profile-pic.jpg"
                alt="Profile picture of Ayivugwe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-600">
                Google Certified PM
              </span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-600">
                Software Developer
              </span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-600">
                Language Advocate
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h1 className="text-5xl font-medium tracking-tight text-slate-900 mb-6">
            Ayivugwe Kabemba Mukome
          </h1>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Project Manager, Software Developer & Kifuliiru Language Advocate
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Combining technical expertise with cultural preservation to create
            innovative solutions that empower communities. Specialized in
            project management, software development, and language advocacy.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Currently focused on developing digital platforms that promote the
            Kifuliiru language and culture, while leveraging technology to
            bridge traditional practices with modern solutions.
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              View Projects
            </button>
            <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
              Contact Me
            </button>
          </div>

          <div className="mt-12 pt-12 border-t">
            <h3 className="text-sm font-medium text-slate-400 mb-4">
              CONNECT WITH ME
            </h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
