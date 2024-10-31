"use client";

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./Experience";
import AboutMe from "./AboutMe";
import SkillsSection from "./SkillsSection";
import FAQ from "./FAQ";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-['Instrument_Sans']">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutMe />
      <FAQ />
    </div>
  );
};

export default Portfolio;
