"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Code2,
  GitBranch,
  Briefcase,
  ChevronRight,
  ChevronDown,
  Award,
  GraduationCap,
  Building2,
} from "lucide-react";

interface SourceDetail {
  type: "work" | "education" | "certification";
  title: string;
  description: string;
}

interface Skill {
  name: string;
  certifications: string[];
  sourceDetails: SourceDetail[];
  details: string;
}

interface SkillGroup {
  category: string;
  items: Skill[];
  icon: React.ReactNode;
}

interface ExpandedSkills {
  [key: string]: boolean;
}

const SkillsSection: React.FC = () => {
  const [expandedSkills, setExpandedSkills] = useState<ExpandedSkills>({});
  const { darkMode } = useTheme();

  const skills: SkillGroup[] = [
    {
      category: "Technical",
      items: [
        {
          name: "Python",
          certifications: ["Meta Back-End Developer Professional Certificate"],
          sourceDetails: [
            {
              type: "work",
              title: "Work Experience",
              description: "Used for backend development and data processing",
            },
            {
              type: "certification",
              title: "Certification",
              description: "Meta Back-End Developer program certification",
            },
          ],
          details: "Proficient in backend development with Python.",
        },
        {
          name: "Java",
          certifications: [],
          sourceDetails: [
            {
              type: "education",
              title: "Academic Background",
              description: "Studied Java during university",
            },
            {
              type: "work",
              title: "Work Experience",
              description: "Developed enterprise-level applications",
            },
          ],
          details: "Experienced in Java development.",
        },
        {
          name: "Django",
          certifications: ["Meta Back-End Developer Professional Certificate"],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description: "Built and maintained web applications using Django",
            },
          ],
          details: "Experienced with scalable web applications in Django.",
        },
        {
          name: "MySQL",
          certifications: [
            "Meta Back-End Developer Professional Certificate (Database Module)",
          ],
          sourceDetails: [
            {
              type: "education",
              title: "Academic Background",
              description: "Studied SQL databases in coursework",
            },
            {
              type: "work",
              title: "Professional Development",
              description: "Worked extensively with MySQL in data management",
            },
          ],
          details: "Experience with SQL and database management.",
        },
        {
          name: "Git & GitHub",
          certifications: ["Meta Back-End Developer Certificate"],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description: "Used for version control and code management",
            },
          ],
          details: "Experienced with Git and GitHub for version control.",
        },
      ],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: "Project Management",
      items: [
        {
          name: "Project Management",
          certifications: [
            "Google Project Management Professional Certificate",
          ],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description: "Led projects and managed cross-functional teams",
            },
            {
              type: "certification",
              title: "Certification",
              description: "Google Project Management Professional Certificate",
            },
          ],
          details: "Skilled in leading and managing projects effectively.",
        },
        {
          name: "Agile Methodologies",
          certifications: [
            "Google Project Management Professional Certificate",
          ],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Experience",
              description: "Implemented Agile practices like Scrum and Kanban",
            },
          ],
          details: "Experienced in Agile frameworks for team efficiency.",
        },
        {
          name: "Stakeholder Management",
          certifications: [
            "Google Project Management Professional Certificate",
          ],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description:
                "Managed stakeholder relationships effectively and efficiently",
            },
          ],
          details: "Strong communication and relationship management skills.",
        },
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      category: "Development Tools",
      items: [
        {
          name: "JIRA",
          certifications: [],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description: "Used for project tracking and Agile workflows",
            },
          ],
          details: "Proficient in JIRA for task and project management.",
        },
        {
          name: "Confluence",
          certifications: [],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description: "Documentation and team knowledge management",
            },
          ],
          details: "Skilled in using Confluence for team documentation.",
        },
        {
          name: "GitHub Actions",
          certifications: [],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description: "Configured CI/CD workflows using GitHub Actions",
            },
          ],
          details: "Experience in CI/CD pipeline setup with GitHub Actions.",
        },
        {
          name: "Slack",
          certifications: ["Certification"],
          sourceDetails: [
            {
              type: "work",
              title: "Professional Development",
              description: "Utilized for team communication and collaboration",
            },
          ],
          details: "Proficient in team communication through Slack.",
        },
      ],
      icon: <GitBranch className="w-6 h-6" />,
    },
  ];

  const toggleSkill = (categoryIndex: number, skillIndex: number) => {
    const key = `${categoryIndex}-${skillIndex}`;
    setExpandedSkills((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getSourceIcon = (type: SourceDetail["type"]) => {
    switch (type) {
      case "work":
        return (
          <Building2
            className={`w-5 h-5 ${
              darkMode ? "text-orange-400" : "text-orange-600"
            }`}
          />
        );
      case "education":
        return (
          <GraduationCap
            className={`w-5 h-5 ${
              darkMode ? "text-orange-400" : "text-orange-600"
            }`}
          />
        );
      case "certification":
        return (
          <Award
            className={`w-5 h-5 ${
              darkMode ? "text-orange-400" : "text-orange-600"
            }`}
          />
        );
    }
  };

  return (
    <section
      id="skills"
      className={`relative min-h-screen pt-40 md:pt-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-orange-900/20 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-orange-100 to-white"
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
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-inter text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-orange-50" : "text-slate-900"}`}
          >
            Technical Expertise
          </h2>
          <p
            className={`font-inter text-xl leading-relaxed 
              ${darkMode ? "text-orange-200" : "text-slate-700"}`}
          >
            Comprehensive skill set in software development and project
            management
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, categoryIndex) => (
            <div
              key={skillGroup.category}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border hover:shadow-xl hover:-translate-y-1
                ${
                  darkMode
                    ? "bg-slate-800/50 border-orange-500/30 hover:border-orange-400/50"
                    : "bg-white/50 border-orange-400/30 hover:border-orange-500"
                }`}
            >
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                  ${
                    darkMode
                      ? "bg-gradient-to-t from-orange-950 via-orange-900 to-orange-800"
                      : "bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400"
                  }`}
              />

              <div className="relative p-6 transition-colors duration-500 group-hover:text-white z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`transition-colors duration-500 group-hover:text-white 
                      ${darkMode ? "text-orange-400" : "text-orange-600"}`}
                  >
                    {skillGroup.icon}
                  </div>
                  <h3
                    className={`font-inter text-xl leading-relaxed font-semibold ml-3 transition-colors duration-500 group-hover:text-white 
                      ${darkMode ? "text-orange-50" : "text-slate-900"}`}
                  >
                    {skillGroup.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {skillGroup.items.map((item, skillIndex) => (
                    <li
                      key={item.name}
                      className={`font-inter transition-colors duration-500 group-hover:text-white
                        ${darkMode ? "text-orange-200" : "text-slate-600"}`}
                    >
                      <button
                        onClick={() => toggleSkill(categoryIndex, skillIndex)}
                        className="w-full text-left"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {expandedSkills[
                              `${categoryIndex}-${skillIndex}`
                            ] ? (
                              <ChevronDown className="w-4 h-4 mr-2" />
                            ) : (
                              <ChevronRight className="w-4 h-4 mr-2" />
                            )}
                            <span className="text-lg">{item.name}</span>
                          </div>
                        </div>
                      </button>

                      {expandedSkills[`${categoryIndex}-${skillIndex}`] && (
                        <div className="mt-2 ml-6 space-y-2">
                          {item.sourceDetails.map((source, sourceIndex) => (
                            <div key={sourceIndex} className="flex flex-col">
                              <div className="flex items-center">
                                {getSourceIcon(source.type)}
                                <span className="font-inter ml-2 text-sm font-medium uppercase tracking-wide">
                                  {source.title}:
                                </span>
                              </div>
                              <p className="font-inter ml-6 mt-1 text-sm">
                                {source.description}
                              </p>
                            </div>
                          ))}
                          <p className="font-inter text-sm ml-6">
                            {item.details}
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
            ${darkMode ? "via-orange-900/30" : "via-orange-200"} 
            to-transparent`}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
