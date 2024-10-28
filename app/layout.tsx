// app/layout.tsx
import { ClientLayout } from "./components/ClientLayout";
import "./globals.css";
import { Inter } from "next/font/google";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Doe | Full Stack Developer",
  description:
    "Portfolio showcasing my work and experience as a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
