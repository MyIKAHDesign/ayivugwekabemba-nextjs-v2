import React from "react";
import { Github, Twitter, Linkedin, Heart, Globe, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Ayivugwe",
      color: "group-hover:text-orange-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/ayivugwekabemba",
      color: "group-hover:text-orange-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayivugwekabemba/",
      color: "group-hover:text-orange-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "/contact",
      color: "group-hover:text-orange-400",
    },
  ];

  const footerLinks = [
    { name: "About", href: "/#about-me" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Videos", href: "/videos" },
  ];

  return (
    <footer className="relative border-t transition-colors duration-300 bg-gradient-to-b from-orange-50/80 to-white dark:from-slate-900 dark:to-slate-800 border-orange-100 dark:border-orange-900/20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold relative inline-block group text-orange-900 dark:text-orange-100"
            >
              Ayivugwe
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <p className="text-sm max-w-md text-orange-900/80 dark:text-orange-200/80">
              Building innovative solutions that bridge technology and cultural
              preservation through modern development practices.
            </p>
          </div>

          {/* Navigation section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-orange-900 dark:text-orange-200">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:translate-x-1 transition-all duration-300 inline-block
                      text-orange-700 hover:text-orange-900 dark:text-orange-200/70 dark:hover:text-orange-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-orange-900 dark:text-orange-200">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.name}
                >
                  <div
                    className="p-2 rounded-lg transition-all duration-300 
                    transform group-hover:scale-110 group-hover:-translate-y-1
                    bg-orange-50 text-orange-600 hover:bg-orange-100 
                    dark:bg-slate-800 dark:text-orange-200 dark:hover:bg-slate-700"
                  >
                    <social.icon
                      className={`w-5 h-5 transition-colors duration-300 ${social.color}`}
                    />
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-white text-orange-900 dark:bg-slate-800 dark:text-orange-200
                    pointer-events-none"
                  >
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 text-sm text-center border-t border-orange-100 dark:border-orange-900/20">
          <div className="flex items-center justify-center gap-1">
            <span className="text-orange-700 dark:text-orange-200/70">
              © {currentYear} Made with
            </span>
            <Heart className="w-4 h-4 text-orange-600 dark:text-orange-400 animate-pulse" />
            <span className="text-orange-700 dark:text-orange-200/70">
              by Ayivugwe Kabemba Mukome
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
