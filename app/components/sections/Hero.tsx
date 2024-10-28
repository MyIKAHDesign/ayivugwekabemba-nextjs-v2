// components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <div className="text-center px-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
          <Image
            src="/your-photo.jpg"
            alt="Ayivugwe Kabemba"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 128px) 100vw, 128px"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Ayivugwe Kabemba</h1>
        {/* Rest of your Hero component */}
      </div>
    </section>
  );
};
