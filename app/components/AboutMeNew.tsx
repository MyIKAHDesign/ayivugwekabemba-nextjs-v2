"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { User, Briefcase, Code, Award, Heart, Target } from "lucide-react";
import SkillsSection from "./SkillsSection";
import { H1, H2, H3, H4, BodyText, BodyTextLarge, SmallText, MutedText } from "./ui/Typography";
import { Card, SmallCard } from "./ui/Card";

const AboutMeNew: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "My Story", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "mission", label: "Mission", icon: Target },
  ];

  return (
    <section
      className={`relative min-h-screen pt-32 md:pt-24 pb-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-white to-slate-50"
        }`}
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

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1
            className={`text-4xl sm:text-5xl font-bold tracking-tight mb-6
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            About Me
          </h1>

          {/* Profile & Credentials Row */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <img
              src="/favicon.ico"
              alt="Ayivugwe"
              className="w-10 h-10 rounded-full"
            />
            <span
              className={`text-sm font-medium
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Google Certified PM
            </span>
            <span
              className={`text-slate-400 dark:text-slate-600`}
            >
              •
            </span>
            <span
              className={`text-sm font-medium
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Software Developer
            </span>
            <span
              className={`text-slate-400 dark:text-slate-600`}
            >
              •
            </span>
            <span
              className={`text-sm font-medium
                ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Kifuliiru Language Advocate
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div
            className={`inline-flex rounded-lg p-1 backdrop-blur-xl border
              ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white/50 border-slate-200"
              }`}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
                    ${
                      activeTab === tab.id
                        ? darkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-600 text-white"
                        : darkMode
                        ? "text-slate-300 hover:text-slate-100"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Story Tab */}
          {activeTab === "story" && (
            <Card>
              <div className="space-y-8">
                <div>
                  <H2 className="mb-6">From Congo to Code</H2>
                  <BodyText>
                    I&apos;m Ayivugwe Kabemba Mukome, a tech founder and software engineer deeply connected
                    to my roots in the Democratic Republic of Congo and the Bafuliiru community. My journey
                    in technology began in Africa, where I worked with ASYST Resources LTD, gaining valuable
                    experience in software development, DevOps, and project management.
                  </BodyText>
                </div>

                <div>
                  <H3 className="mb-4">Professional Growth</H3>
                  <BodyText>
                    Since moving to the United States, I&apos;ve worked at leading tech companies including
                    Amazon and Walmart, broadening my skills in both technical and operational capacities.
                    These experiences have equipped me with the expertise to build scalable, impactful
                    digital products.
                  </BodyText>
                </div>

                <div>
                  <H3 className="mb-4">Entrepreneurial Vision</H3>
                  <BodyText>
                    I founded <strong>Wekify LLC</strong>, a technology company providing technical
                    development and engineering expertise for digital platforms. Under Wekify, I established
                    <strong> Kifuliiru Lab</strong>, a specialized research laboratory dedicated to Kifuliiru
                    language preservation and revitalization through innovative digital solutions.
                  </BodyText>
                </div>

                <div>
                  <H3 className="mb-4">Current Location</H3>
                  <BodyText>
                    Based in Spokane, Washington, I&apos;m exploring ways to connect my heritage with my
                    local community, bridging the gap between tradition and technology to ensure our
                    cultural legacy thrives in the digital age.
                  </BodyText>
                </div>
              </div>
            </Card>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div
              className={`rounded-xl p-10 md:p-12 backdrop-blur-xl border transition-all duration-300
                ${
                  darkMode
                    ? "bg-slate-800/30 border-slate-700/50"
                    : "bg-white/30 border-slate-200"
                }`}
            >
              <div className="space-y-8">
                {/* Founder Experience */}
                <div>
                  <h2
                    className={`text-2xl font-semibold mb-6 flex items-center gap-2
                      ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                  >
                    <Heart className="w-6 h-6 text-blue-500" />
                    Founder
                  </h2>
                  <div className="space-y-6">
                    <div
                      className={`p-6 rounded-lg border-l-4 border-blue-500
                        ${
                          darkMode
                            ? "bg-slate-700/30"
                            : "bg-slate-50/50"
                        }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3
                          className={`text-xl font-semibold
                            ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                        >
                          Wekify LLC
                        </h3>
                        <span
                          className={`text-sm font-medium
                            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                        >
                          Jan 2020 - Present
                        </span>
                      </div>
                      <p
                        className={`text-base mb-2
                          ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Founder & CEO
                      </p>
                      <p
                        className={`text-sm mb-3
                          ${darkMode ? "text-slate-500" : "text-slate-500"}`}
                      >
                        Remote
                      </p>
                      <p
                        className={`text-base leading-relaxed
                          ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Leading technical development and engineering for digital platforms focused on
                        language preservation and cultural heritage. Managing multiple product initiatives
                        including Kifuliiru.com, Radio Ibufuliiru, Tabula Kifuliiru, and Imyazi.com.
                      </p>
                    </div>

                    <div
                      className={`p-6 rounded-lg border-l-4 border-blue-500
                        ${
                          darkMode
                            ? "bg-slate-700/30"
                            : "bg-slate-50/50"
                        }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3
                          className={`text-xl font-semibold
                            ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                        >
                          Kifuliiru Lab
                        </h3>
                        <span
                          className={`text-sm font-medium
                            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                        >
                          Jan 2020 - Present
                        </span>
                      </div>
                      <p
                        className={`text-base mb-2
                          ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Founder & Director
                      </p>
                      <p
                        className={`text-sm mb-3
                          ${darkMode ? "text-slate-500" : "text-slate-500"}`}
                      >
                        Remote
                      </p>
                      <p
                        className={`text-base leading-relaxed
                          ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Research laboratory specializing in Kifuliiru language preservation and
                        revitalization. Developing NLP tools, language learning resources, and digital
                        archives in collaboration with community members and language experts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2
                    className={`text-2xl font-semibold mb-6 flex items-center gap-2
                      ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                  >
                    <Briefcase className="w-6 h-6 text-green-500" />
                    Professional Experience
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        company: "Amazon Fulfillment Center",
                        role: "Fulfillment Center Associate",
                        period: "Sep 2024 - Present",
                        location: "Spokane, WA",
                      },
                      {
                        company: "Walmart",
                        role: "Field Associate",
                        period: "Nov 2023 - Sep 2024",
                        location: "Spokane Valley, WA",
                      },
                      {
                        company: "ASYST Resources LTD",
                        role: "Project Manager & DevOps Engineer",
                        period: "Feb 2022 - Aug 2023",
                        location: "Bujumbura, Burundi",
                      },
                      {
                        company: "ASYST Resources LTD",
                        role: "Software Developer",
                        period: "Jan 2017 - Feb 2022",
                        location: "Bujumbura, Burundi",
                      },
                    ].map((job, index) => (
                      <div
                        key={index}
                        className={`p-5 rounded-lg transition-all duration-300 hover:-translate-y-0.5
                          ${
                            darkMode
                              ? "bg-slate-700/30 hover:bg-slate-700/50"
                              : "bg-slate-50/50 hover:bg-slate-100/70"
                          }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3
                              className={`text-lg font-semibold mb-1
                                ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                            >
                              {job.company}
                            </h3>
                            <p
                              className={`text-base mb-1
                                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                            >
                              {job.role}
                            </p>
                            <p
                              className={`text-sm
                                ${darkMode ? "text-slate-500" : "text-slate-500"}`}
                            >
                              {job.location}
                            </p>
                          </div>
                          <span
                            className={`text-sm font-medium whitespace-nowrap ml-4
                              ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                          >
                            {job.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2
                    className={`text-2xl font-semibold mb-6 flex items-center gap-2
                      ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                  >
                    <Award className="w-6 h-6 text-purple-500" />
                    Certifications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Google Project Management Professional", issuer: "Google", year: "2024" },
                      { name: "Meta Back-End Developer", issuer: "Meta", year: "2024" },
                      { name: "GitHub Foundations", issuer: "GitHub", year: "2024" },
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border
                          ${
                            darkMode
                              ? "bg-slate-700/20 border-slate-600/50"
                              : "bg-slate-50/50 border-slate-200"
                          }`}
                      >
                        <h3
                          className={`font-semibold mb-1
                            ${darkMode ? "text-slate-100" : "text-slate-900"}`}
                        >
                          {cert.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <p
                            className={`text-sm
                              ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                          >
                            {cert.issuer}
                          </p>
                          <span
                            className={`text-xs px-2 py-1 rounded-md
                              ${
                                darkMode
                                  ? "bg-purple-600/20 text-purple-400 border border-purple-600/30"
                                  : "bg-purple-100/70 text-purple-700 border border-purple-200/50"
                              }`}
                          >
                            {cert.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div>
              <SkillsSection />
            </div>
          )}

          {/* Mission Tab */}
          {activeTab === "mission" && (
            <Card>
              <div className="space-y-8">
                <div>
                  <H2 className="mb-6">Preserving Kifuliiru Language & Culture</H2>
                  <BodyText className="mb-6">
                    At the core of my work is a mission that combines professional expertise with cultural
                    heritage. Through Wekify LLC and Kifuliiru Lab, I&apos;m building a comprehensive digital
                    ecosystem dedicated to preserving the Kifuliiru language and Bafuliiru culture.
                  </BodyText>
                </div>

                <div>
                  <H3 className="mb-4">The Ibufuliiru Platform</H3>
                  <BodyText className="mb-4">
                    I&apos;m creating a community-driven platform that captures our language, traditions,
                    and stories through innovative digital tools including:
                  </BodyText>
                  <BodyText>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <a
                          href="https://kifuliiru.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          Kifuliiru.com
                        </a> - Comprehensive language learning platform
                      </li>
                      <li>
                        <a
                          href="https://radio.ibufuliiru.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          Radio Ibufuliiru
                        </a> - Digital radio broadcasting in Kifuliiru
                      </li>
                      <li>
                        <a
                          href="https://tabula.kifuliiru.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          Tabula Kifuliiru
                        </a> - Content management and contribution platform
                      </li>
                      <li>
                        <a
                          href="https://imyazi.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          Imyazi.com
                        </a> - Cultural stories and knowledge sharing
                      </li>
                      <li>
                        <a
                          href="https://wempily.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          Wempily
                        </a> - Social networking for the Bafuliiru community
                      </li>
                    </ul>
                  </BodyText>
                </div>

                <div>
                  <H3 className="mb-4">Technology Meets Tradition</H3>
                  <BodyText>
                    I leverage modern technologies including Python, NLP, Next.js, and TypeScript to build
                    tools for language learning, transcription, and preservation. This work isn&apos;t just
                    about preservation—it&apos;s about empowering people to be active participants in keeping
                    Kifuliiru alive and thriving for future generations.
                  </BodyText>
                </div>

                <div>
                  <H3 className="mb-4">Community Engagement</H3>
                  <BodyText>
                    These platforms allow contributors from all walks of life to share audio recordings,
                    texts, and cultural insights, building a living archive that captures the spirit and
                    voice of the Bafuliiru people—a space where our language and culture are documented,
                    celebrated, and accessible to anyone who wants to learn or be part of our story.
                  </BodyText>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMeNew;
