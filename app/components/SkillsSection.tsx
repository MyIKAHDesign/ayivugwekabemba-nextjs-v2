"use client";

import React, { useState } from "react";
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
          details: "Expert in Git and GitHub Actions for workflow automation",
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
    switch (source) {
      case "work":
        return <Building2 className="w-4 h-4 text-slate-600" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-slate-600" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      id="skills"
    >
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Technical Expertise
        </h2>
        <p className="text-lg text-slate-600">
          Comprehensive skill set in software development, project management,
          and technical tools
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, categoryIndex) => (
          <div
            key={skillGroup.category}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center mb-4">
              {skillGroup.icon}
              <h3 className="font-montserrat text-xl font-semibold ml-3 text-slate-900">
                {skillGroup.category}
              </h3>
            </div>
            <ul className="space-y-2">
              {skillGroup.items.map((item, skillIndex) => {
                const isExpanded =
                  expandedSkills[`${categoryIndex}-${skillIndex}`];
                return (
                  <li key={item.name} className="text-slate-600">
                    <button
                      onClick={() => toggleSkill(categoryIndex, skillIndex)}
                      className="w-full"
                    >
                      <div className="flex items-center justify-between hover:text-slate-800 transition-colors">
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
                        <div className="flex items-center text-slate-600">
                          {getSourceIcon(item.source)}
                          <span className="ml-2">
                            {item.source === "work"
                              ? "Work Experience"
                              : "Academic Background"}
                          </span>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                          {item.details}
                        </p>

                        {item.certifications.length > 0 && (
                          <div className="space-y-1">
                            <div className="flex items-center text-slate-600">
                              <Award className="w-4 h-4 text-slate-600" />
                              <span className="ml-2">Certifications:</span>
                            </div>
                            <ul className="ml-6 list-disc text-slate-600">
                              {item.certifications.map((cert) => (
                                <li key={cert}>{cert}</li>
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
    </section>
  );
};

export default SkillsSection;
