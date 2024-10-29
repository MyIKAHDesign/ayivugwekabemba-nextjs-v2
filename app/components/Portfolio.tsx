"use client";

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./Experience";
import PortfolioContent from "./SkillsSection";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-['Instrument_Sans']">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <PortfolioContent />
    </div>
  );
};

export default Portfolio;
