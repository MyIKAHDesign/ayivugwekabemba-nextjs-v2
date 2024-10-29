"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

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
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      id="timeline-section"
    >
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          About Me
        </h2>
        <p className="text-lg text-slate-600">
          A journey through my professional development and achievements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-600 leading-relaxed">
              I&apos;m a software professional with extensive experience in
              development, DevOps, and project management. My journey spans from
              enterprise software development to implementing Agile
              methodologies and CI/CD practices. I have a proven track record of
              improving system performance and delivering projects efficiently.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Currently gaining valuable experience in operations and logistics
              while maintaining my passion for software development and process
              improvement.
            </p>
          </div>
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
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm"
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
                    transition: `transform 0.5s ease-out ${index * 0.2 + 0.2}s`,
                  }}
                ></div>
              </div>
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(20px)",
                  transition: `all 0.5s ease-out ${index * 0.2 + 0.3}s`,
                }}
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1"
              >
                <div className="text-sm font-medium text-slate-500">
                  {exp.year}
                </div>
                <h3 className="font-montserrat text-lg font-semibold text-slate-900 mt-1">
                  {exp.title}
                </h3>
                <div className="text-slate-600 font-medium">{exp.company}</div>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
