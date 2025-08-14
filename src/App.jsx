import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Nav"; // ✅ Works if file exists
import Project from "./assets/pages/Project"; // ✅ Works if file exists
import ScrollToTop from "./assets/components/ScrollToTop"; // ✅ Works if file exists
import BackgroundEffect from "./assets/components/Particles"; // ✅ Works if file exists


import Hero from "./assets/pages/Hero";
import About from "./assets/pages/About";
import Works from "./assets/pages/Project";
import Contact from "./assets/pages/Contact";


function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 dark:text-zinc-100 ">
      <BackgroundEffect />
      <ScrollToTop/>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;




