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
          <div className="mx-auto max-w-2xl py-16 sm:py-30 lg:py-30">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"> <a href="/"> Ayivugwe Kabemba </a></h1>
            </div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                This website is under construction. <a href="/" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center">
              <p className="mt-6 text-lg leading-8 text-gray-600">Welcome. Thank you for visiting my website. Note that this is not all what I have to show you. Continue reading to know more. I love building websites when it's possible to me.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The reason why I am building so many websites is my mother language is called <span className="text-red">Kifuliiru</span>. It's one of the laguages with limited resources online. I'm doing everything I can to reduce that gap.
                That's why my main websites are in Kifuliiru. Interested in visiting them? Links are here bellow. Thank you!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://ayivugwe.editorx.io/ayivugwekabemba" target="_blank" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">More about me</a>
                <a href="https://ibufuliiru.editorx.io/ibufuliiru" target="_blank" className="text-base font-semibold leading-7 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl py-16 sm:py-30 lg:py-30">
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/ayivugwe.png" alt="" width="384" height="512" />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">
                    “The reason why I am building so many websites is my mother language is called Kifuliiru. It's one of the laguages with limited resources online. I'm doing everything I can to reduce that gap.
                That's why my main websites are in Kifuliiru. Interested in visiting them? Links are here bellow. Thank you!”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">
                    Ayivugwe Kabemba
                  </div>
                  <div class="text-slate-700 dark:text-slate-500">
                    Founder, Weka Foundation
                  </div>
                </figcaption>
              </div>
            </figure>

          </div>
        </div>
      </main>
    </div>
  );
}
