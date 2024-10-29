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

// Interfaces
interface Skill {
  name: string;
  certifications: string[];
  source: "work" | "education";
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
          name: "Java",
          certifications: ["Oracle Certified Professional Java SE Developer"],
          source: "education",
          details:
            "Extensive experience in Java development, including enterprise applications",
        },
        {
          name: "Spring Boot",
          certifications: ["Spring Professional Certification"],
          source: "work",
          details:
            "Built and maintained microservices-based applications using Spring Boot",
        },
        {
          name: "RichFaces & PrimeFaces",
          certifications: [],
          source: "work",
          details: "Developed enterprise web interfaces using Java frameworks",
        },
        {
          name: "Back-end Development",
          certifications: [],
          source: "work",
          details:
            "Designed and implemented scalable server-side applications and APIs",
        },
        {
          name: "Cloud Services",
          certifications: [],
          source: "work",
          details:
            "Experience with AWS and Heroku for cloud infrastructure management",
        },
        {
          name: "DevOps",
          certifications: [],
          source: "work",
          details:
            "Implemented CI/CD pipelines and automated deployment processes",
        },
        {
          name: "Version Control",
          certifications: [],
          source: "work",
          details:
            "Expert in Git & GitHub  |  Version Control • Pull Requests • CI/CD • Branching • Code Review • Git Flow",
        },
        {
          name: "Database Management",
          certifications: [],
          source: "work",
          details: "Experience with SQL and database optimization",
        },
      ],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: "Management",
      items: [
        {
          name: "Project Management",
          certifications: [],
          source: "work",
          details: "Led cross-functional teams and managed enterprise projects",
        },
        {
          name: "Agile Methodologies",
          certifications: [],
          source: "work",
          details: "Implemented Scrum and Kanban practices for team efficiency",
        },
        {
          name: "Team Leadership",
          certifications: [],
          source: "work",
          details: "Managed development teams and mentored team members",
        },
        {
          name: "Stakeholder Communication",
          certifications: [],
          source: "work",
          details: "Effective communication and relationship management",
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
          source: "work",
          details: "Project tracking and agile workflow management",
        },
        {
          name: "Confluence",
          certifications: [],
          source: "work",
          details: "Documentation and knowledge management",
        },
        {
          name: "GitHub Actions",
          certifications: [],
          source: "work",
          details: "CI/CD pipeline implementation and automation",
        },
        {
          name: "Development IDEs",
          certifications: [],
          source: "work",
          details: "Proficient in various development environments",
        },
      ],
      icon: <GitBranch className="w-6 h-6" />,
    },
  ];

  const toggleSkill = (categoryIndex: number, skillIndex: number): void => {
    const key = `${categoryIndex}-${skillIndex}`;
    setExpandedSkills((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getSourceIcon = (source: "work" | "education"): React.ReactNode => {
    return source === "work" ? (
      <Building2
        className={`w-4 h-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
      />
    ) : (
      <GraduationCap
        className={`w-4 h-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
      />
    );
  };

  return (
    <section
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 to-white"
        }`}
      id="skills"
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

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-montserrat text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-white" : "text-slate-900"} 
            transition-colors duration-300`}
          >
            Technical Expertise
          </h2>
          <p
            className={`text-lg sm:text-xl 
            ${darkMode ? "text-slate-400" : "text-slate-600"} 
            transition-colors duration-300 max-w-xl mx-auto`}
          >
            Comprehensive skill set in software development, project management,
            and technical tools
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, categoryIndex) => (
            <div
              key={skillGroup.category}
              className={`relative rounded-2xl p-6 transition-all duration-300 backdrop-blur-xl border
                ${
                  darkMode
                    ? "bg-slate-800/80 hover:bg-slate-700/50 border-slate-700/50"
                    : "bg-white/80 hover:bg-white border-slate-200/50"
                }`}
            >
              <div className="flex items-center mb-4">
                <div className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  {skillGroup.icon}
                </div>
                <h3
                  className={`font-montserrat text-xl font-semibold ml-3
                  ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.items.map((item, skillIndex) => {
                  const isExpanded =
                    expandedSkills[`${categoryIndex}-${skillIndex}`];
                  return (
                    <li
                      key={item.name}
                      className={darkMode ? "text-slate-400" : "text-slate-600"}
                    >
                      <button
                        onClick={() => toggleSkill(categoryIndex, skillIndex)}
                        className="w-full"
                      >
                        <div
                          className={`flex items-center justify-between transition-colors
                          ${
                            darkMode
                              ? "hover:text-slate-200"
                              : "hover:text-slate-800"
                          }`}
                        >
                          <div className="flex items-center">
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 mr-2" />
                            ) : (
                              <ChevronRight className="w-4 h-4 mr-2" />
                            )}
                            {item.name}
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="mt-2 ml-6 space-y-2 text-sm">
                          <div
                            className={`flex items-center 
                            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                          >
                            {getSourceIcon(item.source)}
                            <span className="ml-2">
                              {item.source === "work"
                                ? "Work Experience"
                                : "Academic Background"}
                            </span>
                          </div>

                          <p
                            className={`leading-relaxed
                            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                          >
                            {item.details}
                          </p>

                          {item.certifications.length > 0 && (
                            <div className="space-y-1">
                              <div
                                className={`flex items-center
                                ${
                                  darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                              >
                                <Award
                                  className={`w-4 h-4
                                  ${
                                    darkMode
                                      ? "text-slate-400"
                                      : "text-slate-600"
                                  }`}
                                />
                                <span className="ml-2">Certifications:</span>
                              </div>
                              <ul className="ml-6 list-disc">
                                {item.certifications.map((cert) => (
                                  <li
                                    key={cert}
                                    className={
                                      darkMode
                                        ? "text-slate-400"
                                        : "text-slate-600"
                                    }
                                  >
                                    {cert}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
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

export default SkillsSection;
