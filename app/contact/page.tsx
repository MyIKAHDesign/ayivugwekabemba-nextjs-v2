"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-[#F5F7F8] text-[#141619] p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-[#0A21C0] hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#0A21C0] hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="bg-[#0A21C0] text-white px-4 py-2 rounded hover:bg-[#050A44]">
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <Link href="/" className="text-[#0A21C0] hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
