"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/ayiv.ico"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full mr-2"
            />
            <h2 className="text-white text-2xl font-bold">AYIVUGWE</h2>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static bg-gradient-to-r from-blue-500 to-purple-600 w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
          <li>
            <Link href="/" className="relative text-white transition-colors duration-300 hover:text-[#F0F4C3] group">
              Home
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#F0F4C3] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative text-white transition-colors duration-300 hover:text-[#F0F4C3] group">
              Contact
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#F0F4C3] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative text-white transition-colors duration-300 hover:text-[#F0F4C3] group">
              About Me
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#F0F4C3] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
