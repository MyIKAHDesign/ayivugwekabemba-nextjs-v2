"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

const AboutMe: React.FC = () => {
  const { darkMode } = useTheme();

  const sections = [
    {
      title: "Professional Journey & Roots",
      content:
        "I'm Ayivugwe Kabemba Mukome, a project manager and software developer deeply connected to my roots in Congo Kinshasa and the Bafuliiru community. My journey in the tech and project management fields began in Africa, where I worked with ASYST Resources LTD, gaining valuable experience in software development, DevOps, and project management. Since moving to the U.S., I've taken on roles at Amazon and Walmart, continuing to broaden my skills and experience in both technical and operational capacities.",
    },
    {
      title: "Preserving Kifuliiru Language and Culture",
      content:
        "At the core of my work is a project that combines my professional expertise with my cultural heritage. I'm building the Ibufuliiru platform, a community-driven initiative dedicated to preserving the Kifuliiru language and Bafuliiru culture. Through platforms like Radio Ibufuliiru, Kifuliiru Ndeto Yitu, and other initiatives, I'm creating a digital archive that captures our people's language, traditions, and stories. This platform allows contributors from all walks of life to share audio recordings, texts, and cultural insights, building a resource that future generations can access and continue to develop.",
    },
    {
      title: "Expanding Skills for Cultural Preservation",
      content:
        "In my professional journey, I've dedicated myself to deepening my skills in backend development and data science, with a focus on technologies like Python and NLP. These skills are vital for expanding my language project, helping me create tools for language learning, transcription, and preservation. Certifications such as the Google Project Management Professional Certificate and Meta Back-End Developer Certificate are equipping me with both technical and managerial insights to drive my projects forward.",
    },
    {
      title: "Connecting Heritage with the Local Community",
      content:
        "In Spokane, Washington, I'm exploring ways to connect my heritage with my new community, considering initiatives like renting a space for gatherings and cultural events. The Ibufuliiru project reflects my dedication to preserving and promoting Bafuliiru culture and language, bridging the gap between tradition and technology to ensure our cultural legacy thrives in the digital age.",
    },
    {
      title: "Bridging Heritage and Technology",
      content:
        "Each step I take, from my roles at Amazon and Walmart to my community projects, builds toward a future where technology and heritage come together to make a lasting impact. My journey is all about making a difference, not just for myself but for my community and our shared heritage. I'm honored to work on these projects and am driven by a belief that technology can be a bridge to preserving identity and sharing it with the world.",
    },
    {
      title: "Creating Spaces for Cultural Knowledge",
      content:
        "Each project I take on is an extension of this vision—creating spaces for people to connect, learn, and share knowledge that transcends time and place. Through Ibufuliiru, I'm working to build a living archive that captures the spirit and voice of the Bafuliiru people, a space where our language and culture are documented and celebrated, accessible to anyone who wants to learn about or be part of our story.",
    },
    {
      title: "Empowering the Community to Keep Kifuliiru Alive",
      content:
        "The platform's expansion, with tools for contributors to add audio, stories, and other insights, isn't just about preservation—it's about empowering people to be active participants in keeping Kifuliiru alive and thriving. This work reflects my commitment to merging the best of modern technology with the richness of our heritage, ensuring that what makes us unique is preserved digitally for generations to come.",
    },
    {
      title: "Honoring Roots and Inspiring Future Generations",
      content:
        "In the end, everything I'm building—from the tech tools to the community spaces—is part of a vision to honor my roots, foster global understanding, and inspire future generations to take pride in who they are and where they come from.",
    },
  ];

  return (
    <section
      className={`relative min-h-screen pt-60 md:pt-44 px-4 sm:px-6 pb-24 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-orange-900/20 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-orange-100 to-white"
        }`}
      id="about-me"
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center
          ${
            darkMode
              ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
              : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
          }`}
      />

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="pt-24">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2
              className={`font-inter text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
                ${darkMode ? "text-orange-50" : "text-slate-900"}`}
            >
              About Me
            </h2>
            <p
              className={`font-inter text-xl leading-relaxed
                ${darkMode ? "text-orange-200" : "text-slate-700"}`}
            >
              A passionate developer preserving cultural heritage
            </p>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
          </div>

          {/* About Content */}
          <div
            className={`relative backdrop-blur-xl rounded-2xl border
              ${
                darkMode
                  ? "bg-slate-800/50 border-orange-500/30"
                  : "bg-white/50 border-orange-400/30"
              }`}
          >
            <div className="relative p-6 space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                      ${
                        darkMode
                          ? "bg-gradient-to-t from-orange-950/90 via-orange-900/80 to-orange-800/90"
                          : "bg-gradient-to-t from-orange-600/20 via-orange-500/15 to-orange-400/10"
                      }`}
                  />

                  <div className="relative p-6 transition-colors duration-500 z-10">
                    <h3
                      className={`font-inter text-xl font-semibold mb-4 transition-colors duration-500
                        ${darkMode ? "text-orange-50" : "text-slate-900"}
                        ${
                          darkMode
                            ? "group-hover:text-white"
                            : "group-hover:text-slate-900"
                        }`}
                    >
                      {section.title}
                    </h3>
                    <p
                      className={`font-inter text-lg leading-relaxed transition-colors duration-500
                        ${darkMode ? "text-orange-200" : "text-slate-600"}
                        ${
                          darkMode
                            ? "group-hover:text-orange-100"
                            : "group-hover:text-slate-900"
                        }`}
                    >
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Decoration */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
          ${darkMode ? "via-orange-900/30" : "via-orange-200"} 
          to-transparent`}
      />
    </section>
  );
};

export default AboutMe;
