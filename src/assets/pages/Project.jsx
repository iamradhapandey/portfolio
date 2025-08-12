// import React, { useState } from "react";

// const projectData = [
//   {
//     title: "GlamThreadz E-Commerce",
//     description: "A modern fashion e-commerce platform with category filters, cart, and responsive design.",
//     tech: ["React", "TailwindCSS", "Redux", "Node.js", "MongoDB"],
//     img: "/images/glamthreadz.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/GlamThreadz-E-Commerce-",
//     category: "Web App",
//   },
//   {
//     title: "Miranda",
//     description: "A sleek and animated website inspired by creative studio designs.",
//     tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive.js"],
//     img: "/images/miranda.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/Miranda",
//     category: "UI Design",
//   },
//   {
//     title: "Digital Product Agency - Humaan",
//     description: "A digital agency landing page with animations and responsive design.",
//     tech: ["HTML", "CSS", "JavaScript", "GSAP"],
//     img: "/images/humaan.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/Digital-Product-Agency-Humaan",
//     category: "UI Design",
//   },
//   {
//     title: "Reimagin Mivi Clone",
//     description: "A modern clone of Mivi website with creative animations.",
//     tech: ["HTML", "CSS", "JavaScript", "GSAP"],
//     img: "/images/mivi.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/-Reimagin-mivi-clone",
//     category: "UI Design",
//   },
//   {
//     title: "Permier Models",
//     description: "A responsive model agency website with a clean layout.",
//     tech: ["HTML", "CSS", "JavaScript", "GSAP"],
//     img: "/images/premiermodels.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/Permier_Models",
//     category: "UI Design",
//   },
//   {
//     title: "Cyberfiction",
//     description: "A futuristic website concept with advanced 3D animations.",
//     tech: ["HTML", "CSS", "JavaScript", "Three.js"],
//     img: "/images/cyberfiction.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/CYBERFICTION",
//     category: "UI Design",
//   },
//   {
//     title: "Digital 3D Platform",
//     description: "A 3D interactive platform with immersive visuals.",
//     tech: ["HTML", "CSS", "JavaScript", "Three.js", "GSAP"],
//     img: "/images/digital3d.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/Digital-3D-Platfrom",
//     category: "UI Design",
//   },
//   {
//     title: "Sphere Clockwork",
//     description: "A creative 3D clockwork animation with WebGL.",
//     tech: ["HTML", "CSS", "JavaScript", "Three.js"],
//     img: "/images/sphereclockwork.png",
//     live: "#",
//     github: "https://github.com/iamradhapandey/SphereClockwork",
//     category: "UI Design",
//   },
// ];

// const categories = ["All", "Web App", "UI Design"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projectData
//       : projectData.filter((p) => p.category === selectedCategory);

//   return (
//     <section className="px-6 py-12 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

//         {/* Category Filter */}
//         <div className="flex justify-center gap-4 mb-10">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full border transition-all duration-300 ${
//                 selectedCategory === cat
//                   ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//                   : "border-gray-500 text-gray-300 hover:border-white"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
//             >
//               {/* Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={project.img}
//                   alt={project.title}
//                   className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 text-xs bg-gray-700 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-3">
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-md hover:opacity-90 transition"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center border border-gray-500 px-3 py-2 rounded-md hover:border-white transition"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Projects page with modal popup.
 * Put screenshots in /public/images/ (or change the img paths below).
 */

