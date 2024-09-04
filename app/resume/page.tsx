"use client";

import { jsPDF } from "jspdf"; 
import styles from './global.module.css'; // Adjust the path as necessary

export default function Resume() {
  const handleDownload = () => {
    const doc = new jsPDF();
    const resumeContent = document.getElementById("resume-content")?.innerText || '';
    
    doc.text(resumeContent, 10, 10); // Add content to PDF
    doc.save("my_resume.pdf"); // Change the file name as needed
  };

  return (
    <div className={styles.container}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Resume</h1>
        <div id="resume-content">
          <h2>Ayivugwe Kabemba Mukome</h2>
          <p>[Your Address]</p>
          <p>[City, State, ZIP Code]</p>
          <p>[Phone Number]</p>
          <p>[Email Address]</p>
          <p>[LinkedIn Profile] | [Portfolio Website]</p>

          <h3>Professional Summary</h3>
          <p>Google-certified Project Manager, Software Developer, and Kifuliiru Language Advocate with a strong background in computer science, DevOps, and multimedia creation. Skilled in managing complex projects and developing innovative solutions, with a passion for cultural preservation and empowering communities. Experienced in leading teams across multiple continents and creating educational resources in Kifuliiru.</p>

          <h3>Certifications</h3>
          <ul>
            <li>Google Project Management Professional Certificate</li>
            <li>Meta Certificate in Digital Journalism</li>
            <li>Google IT Support Professional Certificate</li>
            <li>[Your other relevant certifications]</li>
          </ul>

          <h3>Education</h3>
          <p>Bachelor&apos;s Degree in Computer Science</p>
          <p>[University Name] | [Year of Graduation]</p>
          <p>Focus on software development, networking, and operating systems</p>

          <h3>Professional Experience</h3>
          <h4>Field Associate</h4>
          <p>Walmart | Spokane, WA | [Month/Year] – Present</p>
          <ul>
            <li>Recognized twice consecutively for outstanding performance in respecting individuals, with featured recognition on the board of fame</li>
            <li>Manage daily field operations, ensuring high standards of service and customer satisfaction</li>
          </ul>

          <h4>Software Developer & Project Manager</h4>
          <p>ASYST RESOURCES LTD | [Location] | [Month/Year] – [Month/Year]</p>
          <ul>
            <li>Led the development of the &apos;Ibufuliiru&apos; project, focusing on preserving and promoting the Kifuliiru language</li>
            <li>Coordinated cross-functional teams, including remote teams in Congo, to produce educational materials and digital content</li>
            <li>Developed and maintained web and mobile applications, integrating technologies like Firebase, React, and Flutter</li>
          </ul>

          <h4>Freelance Multimedia Creator & Kifuliiru Language Advocate</h4>
          <p>[Your Freelance Business Name] | [Month/Year] – Present</p>
          <ul>
            <li>Developed a comprehensive Kifuliiru course, from basics to advanced topics, including a dictionary app with user roles and validation processes</li>
            <li>Created and managed platforms such as Fuliiru Press, Fuliiru Publishers, and Radio Ibufuliiru, contributing to cultural preservation</li>
          </ul>

          <h3>Skills</h3>
          <ul>
            <li>Programming Languages: Python, Java, C#</li>
            <li>Web Development: React, Angular, Firebase</li>
            <li>Mobile Development: Flutter</li>
            <li>Project Management: Agile (Scrum, Kanban), DevOps</li>
            <li>Multimedia Tools: Audacity, Adobe Creative Suite</li>
            <li>Networking & OS: Linux, Windows, CompTIA A+ knowledge</li>
            <li>Languages: Fluent in Kiswahili, Kifuliiru advocate</li>
          </ul>

          <h3>Projects</h3>
          <h4>Ibufuliiru Project</h4>
          <ul>
            <li>Developed educational resources and digital platforms for the preservation and promotion of the Kifuliiru language</li>
            <li>Managed the creation of a Kifuliiru dictionary app, integrating user roles and contributor validation</li>
          </ul>

          <h4>Security System Project</h4>
          <ul>
            <li>Developed a prototype security system using phone cameras to capture and analyze video for suspicious activity, with automated SMS and call notifications</li>
          </ul>

          <h4>Guided Travel Project</h4>
          <ul>
            <li>Created a travel guide platform built on maps like Google Maps, allowing users to find services and locations based on selected domains (e.g., Education, Health)</li>
          </ul>

          <h3>Languages</h3>
          <ul>
            <li>Kiswahili: Fluent</li>
            <li>Kifuliiru: Advocate and fluent</li>
            <li>English: Proficient</li>
          </ul>

          <h3>Interests</h3>
          <ul>
            <li>Cultural preservation and language advocacy</li>
            <li>Emerging technologies and their applications in community empowerment</li>
            <li>Continuous learning and professional development</li>
          </ul>

          <p>References available upon request.</p>
        </div>
        <div className="mt-8">
          <button 
            onClick={handleDownload} 
            className="bg-[#0A21C0] text-white px-4 py-2 rounded hover:bg-[#050A44]"
          >
            Download Resume as PDF
          </button>
        </div>
        
      </div>
    </div>
  );
}
