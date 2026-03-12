"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "Java", level: 85, icon: <FaJava /> },
  { name: "JavaScript", level: 80, icon: <FaNodeJs /> },
  { name: "Python", level: 70, icon: <FaPython /> },
  { name: "React", level: 75, icon: <FaReact /> },
  { name: "Next.js", level: 70, icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss /> },
  { name: "Node.js", level: 65, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 60, icon: <SiMongodb /> },
  { name: "GitHub", level: 75, icon: <SiGithub /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-27 px-6 relative bg-[#101013]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
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

              {/* Percentage */}
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
