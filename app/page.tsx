import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);

    const handler = () => setDarkMode(mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Ayivugwe Kabemba Mukome</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Software Developer & Project Manager</p>
        </header>

        <section className="mb-12">
          <Image
            className="mx-auto rounded-full shadow-lg border-4 border-purple-500"
            src="/ayiv.ico"
            alt="Ayivugwe Kabemba Mukome"
            width={180}
            height={180}
            priority
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-purple-500">About Me</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            I&apos;m a software developer and Project Manager with a solid foundation in computer science. 
            Originally from Congo Kinshasa, I spent time in Burundi before moving to the US in September 2023. 
            My career has spanned roles in DevOps and as a field associate at Walmart, where I&apos;ve been recognized 
            for my commitment and hard work. I&apos;m passionate about learning and hold certifications in Google 
            Project Management and digital journalism.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-purple-500">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Ayivugwe Kabemba website", url: "https://ayivugwe.editorx.io/ayivugwekabemba/", description: "My main website in Kifuliiru, the language I love the most." },
              { title: "IKAH Design", url: "https://ikahdesign.editorx.io/ikah", description: "My Design Agency" },
              { title: "Ibufuliiru", url: "https://ibufuliiru.editorx.io/ibufuliiru", description: "My main project currently." },
              { title: "Kifuliiru", url: "https://ibufuliiru.editorx.io/kifuliiru", description: "My project about the Kifuliiru language." },
              { title: "Imyazi mu Kifuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "A media agency in Kifuliiru for creating digital content." },
              { title: "Radio Ibufuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "Another media agency in Kifuliiru (under development)." },
            ].map((project, index) => (
              <a
                key={index}
                href={project.url}
                className={`block p-6 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-md hover:shadow-lg transition-all`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-500">{project.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-500">
          <p>&copy; 2024 Ayivugwe Kabemba Mukome. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
