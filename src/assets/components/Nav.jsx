// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaBolt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 left-0 z-50"
    >
      <motion.div
  animate={{
    paddingTop: scrolled ? "0.5rem" : "1rem",
    paddingBottom: scrolled ? "0.5rem" : "1rem",
    scale: scrolled ? 0.95 : 1,
  }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className={`max-w-7xl mx-auto px-6 flex items-center justify-between rounded-2xl mt-4 border backdrop-blur-xl transition-all ${
    scrolled
      ? "bg-white/20 border-white/30 shadow-lg"
      : "bg-white/20 border-white/30"
  }`}
>

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-700"
        >
          <FaBolt className="text-yellow-400 animate-pulse" />
          <span className="tracking-wide">Radha's Portfolio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className={`relative text-lg font-medium group transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-indigo-600"
                  : "text-gray-800 hover:text-indigo-600"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 hover:text-indigo-600"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 mx-4 p-6 rounded-xl bg-white/30 backdrop-blur-xl shadow-lg border border-white/40 space-y-6"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`block text-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-gray-800 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
