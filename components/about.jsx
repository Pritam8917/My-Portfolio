"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A passionate developer with around 1 year of experience in building
            modern web applications. I enjoy solving problems using data
            structures and algorithms while continuously learning new
            technologies.
          </p>
        </motion.div>

        {/* IMAGE + CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* Gradient Border */}
            <div className="p-0.75 rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500">
              {/* Image Container */}
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-black">
                <Image
                  src="/assets/profile.jpg"
                  alt="Pritam Das Adhikari"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Passionate About Building Technology
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              I am currently pursuing my B.Tech in Electronics and
              Telecommunication Engineering at VSSUT, Burla. Alongside my
              academic journey, I actively focus on software development,
              learning modern frameworks and improving my problem-solving skills
              through data structures and algorithms.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My interests include web development, artificial intelligence, and
              building impactful projects that solve real-world problems. I
              enjoy learning new technologies and continuously improving as a
              developer.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-indigo-400" size={36} />
            </div>

            {/* Degree */}
            <h3 className="text-sm md:text-base font-semibold text-gray-200 leading-snug">
              B.Tech in Electronics and Telecommunication Engineering
            </h3>

            {/* University */}
            <p className="text-indigo-400 text-sm mt-3 font-medium">
              VSSUT, Burla
            </p>

            {/* Year */}
            <p className="text-gray-500 text-xs mt-1">2023 — 2027</p>

            {/* CGPA */}
            <p className="text-sm mt-3">
              <span className="text-gray-400">CGPA: </span>
              <span className="text-indigo-400 font-md">8.00</span>
            </p>
          </motion.div>

          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition"
          >
            <Target className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3">Career Goals</h3>

            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Become a skilled Software Developer</li>
              <li>• Master Data Structures & Algorithms</li>
              <li>• Contribute to Open Source Projects</li>
              <li>• Build scalable and impactful software</li>
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition"
          >
            <Heart className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3">Interests</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Interested in web development, AI technologies, open-source, and
              building innovative software solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
