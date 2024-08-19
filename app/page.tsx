import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Welcome. I&lsquo;m Ayivugwe Kabemba Mukome.
            </p>
          </a>
        </div> */}

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
              src="/ayiv.ico"
              alt="Ayivugwe Kabemba Mukome"
              width={180}
              height={37}
              priority
            />
          </a>
        </div>

        <div className="p-24">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Welcome to my website. My name is Ayivugwe Kabemba Mukome
          </h2>
          <p className={`mb-3 text-sm font-mono`}>
            I’m Ayivugwe Kabemba Mukome, a software developer and Project
            Manager with a solid foundation in computer science. Originally from
            Congo Kinshasa, I spent time in Burundi before moving to the US in
            September 2023. My career has spanned roles in DevOps and as a field
            associate at Walmart, where I’ve been recognized for my commitment
            and hard work. I’m passionate about learning and hold certifications
            in Google Project Management and digital journalism. I’m currently
            involved in several projects, including developing a Kifuliiru
            language course, creating a Kifuliiru dictionary, and working on a
            security system idea I’ve had since 2014. With strong programming
            skills in Python and Java, I’m focused on becoming an expert in
            these areas. My future goals include deepening my knowledge in
            Machine Learning, Data Science, and DevOps, as well as pursuing the
            CompTIA A+ certification. I’m fluent in Kiswahili and Swahili, and
            I’m working on improving my English to enhance my professional
            opportunities.
          </p>
        </div>

        <h2 className={`mb-3 text-2xl font-semibold`}>Check my projects</h2>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="https://ayivugwe.editorx.io/ayivugwekabemba/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Ayivugwe Kabemba website{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              For the love of the Kifuliiru language, my main website is in
              Kifuliiru, the language I love the most.
            </p>
          </a>

          <a
            href="https://ikahdesign.editorx.io/ikah"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              IKAH Design{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              This is my Design Agency
            </p>
          </a>

          <a
            href="https://ibufuliiru.editorx.io/ibufuliiru"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Ibufuliiru{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              This is my main project for now.
            </p>
          </a>

          <a
            href="https://ibufuliiru.editorx.io/kifuliiru"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Kifuliiru{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              This is my project about the Kifuliiru language.
            </p>
          </a>

          <a
            href="https://ibufuliiru.editorx.io/imyazi"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Imyazi mu Kifuliiru{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              This is a media agency in Kifuliiru. I created it for the purpose
              of creating much digital content.
            </p>
          </a>

          <a
            href="https://ibufuliiru.editorx.io/imyazi"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Radio Ibufuliiru{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              This is my other media agency in Kifuliiru that I created.
              It&lsquo;s still under development.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
