import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="isolate bg-white">
      {/* <Header/> */}
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
               Visit my projects here. <a href="https://ayivugwe.editorx.io/ayivugwekabemba/projets-zani" target="_blank" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome. My name is Ayivugwe Kabemba</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">Welcome. Thank you for visiting my website. This website is under construction. As you are already here, let me tell you that this website is real and it pertains to me (Ayivugwe Kabemba).
               I use so many technologies and I am constantly learning new things.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                My main goal is for my living, my family and most importantly, there is one of the languages with a limitied quantity of resources online. That language is called <span>Kifuliiru</span>. I am doing everything I can to reduce that gap.
                That's why my main website is in Kifuliiru. Thank you!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/me" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">More about me</a>
                <a href="/projects" className="text-base font-semibold leading-7 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>


    </div>

  );
}
