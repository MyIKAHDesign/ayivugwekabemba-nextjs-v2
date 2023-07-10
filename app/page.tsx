import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./header";
// import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="isolate bg-white">
      {/* <Header/> */}
      <main>
        <div className="relative px-3 lg:px-3">
          <div className="mx-auto max-w-2xl py-16 sm:py-30 lg:py-30">
            <div className="sm:mb-8 sm:flex sm:justify-center text-center">
              <Header/>
            </div>
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Visit my projects here.{" "}
                <Link
                  href="https://ayivugwe.editorx.io/ayivugwekabemba/projets-zani"
                  target="_blank"
                  className="font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome. My name is Ayivugwe Kabemba. Thank you for visiting my website. This website is
                under construction. As you are already here, let me tell you
                that this website is real and it pertains to me (Ayivugwe
                Kabemba). I use so many technologies and I am constantly
                learning new things.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                My main goal is for my living, my family and most importantly,
                there is one of the languages with a limitied quantity of
                resources online. That language is called <span>Kifuliiru</span>
                . I am doing everything I can to reduce that gap. That is why my
                main website is in Kifuliiru. Thank you!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://ayivugwe.editorx.io/ayivugwekabemba"
                  target="_blank"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  My Kifuliiru website
                </Link>
                <Link
                  href="https://ikahdesign.editorx.io/ikah"
                  target="_blank"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  My design agency<span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
