import ExperienceSection from "./Experience";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";

export function ClientLayout() {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-slate-900">
      <Header />
      <main className="w-full bg-white dark:bg-slate-900">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
