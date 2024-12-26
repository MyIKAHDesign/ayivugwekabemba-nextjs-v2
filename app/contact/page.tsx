"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

declare global {
  interface Window {
    handleCaptchaVerify: () => void;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    window.handleCaptchaVerify = function handleCaptchaVerify() {
      setCaptchaVerified(true);
    };
  }, []);

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
    if (!captchaVerified) {
      setStatus("Please verify the captcha before submitting.");
      return;
    }
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
        setStatus(
          `Failed to send message: ${data.error}. ${data.details || ""}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className={`relative min-h-screen font-inter py-40 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-slate-950 via-[#1c1917] to-slate-950 text-white"
          : "bg-gradient-to-b from-slate-50 via-orange-50/80 to-white text-slate-900"
      }`}
    >
      {/* Added max width container */}
      <div className="max-w-3xl w-full">
        {/* Card Container */}
        <div
          className={`${
            darkMode
              ? "bg-slate-900/50 border border-slate-800"
              : "bg-white/70 border border-orange-100"
          } backdrop-blur-sm rounded-2xl shadow-lg p-8 transition-all duration-300`}
        >
          <h1
            className={`text-4xl font-inter font-bold mb-8 text-center transition-colors duration-300 ${
              darkMode ? "text-white" : "text-orange-600"
            }`}
          >
            Contact Me
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? "text-slate-200" : "text-slate-700"
                }`}
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
                className={`w-full p-3 border rounded-lg transition-all duration-300 font-inter focus:ring-2 focus:outline-none ${
                  darkMode
                    ? "bg-slate-800 text-white border-slate-700 focus:border-slate-500 focus:ring-slate-500/20"
                    : "bg-white text-slate-900 border-orange-200 focus:border-orange-300 focus:ring-orange-200/20"
                }`}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? "text-slate-200" : "text-slate-700"
                }`}
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
                className={`w-full p-3 border rounded-lg transition-all duration-300 font-inter focus:ring-2 focus:outline-none ${
                  darkMode
                    ? "bg-slate-800 text-white border-slate-700 focus:border-slate-500 focus:ring-slate-500/20"
                    : "bg-white text-slate-900 border-orange-200 focus:border-orange-300 focus:ring-orange-200/20"
                }`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? "text-slate-200" : "text-slate-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full p-3 border rounded-lg transition-all duration-300 font-inter focus:ring-2 focus:outline-none ${
                  darkMode
                    ? "bg-slate-800 text-white border-slate-700 focus:border-slate-500 focus:ring-slate-500/20"
                    : "bg-white text-slate-900 border-orange-200 focus:border-orange-300 focus:ring-orange-200/20"
                }`}
                rows={4}
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div
              className="h-captcha"
              data-sitekey="fa60f84c-aa6a-4316-bbd4-a9183c9201ba"
              data-callback="handleCaptchaVerify"
            ></div>

            <button
              type="submit"
              className={`font-inter w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                darkMode
                  ? "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                  : "bg-orange-600 text-white hover:bg-orange-700"
              }`}
            >
              Send Message
            </button>
          </form>

          {status && (
            <p
              className={`font-inter mt-6 text-center text-sm ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
