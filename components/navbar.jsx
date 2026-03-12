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
    <nav className="sticky top-6 z-50 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto pt-4 sm:pt-6">
        {/* NAV CONTENT */}
        <div className="relative flex items-center justify-between px-4 ">
          {/* TRUE CENTER MENU */}
          <div
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 
items-center gap-6 lg:gap-10 
px-6 lg:px-8 py-4 
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
          <div className="flex md:hidden items-center gap-2 ">
            {/* MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center 
    w-9 h-9 rounded-md
    bg-white/10 border border-white/10 
    backdrop-blur-lg 
    hover:bg-white/20 
    transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
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
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 w-9 h-9 rounded-md cursor-pointer
    backdrop-blur-lg 
    hover:bg-white/10 
    transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="flex flex-col px-6 py-6 gap-3">
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  <Home size={18} />
                  <span>Home</span>
                </Link>

                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  <User size={18} />
                  <span>About</span>
                </Link>

                <Link
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  <Code size={18} />
                  <span>Skills</span>
                </Link>

                <Link
                  href="#experience"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  <Briefcase size={18} />
                  <span>Experience</span>
                </Link>

                <Link
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  <FolderGit2 size={18} />
                  <span>Projects</span>
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  <Mail size={18} />
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* CONTACT INFO */}
              <div className="border-t border-white/10 px-6 py-6 text-sm text-gray-400 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <span>+91-8917612959</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>pritamdasadhikari8917@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>Odisha, India</span>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex gap-6 border-t border-white/10 px-6 mt-16 pt-7">
                {sociallinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition hover:scale-110"
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
