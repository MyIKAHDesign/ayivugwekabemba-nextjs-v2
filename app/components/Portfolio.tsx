"use client";

import React from "react";
import HeroSection from "./HeroSection";
import PersonalBrand from "./PersonalBrand";
import FeaturedCompanies from "./FeaturedCompanies";
import CredibilitySignals from "./CredibilitySignals";
import LatestBlogPosts from "./LatestBlogPosts";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <HeroSection />
      <PersonalBrand />
      <FeaturedCompanies />
      <CredibilitySignals />
      <LatestBlogPosts />
    </div>
  );
};

export default Portfolio;
