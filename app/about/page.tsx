import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-50">
      <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <Image
            src="/ayiv.ico" // Ensure this path is correct
            alt="Ayivugwe"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
            About Me
          </h1>
          <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
            Welcome to my personal website!
          </h2>
          <p className="text-base text-gray-600 mb-4">
            I am a Google-certified Project Manager and Software Developer with
            a passion for creating innovative solutions. My journey in
            technology has been driven by a desire to empower communities and
            promote cultural preservation, particularly through the Kifuliiru
            language.
          </p>
          <p className="text-base text-gray-600 mb-4">
            With extensive experience in project management, I excel at leading
            teams to deliver high-quality results on time and within budget. I
            believe in the power of collaboration and strive to foster an
            inclusive environment where everyone can contribute their best work.
          </p>
          <p className="text-base text-gray-600 mb-4">
            In my free time, I enjoy exploring new technologies, contributing to
            open-source projects, and advocating for the Kifuliiru language and
            culture.
          </p>

          <p className="text-base text-gray-600 mb-4">
            I am Ayivugwe Kabemba Mukome, a dedicated software developer and
            project manager with a passion for technology, education, and
            cultural preservation. Originally from Congo Kinshasa and having
            spent time as a refugee in Burundi, I have a unique perspective on
            the importance of community and innovation.
          </p>
          
          <h2>Professional Background </h2>
          <p className="text-base text-gray-600 mb-4">
            With a degree in Computer Science and
            extensive experience in software development, I have transitioned
            into roles that combine my technical skills with project management.
            I am currently pursuing a Google Project Management Professional
            Certificate and plan to deepen my knowledge in Python and backend
            development. My goal is to integrate my technical expertise with
            effective management practices to drive successful project outcomes.
          </p>

          <h2>Key Projects Ibufuliiru:</h2>
          <p className="text-base text-gray-600 mb-4">
            This is my main project aimed at promoting
            the Kifuliiru language and culture. Under this initiative, I have
            launched several sub-projects, including: Imyazi mu Kifuliiru:
            Educational resources for language learning. Fuliiru Press and
            Fuliiru Publishers: Platforms for publishing Kifuliiru literature.
            Kifuliiru Public Dictionary: A comprehensive digital dictionary to
            support language learners. Radio Ibufuliiru: A media outlet
            dedicated to sharing news and culture in Kifuliiru.
          </p>

          <h2>Biza: </h2>
          <p className="text-base text-gray-600 mb-4">
            A mobile app and web portal designed to notify users about
            business updates and changes, ensuring they stay informed in a
            rapidly evolving environment. Kifuliiru Language Advocacy: I am
            actively working on developing a Large Language Model (LLM) for the
            Kifuliiru language, with plans to pursue a Masters degree in Data
            Science to enhance my skills in this area.
          </p>

          <h2>Skills and Expertise Programming Languages:</h2>
          <p className="text-base text-gray-600 mb-4">
            Proficient in Python and Java, with a strong understanding of web development frameworks and
            tools. Project Management: Experienced in Agile methodologies,
            including Scrum and Kanban, facilitating efficient team collaboration
            and project delivery. Multimedia Creation: Utilizing various
            platforms for educational content and community engagement,
            particularly in the Kifuliiru language.
          </p>

          <h2>Community Engagement</h2>
          <p className="text-base text-gray-600 mb-4">
             I believe in the power of education and
            community involvement. I am creating a documentation-like website to
            help individuals learn to count in Kifuliiru, alongside a dictionary
            app that serves both normal users and validated contributors.
          </p>

          <h2>Connect with Me </h2>
          <p className="text-base text-gray-600 mb-4">
            I am always eager to collaborate and share ideas.
            Feel free to reach out through my social media channels or contact me
            directly through this website. Let us work together to make a
            difference!
            <Link href='../contact/pages.tsx' >Contact me here</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
