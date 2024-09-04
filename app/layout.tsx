import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header'; // Import the Header component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ayivugwe Kabemba Mukome',
  description: 'Project Manager, Software Developer & Kifuliiru Language Advocate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50`}> {/* Change the background color here */}
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Include the Header here */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
