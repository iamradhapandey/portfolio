// Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-indigo-300 px-4 py-10">
      <div className="backdrop-blur-md bg-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Contact Info Card */}
        <div className="w-full md:w-1/2 p-6 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/40 shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Let's Connect!</h2>
          <p className="text-indigo-900 mb-4">
            Feel free to reach out through the form or contact me directly through email or social platforms.
          </p>

          <div className="space-y-3 text-indigo-800">
            <div>
              <p className="font-semibold">📧 Email:</p>
              <p className="break-words">iamradhapandey@outlook.com</p>
            </div>
            <div>
              <p className="font-semibold">🌐 Social:</p>
              <div className="flex flex-wrap gap-4 mt-2 text-indigo-700">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-900">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-900">GitHub</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-900">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 bg-white/20 backdrop-blur-lg p-6 rounded-2xl border border-white/40 shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! (Functionality not wired)');
          }}
        >
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Send Message</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl bg-white/50 placeholder:text-indigo-600 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl bg-white/50 placeholder:text-indigo-600 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-xl bg-white/50 placeholder:text-indigo-600 h-32 resize-none focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
            >
              Send
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;
