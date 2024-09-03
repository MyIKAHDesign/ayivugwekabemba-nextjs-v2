import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Ayivugwe Kabemba Mukome</h1>
          <p className="text-xl text-gray-400">Software Developer & Project Manager</p>
        </header>

        <section className="mb-16">
          <Image
            className="mx-auto rounded-full shadow-lg border-2 border-purple-500"
            src="/ayiv.ico"
            alt="Ayivugwe Kabemba Mukome"
            width={180}
            height={180}
            priority
          />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-purple-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I&apos;m a software developer and Project Manager with a solid foundation in computer science. 
            Originally from Congo Kinshasa, I spent time in Burundi before moving to the US in September 2023. 
            My career has spanned roles in DevOps and as a field associate at Walmart, where I&apos;ve been recognized 
            for my commitment and hard work. I&apos;m passionate about learning and hold certifications in Google 
            Project Management and digital journalism.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">My Projects</h2>
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
                className="block p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
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
