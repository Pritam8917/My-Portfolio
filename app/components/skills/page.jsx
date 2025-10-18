"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiExpress,
} from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { icon: <FaJava className="text-[#1CD8D2]" />, name: "Java" },
    { icon: <FaReact className="text-[#1CD8D2]" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-[#1CD8D2]" />, name: "Next.js" },
    {
      icon: <SiTailwindcss className="text-[#1CD8D2]" />,
      name: "Tailwind CSS",
    },
    { icon: <FaNodeJs className="text-[#1CD8D2]" />, name: "Node.js" },
    { icon: <SiMongodb className="text-[#1CD8D2]" />, name: "MongoDB" },
    { icon: <SiExpress className="text-[#1CD8D2]" />, name: "Express.js" },
    { icon: <SiGit className="text-[#1CD8D2]" />, name: "Git" },
    { icon: <FaPython className="text-[#1CD8D2]" />, name: "Python" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-12" id="skills">
      <h2
        className="text-4xl  text-center mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] z-10"
        style={{ opacity: 1, transform: "none" }}
      >
        My Skills
      </h2>
      <p
        className="mt-2 mb-8 text-center text-white/90 text-base sm:text-lg z-10"
        style={{ opacity: 1, transform: "none" }}
      >
        Modern Applications | Modern Technologies
      </p>

      {/* Infinite scroll container */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-20 min-w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-7xl mb-2">{skill.icon}</div>
              <p className="text-[#1CD8D2] text-sm md:text-base">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
