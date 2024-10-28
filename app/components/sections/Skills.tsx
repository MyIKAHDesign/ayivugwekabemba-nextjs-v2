"use client";

import React, { useState } from "react";
import { Filter, Search } from "lucide-react";

// Define Image component
const Image = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => <img src={src} alt={alt} className={className} />;

interface Skill {
  name: string;
  icon: string;
  level: string;
  category: string;
}

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="group relative flex flex-col items-center p-4 rounded-xl bg-white dark:bg-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="w-16 h-16 rounded-lg bg-slate-50 dark:bg-slate-600 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
      <Image
        src="/api/placeholder/64/64"
        alt={`${skill.name} icon`}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="font-bold mb-1">{skill.name}</h3>
    <span
      className={`
      text-xs px-2 py-1 rounded-full
      ${
        skill.level === "Advanced"
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
          : skill.level === "Intermediate"
          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      }
    `}
    >
      {skill.level}
    </span>
  </div>
);

export const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills: Skill[] = [
    {
      name: "Java",
      icon: "/java-icon.svg",
      level: "Advanced",
      category: "Backend",
    },
    {
      name: "Python",
      icon: "/python-icon.svg",
      level: "Advanced",
      category: "Backend",
    },
    {
      name: "Spring Boot",
      icon: "/spring-icon.svg",
      level: "Intermediate",
      category: "Backend",
    },
    {
      name: "React",
      icon: "/react-icon.svg",
      level: "Advanced",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "/ts-icon.svg",
      level: "Advanced",
      category: "Frontend",
    },
    {
      name: "Docker",
      icon: "/docker-icon.svg",
      level: "Intermediate",
      category: "DevOps",
    },
    {
      name: "AWS",
      icon: "/aws-icon.svg",
      level: "Intermediate",
      category: "DevOps",
    },
    {
      name: "MongoDB",
      icon: "/mongodb-icon.svg",
      level: "Advanced",
      category: "Database",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Skills & Expertise
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search skills..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            No skills found matching your criteria
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
