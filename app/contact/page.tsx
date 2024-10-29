"use client";

import React, { useState, ChangeEvent } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Failed to send message: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a question or want to collaborate? I`&apos;d love to hear from
            you. Send me a message and I`&apos;ll respond as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-opacity-20 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-opacity-20 outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-opacity-20 outline-none transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="bg-slate-900 dark:bg-slate-700 text-white 
           px-8 py-4 rounded-lg 
           hover:bg-slate-800 dark:hover:bg-slate-600 
           transition-colors font-semibold 
           w-full sm:w-auto text-base
           focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-400 focus:ring-opacity-20
           inline-flex items-center justify-center space-x-2
           shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Mail size={20} className="ml-2" />
              <span>Send Message</span>
            </button>

            {status && (
              <p
                className={`text-center text-sm ${
                  status.includes("success")
                    ? "text-green-600"
                    : "text-slate-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
