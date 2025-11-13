"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      aria-label="About me"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[100px]"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          variants={fadeUp}
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1CD8D2]/20 to-[#302b63]/20 border border-[#1CD8D2]/25"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              alt="Pritam Das Adhikari"
              src="/assets/Pritam.jpg"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 flex flex-col justify-center text-center md:text-left"
            variants={fadeUp}
            custom={0.3}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
              variants={fadeUp}
              custom={0.4}
            >
              Pritam Das Adhikari
            </motion.h2>

            <motion.p
              className="mt-2 text-lg sm:text-xl text-white/90 font-semibold"
              variants={fadeUp}
              custom={0.5}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl"
              variants={fadeUp}
              custom={0.6}
            >
              I build scalable, modern applications with a strong focus on clean
              architecture, delightful UX, and performance. My toolkit spans
              Java, React, Next.js, JavaScript, Tailwind CSS, and RESTful APIs—
              bringing ideas to life from concept to production with robust APIs
              and smooth interfaces.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl"
              variants={container}
            >
              {[
                { label: "Experience", value: "1+ years" },
                { label: "Specialty", value: "Full Stack & Software Development" },
                { label: "Focus", value: "Performance & UX" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition"
                  variants={fadeUp}
                  custom={0.7 + i * 0.1}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold text-white">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              variants={fadeUp}
              custom={1.2}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* About Me Text Section */}
        <motion.div
          className="grid md:grid-cols-1"
          variants={fadeUp}
          custom={1.4}
        >
          <motion.div className="text-center md:text-left" variants={fadeUp}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I&apos;m a Software Developer and Web Developer dedicated to crafting
              high-performance, scalable, and visually engaging digital
              experiences. My expertise lies in building modern web applications
              using cutting-edge technologies, with a strong focus on clean
              architecture, efficient code, and responsive design.
            </p>
            <p className="mt-4 text-gray-400 text-base sm:text-lg">
              I love turning ideas into scalable, user-friendly products that
              make an impact.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
