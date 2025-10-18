"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  const experiences = [
    {
      role: "Frontend Engineer",
      company: "TechNova",
      duration: "Jan 2022 - Dec 2022",
      description:
        "Built scalable React components with TailwindCSS focusing on performance and accessibility.",
    },
    {
      role: "Full Stack Developer",
      company: "CodeCrafters",
      duration: "Jan 2023 - Dec 2023",
      description:
        "Developed full-stack applications with Next.js and Node.js for enterprise clients.",
    },
    {
      role: "Software Engineer",
      company: "FutureSoft",
      duration: "Jan 2024 - Present",
      description:
        "Leading frontend architecture for a GenAI-powered enterprise platform with global reach.",
    },
  ];

  useEffect(() => {
    gsap.set([headingRef.current, subheadingRef.current, cardsRef.current], {
      opacity: 0,
      y: 50,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Heading & subheading animation
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          subheadingRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        // Cards staggered animation
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.3,
          },
          "-=0.3"
        );
    }, sectionRef);

    // Floating gradient animation (looping)
    gsap.to(".float-anim", {
      y: 30,
      x: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 6,
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white py-24 px-6 md:px-20"
      id="experience"
    >
      <div className="text-center mb-20">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl font-bold mb-4 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Experience
        </h2>

        <p
          ref={subheadingRef}
          className="text-gray-400 text-lg max-w-2xl mx-auto opacity-0"
        >
          A glimpse into my professional journey and internships — shaping my
          growth as a developer.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-2xl p-10 shadow-2xl w-full md:w-1/3 hover:scale-105 hover:rotate-[1deg] transition-transform duration-500 opacity-0"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-600/30 rounded-full blur-3xl -z-10"></div>
            <h3 className="text-2xl font-semibold mb-3">{exp.role}</h3>
            <p className="text-indigo-400 text-sm mb-2">{exp.company}</p>
            <p className="text-gray-400 text-xs mb-4 italic">{exp.duration}</p>
            <p className="text-gray-200 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      {/* Floating gradient circles for depth */}
      {/* Elegant floating blobs */}
      <div className="absolute top-16 left-16 w-56 h-56 bg-indigo-400/30 rounded-full blur-3xl animate-pulse float-anim"></div>
      <div className="absolute bottom-24 right-16 w-64 h-64 bg-pink-400/25 rounded-full blur-3xl animate-pulse float-anim"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-400/25 rounded-full blur-3xl animate-pulse float-anim"></div>
      <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-yellow-400/20 rounded-full blur-3xl animate-pulse float-anim"></div>
      <div className="absolute bottom-32 left-20 w-52 h-52 bg-teal-400/20 rounded-full blur-3xl animate-pulse float-anim"></div>
    </section>
  );
}
