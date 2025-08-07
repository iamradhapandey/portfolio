import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./assets/pages/Hero"; // ✅ correct
import React from "react";
import Contact from "./assets/pages/Contact"; // ✅ correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />

        
        
      </Routes>
    </Router>
  )
}

export default App
