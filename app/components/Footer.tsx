// components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_ITEMS } from "../constants/navigation";

// components/Footer.tsx
interface FooterProps {
  scrollToSection: (href: string) => void;
}

export const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="mt-20 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-instrument">
              Ayivugwe Kabemba
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Full Stack Developer specializing in Java and Python development
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-instrument">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 
                      dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-instrument">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 
                  dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 
                  dark:hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your@email.com"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 
                  dark:hover:text-white"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 
          text-center text-slate-600 dark:text-slate-300"
        >
          <p>
            © {new Date().getFullYear()} Ayivugwe Kabemba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
