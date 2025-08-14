import React, { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from "lucide-react"

// ============================
// Helpers
// ============================
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark"
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    )
  })
  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
    localStorage.setItem("theme", theme)
  }, [theme])
  return { theme, setTheme }
}

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 sm:px-8 ${className}`}>
    {children}
  </section>
)

// Simple floating particles using canvas (very light)
const Particles = ({ count = 35 }) => {
  const ref = useRef(null)
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.0006,
        vy: (Math.random() - 0.5) * 0.0006,
        a: Math.random() * 0.4 + 0.25,
      })),
    [count]
  )

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let frame

    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        ctx.globalAlpha = p.a
        ctx.beginPath()
        ctx.arc(p.x * width, p.y * height, p.r * 2, 0, Math.PI * 2)
        ctx.fillStyle = "#7dd3fc" // cyan-300-like
        ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }

    frame = requestAnimationFrame(draw)
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [particles])

  return (
    <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden />
  )
}

// ============================
// Main Page
// ============================
export default function Home() {
  const { theme, setTheme } = useTheme()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 dark:text-zinc-100 overflow-x-hidden">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1000px_600px_at_80%_10%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(900px_500px_at_20%_20%,rgba(168,85,247,0.10),transparent_60%)]" />

      {/* Particles */}
      <div className="absolute inset-0 opacity-50">
        <Particles />
      </div>

      {/* Theme Toggle */}
      <div className="fixed right-4 top-4 z-[99]">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}{" "}
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>

      {/* ================= Hero ================= */}
      <Section id="hero" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold leading-tight"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Radha Pandey
              </span>
              <span className="mt-2 block text-zinc-300 dark:text-zinc-400 text-2xl sm:text-3xl font-semibold">
                React & Frontend Developer & UI Enthusiast
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 max-w-xl text-zinc-400"
            >
              I craft dynamic, high-performance web applications ⚡ using React
              ⚛️, Node.js 🟢, and JavaScript 💻. Focusing on clean, responsive,
              and animated interfaces ✨, I design engaging user experiences 🎨
              that blend aesthetics with functionality. From interactive UIs 🖥️
              to efficient backend logic 🔧, I transform ideas into modern,
              scalable, and delightful digital products 🌐 that captivate users
              and deliver seamless experiences across devices 📱💻.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo("projects")
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition"
              >
                View Projects{" "}
                <ArrowRight
                  className="transition group-hover:translate-x-0.5"
                  size={18}
                />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download size={18} /> Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo("contact")
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-6 py-3 font-semibold hover:bg-white/10"
              >
                <Mail size={18} /> Contact
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-4 text-zinc-400">
              <a
                href="https://github.com"
                className="hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right: Animated Blob with Photo */}
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl"
              aria-hidden
            ></div>

            <motion.div
              initial={{ rotate: -6, scale: 0.95, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 12 }}
              className="relative aspect-square w-72 sm:w-80 md:w-96 mx-auto"
            >
              <svg viewBox="0 0 600 600" className="absolute inset-0">
                <defs>
                  <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                    {/* Path normalized to 0..1 via viewBox usage */}
                    <path
                      d="M452.5,319.5Q435,389,374.5,440.5Q314,492,241,466.5Q168,441,117,384.5Q66,328,76.5,252Q87,176,148.5,128Q210,80,293,83.5Q376,87,427.5,152Q479,217,452.5,319.5Z"
                      transform="translate(-60 -40) scale(1.2)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <motion.div
                className="absolute inset-0 rounded-[48px]"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl" />
                <div className="relative h-full w-full [clip-path:url(#blobClip)] overflow-hidden rounded-[48px]">
                  <img
                    src="/profile.png"
                    alt="Radha Pandey"
                    className="h-full w-full object-cover scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ================= Skills ================= */}
      <Section id="skills" className="py-10 sm:py-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-xl uppercase tracking-widest text-zinc-400"
        >
          Tech Stack
        </motion.h2>
        <div className="mt-5 flex gap-3 overflow-x-auto no-scrollbar py-2">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind",
            "Redux Toolkit",
            "Firebase",
            "Git",
            "Postman",
          ].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur hover:bg-white/10 hover:shadow hover:shadow-cyan-500/20"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* ================= Projects ================= */}
      <Section id="projects" className="relative z-10 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="mt-2 text-zinc-400">
              A few highlights. More on the Work page.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 cursor-pointer relative z-50"
          >
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "GlamThreadz – E‑Commerce",
              desc: "Fashion store with product listing, cart & checkout.",
              img: "/glam1.png",
              href: "/work",
            },
            {
              title: "Reimagin - Mivi Clone",
              desc: "Modern Mivi website clone with interactive scrolling animations.",
              img: "/mivi.png",
              href: "/work",
            },
            {
              title: "GauSeva - Dham",
              desc: "A spiritual and community-focused platform with events, blogs, and more.",

              img: "/gau1.png",
              href: "/work",
            },
          ].map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur hover:border-cyan-400/40"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-cyan-300">
                  See details{" "}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-0.5"
                  />
                </div>
              </div>
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ================= About Teaser ================= */}
      <Section id="about" className="py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="mt-3 text-zinc-400 max-w-2xl">
              I am Radha Pandey, a passionate Frontend Developer and React.js
              enthusiast dedicated to crafting dynamic, interactive, and
              user-friendly web applications. I specialize in building modern,
              responsive, and visually appealing websites that balance
              functionality, performance, and design. With expertise in
              JavaScript, React.js, Redux Toolkit, Node.js, Express.js, MongoDB,
              and Firebase, I create seamless web experiences that integrate
              frontend and backend efficiently. I use Tailwind CSS, Framer
              Motion, and GSAP to implement smooth animations, responsive
              layouts, and polished UI designs that captivate users. I focus on
              writing clean, maintainable, and high-performance code, delivering
              applications that are scalable, optimized, and future-ready.
              Constantly exploring new technologies, I aim to combine creativity
              and innovation to build projects that users love and businesses
              value. My goal is to turn ideas into engaging digital experiences
              that leave a lasting impression..{" "}
            </p>
            {/* <div className="mt-6 flex gap-3">
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 hover:bg-white/10"
              >
                Read More <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo("contact")
                }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-white font-semibold shadow shadow-cyan-500/20"
              >
                Hire Me
              </a>
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div
              className="absolute -inset-6 rounded-[28px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl"
              aria-hidden
            ></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="Workspace.png"
                alt="Workspace"
                className="h-56 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ================= Footer / Contact ================= */}
      <Section id="contact" className="py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur px-6 py-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Let’s build something amazing together
          </h3>
          <p className="mt-2 text-zinc-400">
            I’m open to internships, freelance and full‑time roles.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="mailto:iamradhapandey@outlook.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white"
            >
              <Mail size={18} /> Email Me
            </a>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} Radha Pandey • Built with React,
            Tailwind & Framer Motion & JavaScript.
          </p>
        </div>
      </Section>
    </div>
  )
}
