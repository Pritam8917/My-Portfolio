"use client";
import React from "react";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      aria-label="About me"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse"
        ></div>
        <div
          className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]opacity-15 blur-[140px] animate-pulse delay-300"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[100px]"
        ></div>
      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1CD8D2]/20 to-[#302b63]/20 border border-[#1CD8D2]/25"
            aria-hidden="true"
            style={{ transform: "none" }}
          >
            <div className="absolute inset-0"></div>
            <img alt="test" src="/assets/Pritam.jpg" />
          </div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
            >
              Pritam Das Adhikari
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build scalable, modern applications with a strong focus on clean
              architecture, delightful UX, and performance. My toolkit spans
              Java, React, Next.js, JavaScript, Tailwind CSS, and RestfulAPI—
              bringing ideas to life from concept to production with robust APIs
              and smooth interfaces.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              <div
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="text-sm text-gray-400">Experience</div>
                <div className="text-base font-semibold text-white">
                  1+ years
                </div>
              </div>
              <div
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="text-sm text-gray-400">Specialty</div>
                <div className="text-base font-semibold text-white">
                  Full Stack & Software Development
                </div>
              </div>
              <div
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="text-sm text-gray-400">Focus</div>
                <div className="text-base font-semibold text-white">
                  Performance & UX
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
                aria-label="View my projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
                aria-label="Get in touch"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1">
          <div
            className="text-center md:text-left"
            style={{ opacity: 1, transform: "none" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I’m a Software Developer and Web Developer dedicated to crafting
              high-performance, scalable, and visually engaging digital
              experiences. My expertise lies in building modern web applications
              using cutting-edge technologies, with a strong focus on clean
              architecture, efficient code, and responsive design. I enjoy
              solving complex problems and transforming ideas into functional,
              intuitive products that enhance user experience.
            </p>
            <p className="mt-4 text-gray-400 text-base sm:text-lg">
              I love turning ideas into scalable, user-friendly products that
              make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
