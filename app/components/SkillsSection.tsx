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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Skill {
  category: string;
  icon: React.ElementType;
  technologies: string[];
  details: string[];
}

const SkillsSection: React.FC = () => {
  const { darkMode } = useTheme();
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (category: string) => {
    if (expandedSkill === category) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(category);
    }
  };

  const skills: Skill[] = [
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
      category: "Backend Development",
      icon: Server,
      technologies: [
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
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Supabase",
        "Firebase",
      ],
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
      category: "DevOps & Cloud",
      icon: Cloud,
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Linux",
        "Terraform",
      ],
      details: [
        "Cloud infrastructure management",
        "Container orchestration",
        "Automated deployment pipelines",
        "Infrastructure as Code (IaC)",
        "Monitoring and logging",
        "Cost optimization",
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
            Technical Skills
          </h2>
          <p
            className={`font-inter text-xl leading-relaxed
              ${darkMode ? "text-orange-200" : "text-slate-700"}`}
          >
            A comprehensive toolkit for building and managing modern
            applications
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const isExpanded = expandedSkill === skill.category;
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border hover:shadow-xl
                  ${
                    darkMode
                      ? "bg-slate-800/50 border-orange-500/30 hover:border-orange-400/50"
                      : "bg-white/50 border-orange-400/30 hover:border-orange-500"
                  }`}
              >
                <div
                  className={`absolute inset-0 transition-transform duration-500 ease-out
                    ${
                      darkMode
                        ? "bg-gradient-to-t from-orange-950 via-orange-900 to-orange-800"
                        : "bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400"
                    }
                    ${isExpanded ? "translate-y-0" : "translate-y-full"}`}
                />

                <div className="relative p-6 sm:p-8 transition-colors duration-500 z-10">
                  {/* Header */}
                  <div
                    className="flex items-center gap-4 mb-6 cursor-pointer"
                    onClick={() => toggleSkill(skill.category)}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors duration-500
                        ${darkMode ? "text-orange-400" : "text-orange-600"}
                        ${isExpanded ? "text-white" : ""}`}
                    />
                    <h3
                      className={`font-inter text-xl font-semibold flex-1 transition-colors duration-500
                        ${darkMode ? "text-orange-50" : "text-slate-900"}
                        ${isExpanded ? "text-white" : ""}`}
                    >
                      {skill.category}
                    </h3>
                    {isExpanded ? (
                      <ChevronUp
                        className={`w-5 h-5 ${isExpanded ? "text-white" : ""}`}
                      />
                    ) : (
                      <ChevronDown
                        className={`w-5 h-5 ${
                          darkMode ? "text-orange-400" : "text-orange-600"
                        }`}
                      />
                    )}
                  </div>

                  {/* Technologies List */}
                  <ul
                    className={`space-y-2 transition-colors duration-500 ${
                      isExpanded ? "mb-6" : ""
                    }`}
                  >
                    {skill.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className={`font-inter flex items-center gap-2 transition-colors duration-500
                          ${darkMode ? "text-orange-200" : "text-slate-600"}
                          ${isExpanded ? "text-white" : ""}`}
                      >
                        <Code2 className="w-4 h-4" />
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Expanded Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out
                      ${
                        isExpanded
                          ? "max-h-96 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-white">
                      Expertise
                    </h4>
                    <ul className="space-y-2">
                      {skill.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-white/90"
                        >
                          <span className="mt-1.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
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
