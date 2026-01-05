// app/layout.tsx

// Removed Source Code Pro import to allow global Inter font
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

// no-op

export const metadata = {
  title: "Ayivugwe Kabemba Mukome",
  description: "This is the personal website of Ayivugwe Kabemba Mukome",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Read the cookie on the server to know whether to include `dark` on the initial HTML
  const cookieStore = cookies();
  const darkCookie = cookieStore.get("darkMode")?.value === "true";

  return (
    <html lang="en" className={`scroll-smooth ${darkCookie ? "dark" : ""}`}>
      <body className="min-h-screen flex flex-col font-sans">
        {/* Ensure saved theme is applied before React hydrates to avoid flashes */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('darkMode');if(t==='true'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){} })();`,
          }}
        />
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
