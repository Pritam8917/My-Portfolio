"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center
px-4 sm:px-6 md:px-10 lg:px-16 
 sm:pt-20 lg:pt-10 
overflow-hidden" id="home">
      {/* Background Glow */}
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-1/3 w-100 h-100 
  bg-purple-500/10 rounded-full blur-[120px]"
        />

        <div
          className="absolute bottom-10 right-1/3 w-87.5 h-87.5 
  bg-cyan-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center mb-4">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-indigo-500/40 ring-offset-4 ring-offset-black">
            <Image
              src="/assets/profile.jpg"
              width={128}
              height={128}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Open to opportunities
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Pritam Das Adhikari
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 mb-4 font-mono text-sm md:text-lg"
        >
          Software Developer · Problem Solver · Tech Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 max-w-xl mb-6 leading-relaxed"
        >
          I craft performant, accessible web experiences with modern
          technologies. Passionate about clean code, great design, and shipping
          products that matter.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition-all"
          >
            View Projects <ArrowDown size={16} />
          </Link>

          <Link
            href="/assets/pritam-resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-gray-200 font-medium hover:bg-white/10 transition-colors"
            download="pritam-resume.pdf"
          >
            Download Resume <Download size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
