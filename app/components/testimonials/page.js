"use client";
import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { BackgroundLines } from "../ui/background-lines";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <BackgroundLines className="flex items-center justify-center relative w-full py-[40vh] ">
      <section
        id="testimonials"
        className="
      relative flex flex-col items-center justify-center text-center 
      w-full max-w-6xl 
      sm:py-15 md:py-10  py-15
      px-4 sm:px-6 md:px-10 
    "
      >
        <h2
          className="
        text-4xl sm:text-5xl
        font-bold
        leading-tight tracking-tight
        bg-clip-text text-transparent 
        bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
        mb-4 
      "
        >
          What People Say
        </h2>

        <p
          className="
        text-base sm:text-lg md:text-xl 
        text-gray-400 max-w-2xl 
        mx-auto mb-10 sm:mb-14
      "
        >
          A few kind words from amazing people I’ve met on my journey
        </p>

        <div className="w-full px-2 sm:px-4 md:px-6">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
     
    </BackgroundLines>
  );
}
