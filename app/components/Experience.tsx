"use client";

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      company: "Amazon Fulfillment Center",
      position: "Fulfillment Center Associate",
      location: "Spokane, WA",
      period: "Sep 2024 - Present",
      description:
        "Efficiently manage the picking, packing, and shipping of customer orders in a fast-paced environment. Maintain quality standards and ensure timely deliveries while adhering to safety protocols and operational goals.",
      achievements: [
        "Pick, pack, and ship customer orders, ensuring timely delivery and compliance with quality standards",
        "Collaborate with team members to meet daily performance goals and contribute to a smooth workflow",
        "Improved order accuracy rates by maintaining attention to detail, leading to a higher customer satisfaction score",
      ],
    },
    {
      company: "Walmart",
      position: "Field Associate",
      location: "Spokane Valley, WA",
      period: "Nov 2023 - Sep 2024",
      description:
        "Responsible for inventory management, ensuring stock accuracy, and providing excellent customer service. Assisted in maintaining smooth store operations by restocking shelves and addressing customer inquiries.",
      achievements: [
        "Handled inventory restocking and ensured accuracy in managing stock levels",
        "Assisted customers with inquiries, improving their shopping experience",
        "Implemented improvements in inventory management that reduced discrepancies by 10%",
      ],
    },
    {
      company: "ASYST Resources LTD",
      position: "Project Manager",
      location: "Bujumbura, Burundi",
      period: "Feb 2022 - Aug 2023",
      description:
        "Implemented Agile methodologies, specifically Scrum and Kanban, to lead and manage projects effectively across cross-functional teams. Managed stakeholder communication and project tracking tools while maintaining timelines and budgets.",
      achievements: [
        "Led cross-functional teams through the project lifecycle, ensuring effective planning and execution",
        "Managed tools like JIRA, Confluence, and Slack to enhance team coordination",
        "Improved project timelines by 30% through streamlined communication",
        "Maintained project budgets, achieving 20% cost savings across projects",
      ],
    },
    {
      company: "ASYST Resources LTD",
      position: "DevOps Engineer",
      location: "Bujumbura, Burundi",
      period: "Feb 2022 - Aug 2023",
      description:
        "Implemented CI/CD practices and managed cloud infrastructures on AWS and Heroku. Developed optimization processes using GitHub Actions and mentored team members in DevOps practices.",
      achievements: [
        "Implemented CI/CD pipelines using GitHub Actions for automated deployment",
        "Managed cloud (AWS, Heroku) and on-premise infrastructure",
        "Reduced deployment time by 40% through automated processes",
        "Enhanced system reliability through optimized cloud infrastructure",
      ],
    },
    {
      company: "ASYST Resources LTD",
      position: "Software Developer",
      location: "Bujumbura, Burundi",
      period: "Jan 2017 - Feb 2022",
      description:
        "Developed and maintained software solutions for government and financial systems, focusing on web-based applications using Java, RichFaces, and PrimeFaces.",
      achievements: [
        "Developed web applications using Java, RichFaces, and PrimeFaces",
        "Conducted code reviews and debugging to enhance performance",
        "Reduced system downtime by 30% through optimization",
        "Contributed to Public Procurement and Internal Tax Software development",
      ],
    },
  ];

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      id="experience"
    >
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Professional Experience
        </h2>
        <p className="text-lg text-slate-600">
          A demonstrated history of software development, project management,
          and operational excellence across various industries.
        </p>
      </div>

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
    </section>
  );
};

export default ExperienceSection;
