"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "KrishiAI",
    description:
      "AI-powered crop yield prediction and field-level diagnosis platform helping farmers make data-driven decisions.",
    tech: ["Next.js", "React", "AI/ML", "Tailwind"],
    image: "/assets/krishiai.png",
    github: "https://github.com/Pritam8917/KrishiAI",
    live: "https://krishi-ai-weld-nine.vercel.app/",
    status: "Completed",
  },
  {
    title: "Unimart",
    description:
      "A modern e-commerce platform where users can browse products, add items to cart, and securely place orders.",
    tech: ["Next.js", "React", "Tailwind", "Node.js", "MongoDB"],
    image: "/assets/unimart.png",
    github: "https://github.com/Pritam8917/Unimart_e-commerce",
    live: "https://unimart-e-commerce.vercel.app/",
    status: "Completed",
  },
  {
    title: "NeerNaya",
    description:
      "A smart water management platform where users can monitor water quality parameters.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/assets/neernaya.jpeg",
    github: "https://github.com/Pritam8917/neernaya",
    live: "#",
    status: "Ongoing",
  },
  {
    title: "IEEE VSSUT Website",
    description:
      "Official IEEE VSSUT Student Branch website built with modern UI.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/assets/ieee.png",
    github: "https://github.com/Pritam8917/ieee-web",
    live: "https://ieee-vssut-sb.netlify.app/",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Some of the projects I&apos;ve built while exploring modern
            technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-xl sm:rounded-2xl overflow-hidden 
    bg-white/5 border border-white/10 
    hover:border-indigo-500/40 
    hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
    transition"
            >
              {/* Project Image */}
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-xl font-semibold">
                    {project.title}
                  </h3>

                  {/* Status Badge */}
                  <span
                    className={`flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full border
  ${
    project.status === "Completed"
      ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
      : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        project.status === "Completed"
                          ? "bg-indigo-400"
                          : "bg-cyan-400"
                      }`}
                    ></span>

                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 sm:gap-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300 hover:text-indigo-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300 hover:text-indigo-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
