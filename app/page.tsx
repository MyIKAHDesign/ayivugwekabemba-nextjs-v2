/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JAJDsZwZC8E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Ayivugwe Kabemba</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="grid gap-6 px-4 md:gap-10 md:px-6">
        <header className="flex flex-col min-h-[400px] items-center justify-center gap-2 text-center py-12 md:py-24 lg:py-32">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">Hi, I'm Jane</h1>
            <p className="text-gray-500 dark:text-gray-400">Designer. Founder. Coder.</p>
          </div>
          <img
            alt="Avatar"
            className="mx-auto rounded-full overflow-hidden aspect-[1/1] object-cover object-center border-4 border-gray-100 dark:border-gray-800"
            height="150"
            src="/placeholder.svg"
            width="150"
          />
        </header>
        <section className="grid gap-4 md:gap-8">
          <div className="container grid items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                A collection of my work across design, code, and everything in between.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="sr-only">Filter:</span>
              <Label className="text-sm" htmlFor="filter">
                Filter
              </Label>
              <Select className="max-w-xs w-full text-sm" id="filter">
                <option>Design</option>
                <option>Code</option>
                <option>Founder</option>
              </Select>
            </div>
          </div>
          <div className="container grid gap-6 sm:gap-10 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
            <Card>
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <CardContent className="flex flex-col justify-end p-4">
                <h3 className="font-bold">Project One</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of the first project.</p>
              </CardContent>
              <img
                alt="Project One"
                className="aspect-video overflow-hidden object-cover object-center"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </Card>
            <Card>
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <CardContent className="flex flex-col justify-end p-4">
                <h3 className="font-bold">Project Two</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of the second project.</p>
              </CardContent>
              <img
                alt="Project Two"
                className="aspect-video overflow-hidden object-cover object-center"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </Card>
            <Card>
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <CardContent className="flex flex-col justify-end p-4">
                <h3 className="font-bold">Project Three</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of the third project.</p>
              </CardContent>
              <img
                alt="Project Three"
                className="aspect-video overflow-hidden object-cover object-center"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </Card>
          </div>
        </section>
        <section className="grid gap-6 md:gap-12">
          <div className="container grid items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm a multi-talented individual who loves to create. My passion for design, coding, and entrepreneurship
                has led me to work on exciting projects across various industries.
              </p>
            </div>
          </div>
          <div className="container grid items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Me</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Want to collaborate on a project? Reach out to me using the form below.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <div className="grid gap-1">
                  <Label className="text-sm" htmlFor="name">
                    Name
                  </Label>
                  <Input id="name" required />
                </div>
                <div className="grid gap-1">
                  <Label className="text-sm" htmlFor="email">
                    Email
                  </Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="grid gap-1">
                  <Label className="text-sm" htmlFor="message">
                    Message
                  </Label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "./page.module.css";
// import Link from "next/link";
// // import Header from "./header";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <div className="isolate bg-white">
//       {/* <Header/> */}
//       <main>
//         <div className="relative px-1 lg:px-1">
//           {/* <div className="sm:mb-8 sm:flex sm:justify-center text-center">
//             <Header />
//           </div> */}
//           <div className="mx-auto max-w-2xl py-16 sm:py-30 lg:py-30">
//             <div className="sm:mb-8 sm:flex sm:justify-center">
//               <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//                 Visit my projects here.{" "}
//                 <Link
//                   href="https://ayivugwe.editorx.io/ayivugwekabemba/projets-zani"
//                   target="_blank"
//                   className="font-semibold text-indigo-600"
//                 >
//                   <span className="absolute inset-0" aria-hidden="true"></span>
//                   Read more <span aria-hidden="true">&rarr;</span>
//                 </Link>
//               </div>
//             </div>
//             <div className="text-center">
//               <p className="mt-6 text-lg leading-8 text-gray-600">
//                 Welcome. My name is Ayivugwe Kabemba. Thank you for visiting my
//                 website. This website is under construction. As you are already
//                 here, let me tell you that this website is real and it pertains
//                 to me (Ayivugwe Kabemba). I use so many technologies and I am
//                 constantly learning new things.
//               </p>
//               <p className="mt-6 text-lg leading-8 text-gray-600">
//                 My main goal is for my living, my family and most importantly,
//                 there is one of the languages with a limitied quantity of
//                 resources online. That language is called <span>Kifuliiru</span>
//                 . I am doing everything I can to reduce that gap. That is why my
//                 main website is in Kifuliiru. Thank you!
//               </p>
//               <div className="mt-10 flex items-center justify-center gap-x-6">
//                 <Link
//                   href="https://ayivugwe.editorx.io/ayivugwekabemba"
//                   target="_blank"
//                   className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   My Kifuliiru website
//                 </Link>
//                 <Link
//                   href="https://ikahdesign.editorx.io/ikah"
//                   target="_blank"
//                   className="text-base font-semibold leading-7 text-gray-900"
//                 >
//                   My design agency<span aria-hidden="true">→</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
