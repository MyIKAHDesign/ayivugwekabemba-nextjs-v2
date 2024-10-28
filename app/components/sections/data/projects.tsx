// data/projects.ts
export interface Project {
  title: string;
  description: string;
  icon: string; // We'll store SVG paths or component names here
  link: string;
}

export const projects: Project[] = [
  {
    title: "Ibufuliiru",
    description:
      "My main project focusing on preserving and promoting Kifuliiru language and culture through digital innovation and community engagement.",
    icon: "Rocket", // We'll use Lucide icons
    link: "https://ibufuliiru.com",
  },
  {
    title: "Kifuliiru",
    description:
      "A comprehensive platform dedicated to the documentation, teaching, and preservation of the Kifuliiru language for future generations.",
    icon: "Languages",
    link: "https://kifuliiru.com",
  },
  {
    title: "Kifuliiru.net",
    description:
      "Interactive learning platform offering structured courses, resources, and tools for mastering the Kifuliiru language.",
    icon: "Globe",
    link: "https://kifuliiru.net",
  },
  {
    title: "Imyazi mu Kifuliiru",
    description:
      "Digital media agency creating engaging content in Kifuliiru, from educational materials to cultural documentaries.",
    icon: "Newspaper",
    link: "https://imyazi.kifuliiru.com",
  },
  {
    title: "Radio Ibufuliiru",
    description:
      "Community radio station broadcasting news, cultural programs, and educational content in the Kifuliiru language.",
    icon: "Radio",
    link: "https://radio.ibufuliiru.com",
  },
  {
    title: "Digital Dictionary",
    description:
      "Comprehensive digital dictionary and language resource featuring Kifuliiru words, phrases, and cultural context.",
    icon: "BookOpen",
    link: "https://dictionary.kifuliiru.com",
  },
];
