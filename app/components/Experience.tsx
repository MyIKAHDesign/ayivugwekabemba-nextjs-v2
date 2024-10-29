"use client";

import React, { useState } from "react";
import { Clock } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description?: string;
  achievements: string[];
}

const ExperienceSection: React.FC = () => {
  const [showTimeline, setShowTimeline] = useState<boolean>(false);

  const experiences: Experience[] = [
    {
      company: "Amazon Fulfillment Center",
      position: "Fulfillment Center Associate",
      location: "Spokane, WA",
      period: "Sep 2024 - Present",
      description:
        "Efficiently manage the picking, packing, and shipping of customer orders.",
      achievements: [
        "Timely delivery and quality assurance, achieving high customer satisfaction",
      ],
    },
    {
      company: "Walmart",
      position: "Field Associate",
      location: "Spokane Valley, WA",
      period: "Nov 2023 - Sep 2024",
      description:
        "Managed inventory and provided excellent customer service to enhance store operations.",
      achievements: [
        "Improved inventory accuracy, reducing discrepancies by 10%",
      ],
    },
    {
      company: "ASYST Resources LTD",
      position: "Project Manager",
      location: "Bujumbura, Burundi",
      period: "Feb 2022 - Aug 2023",
      description:
        "Led cross-functional teams and managed Agile project timelines and budgets.",
      achievements: [
        "Achieved 30% faster project delivery and 20% cost savings",
      ],
    },
    {
      company: "ASYST Resources LTD",
      position: "DevOps Engineer",
      location: "Bujumbura, Burundi",
      period: "Feb 2022 - Aug 2023",
      description:
        "Implemented CI/CD practices and optimized cloud infrastructure.",
      achievements: [
        "Reduced deployment time by 40% and enhanced system reliability",
      ],
    },
    {
      company: "ASYST Resources LTD",
      position: "Software Developer",
      location: "Bujumbura, Burundi",
      period: "Jan 2017 - Feb 2022",
      description:
        "Developed and maintained web applications for government and financial systems.",
      achievements: [
        "Reduced downtime by 30% and contributed to key public sector projects",
      ],
    },
  ];

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      id="experience"
    >
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Professional Experience
        </h2>
        <p className="text-lg text-slate-600">
          A demonstrated history of software development, project management,
          and operational excellence across various industries.
        </p>
      </div>

      {/* Icon button to display the timeline, aligned to the right */}
      <div className="flex justify-end mb-8">
        <button
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all"
          onClick={() => setShowTimeline(true)}
          aria-label="Show Timeline"
        >
          <Clock className="w-6 h-6" />
        </button>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="flex-1">
                <h3 className="font-montserrat text-xl font-semibold text-slate-900 mb-1">
                  {exp.position}
                </h3>
                <div className="text-blue-600 font-medium mb-1">
                  {exp.company}
                </div>
                <div className="text-sm text-slate-500 mb-4">
                  {exp.location} • {exp.period}
                </div>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div>
              <h4 className="font-montserrat text-sm font-medium text-slate-900 mb-4">
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Modal */}
      {showTimeline && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowTimeline(false)}
        >
          <div
            className="bg-white max-w-7xl w-full h-[90vh] mx-4 p-6 rounded-lg shadow-lg overflow-y-scroll relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setShowTimeline(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-center mb-6">
              Professional Timeline
            </h3>

            {/* Animated Timeline with Circles and Connecting Lines */}
            <div className="relative">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-4 mb-8 opacity-100 translate-y-0 transition-opacity duration-500"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Circle and Connecting Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <Clock className="w-4 h-4" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 bg-blue-600 h-full mt-1" />
                    )}
                  </div>

                  {/* Simplified Experience Content */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 w-full">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-slate-500">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="font-montserrat text-lg font-semibold text-slate-900">
                      {exp.company}
                    </h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">
                      {exp.achievements[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
