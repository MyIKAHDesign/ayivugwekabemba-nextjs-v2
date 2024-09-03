import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    { title: "Ayivugwe Kabemba website", url: "https://ayivugwe.editorx.io/ayivugwekabemba/", description: "My main website in Kifuliiru, the language I love the most." },
    { title: "IKAH Design", url: "https://ikahdesign.editorx.io/ikah", description: "My Design Agency" },
    { title: "Ibufuliiru", url: "https://ibufuliiru.editorx.io/ibufuliiru", description: "My main project currently." },
    { title: "Kifuliiru", url: "https://ibufuliiru.editorx.io/kifuliiru", description: "My project about the Kifuliiru language." },
    { title: "Imyazi mu Kifuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "A media agency in Kifuliiru for creating digital content." },
    { title: "Radio Ibufuliiru", url: "https://ibufuliiru.editorx.io/imyazi", description: "Another media agency in Kifuliiru (under development)." },
  ];

  return (
    <main className="min-h-screen bg-[#FFF0B3] text-[#141619] p-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src="/your-image.jpg" // Replace with your actual image path
              alt="Your Name"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">Your Name</h1>
            <p className="text-lg mb-4">
              Welcome to my portfolio! I'm a passionate developer with a focus on [your specialties].
              I love creating projects that [your goals or interests].
            </p>
            <p className="text-lg">
              Feel free to explore my projects below and get in touch if you'd like to collaborate!
            </p>
          </div>
        </section>

        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <Link 
                href={project.url}
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
