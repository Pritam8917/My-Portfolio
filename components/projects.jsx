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
    github: "#",
    live: "#",
  },
  {
      title: "Unimart",
      description:
      "A modern e-commerce platform where users can browse products, add items to cart, and securely place orders with a smooth and responsive shopping experience.",
      tech: ["Next.js", "React", "Tailwind", "Node.js", "MongoDB"],
      image: "/assets/unimart.png",
      github: "#",
      live: "#",
    },
    {
        title: "NeerNaya",
        description:
        "A smart water management platform where users can order water monitoring devices and view important water quality parameters such as pH, turbidity, and purity in real time.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        image: "/assets/neernaya.jpeg",
        github: "#",
        live: "#",
    },
    {
      title: "IEEE VSSUT Website",
      description:
        "Official IEEE VSSUT Student Branch website built with modern UI and responsive design.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      image: "/assets/ieee.png",
      github: "#",
      live: "#",
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
                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3">
                  {project.title}
                </h3>

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
                  >
                    <Github size={16} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300 hover:text-indigo-400 transition"
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
