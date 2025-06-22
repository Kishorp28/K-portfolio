import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientThemeProvider } from "@/components/ClientThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KISHORE - Software Developer Portfolio",
  description: "Passionate software developer specializing in Flutter, MERN Stack, and AI integration. View my projects, skills, and get in touch.",
  keywords: ["software developer", "flutter", "mern stack", "ai integration", "portfolio", "web development", "mobile development"],
  authors: [{ name: "KISHORE" }],
  creator: "KISHORE",
  openGraph: {
    title: "KISHORE - Software Developer Portfolio",
    description: "Passionate software developer specializing in Flutter, MERN Stack, and AI integration.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KISHORE - Software Developer Portfolio",
    description: "Passionate software developer specializing in Flutter, MERN Stack, and AI integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
