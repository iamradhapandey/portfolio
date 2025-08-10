// About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact, FaNodeJs, FaGithub, FaLinkedin, FaBolt,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiExpress, SiRedux,
  SiFirebase, SiPostman
} from "react-icons/si";

const education = [
  {
    year: "2022 – Present",
    degree: "B.Tech in Computer Science & Engineering",
    school: "Radharaman Institute of Technology and Science, Bhopal",
    details: "CGPA: 7.43 / 10"
  },
  {
    year: "2019 – 2022",
    degree: "Diploma in Mechanical Engineering",
    school: "Govt. Polytechnic College, Burhanpur",
    details: "Percentage: 69.4%"
  },
  {
    year: "2019",
    degree: "High School (10th)",
    school: "Buddha Mission School, Burhanpur",
    details: "Percentage: 69.8%"
  }
];

const certifications = [
  {
    title: "AWS APAC Solutions Architecture Virtual Experience Program",
    issuer: "AWS",
    date: "Jan 2025",
    link: "https://www.credly.com" // Replace with real link
  },
  {
    title: "Software Testing – NPTEL (Govt. of India)",
    issuer: "NPTEL",
    date: "Jan 2025",
    link: "https://nptel.ac.in" // Replace with real link
  }
];

const skills = {
  frontend: [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <SiRedux className="text-purple-500" />, name: "Redux Toolkit" }
  ],
  backend: [
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-700" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" }
  ],
  tools: [
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
    { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
    { icon: <FaBolt className="text-yellow-400" />, name: "GSAP Animations" }
  ]
};

