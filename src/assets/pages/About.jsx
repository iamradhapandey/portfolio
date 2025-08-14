// // About.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin
// } from "react-icons/fa";
// import {
//   SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiFirebase, SiPostman
// } from "react-icons/si";

// const tabs = ["Journey", "Skills", "Achievements"];

// const journeyData = [
//   { year: "2022 – Present", title: "B.Tech in Computer Science", place: "Radharaman Institute, Bhopal" },
//   { year: "2019 – 2022", title: "Diploma in Mechanical Engineering", place: "Govt. Polytechnic, Burhanpur" },
//   { year: "2019", title: "High School", place: "Buddha Mission School, Burhanpur" }
// ];

// const skills = [
//   { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
//   { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
//   { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
//   { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
//   { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
//   { icon: <SiExpress className="text-gray-700" />, name: "Express.js" },
//   { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
//   { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
//   { icon: <SiRedux className="text-purple-500" />, name: "Redux Toolkit" },
//   { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
//   { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
//   { icon: <FaGitAlt className="text-red-500" />, name: "Git" }
// ];

// const achievements = [
//   { title: "AWS APAC Solutions Architecture Virtual Experience", issuer: "AWS", year: "2025", link: "https://www.credly.com" },
//   { title: "Software Testing – NPTEL", issuer: "NPTEL (Govt. of India)", year: "2025", link: "https://nptel.ac.in" }
// ];

// export default function About() {
//   const [activeTab, setActiveTab] = useState("Journey");
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   // Mouse move handler
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 20; // range -10 to 10
//       const y = (e.clientY / window.innerHeight - 0.5) * 20;
//       setMousePos({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="relative bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16 overflow-hidden">

//       {/* Parallax Background */}
//       <motion.div
//         key={activeTab} // triggers slide animation on tab change
//         initial={{ x: activeTab === "Journey" ? -50 : 50, opacity: 0.2 }}
//         animate={{ x: mousePos.x, y: mousePos.y, opacity: 0.1 }}
//         transition={{ type: "spring", stiffness: 50, damping: 20 }}
//         className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-purple-900 pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       {/* Hero Section */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 mb-12">
//         <motion.img
//           src="/profile.jpg"
//           alt="Radha Pandey"
//           className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-purple-500 shadow-lg"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         />
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl font-bold">Radha Pandey</h1>
//           <p className="text-purple-400 mt-2">MERN Stack Developer | Creative Thinker</p>
//           <p className="text-gray-400 mt-4 max-w-xl">
//             Passionate about crafting high-quality, interactive web applications with
//             a perfect balance of performance, design, and functionality.
//           </p>
//           <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
//             <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="relative z-10 flex justify-center gap-6 border-b border-gray-700 mb-8">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 px-4 text-lg font-medium transition ${
//               activeTab === tab ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400 hover:text-purple-300"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <AnimatePresence mode="wait">

//         {/* Journey Tab */}
//         {activeTab === "Journey" && (
//           <motion.div
//             key="Journey"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 30 }}
//             transition={{ duration: 0.4 }}
//             className="relative z-10 space-y-6"
//           >
//             {journeyData.map((j, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-500/40 transition"
//               >
//                 <p className="text-purple-400">{j.year}</p>
//                 <h3 className="text-lg font-semibold">{j.title}</h3>
//                 <p className="text-gray-400">{j.place}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* Skills Tab */}
//         {activeTab === "Skills" && (
//           <motion.div
//             key="Skills"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
//           >
//             {skills.map((skill, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: i * 0.05 }}
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition"
//               >
//                 <span className="text-3xl">{skill.icon}</span>
//                 <p className="text-xs mt-2">{skill.name}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* Achievements Tab */}
//         {activeTab === "Achievements" && (
//           <motion.div
//             key="Achievements"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             className="relative z-10 space-y-6"
//           >
//             {achievements.map((a, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-500/40 transition"
//               >
//                 <h3 className="text-lg font-semibold text-purple-400">{a.title}</h3>
//                 <p className="text-gray-400">{a.issuer} • {a.year}</p>
//                 <a
//                   href={a.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-sm text-purple-300 hover:underline mt-2 inline-block"
//                 >
//                   View Certificate
//                 </a>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//       </AnimatePresence>
//     </div>
//   );
// }

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin } from "react-icons/fa";
// import { SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiFirebase, SiPostman } from "react-icons/si";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const tabs = ["Journey", "Skills", "Achievements"];

