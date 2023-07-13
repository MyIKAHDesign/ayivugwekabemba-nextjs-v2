/* import React, { useState } from 'react';
import logo from "./logo.png"

function Header() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap p-6">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       <img src={logo} className="w-100 h-10 mr-2" alt="Logo Ayivugwe Kabemba" />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Home
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           About me
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           My projects
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Blog
         </a>
       </div>
       <div>
         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
           Contact me
         </button>
       </div>
     </div>
   </nav>
 );
}
export default Header;
 */


/* import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

export default function Header(){
    return (
        <>
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ayivugwe Kabemba</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              {   <!-- Heroicon name: outline/bars-3 --> }
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>

            <Link href="/kifuliiru" className="text-sm font-semibold leading-6 text-gray-900">Kifuliiru</Link>

            <Link href="/ibufuliiru" className="text-sm font-semibold leading-6 text-gray-900">Ibufuliiru</Link>

            <Link href="/bafuliiru" className="text-sm font-semibold leading-6 text-gray-900">Bafuliiru</Link>

            <Link href="/projects" className="text-sm font-semibold leading-6 text-gray-900">My projects</Link>

            <Link href="/me" className="text-sm font-semibold leading-6 text-gray-900">About me</Link>          
            <Link href="https://ayivugwe.editorx.io/ayivugwekabemba/blog" target="_blank" className="text-sm font-semibold leading-6 text-gray-900">Blog</Link>
            <Link href="https://ayivugwe.editorx.io/ayivugwekabemba/contact" target="_blank" className="text-sm font-semibold leading-6 text-gray-900">Contact</Link>

          </div>
         
        </nav>
        { <!-- Mobile menu, show/hide based on menu open state. --> }
        <div role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Ayivugwe Kabemba</span>
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                { <!-- Heroicon name: outline/x-mark --> }
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>

                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Kifuliiru</Link>

                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Ibufuliiru</Link>

                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Bafuliiru</Link>

                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">My projects</Link>

                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">About me</Link>

                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Kifuliiru here</Link>

                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Blog</Link>
                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact me</Link>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
} */