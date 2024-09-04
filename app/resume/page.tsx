"use client";

import { jsPDF } from "jspdf"; 
import styles from './global.module.css'; // Adjust the path as necessary

export default function Resume() {
  const handleDownload = () => {
    const pdfUrl = '/path/to/your/resume.pdf'; // Update with the actual path to your PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'My_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Resume</h1>
        
        <p className="mb-4">Welcome to my resume page! Here you can find my professional background, skills, and experiences. Feel free to download my resume in PDF format using the button below.</p>

        <div className="mt-8">
          <button 
            onClick={handleDownload} 
            className="bg-[#0A21C0] text-white px-4 py-2 rounded hover:bg-[#050A44]"
          >
            Download Resume PDF
          </button>
        </div>
        
      </div>
    </div>
  );
}