// const journeyData = [
//   { year: "2022 – Present", title: "B.Tech in Computer Science", place: "Radharaman Institute, Bhopal" },
//   { year: "2019 – 2022", title: "Diploma in Mechanical Engineering", place: "Govt. Polytechnic, Burhanpur" },
//   { year: "2019", title: "High School", place: "Buddha Mission School, Burhanpur" }
// ];

// const skills = [
//   { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
//   { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
//   { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
//   { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
//   { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
//   { icon: <SiExpress className="text-gray-700" />, name: "Express.js" },
//   { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
//   { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
//   { icon: <SiRedux className="text-purple-500" />, name: "Redux Toolkit" },
//   { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
//   { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
//   { icon: <FaGitAlt className="text-red-500" />, name: "Git" }
// ];

// const achievements = [
//   { title: "AWS APAC Solutions Architecture Virtual Experience", issuer: "AWS", year: "2025", link: "https://www.credly.com" },
//   { title: "Software Testing – NPTEL", issuer: "NPTEL (Govt. of India)", year: "2025", link: "https://nptel.ac.in" }
// ];

// export default function About() {
//   const [activeTab, setActiveTab] = useState("Journey");
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   // Particle engine init
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   // Mouse move handler
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 20;
//       const y = (e.clientY / window.innerHeight - 0.5) * 20;
//       setMousePos({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="relative bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16 overflow-hidden">

//       {/* Particle effect */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         className="absolute inset-0"
//         options={{
//           background: { color: "transparent" },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onHover: { enable: true, mode: "repulse" },
//               resize: true
//             },
//             modes: {
//               repulse: { distance: 100, duration: 0.4 }
//             }
//           },
//           particles: {
//             color: { value: "#ffffff" },
//             links: { color: "#888", distance: 150, enable: true, opacity: 0.2, width: 1 },
//             collisions: { enable: false },
//             move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
//             number: { value: 50, density: { enable: true, area: 800 } },
//             opacity: { value: 0.5 },
//             shape: { type: "circle" },
//             size: { value: { min: 1, max: 3 } }
//           },
//           detectRetina: true
//         }}
//       />

//       {/* Parallax gradient background */}
//       <motion.div
//         key={activeTab}
//         initial={{ x: activeTab === "Journey" ? -50 : 50, opacity: 0.2 }}
//         animate={{ x: mousePos.x, y: mousePos.y, opacity: 0.08 }}
//         transition={{ type: "spring", stiffness: 50, damping: 20 }}
//         className="absolute inset-0 bg-gradient-to-r from-red-600 via-black to-purple-900 pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 mb-12">
//         <motion.img
//           src="/profile.jpg"
//           alt="Radha Pandey"
//           className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-purple-500 shadow-lg"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         />
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl font-bold">Radha Pandey</h1>
//           <p className="text-purple-400 mt-2">MERN Stack Developer | Creative Thinker</p>
//           <p className="text-gray-400 mt-4 max-w-xl">
//             Passionate about crafting high-quality, interactive web applications with
//             a perfect balance of performance, design, and functionality.
//           </p>
//           <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
//             <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="relative z-10 flex justify-center gap-6 border-b border-gray-700 mb-8">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 px-4 text-lg font-medium transition ${
//               activeTab === tab ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400 hover:text-purple-300"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <AnimatePresence mode="wait">
//         {activeTab === "Journey" && (
//           <motion.div
//             key="Journey"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 30 }}
//             transition={{ duration: 0.4 }}
//             className="relative z-10 space-y-6"
//           >
//             {journeyData.map((j, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-500/40 transition"
//               >
//                 <p className="text-purple-400">{j.year}</p>
//                 <h3 className="text-lg font-semibold">{j.title}</h3>
//                 <p className="text-gray-400">{j.place}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {activeTab === "Skills" && (
//           <motion.div
//             key="Skills"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
//           >
//             {skills.map((skill, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: i * 0.05 }}
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition"
//               >
//                 <span className="text-3xl">{skill.icon}</span>
//                 <p className="text-xs mt-2">{skill.name}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {activeTab === "Achievements" && (
//           <motion.div
//             key="Achievements"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             className="relative z-10 space-y-6"
//           >
//             {achievements.map((a, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-500/40 transition"
//               >
//                 <h3 className="text-lg font-semibold text-purple-400">{a.title}</h3>
//                 <p className="text-gray-400">{a.issuer} • {a.year}</p>
//                 <a
//                   href={a.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-sm text-purple-300 hover:underline mt-2 inline-block"
//                 >
//                   View Certificate
//                 </a>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import React, { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaLinkedin,
} from "react-icons/fa"
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiPostman,
} from "react-icons/si"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const tabs = ["Journey", "Skills", "Achievements"]

