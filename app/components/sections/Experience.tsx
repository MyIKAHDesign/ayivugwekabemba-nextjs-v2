// components/sections/Experience.tsx
"use client";

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const Experience = () => {
  const experiences: Experience[] = [
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Company Name",
      description:
        "Developed and maintained web applications using Java and Python.",
    },
    // Add more experiences
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-32 md:text-right md:pr-8 py-2 font-bold text-slate-600 dark:text-slate-300">
                {exp.year}
              </div>
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-bold mb-2">{exp.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  {exp.company}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
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
