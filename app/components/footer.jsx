"use client";
import React, { useState, useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <footer className="relative overflow-hidden bg-black">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,204,0.35),transparent_70%)]"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]"></div>

        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 mt-8 md:py-10 py-15 pb-8 flex flex-col items-center text-center space-y-6">
          {/* Name */}
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-semibold leading-[0.9] text-white text-center select-none whitespace-nowrap px-[3vw] tracking-[0.02em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              Pritam Das Adhikari
            </h1>
          </div>

          {/* Divider */}
          <div className="h-[3px] w-30 md:w-45 rounded-full bg-gradient-to-r from-[#0D58CC] via-cyan-300 to-emerald-400"></div>

          {/* Social icons */}
          <div className="flex gap-8 text-2xl md:text-3xl text-gray-300">
            <a
              href="https://x.com/gauravbuilds"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-black text-xl md:text-3xl"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.linkedin.com/in/pritam-das-adhikari-018b352a2/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Pritam8917"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              <ImGithub />
            </a>
          </div>

          {/* Quote */}
          <p className="text-gray-300 italic max-w-xl">
            “Success is when preparation meets opportunity.”
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © 2025 Pritam. All rights reserved.
          </p>
        </div>

        {/* Floating Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full text-white text-2xl shadow-lg 
         bg-gradient-to-tr from-[#1CD8D2] via-[#0B3D91] to-[#0A0A0A]

               hover:scale-110 hover:shadow-2xl transition-all duration-300"
            aria-label="Back to Top"
          >
            <HiArrowUp />
          </button>
        )}
      </footer>
    </div>
  );
}
