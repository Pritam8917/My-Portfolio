"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  Briefcase,
  FolderGit2,
  Mail,
  Menu,
  X,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Phone,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Reachout", href: "#contact" },
  ];
  const sociallinks = [
  {
    name: "GitHub",
    url: "https://github.com/Pritam8917",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pritam-das-adhikari-018b352a2/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: Instagram,
  },
  {
    name: "Twitter",
    url: "https://x.com/PritamDasA95722",
    icon: BsTwitterX,
  },
];
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="sticky top-10 z-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* NAV CONTENT */}
    <div className="relative flex items-center justify-between py-0 md:py-4">

      {/* CENTER MENU (DESKTOP) */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2
        items-center gap-6 lg:gap-10
        px-6 lg:px-8 py-5
        rounded-full bg-black/80
        border border-white/20
        shadow-lg backdrop-blur-xl"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition font-medium ${
  activeSection === link.href.replace("#", "")
    ? "text-blue-400"
    : "text-white hover:text-blue-400"
}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="flex md:hidden ml-auto ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center
          w-9 h-9 rounded-md
          bg-white/10 border border-white/10
          backdrop-blur-lg
          hover:bg-white/20
          transition cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

    </div>
  </div>

  {/* MOBILE MENU */}
  <AnimatePresence>
    {isOpen && (
      <>
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />

        {/* SIDEBAR */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-[85%] max-w-[320px]
          bg-[#0b0b0b] border-l border-white/10
          z-50 md:hidden flex flex-col shadow-2xl"
        >

          {/* HEADER */}
          <div className="flex items-center justify-end px-6 py-5 border-b border-white/10">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 w-9 h-9 rounded-md
              hover:bg-white/20 transition cursor-pointer  bg-white/10 border border-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col px-6 py-6 gap-3">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition [&>svg]:text-indigo-400 hover:[&>svg]:text-cyan-400"
            >
              <Home size={18} />
              Home
            </Link>

            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition [&>svg]:text-indigo-400 hover:[&>svg]:text-cyan-400"
            >
              <User size={18} />
              About
            </Link>

            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition [&>svg]:text-indigo-400 hover:[&>svg]:text-cyan-400"
            >
              <Code size={18} />
              Skills
            </Link>

            <Link
              href="#experience"
              onClick={() => setIsOpen(false)}
             className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition [&>svg]:text-indigo-400 hover:[&>svg]:text-cyan-400"
            >
              <Briefcase size={18} />
              Experience
            </Link>

            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition [&>svg]:text-indigo-400 hover:[&>svg]:text-cyan-400"
            >
              <FolderGit2 size={18} />
              Projects
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition [&>svg]:text-indigo-400 hover:[&>svg]:text-cyan-400"
            >
              <Mail size={18} />
              Get in Touch
            </Link>
          </div>

          {/* CONTACT INFO */}
          <div className="border-t border-white/10 px-6 py-6 text-sm text-gray-400 space-y-3">
            <div className="flex items-center gap-3">
              <Phone size={16}className="text-indigo-400" />
              <span>+91-8917612959</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-indigo-400" />
              <span>pritamdasadhikari8917@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-indigo-400" />
              <span>Odisha, India</span>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 border-t border-white/10 px-6 mt-auto py-6">
            {sociallinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition hover:scale-110"
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>

        </motion.div>
      </>
    )}
  </AnimatePresence>
</nav>
  );
}
