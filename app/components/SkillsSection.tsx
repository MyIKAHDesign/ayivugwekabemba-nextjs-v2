import React, { useState, useEffect } from "react";
import {
  Code2,
  GitBranch,
  Terminal,
  Briefcase,
  Mail,
  Send,
  Clock,
  BookOpen,
  ChevronRight,
  ChevronDown,
  Award,
  GraduationCap,
  Building2,
} from "lucide-react";

// Define interfaces for our data structures
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

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface ExpandedSkills {
  [key: string]: boolean;
}

// Skills Section Component
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
    <section id="skills" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, categoryIndex) => (
            <div
              key={skillGroup.category}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold ml-3 text-slate-700">
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

                          <p className="text-slate-600">{item.details}</p>

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
      </div>
    </section>
  );
};

// Timeline Section Component
const TimelineSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const timelineElement = document.getElementById("timeline-section");
    if (timelineElement) {
      observer.observe(timelineElement);
    }

    return () => {
      if (timelineElement) {
        observer.unobserve(timelineElement);
      }
    };
  }, []);

  const experiences: Experience[] = [
    {
      year: "2024",
      title: "Fulfillment Center Associate",
      company: "Amazon Fulfillment Center",
      description:
        "Managing picking, packing, and shipping of customer orders while maintaining quality standards and operational goals",
    },
    {
      year: "2023",
      title: "Field Associate",
      company: "Walmart",
      description:
        "Managed inventory and improved stock accuracy while providing excellent customer service",
    },
    {
      year: "2022-2023",
      title: "Project Manager & DevOps Engineer",
      company: "ASYST Resources LTD",
      description:
        "Led Agile projects and implemented CI/CD practices, achieving 30% faster project delivery and 40% reduced deployment time",
    },
    {
      year: "2017-2022",
      title: "Software Developer",
      company: "ASYST Resources LTD",
      description:
        "Developed enterprise applications using Java, contributing to government and financial systems with 30% reduced downtime",
    },
    {
      year: "2015",
      title: "Bachelor's Degree - Computer Science",
      company: "Université de Ngozi",
      description:
        "Completed computer science degree with focus on software development",
    },
  ];

  return (
    <section className="py-16" id="timeline-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              I&apos;m a software professional with extensive experience in
              development, DevOps, and project management. My journey spans from
              enterprise software development to implementing Agile
              methodologies and CI/CD practices. I have a proven track record of
              improving system performance and delivering projects efficiently.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Currently gaining valuable experience in operations and logistics
              while maintaining my passion for software development and process
              improvement.
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.year}
                className="flex gap-4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(20px)",
                  transition: `all 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0)",
                      transition: `all 0.5s ease-out ${index * 0.2}s`,
                    }}
                  >
                    <Clock className="w-6 h-6 text-slate-600" />
                  </div>
                  <div
                    className="h-full w-0.5 bg-slate-200 my-2"
                    style={{
                      height: "100%",
                      transformOrigin: "top",
                      transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                      transition: `transform 0.5s ease-out ${
                        index * 0.2 + 0.2
                      }s`,
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(20px)",
                    transition: `all 0.5s ease-out ${index * 0.2 + 0.3}s`,
                  }}
                >
                  <div className="text-sm text-slate-500">{exp.year}</div>
                  <h3 className="font-semibold text-slate-800">{exp.title}</h3>
                  <div className="text-slate-600">{exp.company}</div>
                  <p className="text-slate-500 mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main component that combines both sections
const PortfolioContent: React.FC = () => {
  return (
    <div className="font-['Instrument Sans']">
      <SkillsSection />
      <TimelineSection />
    </div>
  );
};

export default PortfolioContent;
