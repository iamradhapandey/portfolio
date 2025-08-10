// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaBolt } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiJavascript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-8 pt-24 md:pt-0">
      
      {/* Left Content */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-purple-400">Radha Kumari</span>
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl font-semibold mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer 💻",
              2000,
              "UI/UX Enthusiast 🎨",
              2000,
              "GSAP Animation Lover ⚡",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <p className="text-gray-400 mb-6 leading-relaxed">
          I'm a React developer focused on building responsive, accessible, and
          beautiful web apps. I blend creativity with logic to craft seamless
          user experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mb-6">
          <a
            href="#"
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full font-semibold transition shadow-lg shadow-purple-500/30"
          >
            View Resume →
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-purple-400 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#" className="hover:text-purple-400 transition">
            <FaGithub size={28} />
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative">
          <img
            src="/public/profile.jpg"
            alt="Radha"
            className="w-64 h-64 md:w-80 md:h-80  object-cover rounded-full border-4 border-purple-400 shadow-lg"
          />
          <div className="absolute -inset-2 rounded-full bg-purple-500 blur-3xl opacity-30 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute bottom-8 left-8 flex gap-4 text-3xl text-purple-300 opacity-70"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        <FaReact />
        <SiTailwindcss />
        <SiFramer />
        <SiJavascript />
        <FaBolt />
      </motion.div>
    </section>
  );
};

export default Hero;
