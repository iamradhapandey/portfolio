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


import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const projects = [
  {
    title: "GauSevaDham",
    description:
      "A spiritual and community-focused platform with events, blogs, and more.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    images: ["/gau1.png", "/gau2.png", "/gau3.png"],
    link: "https://github.com/iamradhapandey/GauSevaDham",
    github: "https://github.com/iamradhapandey/GauSevaDham"
  },
  {
    title: "GlamThreadz E-Commerce",
    description:
      "Fashion e-commerce store with product filtering, cart, and checkout.",
    tech: ["React", "TailwindCSS", "Redux", "MongoDB", "Express.js"],
    images: ["/glam1.png", "/glam2.png", "/glam3.png"],
    link: "https://github.com/iamradhapandey/GlamThreadz-E-Commerce-",
    github: "https://github.com/iamradhapandey/GlamThreadz-E-Commerce-"
  },
  {
    title: "Apple Vision UI",
    description: "Apple Vision Pro inspired landing page with smooth animations.",
    tech: ["React", "GSAP", "Three.js"],
    images: ["/apple.png", "/apple1.png", "/apple2.png"],
    link: "https://iamradhapandey.github.io/FRONTEND-PROJECT-Apple-vision-/",
    github: "https://github.com/iamradhapandey/FRONTEND-PROJECT-Apple-vision-"
  },
  {
    title: "Digital 3D Platform",
    description:
      "Interactive 3D platform for showcasing creative digital products.",
    tech: ["React", "Three.js", "TailwindCSS"],
    images: ["/d3d1.png", "/d3d2.png", "/d3d3.png"],
    link: "https://github.com/iamradhapandey/Digital-3D-Platfrom",
    github: "https://github.com/iamradhapandey/Digital-3D-Platfrom"
  },
  {
    title: "Reimagin Mivi Clone",
    description:
      "Modern Mivi website clone with interactive scrolling animations.",
    tech: ["React", "GSAP", "TailwindCSS"],
    images: ["/mivi.png", "/mivi2.png", "/mivi3.png"],
    link: "https://github.com/iamradhapandey/-Reimagin-mivi-clone",
    github: "https://github.com/iamradhapandey/-Reimagin-mivi-clone"
  },
  {
    title: "Premier Models",
    description: "Stylish model portfolio website with animations.",
    tech: ["React", "GSAP", "TailwindCSS"],
    images: ["/pm1.png", "/pm2.png", "/pm3.png"],
    link: "https://github.com/iamradhapandey/Permier_Models",
    github: "https://github.com/iamradhapandey/Permier_Models"
  },
  {
    title: "Digital Product Agency – Humaan",
    description: "Agency-style website for a modern digital product company.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    images: ["/humaan.png", "/humaan2.png", "/humaan3.png"],
    link: "https://github.com/iamradhapandey/Digital-Product-Agency-Humaan",
    github: "https://github.com/iamradhapandey/Digital-Product-Agency-Humaan"
  },
  {
    title: "CYBERFICTION",
    description:
      "Futuristic web experience built with Three.js and advanced GSAP animations.",
    tech: ["React", "Three.js", "GSAP"],
    images: ["/cyber1.png", "/cyber2.png", "/cyber3.png"],
    link: "https://github.com/iamradhapandey/CYBERFICTION",
    github: "https://github.com/iamradhapandey/CYBERFICTION"
  },
  {
    title: "Miranda",
    description:
      "Creative animated portfolio site for visual storytelling.",
    tech: ["HTML", "CSS", "GSAP"],
    images: ["/miranda.png", "/miranda2.png", "/miranda3.png"],
    link: "https://github.com/iamradhapandey/Miranda",
    github: "https://github.com/iamradhapandey/Miranda"
  },
  {
    title: "Sphere Clockwork",
    description:
      "3D animated sphere clock with smooth transitions and real-time ticking.",
    tech: ["React", "Three.js", "TailwindCSS"],
    images: ["/sphereclockwork.png", "/sphereclockwork2.png", "/sphereclockwork3.png"],
    link: "https://iamradhapandey.github.io/SphereClockwork/",
    github: "https://github.com/iamradhapandey/SphereClockwork"
  }
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const openModal = (images) => {
    setActiveImages(images);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="px-6 py-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform backdrop-blur-lg"
          >
            <LazyLoadImage
              src={project.images[0]}
              effect="blur"
              className="w-full h-64 object-cover rounded-xl cursor-pointer"
              onClick={() => openModal(project.images)}
            />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {/* Modal */}
{open && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-4"
    onClick={closeModal} // click outside to close
  >
    <div
      className="bg-white/10 rounded-2xl p-4 max-w-4xl w-full relative"
      onClick={(e) => e.stopPropagation()} // stop closing when clicking inside
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center 
        bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition z-50"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Main Carousel */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-xl"
      >
        {activeImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Screenshot ${idx + 1}`}
              className="w-full h-[400px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
        className="mt-4"
      >
        {activeImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Thumb ${idx + 1}`}
              className="w-full h-20 object-cover rounded-lg cursor-pointer border border-white/20"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)}

    </div>
  );
}
