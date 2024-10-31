import React from "react";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { PROJECTS } from "../constants/data";
import { motion } from "framer-motion";

const iconMap = {
  YouTube: <FaYoutube />,
  Github: <FaGithub />,
  Test: <GrTest />,
};

const Projects = () => {
  return (
    <div id="proyectos" className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Proyectos
      </motion.h2>
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap gap-12 lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <div className="relative">
                <img
                  src={project.image}
                  width={400}
                  height={600}
                  alt={project.title}
                  className="rounded opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 "
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tecth, index) => (
                  <span
                    className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tecth}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl transition-colors ${
                      link.icon === "Github"
                        ? "hover:text-blue-950"
                        : link.icon === "Test"
                        ? "hover:text-green-500"
                        : "hover:text-red-600"
                    }`}
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
