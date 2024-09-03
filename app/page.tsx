"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './page.module.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#141619] to-[#0A21C0] text-[#B3B4BD]">
      <div className="container mx-auto px-4 py-8">
        {/* Floating background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#050A44] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#0A21C0] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-[#2C2E3A] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#050A44] to-[#0A21C0]">Ayivugwe Kabemba Mukome</h1>
            <p className="text-xl text-[#2C2E3A] dark:text-[#B3B4BD]">Software Developer & Project Manager</p>
          </header>

          <section className="mb-12">
            <Image
              className="mx-auto rounded-full shadow-lg border-4 border-[#0A21C0]"
              src="/ayiv.ico"
              alt="Ayivugwe Kabemba Mukome"
              width={180}
              height={180}
              priority
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-[#0A21C0]">About Me</h2>
            <p className={`${darkMode ? 'text-[#B3B4BD]' : 'text-[#141619]'} leading-relaxed`}>
              I&apos;m a software developer and Project Manager with a solid foundation in computer science. 
              Originally from Congo Kinshasa, I spent time in Burundi before moving to the US in September 2023. 
              My career has spanned roles in DevOps and as a field associate at Walmart, where I&apos;ve been recognized 
              for my commitment and hard work. I&apos;m passionate about learning and hold certifications in Google 
              Project Management and digital journalism.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-[#0A21C0]">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Ayivugwe Kabemba website", url: "https://ayivugwe.editorx.io/ayivugwekabemba/", description: "My main website in Kifuliiru, the language I love the most." },
                { title: "IKAH Design", url: "https://ikahdesign.editorx.io/ikah", description: "My Design Agency" },
                { title: "Ibufuliiru", url: "https://ibufuliiru.editorx.io/ibufuliiru", description: "My main project currently." },
                { title: "Kifuliiru", url: "https://ibufuliiru.editorx.io/kifuliiru", description: "My project about the Kifuliiru language." },
                { title: "Imyazi mu Kifuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "A media agency in Kifuliiru for creating digital content." },
                { title: "Radio Ibufuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "Another media agency in Kifuliiru (under development)." },
              ].map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  className={`block p-6 ${darkMode ? 'bg-[#2C2E3A] hover:bg-[#050A44]' : 'bg-[#B3B4BD] hover:bg-[#0A21C0] hover:text-white'} rounded-lg shadow-md hover:shadow-lg transition-all`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`${darkMode ? 'text-[#B3B4BD]' : 'text-[#141619]'}`}>{project.description}</p>
                </a>
              ))}
            </div>
          </section>

          <footer className="text-center text-[#2C2E3A] dark:text-[#B3B4BD]">
            <p>&copy; 2024 Ayivugwe Kabemba Mukome. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
