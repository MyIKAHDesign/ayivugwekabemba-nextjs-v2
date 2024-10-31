"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

// Define types for FAQ items
interface FAQItem {
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
}

const FAQ: React.FC = () => {
  const { darkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const faqs: FAQItem[] = [
    {
      question: "Who am I?",
      shortAnswer:
        "I am Ayivugwe Kabemba Mukome, originally from Congo Kinshasa.",
      detailedAnswer: `I am Ayivugwe Kabemba Mukome, originally from Congo Kinshasa. I am deeply connected to my roots and the Bafuliiru people, and I currently live in Spokane, Washington, in the United States. I'm a Christian, which forms an integral part of my identity and values. My journey has included significant challenges and growth, from living as a refugee in Burundi to transitioning into life and work in the US. Through these experiences, I have developed a strong commitment to my culture, heritage, and community.`,
    },
    {
      question: "Do I know English?",
      shortAnswer: "Yes, I learned English in Africa.",
      detailedAnswer: `I reached Level 6 in the English as a Second Language test, so I didn’t need to learn the basics when I moved to the US. This achievement highlights my proficiency in English and the foundation I built prior to my arrival.`,
    },
    {
      question:
        "Does the content on this website reflect any reality, and is it true?",
      shortAnswer: "Yes, it reflects who I am.",
      detailedAnswer:
        "I did my best to make it reflect my experiences, values, and journey as accurately as possible.",
    },
    {
      question: "What’s one question I asked ChatGPT?",
      shortAnswer: "I asked ChatGPT to answer 'Who Am I?'",
      detailedAnswer: `You are Ayivugwe Kabemba Mukome, a dedicated software developer and project manager, with a background in DevOps and field associate work at Walmart, now transitioning into roles aligned with your tech expertise. Originally from Congo Kinshasa, you have a deep-rooted connection to the Bafuliiru people and are fluent in Kiswahili and Kifuliiru... (continue full answer here).`,
    },
    {
      question: "What inspired me to become a Kifuliiru language advocate?",
      shortAnswer: "My heritage and love for the Kifuliiru culture.",
      detailedAnswer: `Growing up in Congo, I saw the richness of the Kifuliiru culture and language. This inspired me to work on preserving and promoting our language through digital platforms and projects.`,
    },
    {
      question: "Do I have experience as an interpreter and translator?",
      shortAnswer:
        "Yes, I am experienced as both an interpreter and translator.",
      detailedAnswer: `This experience has enhanced my understanding of languages and cultural nuances, allowing me to bridge communication gaps effectively.`,
    },
    {
      question: "What kind of translation do I do?",
      shortAnswer: "Church-related and daily life translations.",
      detailedAnswer: `I provide translations for church and day-to-day life contexts, as well as assist with Kifuliiru translation into Kiswahili, French, and English.`,
    },
    {
      question: "How do I approach community building?",
      shortAnswer: "By creating inclusive, supportive spaces.",
      detailedAnswer: `I believe in creating inclusive, supportive spaces where people can connect, share, and grow together. Through my work with the Kifuliiru project, I strive to empower individuals by providing resources and opportunities for engagement, fostering a community that values culture, language, and heritage.`,
    },
    {
      question: "What is my ultimate goal for the Kifuliiru project?",
      shortAnswer: "To create a sustainable digital presence for Kifuliiru.",
      detailedAnswer: `My ultimate goal is to create a sustainable digital presence for the Kifuliiru language, preserving it for future generations while enabling people today to learn, engage, and contribute.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };

  const handleLearnMore = (index: number) => {
    setOpenIndex(index);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="faq"
      className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-semibold tracking-tight mb-12 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
                darkMode
                  ? "bg-slate-800 text-slate-200"
                  : "bg-white text-slate-800"
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <div className="mt-2">
                  <p
                    className={`leading-relaxed ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {faq.shortAnswer}
                  </p>
                  <button
                    onClick={() => handleLearnMore(index)}
                    className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && openIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div
            className={`relative bg-white dark:bg-slate-800 max-w-lg w-full p-6 rounded-lg shadow-lg transition-all duration-300 ${
              darkMode ? "text-slate-200" : "text-slate-800"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">
              {faqs[openIndex].question}
            </h3>
            <p className="leading-relaxed mb-4">
              <strong>Short Answer:</strong> {faqs[openIndex].shortAnswer}
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Detailed Answer:</strong> {faqs[openIndex].detailedAnswer}
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQ;
