import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayivugwe Kabemba Mukome | Kifuliiru language advocate",
  description: "My name is Ayivugwe Kabemba Mukome. I'm a Christian, Gospel preacher, translator, interpreter, Software developer. I'm the Founder of Tumenye Ibufuliiru or Ibufuliiru in short form, Imyazi mu Kifuliiru or Imyazi, Kifuliiru or Kifuliiru ndeto ngale, Weka Foundation, Weka Gasorwe and IKAH Design. If you want ot lean more about the KJifuliiru language or want toi fiund a place to learn the Kifuliiru language, I'm here for that.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
