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
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
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
