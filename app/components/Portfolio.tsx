"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./Experience";
import SkillsSection from "./SkillsSection";
import FAQ from "./FAQ";
import QuoteSlider from "./QuoteSlider";
import AboutMe from "./AboutMe";
import CertificatesSection from "./CertificatesSection";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-['Instrument_Sans']">
      <HeroSection />
      <QuoteSlider />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <SkillsSection />
      <AboutMe />
      <FAQ />
    </div>
  );
};

export default Portfolio;
