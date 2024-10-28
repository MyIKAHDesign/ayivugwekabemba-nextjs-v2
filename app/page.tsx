import React from "react";
import { Github, Twitter, Linkedin, Menu, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

      <div className="relative p-8 transition-colors duration-500 group-hover:text-white z-10">
        <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="mb-6 text-gray-600 group-hover:text-slate-200 transition-colors">
          {description}
        </p>
        <div className="flex items-center gap-2 text-slate-900 font-medium group-hover:text-white transition-colors">
          View Project
          <ArrowUpRight
            size={18}
            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default function PortfolioPreview() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Instrument_Sans']">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/api/placeholder/40/40"
              alt="logo"
              className="rounded-full"
            />
            <span className="font-medium text-xl tracking-tight">AYIVUGWE</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Contact
            </a>
          </div>
          <Menu className="md:hidden" size={24} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-medium tracking-tight text-slate-900 mb-6">
              Ayivugwe Kabemba Mukome
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Project Manager, Software Developer & Kifuliiru Language Advocate
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I am a Google-certified Project Manager and Software Developer,
              passionate about creating innovative solutions and empowering
              communities through technology.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                View Projects
              </button>
              <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                Contact Me
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-slate-100 to-slate-200">
              <img
                src="/api/placeholder/400/400"
                alt="profile"
                className="rounded-full p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-16 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ibufuliiru",
              desc: "My current main project focused on language preservation and community engagement.",
            },
            {
              title: "Kifuliiru",
              desc: "An innovative project promoting the Kifuliiru language through modern technology.",
            },
            {
              title: "Kifuliiru.net",
              desc: "A comprehensive platform for learning and exploring the Kifuliiru language.",
            },
            {
              title: "Imyazi mu Kifuliiru",
              desc: "Digital content creation and media services in the Kifuliiru language.",
            },
            {
              title: "Radio Ibufuliiru",
              desc: "Broadcasting culture and news in Kifuliiru to connect communities.",
            },
          ].map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.desc}
              link="#"
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">
            About Me
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            With extensive experience in project management, I excel at leading
            teams to deliver high-quality results on time and within budget. I
            believe in the power of collaboration and strive to foster an
            inclusive environment where everyone can contribute their best work.
          </p>
          <p className="text-slate-600 leading-relaxed">
            In my free time, I enjoy exploring new technologies, contributing to
            open-source projects, and advocating for the Kifuliiru language and
            culture.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium tracking-tight mb-4">
                Ayivugwe Kabemba Mukome
              </h3>
              <p className="text-slate-400">
                © 2024 Ayivugwe Kabemba Mukome. All rights reserved.
              </p>
            </div>
            <div className="flex justify-end items-start gap-6">
              <div className="flex gap-8">
                <Twitter
                  className="hover:text-slate-300 transition-colors cursor-pointer"
                  size={24}
                />
                <Linkedin
                  className="hover:text-slate-300 transition-colors cursor-pointer"
                  size={24}
                />
                <Github
                  className="hover:text-slate-300 transition-colors cursor-pointer"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
