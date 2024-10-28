// components/Navbar.tsx
("use client");

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/profile-pic.jpg"
                alt="Ayivugwe logo"
                fill
                sizes="40px"
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span className="font-medium text-xl tracking-tight">AYIVUGWE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Projects
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Contact
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 hover:bg-slate-50 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 hover:bg-slate-50 rounded-md"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 hover:bg-slate-50 rounded-md"
              >
                Projects
              </a>
              <a
                href="#"
                className="block px-3 py-2 hover:bg-slate-50 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
