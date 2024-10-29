"use client";

import React from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start min-h-[calc(100vh-8rem)]">
        <div className="order-2 md:order-1 h-full flex flex-col justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 p-1">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/ayiv-profile.jpg"
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
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-medium">
                Google Certified PM
              </span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-medium">
                Software Developer
              </span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-medium">
                Language Advocate
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 h-full flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="font-mono text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Hi. I&apos;m Ayivugwe Kabemba Mukome
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Project Manager, Software Developer & Kifuliiru Language Advocate
            </p>
            <p className="text-slate-600 leading-relaxed">
              Combining technical expertise with cultural preservation to create
              innovative solutions that empower communities. Specialized in
              project management, software development, and language advocacy.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Currently focused on developing digital platforms that promote the
              Kifuliiru language and culture, while leveraging technology to
              bridge traditional practices with modern solutions.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium">
                View Projects
              </button>
              <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium">
                Contact Me
              </button>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200">
            <h3 className="font-montserrat text-sm font-medium text-slate-400 mb-4 tracking-wider">
              CONNECT WITH ME
            </h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="LinkedIn Profile"
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
