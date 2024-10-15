"use client"; // Mark the component as a client component

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center"> {/* Wrap in Link for navigation */}
            <Image
              src="/ayiv.ico" // Ensure this path is correct
              alt="Logo"
              width={50} // Adjust size as needed
              height={50} // Adjust size as needed
              className="rounded-full mr-2" // Add margin for spacing
            />
            <h1 className="text-white text-2xl font-bold">AYIVUGWE</h1> {/* Your name added here */}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'} {/* Hamburger icon */}
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'} ${isOpen ? 'bg-gradient-to-r from-blue-500 to-purple-600' : ''}`}>
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
      {/* Drawer Menu for Small Screens */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="text-white transition-colors duration-300 hover:text-[#F0F4C3]">Home</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white transition-colors duration-300 hover:text-[#F0F4C3]">Contact</Link>
            </li>
            <li>
              <Link href="/about" className="text-white transition-colors duration-300 hover:text-[#F0F4C3]">About Me</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
