"use client";
import React, { useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import Link from "next/link";
export default function Footer() {

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
    <footer className="relative overflow-hidden bg-black">
      
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,204,0.35),transparent_70%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]"></div>

      <div className="relative z-10 
        max-w-6xl mx-auto
        px-4 sm:px-6 md:px-8
        py-12 md:py-16
        flex flex-col items-center text-center
        space-y-6">

        {/* Name */}
        <h1 className="
          text-2xl sm:text-3xl md:text-5xl
          font-semibold
          leading-tight
          text-white
          tracking-wide
          drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]
        ">
          Pritam Das Adhikari
        </h1>

        {/* Divider */}
        <div className="h-0.75 w-20 sm:w-28 md:w-40 rounded-full bg-linear-to-r from-[#0D58CC] via-cyan-300 to-emerald-400"></div>

        {/* Social icons */}
        <div className="flex gap-6 sm:gap-8 text-xl sm:text-2xl md:text-3xl text-gray-300">
          <Link
            href="https://x.com/PritamDasA95722"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-white"
          >
            <BsTwitterX />
          </Link>

          <Link
            href="https://www.linkedin.com/in/pritam-das-adhikari-018b352a2/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-blue-500"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="https://github.com/Pritam8917"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-white"
          >
            <ImGithub />
          </Link>
        </div>

        {/* Quote */}
        <p className="text-gray-300 italic text-sm sm:text-base max-w-md md:max-w-xl px-4">
          “Success is when preparation meets opportunity.”
        </p>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pritam Das Adhikari. All rights reserved.
        </p>

      </div>
    </footer>
  );
}