"use client";

import { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false); // Added state for captcha verification

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true); // Set captcha as verified
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target; // Destructure name and value from the event target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field in formData
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaVerified) { // Check if captcha is verified
      setStatus('Please verify the captcha before submitting.');
      return;
    }
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Failed to send message: ${data.error}. ${data.details || ''}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://hcaptcha.com/1/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange} // Updated to use handleChange
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
            onChange={handleChange} // Updated to use handleChange
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
            onChange={handleChange} // Updated to use handleChange
            required
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <div className="h-captcha" 
             data-sitekey="2ab2eacc-45b8-4410-94ce-977c2540e5d0" 
             data-callback={handleCaptchaVerify} // Added callback for captcha verification
        ></div>
        <button type="submit" className="bg-[#0A21C0] text-white px-4 py-2 rounded hover:bg-[#050A44]">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
      
    </div>
  );
}



