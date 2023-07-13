
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/app/header";
// import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export default function Kifuliiru() {
  return (
    <div className="isolate bg-white">
      {/* <Header/> */}
      <main>
        <div className="relative px-1 lg:px-1">
          {/* <div className="sm:mb-8 sm:flex sm:justify-center text-center">
            <Header/>
          </div> */}
          <div className="mx-auto max-w-2xl py-16 sm:py-30 lg:py-30">
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
              About the Kifuliiru language
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Know more about the Kifuliiru language
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://ayivugwe.editorx.io/ayivugwekabemba"
                  target="_blank"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Know more
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
