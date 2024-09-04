import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A21C0] text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Ayivugwe Kabemba Mukome. All rights reserved.</p>
          </div>
          <nav>
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
        </div>
      </div>
    </footer>
  );
}
