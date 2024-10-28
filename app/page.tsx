// app/page.tsx

import { Contact } from "lucide-react";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
