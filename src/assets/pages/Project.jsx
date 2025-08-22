

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Add AnimatePresence
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
    <div className="px-6 py-12 bg-gradient-to-b from-black to-black text-white">
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
              className="w-full h-64 object-cover rounded-xl cursor-pointer transition-transform hover:scale-105"
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
  
<AnimatePresence>
  {open && (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-4"
      onClick={closeModal} // click outside closes
    >
      <motion.div
        key="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 rounded-2xl p-4 max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setThumbsSwiper(null); // reset thumbs
            closeModal();
          }}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center 
          bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition z-50"
        >
          ✕
        </button>

        {/* Main Carousel */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} // only pass if ready
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
        className="w-full h-64 object-cover rounded-lg cursor-pointer border border-white/20"
      />
    </SwiperSlide>
  ))}
</Swiper>


      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </div>
  );
}

