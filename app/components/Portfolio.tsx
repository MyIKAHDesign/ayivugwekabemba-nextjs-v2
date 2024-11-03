"use client";

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./Experience";
import SkillsSection from "./SkillsSection";
import FAQ from "./FAQ";
import QuoteSlider from "./QuoteSlider";
import QuoteList from "./QuoteSlider";
import AboutMe from "./AboutMe";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-['Instrument_Sans']">
      <HeroSection />
      <QuoteSlider />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutMe />
      <FAQ />
    </div>
  );
};

export default Portfolio;