const About = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 py-16 px-6 max-w-7xl mx-auto space-y-20">

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-10"
      >
        {/* Profile Image */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-300 animate-pulse"></div>
          <img
            src="/public/profile.jpg" // Replace with your image path
            alt="Radha Pandey"
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">
            Hi, I'm <span className="text-indigo-600">Radha Pandey</span> 👋
          </h1>
          <p className="text-lg font-medium text-indigo-700 mb-4">
            MERN Stack Developer | Creative Thinker | Lifelong Learner
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I specialize in building high-quality, interactive web applications with
            a balance of performance, aesthetics, and functionality. My goal is to
            craft digital experiences that are not just usable but memorable.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              className="bg-white border border-indigo-600 text-indigo-600 px-5 py-2 rounded-full font-medium hover:bg-indigo-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Education</h2>
        <div className="relative border-l-4 border-indigo-300 ml-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] mt-2"></div>
              <p className="text-sm text-indigo-500">{edu.year}</p>
              <h3 className="text-lg font-semibold text-indigo-800">{edu.degree}</h3>
              <p className="text-gray-700">{edu.school}</p>
              <p className="text-gray-500">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/40"
            >
              <h3 className="text-lg font-semibold text-indigo-800">{cert.title}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <p className="text-sm text-indigo-500 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      {Object.entries(skills).map(([category, skillList], index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold text-center text-indigo-900 mb-6 capitalize">
            {category} Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {skillList.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="bg-white p-4 rounded-full shadow-xl flex flex-col items-center w-24 h-24 cursor-pointer transition"
              >
                <div className="text-3xl">{skill.icon}</div>
                <p className="text-xs mt-2 text-indigo-700">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
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


// About.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   FaReact, FaNodeJs, FaGithub, FaLinkedin, FaBolt,
//   FaHtml5, FaCss3Alt, FaJs
// } from "react-icons/fa";
// import {
//   SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiFirebase
// } from "react-icons/si";

// // Skills Data
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
//   { icon: <FaBolt className="text-yellow-400" />, name: "Animations" },
// ];

// // Education Data
// const education = [
//   {
//     year: "2022 – Present",
//     degree: "B.Tech in Computer Science & Engineering",
//     school: "Radharaman Institute of Technology and Science, Bhopal",
//     details: "CGPA: 7.43 / 10"
//   },
//   {
//     year: "2019 – 2022",
//     degree: "Diploma in Mechanical Engineering",
//     school: "Govt. Polytechnic College, Burhanpur",
//     details: "Percentage: 69.4%"
//   },
//   {
//     year: "2019",
//     degree: "High School (10th)",
//     school: "Buddha Mission School, Burhanpur",
//     details: "Percentage: 69.8%"
//   }
// ];

// // Certificates Data
// const certificates = [
//   {
//     title: "AWS APAC Solutions Architecture",
//     issuer: "AWS",
//     year: "2025",
//     link: "#"
//   },
//   {
//     title: "Software Testing",
//     issuer: "NPTEL (Govt. of India)",
//     year: "2025",
//     link: "#"
//   }
// ];

// const About = () => {
//   return (
//     <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 py-16 px-6 max-w-7xl mx-auto space-y-20">

//       {/* INTRO SECTION */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex flex-col md:flex-row items-center md:items-start gap-10"
//       >
//         {/* Profile Image */}
//         <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-300 animate-pulse"></div>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Radha Pandey"
//             className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="text-center md:text-left max-w-2xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">
//             Hi, I'm <span className="text-indigo-600">Radha Pandey</span> 👋
//           </h1>
//           <p className="text-lg font-medium text-indigo-700 mb-4">
//             MERN Stack Developer | Creative Thinker | Lifelong Learner
//           </p>
//           <p className="text-gray-700 leading-relaxed mb-6">
//             I specialize in building high-quality, interactive web applications with
//             a balance of performance, aesthetics, and functionality. My goal is to
//             craft digital experiences that are not just usable but memorable.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
//             >
//               Download Resume
//             </a>
//             <Link
//               to="/contact"
//               className="bg-white border border-indigo-600 text-indigo-600 px-5 py-2 rounded-full font-medium hover:bg-indigo-50 transition"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>
//       </motion.div>

//       {/* EDUCATION */}
//       <div>
//         <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Education</h2>
//         <div className="relative border-l-4 border-indigo-300 ml-6">
//           {education.map((edu, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="mb-10 ml-6"
//             >
//               <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] mt-2"></div>
//               <p className="text-sm text-indigo-500">{edu.year}</p>
//               <h3 className="text-lg font-semibold text-indigo-800">{edu.degree}</h3>
//               <p className="text-gray-700">{edu.school}</p>
//               <p className="text-gray-500">{edu.details}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* SKILLS */}
//       <div>
//         <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Skills & Tools</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
//           {skills.map((skill, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.15 }}
//               className="bg-white p-4 rounded-full shadow-xl flex flex-col items-center w-24 h-24 cursor-pointer transition"
//             >
//               <div className="text-3xl">{skill.icon}</div>
//               <p className="text-xs mt-2 text-indigo-700">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* CERTIFICATES */}
//       <div>
//         <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Certificates</h2>
//         <div className="grid sm:grid-cols-2 gap-8">
//           {certificates.map((cert, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               className="bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/40"
//             >
//               <h3 className="text-lg font-semibold text-indigo-800">{cert.title}</h3>
//               <p className="text-gray-700">{cert.issuer} • {cert.year}</p>
//               <a href={cert.link} className="text-indigo-600 text-sm hover:underline mt-2 inline-block">
//                 View Certificate
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* QUOTE */}
//       <motion.blockquote
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 1 }}
//         viewport={{ once: true }}
//         className="text-center text-xl italic text-indigo-800 px-4"
//       >
//         “A codebase built with purpose is a temple for the soul.” – Radha Pandey
//       </motion.blockquote>

//       {/* CALL TO ACTION */}
//       <div className="text-center space-y-4">
//         <Link to="/projects">
//           <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
//             Let's Build Together
//           </button>
//         </Link>
//         <div className="flex justify-center space-x-6 mt-4 text-2xl text-indigo-700">
//           <a href="https://github.com" target="_blank" rel="noreferrer">
//             <FaGithub />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
