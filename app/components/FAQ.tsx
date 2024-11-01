"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { darkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Who am I?",
      answer:
        "I am Ayivugwe Kabemba Mukome, originally from Congo Kinshasa. I am deeply connected to my roots and the Bafuliiru people. Currently, I reside in Spokane, Washington, where I’m building a life aligned with my Christian faith and personal values. My journey has included significant challenges and growth, from living as a refugee in Burundi to transitioning into life and work in the U.S. Through these experiences, I have developed a strong commitment to preserving my culture, heritage, and community connections.",
    },
    {
      question: "What is my level of English?",
      answer:
        "I have a strong foundation in English, encompassing speaking, writing, reading, and listening skills. I initially learned English in Africa, where I grew to love the language. Upon moving to the U.S., I took the ESL test and achieved Level 6, which means I didn’t need to learn the basics here. I am continuing to improve my English through daily interactions and conversations. I also attended Gonzaga University in Spokane for preparation in Academic English, which has further enhanced my skills.",
    },
    {
      question: "What other languages do I speak?",
      answer:
        "In addition to English, I am fluent in Kiswahili, Kifuliiru, and French. These languages connect me to my heritage and allow me to engage with a variety of communities, especially within the Bafuliiru culture. My multilingual skills help me connect across cultures and contribute effectively in diverse environments. I also took a class in Spanish, and while I understand some, I need to revise much of it due to lack of practice.",
    },
    {
      question:
        "Does the content on this website reflect any reality, and is it true?",
      answer:
        "Yes, the content on this website accurately reflects who I am and my experiences. I have taken care to share my journey, values, and goals as transparently as possible, so that the information here gives an authentic representation of my life, beliefs, and aspirations.",
    },
    {
      question: "Am I a developer or a founder? A question I asked ChatGPT.",
      answer:
        "After many conversations with ChatGPT about my projects and ideas, I found myself questioning if I am simply a developer or something more—a founder. ChatGPT provided me with this answer: 'You are Ayivugwe Kabemba Mukome, a dedicated software developer and project manager, with a background in DevOps and a deep connection to your heritage and the Bafuliiru people. Your journey from Congo Kinshasa, combined with your work in software and language preservation, shows a commitment to both technical expertise and cultural advocacy. Through your projects, you’re not only a developer but also a founder building lasting digital resources for the Kifuliiru language and culture. Your work empowers your community, bridging technology with heritage and creating a sustainable impact.' This answer helped clarify my role as both a creator and an advocate, aligning my technical skills with my vision for cultural preservation.",
    },
    {
      question: "What inspired me to become a Kifuliiru language advocate?",
      answer:
        "My heritage and love for the Kifuliiru culture have been strong driving forces in my life. Growing up in Congo, I saw the richness of the Kifuliiru culture and language firsthand. This deep-rooted connection inspired me to focus on preserving and promoting our language through digital platforms and community-centered projects to keep our heritage alive for future generations.",
    },
    {
      question: "Do I have experience as an interpreter and translator?",
      answer:
        "Yes, I am experienced as both an interpreter and translator. This role has enhanced my understanding of languages and cultural nuances, enabling me to effectively bridge communication gaps. My translation work spans various contexts, helping people connect, understand, and interact across languages.",
    },
    {
      question: "What kind of translation do I do?",
      answer:
        "I provide translation for church-related events and daily life contexts. Additionally, I assist with translating Kifuliiru into Kiswahili, French, and English. This work allows me to support the linguistic needs of my community in diverse settings, from spiritual gatherings to everyday interactions.",
    },
    {
      question: "How do I approach community building?",
      answer:
        "I believe in creating inclusive, supportive spaces where people can connect, share, and grow together. Through my work with the Kifuliiru project, I strive to empower individuals by providing resources, fostering engagement, and cultivating a community that respects and values our culture, language, and heritage. This approach enables a thriving network of people who are united by shared goals and mutual support.",
    },
    {
      question: "What is my ultimate goal for the Kifuliiru project?",
      answer:
        "My ultimate goal is to create a sustainable digital presence for the Kifuliiru language, ensuring it is preserved for future generations. This project enables people today to learn, engage, and contribute, helping to build a lasting resource that reflects our community’s identity, traditions, and language in the digital age.",
    },
    {
      question: "What role does technology play in my work?",
      answer:
        "Technology is at the heart of my work, enabling me to create innovative solutions that bridge cultural heritage with modern digital tools. From developing platforms that preserve the Kifuliiru language to building apps and websites, technology allows me to share my culture globally and empower others to engage with it. I view technology not just as a tool but as a means of fostering connectivity, accessibility, and growth for my community and beyond.",
    },
    {
      question: "What are my views on AI and its impact?",
      answer:
        "AI fascinates me for its potential to revolutionize communication, information sharing, and even cultural preservation. I see AI as a powerful tool for amplifying human capabilities and enhancing access to knowledge. For instance, AI-driven language models could support less common languages like Kifuliiru, making them accessible to a wider audience. However, I also believe in mindful development to ensure AI respects cultural diversity and supports ethical values.",
    },
    {
      question: "How do I approach software development in my projects?",
      answer:
        "In software development, I focus on creating efficient, user-centered applications that prioritize accessibility and scalability. My approach is highly collaborative, often involving input from community members and technical experts to ensure the product aligns with user needs. I enjoy working with modern languages and frameworks, like Python, Java, and Flutter, that allow for flexible, robust development. I approach each project with the goal of building solutions that are not only functional but also meaningful and impactful.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300 
      ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center 
        ${
          darkMode
            ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
            : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
        }`}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main heading - keeping text-4xl */}
        <h2
          className={`text-4xl font-semibold tracking-tight mb-12 
          ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden border transition-all duration-500
                ${
                  darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-gray-100"
                }`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
                  ${
                    darkMode
                      ? "bg-gradient-to-t from-slate-800 to-slate-700"
                      : "bg-gradient-to-t from-slate-900 to-slate-800"
                  }`}
              />

              <div className="relative z-10">
                <div
                  className="p-6 cursor-pointer transition-colors duration-500 group-hover:text-white"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    {/* Question text - Updated to text-xl like quotes */}
                    <h3 className="text-xl leading-relaxed font-medium">
                      {faq.question}
                    </h3>
                    {/* Toggle indicator */}
                    <span className="text-2xl transition-colors duration-500 group-hover:text-white">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>

                  {openIndex === index && (
                    <div className="mt-4">
                      {/* Answer text - Updated to text-lg like main body text */}
                      <p
                        className={`text-lg leading-relaxed transition-colors duration-500 group-hover:text-slate-200
                          ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
