"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiShadcnui,
  SiScikitlearn,
  SiVercel,
  SiIntellijidea,
  SiNetlify,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiJavascript } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", level: 80, icon: <DiJavascript /> },
    { name: "Python", level: 75, icon: <FaPython /> },
    { name: "Java", level: 85, icon: <FaJava /> },
  ],
  Frontend: [
    { name: "React", level: 80, icon: <FaReact /> },
    { name: "Next.js", level: 75, icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
    { name: "Shadcn UI", level: 70, icon: <SiShadcnui /> },
  ],

  Backend: [
    { name: "Node.js", level: 70, icon: <FaNodeJs /> },
    { name: "Next.js", level: 75, icon: <SiNextdotjs /> },
    { name: "MongoDB", level: 65, icon: <SiMongodb /> },
    { name: "SQL", level: 60, icon: <GrMysql /> },
  ],

  "AI / ML": [
    { name: "Python", level: 80, icon: <FaPython /> },
    { name: "Scikit-learn", level: 60, icon: <SiScikitlearn /> },
    { name: "pandas", level: 80, icon: <SiPandas /> },
    { name: "NumPy", level: 85, icon: <SiNumpy /> },
    { name: "PyTorch", level: 55, icon: <SiPytorch /> },
  ],

  "Dev Tools": [
    { name: "GitHub", level: 80, icon: <SiGithub /> },
    { name: "VS Code", level: 85, icon: <VscVscode /> },
    { name: "IntelliJ IDEA", level: 70, icon: <SiIntellijidea /> },
    { name: "Vercel", level: 75, icon: <SiVercel /> },
    { name: "Netlify", level: 65, icon: <SiNetlify /> },
  ],
  "Coding Platforms": [
    { name: "LeetCode", level: 65, icon: <SiLeetcode /> },
    { name: "GeeksforGeeks", level: 45, icon: <SiGeeksforgeeks /> },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-28 px-6 bg-[#101013]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills &{" "}
            <span className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-indigo-500 text-white cursor-pointer"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 cursor-pointer"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeTab].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-xl bg-white/5 border border-white/10
  hover:border-indigo-500/40 hover:bg-white/10 transition"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-400 text-2xl">{skill.icon}</div>
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-linear-to-r from-indigo-500 to-cyan-500"
                />
              </div>

              <p className="text-right text-sm text-gray-400 mt-2">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
