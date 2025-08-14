import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/work", label: "Work" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[99] flex justify-center">
      {/* Glass Effect Container */}
      <div
        className={`px-4 py-3 rounded-3xl text-base font-semibold flex items-center
          bg-gradient-to-br from-glassBg1 to-glassBg2 backdrop-blur-[10px]
          border border-glassBorder shadow-glass w-auto mt-2 transition-colors duration-300`}
      >
        {/* Mobile Menu Button */}
        <button
          className="md:hidden mr-3 text-white transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-[1vw]`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `no-underline px-4 py-1 transition-all duration-300 ease-in-out rounded-full text-white ${
                  isActive
                    ? "bg-[#131713] text-[#A7FF99]"
                    : "hover:bg-[#131713] hover:text-[#A7FF99]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
