"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
      <motion.div
        className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col mt-20 h-full text-center lg:text-left relative"
          variants={itemVariants}
        >
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <div className="mb-2 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold text-white tracking-wide flex justify-center items-center text-center lg:justify-start md:items-start">
              <TypewriterEffectSmooth words={words} />
            </div>

            <motion.h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
              variants={itemVariants}
            >
              Hello, I&apos;m
              <br />
              <span className="text-white font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap lg:leading-[1.5] leading-[1.3] sm:leading-[1.4] md:leading-[1.4]">
                Pritam Das Adhikari
              </span>
            </motion.h1>

            <motion.p className="text-xl pt-6" variants={itemVariants}>
              I turn complex ideas into seamless, high-impact web experiences —
              building modern, scalable, and lightning-fast applications that
              make a difference.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            variants={itemVariants}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] shadow-lg shadow-cyan-500/50 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/Resume.pdf"
              download=""
              className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg transition-all duration-300"
            >
              My Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            variants={itemVariants}
          >
            {[
              { Icon: BsTwitterX, url: "https://twitter.com/yourhandle" },
              {
                Icon: FaLinkedinIn,
                url: "https://www.linkedin.com/in/pritam-das-adhikari-018b352a2/",
              },
              { Icon: ImGithub, url: "https://github.com/Pritam8917" },
            ].map(({ Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer text-white"
              >
                <Icon className="h-8 w-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section (Avatar) */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
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

          <motion.img
            alt="Pritam Das Adhikari avatar"
            className="absolute top-1/2 -translate-y-1/2 object-contain right-[-30px] w-[min(45vw,780px)] h-auto max-h-[90vh] z-[10] opacity-100"
            src="/assets/Avatar.png"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
