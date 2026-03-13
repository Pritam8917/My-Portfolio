"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // below lg
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-10 pb-0 relative"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 lg:py-20 pb-0">
        {/* LEFT SIDE - HERO */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 40 } : { opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 text-md rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
            {/* Blinking Dot */}
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Open to Opportunities
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Pritam Das Adhikari
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xm text-gray-300 mb-3 font-mono">
            Software Developer . Problem Solver . Tech Enthusiast
          </p>

          {/* Description */}
          <p className="text-gray-400 max-w-lg mb-8 mt-5 text-lg">
            I build fast, modern, and scalable web applications using modern
            technologies. Passionate about creating meaningful digital
            experiences and solving real-world problems through code.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90"
            >
              View Projects <ArrowDown size={16} />
            </Link>

            <Link
              href="/assets/pritam-resume.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10"
            >
              Download Resume <Download size={16} />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE - DEV CODE CARD */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 40 } : { opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full"
        >
          <div className="rounded-xl border border-white/10 bg-[#121212] p-6 font-mono text-sm text-gray-300 shadow-lg min-h-120">
            {/* Terminal Header */}
            <div className="flex justify-between items-center mb-5 border-b border-white/10 pb-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              <span className="text-xs text-gray-500">PRITAM_DEV.JS</span>
            </div>

            <pre className="leading-relaxed">
              <span className="text-blue-400">const</span> me = {"{"}
              {"\n  "}name:{" "}
              <span className="text-green-400">
                &apos;Pritam Das Adhikari&apos;
              </span>
              ,{"\n  "}role:{" "}
              <span className="text-green-400">
                &apos;Software Developer&apos;
              </span>
              ,{"\n  "}institute:{" "}
              <span className="text-green-400">&apos;VSSUT, Burla, Sambalpur&apos;</span>,
              {"\n  "}location:{" "}
              <span className="text-green-400">&apos;Odisha, India&apos;</span>,
              {"\n  "}passions: [{"\n    "}
              <span className="text-green-400">
                &apos;Web Development&apos;
              </span>
              ,{"\n    "}
              <span className="text-green-400">&apos;AI&apos;</span>,{"\n    "}
              <span className="text-green-400">
                &apos;Problem Solving&apos;
              </span>
              {"\n  "}],
              {"\n  "}currentlyLearning:{" "}
              <span className="text-green-400">&apos;System Design & AI/ML&apos;</span>,
              {"\n  "}openForWork: <span className="text-orange-400">true</span>
              {"\n"}
              {"}"};{"\n\n"}
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">buildCoolThings</span>() {"{"}
              {"\n  "}return{" "}
              <span className="text-green-400">
                &quot;Always building 🚀&quot;
              </span>
              ;{"\n"}
              {"}"};
              {"\n\n"}
              console.<span className="text-yellow-400">log</span>
              (buildCoolThings());
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
