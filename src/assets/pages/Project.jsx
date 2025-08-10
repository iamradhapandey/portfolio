import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectList = [
  { name: "GauSevaDham", demo: "" },
  { name: "iamradhapandey", demo: "" },
  { name: "GlamThreadz-E-Commerce-", demo: "https://glam-threadz-e-commerce-dwpi.vercel.app/" },
  { name: "FRONTEND-PROJECT-Apple-vision-", demo: "" },
  { name: "Digital-3D-Platfrom", demo: "" },
  { name: "-Reimagin-mivi-clone", demo: "" },
  { name: "cithny-ugwn", demo: "" },
  { name: "Canvas-Code", demo: "" },
  { name: "Permier_Models", demo: "" },
  { name: "SunglassStore", demo: "" },
  { name: "Digital-Product-Agency-Humaan", demo: "" },
  { name: "Cotten-wave", demo: "" },
  { name: "CYBERFICTION", demo: "" },
  { name: "portfolio", demo: "" },
  { name: "Miranda", demo: "" },
  { name: "Java-Script", demo: "" },
  { name: "SphereClockwork", demo: "" },
  { name: "EcoFashionStore", demo: "" }
];

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/iamradhapandey/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(repo =>
          projectList.some(p => p.name === repo.name)
        );
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">
        My Projects
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo, i) => {
          const demoLink =
            projectList.find(p => p.name === repo.name)?.demo || repo.homepage;
          return (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                  {repo.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:underline"
                  >
                    <FaGithub /> Code
                  </a>
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-600 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
