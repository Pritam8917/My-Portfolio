"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Unimart",
      desc: "One stop online store for Fashion, Electronics and more..",
      link: "https://unimart-e-commerce.vercel.app/",
      image: "/assets/Unimart.png",
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
            <PinContainer title={`/${project.link}`} href={project.link}>
              <div className="flex flex-col p-6 tracking-tight text-slate-100/50 w-[25rem] h-[20rem] bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{project.desc}</p>

                {/* Image or Gradient Box */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400} // adjust according to your design
                    height={200} // adjust according to your design
                    className="w-full h-48 object-cover rounded-lg mt-6 shadow-inner hover:shadow-blue-500/50 transition-all duration-500"
                  />
                ) : (
                  <div
                    className={`flex flex-1 w-full rounded-lg mt-6 bg-gradient-to-br ${project.gradient} opacity-80 hover:opacity-100 transition-all duration-500`}
                  />
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
