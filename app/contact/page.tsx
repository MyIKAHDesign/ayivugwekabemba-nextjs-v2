"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

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
    const script = document.createElement("script");
    script.src = "https://hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
  };

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
        setCaptchaVerified(false); // Reset captcha after successful submission
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

  return (
    <section
      className={`relative min-h-screen font-montserrat py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-6xl w-full">
        <h1
          className={`text-4xl font-montserrat font-bold mb-8 transition-colors duration-300 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded transition-colors duration-300 font-montserrat ${
                darkMode
                  ? "bg-slate-800 text-white border-slate-700"
                  : "bg-white text-slate-900 border-slate-300"
              }`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded transition-colors duration-300 font-montserrat ${
                darkMode
                  ? "bg-slate-800 text-white border-slate-700"
                  : "bg-white text-slate-900 border-slate-300"
              }`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded transition-colors duration-300 font-montserrat ${
                darkMode
                  ? "bg-slate-800 text-white border-slate-700"
                  : "bg-white text-slate-900 border-slate-300"
              }`}
              rows={4}
            ></textarea>
          </div>
          <div
            className="h-captcha"
            data-sitekey="2ab2eacc-45b8-4410-94ce-977c2540e5d0"
            data-callback="handleCaptchaVerify"
          ></div>
          <button
            type="submit"
            className={`bg-[#0A21C0] text-white px-4 py-2 rounded transition-colors duration-300 font-montserrat ${
              darkMode ? "hover:bg-[#050A44]" : "hover:bg-blue-700"
            }`}
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </section>
  );
}
