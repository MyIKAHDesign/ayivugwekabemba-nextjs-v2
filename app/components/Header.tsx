import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center"> {/* Wrap in Link for navigation */}
            <Image
              src="/ayiv.ico" // Ensure this path is correct
              alt="Logo"
              width={50} // Adjust size as needed
              height={50} // Adjust size as needed
              className="rounded-full mr-2" // Add margin for spacing
            />
            <h1 className="text-white text-2xl font-bold">AYIVUGWE</h1> {/* Your name added here */}
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="relative text-white transition-colors duration-300 hover:text-[#F0F4C3] group">
              Home
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#F0F4C3] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative text-white transition-colors duration-300 hover:text-[#F0F4C3] group">
              Contact
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#F0F4C3] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
}
