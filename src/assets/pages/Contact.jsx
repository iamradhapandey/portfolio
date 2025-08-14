import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Contact = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-gray-200 px-4 py-10">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-900 via-indigo-900 to-black animate-gradient-slow" />

      {/* Particles */}
      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 120, duration: 0.5 } }
          },
          particles: {
            color: { value: ["#0ea5e9", "#14b8a6", "#06b6d4", "#22d3ee"] },
            links: { color: "#0ea5e9", distance: 130, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "out" } },
            number: { value: 100, density: { enable: true, area: 900 } },
            opacity: { value: 1.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } }
          },
          detectRetina: true
        }}
      />

      {/* Contact Form Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Contact Info Card */}
        <div className="w-full md:w-1/2 p-6 rounded-3xl backdrop-blur-lg border border-white/20 shadow-xl animate-glow">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Let's Connect!</h2>
          <p className="text-gray-200 mb-4">
            Feel free to reach out through the form or contact me directly through email or social platforms.
          </p>

          <div className="space-y-3 text-gray-100">
            <div>
              <p className="font-semibold">📧 Email:</p>
              <p className="break-words">iamradhapandey@outlook.com</p>
            </div>
            <div>
              <p className="font-semibold">🌐 Social:</p>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-200">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-xl flex flex-col gap-4 animate-glow"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (Functionality not wired)");
          }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Send Message</h2>
          
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-xl placeholder:text-gray-300 focus:outline-none border border-transparent focus:border-cyan-400 transition-all shadow-[0_0_10px_0_rgba(14,165,233,0.5)] focus:shadow-[0_0_20px_0_rgba(14,165,233,0.7)] animate-glow-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-xl placeholder:text-gray-300 focus:outline-none border border-transparent focus:border-cyan-400 transition-all shadow-[0_0_10px_0_rgba(14,165,233,0.5)] focus:shadow-[0_0_20px_0_rgba(14,165,233,0.7)] animate-glow-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-xl placeholder:text-gray-300 h-32 resize-none focus:outline-none border border-transparent focus:border-cyan-400 transition-all shadow-[0_0_10px_0_rgba(14,165,233,0.5)] focus:shadow-[0_0_20px_0_rgba(14,165,233,0.7)] animate-glow-input"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg shadow-cyan-400/50 hover:shadow-cyan-500/70 transition-all animate-glow-button"
          >
            Send
          </button>
        </form>
      </div>

      {/* Custom Tailwind Animations */}
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(14,165,233,0.4); }
            50% { box-shadow: 0 0 40px rgba(14,165,233,0.7); }
          }
          .animate-glow { animation: glow 2.5s ease-in-out infinite; }
          .animate-glow-input { animation: glow 3s ease-in-out infinite; }
          .animate-glow-button { animation: glow 2s ease-in-out infinite; }

          @keyframes gradient-slow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            background-size: 200% 200%;
            animation: gradient-slow 15s ease infinite;
          }
        `}
      </style>

    </div>
  );
};

export default Contact;
