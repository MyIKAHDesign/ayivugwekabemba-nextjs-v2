import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ayivugwe Kabemba Mukome</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Software Developer & Project Manager</p>
      </header>

      <section className="w-full max-w-4xl mb-12">
        <Image
          className="mx-auto rounded-full shadow-lg"
          src="/ayiv.ico"
          alt="Ayivugwe Kabemba Mukome"
          width={180}
          height={180}
          priority
        />
      </section>

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I&apos;m a software developer and Project Manager with a solid foundation in computer science. 
          Originally from Congo Kinshasa, I spent time in Burundi before moving to the US in September 2023. 
          My career has spanned roles in DevOps and as a field associate at Walmart, where I&apos;ve been recognized 
          for my commitment and hard work. I&apos;m passionate about learning and hold certifications in Google 
          Project Management and digital journalism.
        </p>
      </section>

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="w-full max-w-4xl text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 Ayivugwe Kabemba Mukome. All rights reserved.</p>
      </footer>
    </main>
  );
}
