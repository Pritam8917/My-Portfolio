import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {Navbar} from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pritam Das Adhikari",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <Navbar />
        <main>
          {children}
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </body>
    </html>
  );
}