const journeyData = [
  {
    year: "2022 – Present",
    title: "B.Tech in Computer Science",
    place: "Radharaman Institute, Bhopal",
  },
  {
    year: "2019 – 2022",
    title: "Higher Secondary School",
    place: "Sher Shah College, Bihar",
  },
  {
    year: "2019",
    title: "High School",
    place: "Buddha Mission School, Bihar",
  },
]

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
  { icon: <SiRedux className="text-blue-500" />, name: "Redux Toolkit" },
  { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
]

const achievements = [
  {
    title: "AWS APAC Solutions Architecture Virtual Experience",
    issuer: "AWS",
    year: "2025",
    link: "https://drive.google.com/file/d/1dKjc8j2kbn-cyXKduV-1ioEhCEfZVOKf/view?usp=drive_link",
  },
  {
    title: "Software Testing – NPTEL",
    issuer: "NPTEL (Govt. of India)",
    year: "2025",
    link: "https://drive.google.com/file/d/1yRmbwQM16l2kZAmHgkq8zeWLlX9haBd9/view?usp=drive_link",
  },
  {
    title: "React Frontend  Project",
    issuer: "GreatStack",
    year: "2025",
    link: "https://drive.google.com/file/d/1XT54HmqYAMv2r1zrlyRd5YDHiWsLUTSI/view?usp=drive_link",
  },
]

export default function About() {
  const [activeTab, setActiveTab] = useState("Journey")

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-gray-300 px-6 py-16">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 120, duration: 0.5 } },
          },
          particles: {
            color: { value: ["#0ea5e9", "#14b8a6", "#06b6d4", "#22d3ee"] },
            links: {
              color: "#0ea5e9",
              distance: 130,
              enable: true,
              opacity: 0.3,
              width: 1.2,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "out" },
            },
            number: { value: 100, density: { enable: true, area: 900 } },
            opacity: { value: 1.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 mb-12">
        <motion.img
          src="/public/profile.png"
          alt="Radha Pandey"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-blue-200 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">Radha Pandey</h1>
          <p className="text-blue-400 mt-2">
            REACT & FRONTEND  Developer | Creative Thinker
          </p>
          <p className="text-gray-400 mt-4 max-w-xl">
            “Hi, I’m Radha Pandey – a React & Frontend Developer who brings
            ideas to life on the web. I build sleek, responsive, and interactive
            applications using JavaScript, React.js, and modern frontend
            libraries, blending creativity with performance to craft experiences
            users love.”
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl text-gray-300">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative z-10 flex justify-center gap-6 border-b border-gray-700 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 text-lg font-medium transition-all duration-300 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-400 scale-105"
                : "text-gray-400 hover:text-blue-300 hover:scale-105"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "Journey" && (
          <motion.div
            key="Journey"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 space-y-6"
          >
            {journeyData.map((j, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <p className="text-blue-400">{j.year}</p>
                <h3 className="text-lg font-semibold">{j.title}</h3>
                <p className="text-gray-400">{j.place}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "Skills" && (
          <motion.div
            key="Skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  boxShadow: "0 0 15px #0ea5e9",
                }}
                className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition-all"
              >
                <span className="text-3xl">{skill.icon}</span>
                <p className="text-xs mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "Achievements" && (
          <motion.div
            key="Achievements"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="relative z-10 space-y-6"
          >
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-blue-400">
                  {a.title}
                </h3>
                <p className="text-gray-400">
                  {a.issuer} • {a.year}
                </p>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-300 hover:underline mt-2 inline-block"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
