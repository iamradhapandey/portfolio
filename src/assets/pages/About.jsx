import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiGsap, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiGsap />, name: "GSAP" },
];

const About = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 py-12 px-6 max-w-7xl mx-auto space-y-20">
      {/* Hero Intro */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-indigo-900">
          Hi, I'm Radha Pandey 👋
        </h1>
        <p className="text-center text-lg mt-4 text-indigo-700">
          A passionate MERN Stack Developer & Spiritual Thinker
        </p>
      </motion.div>

      {/* Who, What, Why */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Who am I?</h3>
          <p className="text-gray-700">I'm a tech enthusiast and a spiritual soul from India, blending logic with intuition to craft meaningful experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">What I do?</h3>
          <p className="text-gray-700">I build full-stack web apps using React, Node.js, MongoDB, and modern UI/UX tools like Tailwind and GSAP.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Why I code?</h3>
          <p className="text-gray-700">Code is my canvas and my prayer. I believe technology can uplift lives when infused with purpose and bhakti.</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div>
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-4 rounded-full shadow-xl flex flex-col items-center w-24 h-24"
            >
              <div className="text-3xl text-indigo-600">{skill.icon}</div>
              <p className="text-xs mt-2 text-indigo-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-center text-xl italic text-indigo-800 px-4"
      >
        “A codebase built with purpose is a temple for the soul.” – Radha Pandey
      </motion.blockquote>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <Link to="/projects">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
            Let's Build Together
          </button>
        </Link>
        <div className="flex justify-center space-x-6 mt-4 text-2xl text-indigo-700">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;