"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function Projects() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  const projects = [
    {
      title: "Aceternity UI",
      desc: "Customizable Tailwind CSS and Framer Motion Components.",
      link: "#",
      gradient: "from-violet-500 via-purple-500 to-blue-500",
    },
    {
      title: "GenAI PV App",
      desc: "AI-powered patient report processing with global accessibility.",
      link: "#",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      title: "E-commerce Dashboard",
      desc: "Interactive dashboard with real-time analytics.",
      link: "#",
      gradient: "from-green-400 via-teal-500 to-blue-400",
    },
    {
      title: "Portfolio Builder",
      desc: "Dynamic portfolio builder with drag-and-drop customization.",
      link: "#",
      gradient: "from-orange-400 via-rose-500 to-red-500",
    },
    {
      title: "Crypto Tracker",
      desc: "Track live crypto prices and analyze trends with AI insights.",
      link: "#",
      gradient: "from-cyan-400 via-blue-500 to-purple-500",
    },
    {
      title: "Travel Mate",
      desc: "Smart itinerary planner and real-time travel companion app.",
      link: "#",
      gradient: "from-yellow-400 via-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="bg-black text-white px-6 md:px-20 py-10" id="projects">
      <div className="flex flex-col items-center text-center mb-24">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl">
          Showcasing my latest web and software creations built with modern
          technologies.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 place-items-center">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col items-center">
            <PinContainer title={`/${project.title}`} href={project.link}>
              <div className="flex flex-col p-6 tracking-tight text-slate-100/50 w-[25rem] h-[20rem] bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{project.desc}</p>
                <div
                  className={`flex flex-1 w-full rounded-lg mt-6 bg-gradient-to-br ${project.gradient} opacity-80 hover:opacity-100 transition-all duration-500`}
                />
              </div>
            </PinContainer>

            {/* Tooltip under each card */}
            <div className="pt-14 flex justify-center w-full flex-row items-center">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
