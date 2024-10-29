"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Clock } from "lucide-react";

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

const TimelineSection: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 to-white"
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
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="pt-24">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2
              className={`font-montserrat text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-white" : "text-slate-900"} 
              transition-colors duration-300`}
            >
              About Me
            </h2>
            <p
              className={`text-lg sm:text-xl 
              ${darkMode ? "text-slate-400" : "text-slate-600"} 
              transition-colors duration-300 max-w-xl mx-auto`}
            >
              A passionate developer preserving cultural heritage
            </p>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
          </div>

          {/* About Content */}
          <div
            className={`relative backdrop-blur-xl rounded-2xl transition-all duration-300
            ${
              darkMode
                ? "bg-slate-800/80 shadow-2xl border-slate-700/50"
                : "bg-white/80 shadow-xl border-slate-200/50"
            }
            border overflow-hidden`}
          >
            <div className="relative p-8 space-y-8">
              {/* About sections */}
              <div>
                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Professional Journey & Roots
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    I&apos;m Ayivugwe Kabemba Mukome, a project manager and
                    software developer deeply connected to my roots in Congo
                    Kinshasa and the Bafuliiru community. My journey in the tech
                    and project management fields began in Africa, where I
                    worked with ASYST Resources LTD, gaining valuable experience
                    in software development, DevOps, and project management.
                    Since moving to the U.S., I&apos;ve taken on roles at Amazon
                    and Walmart, continuing to broaden my skills and experience
                    in both technical and operational capacities.
                  </p>
                </div>

                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Preserving Kifuliiru Language and Culture
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    At the core of my work is a project that combines my
                    professional expertise with my cultural heritage. I&apos;m
                    building the Ibufuliiru platform, a community-driven
                    initiative dedicated to preserving the Kifuliiru language
                    and Bafuliiru culture. Through platforms like Radio
                    Ibufuliiru, Kifuliiru Ndeto Yitu, and other initiatives,
                    I&apos;m creating a digital archive that captures our
                    people&apos;s language, traditions, and stories. This
                    platform allows contributors from all walks of life to share
                    audio recordings, texts, and cultural insights, building a
                    resource that future generations can access and continue to
                    develop.
                  </p>
                </div>

                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Expanding Skills for Cultural Preservation
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    In my professional journey, I&apos;ve dedicated myself to
                    deepening my skills in backend development and data science,
                    with a focus on technologies like Python and NLP. These
                    skills are vital for expanding my language project, helping
                    me create tools for language learning, transcription, and
                    preservation. Certifications such as the Google Project
                    Management Professional Certificate and Meta Back-End
                    Developer Certificate are equipping me with both technical
                    and managerial insights to drive my projects forward.
                  </p>
                </div>

                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Connecting Heritage with the Local Community
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    In Spokane, Washington, I&apos;m exploring ways to connect
                    my heritage with my new community, considering initiatives
                    like renting a space for gatherings and cultural events. The
                    Ibufuliiru project reflects my dedication to preserving and
                    promoting Bafuliiru culture and language, bridging the gap
                    between tradition and technology to ensure our cultural
                    legacy thrives in the digital age.
                  </p>
                </div>

                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Bridging Heritage and Technology
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Each step I take, from my roles at Amazon and Walmart to my
                    community projects, builds toward a future where technology
                    and heritage come together to make a lasting impact. My
                    journey is all about making a difference, not just for
                    myself but for my community and our shared heritage.
                    I&apos;m honored to work on these projects and am driven by
                    a belief that technology can be a bridge to preserving
                    identity and sharing it with the world.
                  </p>
                </div>

                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Creating Spaces for Cultural Knowledge
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Each project I take on is an extension of this
                    vision—creating spaces for people to connect, learn, and
                    share knowledge that transcends time and place. Through
                    Ibufuliiru, I&apos;m working to build a living archive that
                    captures the spirit and voice of the Bafuliiru people, a
                    space where our language and culture are documented and
                    celebrated, accessible to anyone who wants to learn about or
                    be part of our story.
                  </p>
                </div>

                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Empowering the Community to Keep Kifuliiru Alive
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    The platform&apos;s expansion, with tools for contributors
                    to add audio, stories, and other insights, isn&apos;t just
                    about preservation—it&apos;s about empowering people to be
                    active participants in keeping Kifuliiru alive and thriving.
                    This work reflects my commitment to merging the best of
                    modern technology with the richness of our heritage,
                    ensuring that what makes us unique is preserved digitally
                    for generations to come.
                  </p>
                </div>

                <div
                  className={`group p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                    darkMode
                      ? "hover:bg-slate-700/50 hover:shadow-slate-700/50"
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    Honoring Roots and Inspiring Future Generations
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    In the end, everything I&apos;m building—from the tech tools
                    to the community spaces—is part of a vision to honor my
                    roots, foster global understanding, and inspire future
                    generations to take pride in who they are and where they
                    come from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
          ${darkMode ? "via-slate-700" : "via-slate-200"} 
          to-transparent`}
        ></div>
      </div>
    </section>
  );
};

export default TimelineSection;
