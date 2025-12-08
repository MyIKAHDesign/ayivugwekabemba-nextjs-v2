// app/layout.tsx

import { Source_Code_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ayivugwe Kabemba Mukome",
  description: "This is the personal website of Ayivugwe Kabemba Mukome",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${sourceCodePro.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-mono">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
