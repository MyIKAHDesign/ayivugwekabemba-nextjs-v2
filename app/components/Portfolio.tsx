// components/Portfolio.tsx
("use client");

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-['Instrument_Sans']">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default Portfolio;
