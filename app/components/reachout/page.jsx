"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Wrap Next.js Image with motion
const MotionImage = motion(Image);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", service: "", idea: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 py-15 md:py-20"
    >
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.img
          alt="Contact Illustration"
          src="/assets/contactbot.png"
          width={550} 
          height={550} 
          className="rounded-2xl shadow-lg object-cover w-64 sm:w-80 md:w-96 lg:w-[550px]"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-white/5 p-8 sm:py-12 rounded-2xl shadow-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your Name"
              className="p-3 rounded-md bg-white/10 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your Email"
              className="p-3 rounded-md bg-white/10 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Idea */}
          <div className="flex flex-col">
            <label className="mb-1">
              Explain Your Idea <span className="text-red-500">*</span>
            </label>
            <textarea
              name="idea"
              placeholder="Explain your idea..."
              rows={5}
              value={formData.idea}
              onChange={handleChange}
              className="p-3 rounded-md bg-white/10 text-white border border-gray-500 focus:outline-none focus:border-blue-500 resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