const projectData = [
  {
    id: "glamthreadz",
    title: "GlamThreadz - E-Commerce",
    short:
      "Fashion e-commerce with product listing, cart and responsive layout.",
    desc:
      "A modern e-commerce store built using React and Tailwind. Implements product browsing, cart management and checkout flows (demo hosted).",
    features: [
      "Product listing & filtering",
      "Cart with local state & persistence",
      "Responsive product pages",
    ],
    tech: ["React", "TailwindCSS", "Redux", "Node.js"],
    img: "/images/glamthreadz.png",
    live: "https://glam-threadz-e-commerce-dwpi-kt6jhc5e6-iamradhapandeys-projects.vercel.app/",
    github: "https://github.com/iamradhapandey/GlamThreadz-E-Commerce-",
  },
  {
    id: "miranda",
    title: "Miranda",
    short: "Creative studio landing page with large typography and scroll effects.",
    desc:
      "A minimal, editorial-style landing page inspired by creative studio designs. Focus on typography, layout and subtle scroll interactions.",
    features: ["Large typography", "Scroll layout", "GSAP-style animations"],
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    img: "/images/miranda.png",
    live: "https://iamradhapandey.github.io/Miranda/",
    github: "https://github.com/iamradhapandey/Miranda",
  },
  {
    id: "humaan",
    title: "Digital Product Agency - Humaan",
    short: "Agency landing page showcasing services and case studies.",
    desc:
      "Agency style site with service sections, case study highlights and clean responsive layout.",
    features: ["Service showcase", "Case studies", "Responsive design"],
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/images/humaan.png",
    live: "https://iamradhapandey.github.io/Digital-Product-Agency-Humaan/",
    github: "https://github.com/iamradhapandey/Digital-Product-Agency-Humaan",
  },
  {
    id: "mivi",
    title: "Reimagin — Mivi Clone",
    short: "Product landing page clone with product highlights and animations.",
    desc:
      "A modern product landing clone inspired by Mivi — focuses on hero visuals, product features and animated interactions.",
    features: ["Hero interaction", "Animated sections", "Responsive"],
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    img: "/images/mivi.png",
    live: "https://iamradhapandey.github.io/-Reimagin-mivi-clone/",
    github: "https://github.com/iamradhapandey/-Reimagin-mivi-clone",
  },
  {
    id: "premiermodels",
    title: "Permier Models",
    short: "Model portfolio site with editorial layout and imagery.",
    desc:
      "A stylish portfolio layout for models and creatives with strong visual emphasis and clean typography.",
    features: ["Gallery layout", "Editorial typography", "Responsive grid"],
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/images/premiermodels.png",
    live: "https://iamradhapandey.github.io/Permier_Models/",
    github: "https://github.com/iamradhapandey/Permier_Models",
  },
  {
    id: "cyberfiction",
    title: "CYBERFICTION",
    short: "Futuristic concept site with immersive visuals (Three.js).",
    desc:
      "A creative concept site using 3D visuals and strong hero imagery — great example of modern web visuals and layout.",
    features: ["3D visuals", "Hero composition", "Immersive design"],
    tech: ["HTML", "CSS", "JavaScript", "Three.js"],
    img: "/images/cyberfiction.png",
    live: "https://iamradhapandey.github.io/CYBERFICTION/",
    github: "https://github.com/iamradhapandey/CYBERFICTION",
  },
  {
    id: "digital3d",
    title: "Digital 3D Platform",
    short: "Interactive 3D platform demo showcasing WebGL visuals.",
    desc:
      "An interactive 3D experience built with Three.js and creative layout techniques to display 3D assets in the browser.",
    features: ["Three.js scenes", "Interactive controls", "Immersive visuals"],
    tech: ["HTML", "CSS", "JavaScript", "Three.js"],
    img: "/images/digital3d.png",
    live: "https://iamradhapandey.github.io/Digital-3D-Platfrom/",
    github: "https://github.com/iamradhapandey/Digital-3D-Platfrom",
  },
  {
    id: "sphereclockwork",
    title: "Sphere Clockwork",
    short: "3D clockwork animation — WebGL demo (beautiful visuals).",
    desc:
      "A visually-strong project demonstrating WebGL / Three.js animation. Great hero composition and motion.",
    features: ["3D clock animation", "WebGL rendering", "Polished visuals"],
    tech: ["HTML", "CSS", "JavaScript", "Three.js"],
    img: "/images/sphereclockwork.png",
    live: "https://iamradhapandey.github.io/SphereClockwork/",
    github: "https://github.com/iamradhapandey/SphereClockwork",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Projects() {
  const [selected, setSelected] = useState(null); // project object or null

  // close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="px-6 py-12 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectData.map((p, idx) => (
            <motion.article
              key={p.id}
              custom={idx}
              variants={cardVariant}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelected(p);
              }}
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{p.short}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-gray-700/60 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-md hover:opacity-90 transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center border border-gray-600 px-3 py-2 rounded-md hover:border-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* modal content */}
            <motion.div
              className="relative bg-white text-gray-900 rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-80 md:h-auto bg-black/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={selected.img}
                    alt={selected.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{selected.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">{selected.desc}</p>
                    </div>

                    <button
                      className="ml-auto text-gray-500 hover:text-gray-800"
                      onClick={() => setSelected(null)}
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-700">Features</h4>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      {selected.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-700">Tech</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selected.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-gray-100 rounded-full border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      View Live
                    </a>
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-gray-300 rounded-md hover:border-gray-500 transition"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
