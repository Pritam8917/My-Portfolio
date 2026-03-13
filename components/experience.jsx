"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "IEEE VSSUT Computer Society",
    period: "2024 - Present",
    description:
      "Developed and maintained the official IEEE VSSUT Student Branch website using Next.js and Tailwind CSS.",
  },
  {
    role: "Project Intern",
    company: "IIT Bhubaneswar",
    period: "Dec 2025 - Jan 2026",
    description:
      "Developed KrishiAI, an AI-powered crop yield prediction and field-level diagnosis platform designed to help farmers optimize crop productivity using data-driven insights.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-27 pb-0 px-6 overflow-hidden "
    >

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            My journey in software development and learning.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-indigo-500 via-cyan-400 to-transparent"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30">
                  <Briefcase size={18} className="text-white" />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] p-6 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  hover:border-indigo-500/40
                  transition
                  hover:-translate-y-1`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-indigo-400 text-sm mt-1">
                    {exp.company}
                  </p>

                  <span className="text-gray-400 text-xs">
                    {exp.period}
                  </span>

                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}