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

    const timelineElement = document.getElementById("about-me");
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
      id="about-me"
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
            <p className="text-slate-600 leading-relaxed mt-4">
              I&apos;m Ayivugwe Kabemba Mukome, a project manager and software
              developer deeply connected to my roots in Congo Kinshasa and the
              Bafuliiru community. My journey in the tech and project management
              fields began in Africa, where I worked with ASYST Resources LTD,
              gaining valuable experience in software development, DevOps, and
              project management. Since moving to the U.S., I&apos;ve taken on
              roles at Amazon and Walmart, continuing to broaden my skills and
              experience in both technical and operational capacities.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              At the core of my work is a project that combines my professional
              expertise with my cultural heritage. I&apos;m building the
              Ibufuliiru platform, a community-driven initiative dedicated to
              preserving the Kifuliiru language and Bafuliiru culture. Through
              platforms like Radio Ibufuliiru, Kifuliiru Ndeto Yitu, and other
              initiatives, I&apos;m creating a digital archive that captures our
              people&apos;s language, traditions, and stories. This platform
              allows contributors from all walks of life to share audio
              recordings, texts, and cultural insights, building a resource that
              future generations can access and continue to develop.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              In my professional journey, I&apos;ve dedicated myself to
              deepening my skills in backend development and data science, with
              a focus on technologies like Python and NLP. These skills are
              vital for expanding my language project, helping me create tools
              for language learning, transcription, and preservation.
              Certifications such as the Google Project Management Professional
              Certificate and Meta Back-End Developer Certificate are equipping
              me with both technical and managerial insights to drive my
              projects forward.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              In Spokane, Washington, I&apos;m exploring ways to connect my
              heritage with my new community, considering initiatives like
              renting a space for gatherings and cultural events. The Ibufuliiru
              project reflects my dedication to preserving and promoting
              Bafuliiru culture and language, bridging the gap between tradition
              and technology to ensure our cultural legacy thrives in the
              digital age.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Each step I take, from my roles at Amazon and Walmart to my
              community projects, builds toward a future where technology and
              heritage come together to make a lasting impact. My journey is all
              about making a difference, not just for myself but for my
              community and our shared heritage. I&apos;m honored to work on
              these projects and am driven by a belief that technology can be a
              bridge to preserving identity and sharing it with the world.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Each project I take on is an extension of this vision—creating
              spaces for people to connect, learn, and share knowledge that
              transcends time and place. Through Ibufuliiru, I&apos;m working to
              build a living archive that captures the spirit and voice of the
              Bafuliiru people, a space where our language and culture are
              documented and celebrated, accessible to anyone who wants to learn
              about or be part of our story.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              The platform&apos;s expansion, with tools for contributors to add
              audio, stories, and other insights, isn&apos;t just about
              preservation—it&apos;s about empowering people to be active
              participants in keeping Kifuliiru alive and thriving. This work
              reflects my commitment to merging the best of modern technology
              with the richness of our heritage, ensuring that what makes us
              unique is preserved digitally for generations to come.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              In the end, everything I&apos;m building—from the tech tools to
              the community spaces—is part of a vision to honor my roots, foster
              global understanding, and inspire future generations to take pride
              in who they are and where they come from.
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
