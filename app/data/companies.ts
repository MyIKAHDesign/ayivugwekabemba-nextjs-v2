export interface Company {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  type: "company" | "subcompany" | "product";
  status?: "Active" | "Development";
  category?: string;
  externalUrl?: string;
  ctaButtons?: Array<{
    label: string;
    url: string;
    primary?: boolean;
  }>;
  overview?: string | string[];
  features?: Array<{
    title: string;
    description: string;
  }>;
  sections?: Array<{
    title: string;
    content: string | string[];
    type?: "text" | "features" | "list" | "ordered-list" | "stats";
    stats?: Array<{
      number: string;
      label: string;
    }>;
  }>;
  relatedCompanies?: string[];
}

export const companies: Company[] = [
  // Companies
  {
    id: "wekify-llc",
    name: "Wekify LLC",
    slug: "wekify-llc",
    description:
      "Provides technical development and engineering expertise behind digital platforms, working to promote and provide Kifuliiru with modern and empowering digital tools.",
    shortDescription:
      "Technical development and engineering expertise for Kifuliiru digital platforms.",
    type: "company",
    overview: [
      "Wekify LLC provides the technical development and engineering expertise behind digital platforms, working to promote and provide Kifuliiru with modern and empowering digital tools.",
      "The company specializes in building comprehensive digital ecosystems that support language preservation, cultural heritage, and community engagement through innovative technology solutions.",
    ],
    relatedCompanies: ["kifuliiru-lab"],
  },
  // Subcompanies
  {
    id: "kifuliiru-lab",
    name: "Kifuliiru Lab",
    slug: "kifuliiru-lab",
    description:
      "Part of Wekify LLC, specializing in language-related needs and serving as the dedicated research laboratory for Kifuliiru language preservation and revitalization.",
    shortDescription:
      "Research laboratory for Kifuliiru language preservation and revitalization.",
    type: "subcompany",
    overview: [
      "Kifuliiru Lab is part of Wekify LLC, specializing in language-related needs and serving as the dedicated research laboratory for Kifuliiru language preservation and revitalization.",
      "The lab focuses on developing innovative solutions for language documentation, digital preservation, and community engagement, working closely with language experts and community members to ensure authentic and comprehensive language resources.",
    ],
    relatedCompanies: ["wekify-llc"],
  },
  // Products
  {
    id: "tabula-kifuliiru",
    name: "Tabula Kifuliiru",
    slug: "tabula-kifuliiru",
    description:
      "A comprehensive web application platform for creating and managing Kifuliiru language content",
    shortDescription:
      "Web app contribution platform for admins and contributors to create and manage Kifuliiru content.",
    type: "product",
    status: "Active",
    category: "Web App",
    externalUrl: "https://tabula.kifuliiru.com",
    ctaButtons: [
      {
        label: "Access Dashboard →",
        url: "https://tabula.kifuliiru.com",
        primary: true,
      },
      {
        label: "Learn More →",
        url: "https://about.tabula.kifuliiru.com",
        primary: false,
      },
    ],
    overview: [
      "Tabula Kifuliiru consists of two main parts: the dashboard platform and the public information site. The dashboard is a web application contribution platform designed for admins and contributors to create and manage Kifuliiru language content. It serves as the central dashboard for content creation, management, and community engagement in the Kifuliiru digital ecosystem.",
      "Created by Ayivugwe Kabemba Mukome with AI assistance for development, Tabula Kifuliiru enables systematic content generation and community validation, supporting our mission to preserve and revitalize the Kifuliiru language.",
    ],
    features: [
      {
        title: "Content Management",
        description:
          "Comprehensive content management system supporting multiple content types including dictionary entries, verbs, numbers, conjugation rules, and educational materials.",
      },
      {
        title: "Role-Based Access",
        description:
          "Flexible user roles including Admin, Editor, Contributor, and Viewer, each with appropriate permissions for content creation, editing, and management.",
      },
      {
        title: "Dictionary Management",
        description:
          "Full dictionary management system for creating and organizing Kifuliiru words, phrases, and definitions with pronunciation guides.",
      },
      {
        title: "Verb Conjugation Tools",
        description:
          "Advanced conjugation system with tools for managing verb conjugations, conjugation rules, modes, and tenses in Kifuliiru.",
      },
      {
        title: "Numbers System",
        description:
          "Complete number system management including number entries, bulk updates, and examples for educational purposes.",
      },
      {
        title: "Book Generator",
        description:
          "Tools for generating educational books and learning materials in Kifuliiru, supporting our mission to create comprehensive educational resources.",
      },
    ],
    sections: [
      {
        title: "Two Main Parts",
        type: "text",
        content: [
          "Tabula Kifuliiru consists of two separate platforms:",
          "The Dashboard: The main content management dashboard where admins and contributors create and manage Kifuliiru language content. Access the dashboard at https://tabula.kifuliiru.com.",
          "About Tabula Kifuliiru: The public-facing information website that provides platform overview, contribution guidelines, security information, and support resources. Learn more at https://about.tabula.kifuliiru.com.",
        ],
      },
      {
        title: "Integration with Kifuliiru Ecosystem",
        type: "list",
        content: [
          "Kifuliiru.com - Main learning platform",
          "Imyazi.com - News platform",
          "Kifuliiru HQ - Mobile application",
          "Other Kifuliiru digital platforms",
        ],
      },
    ],
    relatedCompanies: ["kifuliiru-com", "imyazi-com"],
  },
  {
    id: "kifuliiru-com",
    name: "Kifuliiru.com",
    slug: "kifuliiru-com",
    description:
      "The main Kifuliiru language website and comprehensive digital ecosystem for learning, cultural preservation, and community engagement",
    shortDescription:
      "Main Kifuliiru language website and comprehensive digital ecosystem.",
    type: "product",
    status: "Active",
    category: "Website",
    externalUrl: "https://kifuliiru.com",
    ctaButtons: [
      {
        label: "Visit Kifuliiru.com →",
        url: "https://kifuliiru.com",
        primary: true,
      },
    ],
    overview: [
      "Kifuliiru.com is the main Kifuliiru language website and comprehensive digital ecosystem created by Ayivugwe Kabemba Mukome with AI assistance for development. It serves as the central hub for Kifuliiru language learning, cultural preservation, and community engagement.",
      "The platform provides access to extensive educational resources, interactive learning tools, cultural content, and community features designed to support both native speakers and learners of the Kifuliiru language.",
    ],
    features: [
      {
        title: "Educational Resources",
        description:
          "Access to extensive educational materials including a goal of 141,000+ educational books (projected), covering numbers, mathematics, grammar, vocabulary, and cultural content.",
      },
      {
        title: "Audio Resources",
        description:
          "Over 8GB of voice recordings from native Kifuliiru speakers, including pronunciation guides, numbers audio, cultural narratives, and language learning materials.",
      },
      {
        title: "Interactive Learning Tools",
        description:
          "Powerful tools including Text Processor for working with Kifuliiru texts and Math Operations for learning mathematical terms in Kifuliiru.",
      },
      {
        title: "Cultural Content",
        description:
          "Comprehensive cultural heritage content including Ibufuliiru (homeland), Abaandu (people profiles), and Abafuliiru (community content).",
      },
      {
        title: "Mobile App Integration",
        description:
          "Seamless integration with Kifuliiru HQ mobile application for iOS and Android, providing offline access and synchronized content.",
      },
    ],
    sections: [
      {
        title: "Platform Impact",
        type: "stats",
        content: [],
        stats: [
          { number: "141,000+", label: "Educational Books (Projected)" },
          { number: "8GB+", label: "Audio Resources" },
          { number: "4", label: "Languages Supported" },
          { number: "12+", label: "Connected Platforms" },
        ],
      },
      {
        title: "Integration with Digital Ecosystem",
        type: "list",
        content: [
          "Tabula Kifuliiru - Content management and contribution platform",
          "Imyazi.com - News platform",
          "Radio Ibufuliiru - Audio broadcasting platform",
          "Kifuliiru HQ - Mobile application",
          "Dictionary Platform - Dictionary.kifuliiru.net",
          "Other Kifuliiru digital platforms",
        ],
      },
    ],
    relatedCompanies: ["tabula-kifuliiru", "imyazi-com"],
  },
  {
    id: "imyazi-com",
    name: "Imyazi.com",
    slug: "imyazi-com",
    description:
      "News website providing updates and information relevant to the Kifuliiru community (Bufuliiru) in Kifuliiru and other languages. 'Imyazi' means 'The News' in Kifuliiru.",
    shortDescription:
      "Multilingual news platform for the Bufuliiru community.",
    type: "product",
    status: "Development",
    category: "News Platform",
    externalUrl: "https://imyazi.com",
    ctaButtons: [
      {
        label: "Visit Imyazi.com →",
        url: "https://imyazi.com",
        primary: true,
      },
    ],
    overview: [
      "Imyazi.com is a news platform created by Ayivugwe Kabemba Mukome, providing news and information relevant to the Bufuliiru community in Kifuliiru, English, French, and Kiswahili. The platform serves as a vital source of information for the Kifuliiru-speaking community worldwide.",
      "Currently in active development, Imyazi.com represents an important step in creating digital media presence for the Kifuliiru language, ensuring that community members have access to news and information in their native language.",
    ],
    features: [
      {
        title: "Multilingual News",
        description:
          "News content available in Kifuliiru, English, French, and Kiswahili, ensuring accessibility for the global Bafuliiru community.",
      },
      {
        title: "Radio Integration",
        description:
          "Live integration with Radio Ibufuliiru, providing live streaming and access to audio programs directly from the website.",
      },
      {
        title: "Community Features",
        description:
          "People profiles, community-focused content, and engagement features for the Bafuliiru community.",
      },
    ],
    sections: [
      {
        title: "Radio Ibufuliiru Integration",
        type: "text",
        content: [
          "Imyazi.com features deep integration with Radio Ibufuliiru (available on Imyazi.com, Substack, Spotify, Amazon Music, and Audible.com), providing:",
          "Live radio streaming directly from the website",
          "Audio playlists and program archives",
          "Information about radio programs and schedules",
          "Immersive audio player for enhanced listening experience",
        ],
      },
      {
        title: "Integration with Kifuliiru Ecosystem",
        type: "list",
        content: [
          "Kifuliiru.com - Main learning platform",
          "Tabula Kifuliiru - Content management platform",
          "Radio Ibufuliiru - Audio broadcasting platform",
          "Other Kifuliiru digital platforms",
        ],
      },
    ],
    relatedCompanies: ["tabula-kifuliiru", "kifuliiru-com"],
  },
  {
    id: "wempily",
    name: "Wempily",
    slug: "wempily",
    description:
      "Multi-Platform Project Management System for Kifuliiru Lab - Managing all our projects easily with the help of AI agents",
    shortDescription:
      "Multi-Platform Project Management System with AI agents.",
    type: "product",
    status: "Active",
    category: "Internal Tool",
    externalUrl: "https://wempily.com",
    ctaButtons: [
      {
        label: "Try Wempily →",
        url: "https://wempily.com",
        primary: true,
      },
    ],
    overview: [
      "Wempily (Wekify MP) is an internal project management system designed specifically for Kifuliiru Lab's multi-platform ecosystem under Wekify LLC. It serves as the central coordination tool that helps us manage all our multiple projects easily with the help of AI agents.",
      "While Wempily itself is not a public-facing product, it plays a crucial role in enabling our development workflow, tracking feature development across platforms, and ensuring consistent implementation across our entire digital ecosystem.",
    ],
    sections: [
      {
        title: "The Name: Wempily",
        type: "text",
        content: [
          'The name "Wempily" comes from "Wekify MP" (Multi-Platform). Originally intended to be "Wekify PM" (Project Management), it was written as "MP" in a hurry. However, "MP" to form "Wemp" was found to be more concise and resonant than "PM" to form "Wepm", which doesn\'t resonate at all. The name evolved to "Wempily" to better reflect its purpose and identity.',
        ],
      },
      {
        title: "Key Features",
        type: "text",
        content: [
          "Project Tracking: Comprehensive tracking of all projects in the Kifuliiru Lab ecosystem",
          "Feature Management: Catalog of features that can be implemented across projects",
          "Implementation Status: Track which features are implemented in which projects",
          "Task Management: Kanban boards and sprints for organized development",
          "Team Coordination: Track who's working on what across all projects",
          "AI Agent Integration: Leverage AI agents to help manage and coordinate development",
          "Cross-Platform Parity: Ensure consistent features across all platforms",
        ],
      },
    ],
    relatedCompanies: ["tabula-kifuliiru", "kifuliiru-com", "imyazi-com"],
  },
  {
    id: "kifuliiru-net",
    name: "Kifuliiru.net",
    slug: "kifuliiru-net",
    description:
      "Purely in Kifuliiru - our first platform where we started writing numbers one by one. Numbers from here were used to generate formulas. 100% content created by Ayivugwe Kabemba Mukome without AI assistance.",
    shortDescription:
      "First Kifuliiru platform - 100% content created without AI assistance.",
    type: "product",
    status: "Active",
    category: "Learning Platform",
    externalUrl: "https://kifuliiru.net",
    overview: [
      "Kifuliiru.net is our first platform, created purely in Kifuliiru. This is where we started writing numbers one by one, and the numbers from here were used to generate formulas for our systematic content generation approach.",
      "100% of the content was created by Ayivugwe Kabemba Mukome without AI assistance, making it a foundational platform in our language preservation journey.",
    ],
    relatedCompanies: ["kifuliiru-com"],
  },
  {
    id: "dictionary-kifuliiru-net",
    name: "dictionary.kifuliiru.net",
    slug: "dictionary-kifuliiru-net",
    description:
      "Kifuliiru dictionary and language reference. All content created by Ayivugwe Kabemba Mukome.",
    shortDescription: "Kifuliiru dictionary and language reference.",
    type: "product",
    status: "Active",
    category: "Dictionary",
    externalUrl: "https://dictionary.kifuliiru.net",
    overview: [
      "dictionary.kifuliiru.net is a comprehensive Kifuliiru dictionary and language reference platform. All content was created by Ayivugwe Kabemba Mukome, providing authentic and accurate Kifuliiru language resources.",
      "The platform serves as an essential reference tool for learners and native speakers alike, supporting language learning and preservation efforts.",
    ],
    relatedCompanies: ["kifuliiru-com"],
  },
  {
    id: "lola-kifuliiru-com",
    name: "lola.kifuliiru.com",
    slug: "lola-kifuliiru-com",
    description:
      "Social media platform for Kifuliiru community. Created by Ayivugwe Kabemba Mukome with AI assistance for development, including Kifuliiru translations.",
    shortDescription: "Social media platform for Kifuliiru community.",
    type: "product",
    status: "Active",
    category: "Social Media",
    externalUrl: "https://lola.kifuliiru.com",
    overview: [
      "lola.kifuliiru.com is a social media platform designed specifically for the Kifuliiru community. Created by Ayivugwe Kabemba Mukome with AI assistance for development, including Kifuliiru translations.",
      "The platform enables community members to connect, share content, and engage with each other in Kifuliiru, fostering a digital space for cultural exchange and language practice.",
    ],
    relatedCompanies: ["kifuliiru-com"],
  },
  {
    id: "radio-ibufuliiru",
    name: "Radio Ibufuliiru",
    slug: "radio-ibufuliiru",
    description:
      "Audio broadcasting platform available on Imyazi.com, Substack, Spotify, Amazon Music, Audible.com, and more. All content created by Ayivugwe Kabemba Mukome.",
    shortDescription:
      "Audio broadcasting platform across multiple platforms.",
    type: "product",
    status: "Active",
    category: "Audio Platform",
    externalUrl: "https://imyazi.com/radio-ibufuliiru",
    overview: [
      "Radio Ibufuliiru is an audio broadcasting platform that makes Kifuliiru content available across multiple platforms including Imyazi.com, Substack, Spotify, Amazon Music, Audible.com, and more.",
      "All content is created by Ayivugwe Kabemba Mukome. While we use existing platforms to distribute the content, the audio programs, podcasts, and broadcasts are all original Kifuliiru content created for the community.",
    ],
    relatedCompanies: ["imyazi-com"],
  },
  {
    id: "imyazi-mu-kifuliiru",
    name: "Imyazi mu Kifuliiru",
    slug: "imyazi-mu-kifuliiru",
    description:
      "News and content in Kifuliiru on Substack. All content created by Ayivugwe Kabemba Mukome.",
    shortDescription: "News and content in Kifuliiru on Substack.",
    type: "product",
    status: "Active",
    category: "Newsletter",
    externalUrl: "https://imyazi.substack.com",
    overview: [
      "Imyazi mu Kifuliiru is a newsletter and news platform on Substack, providing news and content in Kifuliiru. All content is created by Ayivugwe Kabemba Mukome.",
      "We use the Substack platform to distribute Kifuliiru language news and content, reaching a wider audience through this established platform while maintaining authentic Kifuliiru language content.",
    ],
    relatedCompanies: ["imyazi-com"],
  },
  {
    id: "kifuliiru-ndeto-ngale",
    name: "Kifuliiru Ndeto ngale",
    slug: "kifuliiru-ndeto-ngale",
    description:
      "100% content in Kifuliiru. Designed and content created by Ayivugwe Kabemba Mukome without AI assistance.",
    shortDescription:
      "Educational site with 100% content in Kifuliiru.",
    type: "product",
    status: "Active",
    category: "Educational Site",
    externalUrl: "https://ibufuliiru.wixstudio.com/kifuliiru",
    overview: [
      "Kifuliiru Ndeto ngale is an educational site with 100% content in Kifuliiru. Both the design and content were created by Ayivugwe Kabemba Mukome without AI assistance.",
      "This platform represents a pure, authentic approach to Kifuliiru language content creation, serving as an educational resource for the community.",
    ],
    relatedCompanies: ["kifuliiru-com"],
  },
  {
    id: "ibufuliiru-tumenye",
    name: "Ibufuliiru / Tumenye Ibufuliiru",
    slug: "ibufuliiru-tumenye",
    description:
      "100% content in Kifuliiru. Designed and content created by Ayivugwe Kabemba Mukome without AI assistance. Cultural site focusing on Ibufuliiru, the homeland of the Bafuliiru people.",
    shortDescription:
      "Cultural site with 100% content in Kifuliiru.",
    type: "product",
    status: "Active",
    category: "Cultural Site",
    externalUrl: "https://ibufuliiru.wixstudio.com/ibufuliiru",
    overview: [
      "Ibufuliiru / Tumenye Ibufuliiru is a cultural site with 100% content in Kifuliiru. Both the design and content were created by Ayivugwe Kabemba Mukome without AI assistance.",
      "This platform focuses on cultural heritage and information about Ibufuliiru, the homeland of the Bafuliiru people, preserving and sharing cultural knowledge in the native language.",
    ],
    relatedCompanies: ["kifuliiru-com"],
  },
  {
    id: "kifuliiru-hq",
    name: "Kifuliiru HQ",
    slug: "kifuliiru-hq",
    description:
      "Mobile application built with Flutter for Android and iOS. Currently in development and testing phase. All content created by Ayivugwe Kabemba Mukome.",
    shortDescription:
      "Mobile application for Android and iOS (in development).",
    type: "product",
    status: "Development",
    category: "Mobile App",
    externalUrl: "https://kifuliiru.com/app",
    overview: [
      "Kifuliiru HQ is a mobile application built with Flutter for both Android and iOS platforms. Currently in development and testing phase, the app will provide mobile access to Kifuliiru learning resources.",
      "All content is created by Ayivugwe Kabemba Mukome. The app is designed to work seamlessly with Kifuliiru.com, providing offline access and synchronized content across platforms.",
    ],
    relatedCompanies: ["kifuliiru-com"],
  },
  {
    id: "fuliiru-hub",
    name: "Fuliiru Hub",
    slug: "fuliiru-hub",
    description:
      "Your gateway to Ibufuliiru, our motherland. Discover, learn, and contribute to the preservation of Kifuliiru. Join our mission to document and celebrate the richness of our heritage.",
    shortDescription: "Gateway to Ibufuliiru, our motherland.",
    type: "product",
    status: "Active",
    category: "Web Platform",
    externalUrl: "https://fuliiruhub.com",
    ctaButtons: [
      {
        label: "Visit Fuliiru Hub →",
        url: "https://fuliiruhub.com",
        primary: true,
      },
    ],
    overview: [
      "Fuliiru Hub is your gateway to Ibufuliiru, our motherland. It is a platform designed to help you discover, learn, and contribute to the preservation of Kifuliiru.",
      "Join our mission to document and celebrate the richness of our heritage. The platform serves as a central hub for connecting with Ibufuliiru culture, language, and community.",
    ],
    relatedCompanies: ["kifuliiru-com"],
  },
  {
    id: "kifuliiru-data-generators",
    name: "Kifuliiru Data Generators",
    slug: "kifuliiru-data-generators",
    description:
      "Data generation system for creating Kifuliiru language content at scale. Supports systematic content generation for educational materials.",
    shortDescription:
      "Data generation system for Kifuliiru language content.",
    type: "product",
    status: "Active",
    category: "Development Tool",
    overview: [
      "Kifuliiru Data Generators is a data generation system designed for creating Kifuliiru language content at scale. It supports systematic content generation for educational materials.",
      "This internal tool enables the efficient creation of large volumes of educational content, supporting our goal of generating 141,000+ educational books and materials for the Kifuliiru language.",
    ],
    relatedCompanies: ["kifuliiru-com", "tabula-kifuliiru"],
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}

export function getAllCompanies(): Company[] {
  return companies;
}

export function getAllCompanySlugs(): string[] {
  return companies.map((company) => company.slug);
}

