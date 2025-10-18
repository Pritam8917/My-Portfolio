"use client";
import React from "react";
import { SparklesCore } from "./components/ui/sparkles";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { IoCodeSlash } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { GiSkills, GiNothingToSay } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import Image from "next/image";

export default function SpotlightNewDemo() {
  const words = [{ text: "Software Developer" }];
  const navItems = [
    {
      name: "Home",
      id: "#",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      id: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      id: "#skills",
      icon: <GiSkills className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      id: "#projects",
      icon: (
        <IoCodeSlash className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Experience",
      id: "#experience",
      icon: (
        <MdWorkOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Testimonials",
      id: "#testimonials",
      icon: (
        <GiNothingToSay className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black/[0.96] relative overflow-hidden">
      <FloatingNav navItems={navItems} />
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={2.0}
        maxSize={3.0}
        particleDensity={6}
        className="absolute inset-0 w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Hero Section */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col mt-20 h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <div className="mb-2 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white tracking-wide">
              <TypewriterEffectSmooth words={words} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">
              Hello, I'm
              <br />
              <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap lg:leading-[1.1]">
                Pritam Das Adhikari
              </span>
            </h1>
            <p className="text-xl pt-6">
              I turn complex ideas into seamless, high-impact web experiences —
              building modern, scalable, and lightning-fast applications that
              make a difference.
            </p>
          </div>
          <div
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            style={{ opacity: 1 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] shadow-lg shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="/Resume.pdf"
              download=""
              className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all duration-300"
            >
              My Resume
            </a>
          </div>
          <div
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            style={{ opacity: 1 }}
          >
            <BsTwitterX
              className="h-8 w-8 cursor-pointer"
              href="https://x.com/gauravbuilds"
            />
            <FaLinkedinIn
              className="h-9 w-9 cursor-pointer"
              href="https://www.linkedin.com/in/pritam-das-adhikari-018b352a2/"
            />
            <ImGithub
              className="h-9 w-9 cursor-pointer"
              href="https://github.com/Pritam8917"
            />
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: 10,
              width: "min(22vw, 410px)",
              height: "min(40vw, 760px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background:
                "conic-gradient(rgb(28, 216, 210), rgb(0, 191, 143), rgb(48, 43, 99), rgb(28, 216, 210))",
              zIndex: 0,
            }}
          ></div>
          <Image
            alt="Pritam Das Adhikari avatar"
            className=" top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none  absolute right-[-30px] w-[min(45vw,780px)] h-auto max-h-[90vh] z-[10] opacity-100 transform-none"
            src="/assets/Avatar.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
