"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import CompaniesSection from "./CompaniesSection";
import SkillsSection from "./SkillsSection";
import FAQ from "./FAQ";
import QuoteSlider from "./QuotesSection";
import CertificatesSection from "./CertificatesSection";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <HeroSection />
      <ProjectsSection />
      <CompaniesSection />
      <SkillsSection />
      <FAQ />
    </div>
  );
};

export default Portfolio;
