import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="relative text-[#0A21C0] transition-colors duration-300 hover:text-[#050A44] group">
              Home
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#0A21C0] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative text-[#0A21C0] transition-colors duration-300 hover:text-[#050A44] group">
              Contact
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#0A21C0] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link href="/resume" className="relative text-[#0A21C0] transition-colors duration-300 hover:text-[#050A44] group">
              My Resumé
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#0A21C0] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
}
