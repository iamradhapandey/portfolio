import React from "react"
import { motion } from "framer-motion"
import { FaArrowRight, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 overflow-hidden">

      {/* SVG Background Shape */}
      <div className="absolute -z-10 top-0 right-0 md:right-20 opacity-20 dark:opacity-30">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <path fill="#a78bfa" d="M300,421Q252,542,133,470Q14,398,79,251Q144,104,282,106Q420,108,455,229Q490,350,300,421Z" />
        </svg>
      </div>

      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-2xl space-y-6 z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Hi, I'm Radha Kumari
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
          <Typewriter
            words={['React Developer 💻', 'UX Designer 🎨', 'Frontend Engineer 🚀']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a React developer focused on building responsive, accessible, and beautiful web apps. With a passion for clean design and functional code, I blend creativity and logic to craft seamless user experiences.
        </p>

        <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
          Let’s build something great together!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1O-sCpn-F_ownoCSqWGAcp98FNPeKOtFA/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 flex items-center gap-2"
          >
            View Resume <FaArrowRight />
          </a>

          <Link
            to="/contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl text-gray-600 dark:text-gray-300">
          <a href="https://github.com/iamradhapandey" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/iamradhapandey" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <FaLinkedin />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Tech Stack: React • Tailwind CSS • Framer Motion • Typewriter • React Router
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
  <div className="animate-bounce text-gray-600 dark:text-gray-300 text-sm tracking-wide">
    Scroll Down ↓
  </div>
</div>

      </motion.div>

      {/* Right Side Avatar Image */}
      {/* Right Side Avatar Image */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-10 md:mt-0 z-10"
>
  <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] mx-auto rounded-full overflow-hidden border-4 border-white shadow-[0_0_50px_0_rgba(99,102,241,0.6)] hover:scale-105 transition-transform duration-500 bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500">
    <img
      src="/profile.jpg" // ✅ Update this path as per your image
      alt="Radha Kumari"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</motion.div>

    </section>
  )
}

export default Hero;