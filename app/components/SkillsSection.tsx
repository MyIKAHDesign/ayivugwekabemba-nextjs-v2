"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Code2,
  Database,
  GitBranch,
  Monitor,
  Server,
  Cloud,
  Settings,
  Palette,
  Container,
  Bot,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  technologies: string[];
  details: string[];
}

const SkillsSection: React.FC = () => {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);
  const { darkMode } = useTheme();

  const toggleTechnology = (techName: string) => {
    setExpandedTech(expandedTech === techName ? null : techName);
  };

  const skills: SkillGroup[] = [
    {
      category: "Frontend Development",
      icon: Monitor,
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5/CSS3",
        "JavaScript",
      ],
      details: [
        "Building responsive and interactive user interfaces",
        "State management with Redux and Context API",
        "Server-side rendering and static site generation",
        "Modern CSS frameworks and styling approaches",
        "Cross-browser compatibility and optimization",
        "Progressive Web Applications (PWA)",
      ],
    },
    {
      category: "Web Design",
      icon: Palette,
      technologies: [
        "Wix Studio",
        "UI/UX Design",
        "Responsive Design",
        "Custom Templates",
        "Dynamic Pages",
        "SEO Optimization",
      ],
      details: [
        "Creating professional websites with Wix Studio",
        "Custom template development and modification",
        "Responsive design implementation",
        "Dynamic page layouts and animations",
        "User interface optimization",
        "SEO-friendly design practices",
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      technologies: [
        "Java",
        "Spring Boot",
        "Node.js",
        "Python",
        "Django",
        "FastAPI",
        "RESTful APIs",
        "GraphQL",
      ],
      details: [
        "Server architecture and API design",
        "Authentication and authorization systems",
        "Database integration and ORM usage",
        "Microservices architecture",
        "Performance optimization",
        "Security best practices",
      ],
    },
    {
      category: "Database Management",
      icon: Database,
      technologies: ["PostgreSQL", "MySQL", "Supabase", "Firebase"],
      details: [
        "Database design and normalization",
        "Query optimization and performance tuning",
        "Data modeling and schema design",
        "Caching strategies",
        "Backup and recovery procedures",
        "Replication and scaling",
      ],
    },
    {
      category: "DevOps",
      icon: Container,
      technologies: [
        "Docker",
        "Kubernetes",
        "CI/CD Pipelines",
        "Automated Testing",
        "Infrastructure Management",
        "Deployment Strategies",
      ],
      details: [
        "Container orchestration with Kubernetes",
        "Continuous Integration/Deployment pipelines",
        "Automated testing and quality assurance",
        "Infrastructure as Code (IaC)",
        "Deployment automation",
        "System monitoring and logging",
      ],
    },
    {
      category: "Cloud Computing",
      icon: Cloud,
      technologies: [
        "AWS Services",
        "Vercel",
        "Netlify",
        "Heroku",
        "IaaS/PaaS/SaaS",
        "Cloud Architecture",
      ],
      details: [
        "AWS cloud services implementation",
        "Serverless architecture with Vercel",
        "Static site deployment with Netlify",
        "Platform as a Service with Heroku",
        "Cloud infrastructure management",
        "Cost optimization strategies",
      ],
    },
    {
      category: "Version Control",
      icon: GitBranch,
      technologies: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Git Flow",
        "Code Review",
      ],
      details: [
        "Branch management strategies",
        "Code review processes",
        "Collaboration workflows",
        "Version control best practices",
        "Release management",
        "Documentation",
      ],
    },
    {
      category: "AI Tools",
      icon: Bot,
      technologies: [
        "ChatGPT",
        "Claude.ai",
        "Google Gemini",
        "AI Prompting",
        "AI Integration",
        "AI Automation",
      ],
      details: [
        "Advanced AI prompt engineering",
        "AI-assisted development workflows",
        "Integration of AI tools in applications",
        "Automated content generation",
        "AI-powered problem solving",
        "Process automation with AI",
      ],
    },
    {
      category: "Project Management",
      icon: Settings,
      technologies: [
        "Agile",
        "Scrum",
        "Jira",
        "Trello",
        "Confluence",
        "Documentation",
      ],
      details: [
        "Sprint planning and execution",
        "Team coordination and leadership",
        "Risk management",
        "Resource allocation",
        "Stakeholder communication",
        "Process improvement",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative min-h-screen pt-40 pb-24 md:pt-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 via-slate-50 to-white"
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
            className={`font-jetbrains-mono text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Technical Skills
          </h2>
          <p
            className={`font-space-grotesk text-xl leading-relaxed
              ${darkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            A comprehensive toolkit for building and managing modern
            applications
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border
                  hover:transform hover:-translate-y-2 hover:rotate-1 hover:scale-105
                  ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-600/30 hover:border-slate-500/50"
                      : "bg-white/50 border-slate-300/30 hover:border-slate-400"
                  }`}
              >
                {/* Sliding gradient background */}
                <div
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                    ${
                      darkMode
                        ? "bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600"
                        : "bg-gradient-to-t from-slate-500 via-slate-400 to-slate-300"
                    }`}
                />

                <div className="relative p-6 sm:p-8 transition-colors duration-500 z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <Icon
                      className={`w-8 h-8 transition-colors duration-500
                        ${darkMode ? "text-slate-300" : "text-slate-600"}
                        group-hover:text-white`}
                    />
                    <h3
                      className={`font-jetbrains-mono text-xl font-semibold transition-colors duration-500
                        ${darkMode ? "text-slate-100" : "text-slate-900"}
                        group-hover:text-white`}
                    >
                      {skill.category}
                    </h3>
                  </div>

                  {/* Technologies List */}
                  <div className="space-y-4">
                    {skill.technologies.map((tech) => (
                      <div key={tech} className="space-y-2">
                        <button
                          onClick={() => toggleTechnology(tech)}
                          className={`font-space-grotesk w-full text-left transition-colors duration-500
                            ${darkMode ? "text-slate-300" : "text-slate-700"}
                            group-hover:text-white`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Code2 className="w-4 h-4" />
                              <span className="font-medium">{tech}</span>
                            </div>
                            {expandedTech === tech ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </button>

                        {/* Expanded Content */}
                        {expandedTech === tech && (
                          <div className="pl-6 pt-2 space-y-4">
                            {/* Details */}
                            <div className="space-y-2">
                              <h4 className="font-space-grotesk font-medium text-slate-200 group-hover:text-slate-100">
                                Details
                              </h4>
                              <ul className="font-space-grotesk space-y-1">
                                {skill.details.map((detail, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-slate-100 group-hover:text-white/90"
                                  >
                                    <span className="mt-1">•</span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
