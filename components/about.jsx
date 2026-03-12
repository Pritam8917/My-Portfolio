"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-27 px-6 relative">
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
            structures and algorithms while continuously learning and exploring
            new technologies.
          </p>
        </motion.div>

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
            <GraduationCap className="text-indigo-400 mb-4" size={32} />

            <h3 className="text-xl font-semibold mb-3">Education</h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Currently pursuing a B.Tech in Electronics and Telecommunication
              Engineering from VSSUT (Veer Surendra Sai University of
              Technology), while building strong foundations in computer
              science, data structures & algorithms, and modern web development.
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

            <p className="text-gray-400 text-sm leading-relaxed">
              My goal is to become a skilled software engineer by mastering data
              structures, system design, and full-stack development while
              contributing to impactful products.
            </p>
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
              Interested in web development, AI technologies, problem solving,
              open-source contributions, and learning cutting-edge tools in
              software engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
