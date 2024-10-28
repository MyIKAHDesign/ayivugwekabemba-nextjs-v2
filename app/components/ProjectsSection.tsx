"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import {
  Globe2,
  Radio,
  BookOpen,
  Newspaper,
  Languages,
  Rocket,
} from "lucide-react";

const projects = [
  {
    title: "Ibufuliiru",
    description:
      "My main project focusing on preserving and promoting Kifuliiru language and culture through digital innovation and community engagement.",
    link: "#",
    icon: Rocket,
  },
  {
    title: "Kifuliiru",
    description:
      "A comprehensive platform dedicated to the documentation, teaching, and preservation of the Kifuliiru language for future generations.",
    link: "#",
    icon: Languages,
  },
  {
    title: "Kifuliiru.net",
    description:
      "Interactive learning platform offering structured courses, resources, and tools for mastering the Kifuliiru language.",
    link: "#",
    icon: Globe2,
  },
  {
    title: "Imyazi mu Kifuliiru",
    description:
      "Digital media agency creating engaging content in Kifuliiru, from educational materials to cultural documentaries.",
    link: "#",
    icon: Newspaper,
  },
  {
    title: "Radio Ibufuliiru",
    description:
      "Community radio station broadcasting news, cultural programs, and educational content in the Kifuliiru language.",
    link: "#",
    icon: Radio,
  },
  {
    title: "Digital Dictionary",
    description:
      "Comprehensive digital dictionary and language resource featuring Kifuliiru words, phrases, and cultural context.",
    link: "#",
    icon: BookOpen,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-16 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            icon={project.icon}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
