import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the Kifuliiru Platform Project?",
      answer:
        "The Kifuliiru Platform Project is a comprehensive digital initiative aimed at preserving and promoting the Kifuliiru language and Bafuliiru cultural heritage. It includes an interactive dictionary, educational resources, and cultural documentation tools, all designed to ensure the language's vitality for future generations.",
    },
    {
      question:
        "How can I contribute to the Kifuliiru language preservation efforts?",
      answer:
        "There are several ways to contribute: you can help with word translations, share cultural stories, record audio pronunciations, or participate in our community review process. Contact us to learn more about becoming a contributor or to share your knowledge of the Kifuliiru language and culture.",
    },
    {
      question: "What technologies do you use in your projects?",
      answer:
        "We utilize modern web technologies including Next.js, TypeScript, and cloud services to build scalable and accessible platforms. Our tech stack is chosen to ensure reliability, performance, and ease of use while maintaining the highest standards of language preservation.",
    },
    {
      question: "Are you open to collaborations or partnerships?",
      answer:
        "Yes! We actively seek collaborations with cultural institutions, language preservation organizations, and technology partners who share our vision. Whether you're a researcher, developer, or organization interested in language preservation, we'd love to explore potential partnerships.",
    },
    {
      question:
        "How can I access the Kifuliiru dictionary and learning resources?",
      answer:
        "Our digital resources are available through various platforms including our web application, mobile apps, and downloadable content. Visit our dictionary platform or contact us for specific access requirements and available learning materials.",
    },
    {
      question: "What makes your approach to language preservation unique?",
      answer:
        "Our approach combines traditional language preservation methods with modern technology, creating an interactive and engaging platform. We focus on community involvement, authentic content creation, and accessibility, ensuring that our resources serve both current speakers and future learners.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-[#1c1917] to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-orange-50/80 to-white"
        }`}
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center
          ${
            darkMode
              ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
              : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
          }`}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`font-inter text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-orange-50" : "text-slate-900"}`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`font-inter text-xl leading-relaxed
            ${darkMode ? "text-orange-200" : "text-slate-600"}`}
          >
            Find answers to common questions about our projects and initiatives
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden transition-all duration-500 backdrop-blur-xl border
                ${
                  darkMode
                    ? "bg-slate-800/50 border-orange-900/30"
                    : "bg-white/50 border-orange-200"
                }`}
            >
              {/* Down-up animation gradient overlay */}
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                ${
                  darkMode
                    ? "bg-gradient-to-t from-orange-950/90 via-orange-900/80 to-orange-800/90"
                    : "bg-gradient-to-t from-orange-200/80 via-orange-100/70 to-orange-50/60"
                }`}
              />

              <button
                onClick={() => toggleAccordion(index)}
                className="relative w-full text-left p-6 transition-colors duration-500 z-10"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-inter text-xl font-medium pr-8 transition-colors duration-500
                    ${darkMode ? "text-orange-50" : "text-slate-900"}
                    ${
                      darkMode
                        ? "group-hover:text-white"
                        : "group-hover:text-orange-900"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-colors duration-500
                    ${
                      darkMode
                        ? "text-orange-200 group-hover:text-white"
                        : "text-orange-600 group-hover:text-orange-900"
                    }`}
                  >
                    {activeIndex === index ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`relative overflow-hidden transition-all duration-500 z-10
                  ${activeIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <p
                  className={`p-6 pt-0 font-inter text-lg leading-relaxed transition-colors duration-500
                  ${darkMode ? "text-orange-200" : "text-slate-600"}
                  ${
                    darkMode
                      ? "group-hover:text-orange-100"
                      : "group-hover:text-orange-800"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
          ${darkMode ? "via-orange-900/30" : "via-orange-200"} 
          to-transparent`}
        />
      </div>
    </section>
  );
};

export default FAQ;
