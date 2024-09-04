import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="mb-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/ayiv.ico" // Ensure this path is correct
            alt="Ayivugwe Kabemba Mukome"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">Ayivugwe Kabemba Mukome</h1>
          <p className="text-base italic text-gray-600 mb-4">Project Manager, Software Developer & Kifuliiru Language Advocate</p>
          <p className="text-base italic text-gray-600 mb-4">I am a Google-certified Project Manager and Software Developer, passionate about creating innovative solutions. As a dedicated advocate for the Kifuliiru language, I strive to empower communities through technology and cultural preservation.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#0A21C0]">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Ayivugwe Kabemba website", url: "https://ayivugwe.editorx.io/ayivugwekabemba/", description: "My main website in Kifuliiru, the language I love the most." },
            { title: "IKAH Design", url: "https://ikahdesign.editorx.io/ikah", description: "My Design Agency" },
            { title: "Ibufuliiru", url: "https://ibufuliiru.editorx.io/ibufuliiru", description: "My main project currently." },
            { title: "Kifuliiru", url: "https://ibufuliiru.editorx.io/kifuliiru", description: "My project about the Kifuliiru language." },
            { title: "Imyazi mu Kifuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "A media agency in Kifuliiru for creating digital content." },
            { title: "Radio Ibufuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "Another media agency in Kifuliiru (under development)." },
          ].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#F0F4C3]">
              <h3 className="text-xl font-semibold mb-2 text-[#0A21C0]">{project.title}</h3>
              <p className="mb-4 text-[#141619]">{project.description}</p>
              <a 
                href={project.url}
                className="inline-block px-4 py-2 bg-[#0A21C0] text-white rounded hover:bg-[#050A44] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
