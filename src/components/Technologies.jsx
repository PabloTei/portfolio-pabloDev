import React from "react";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  // {
  //   icon: <SiHtml5 className="text-5xl lg:text-6xl text-orange-500" />,
  //   name: "HTML5",
  // },
  // {
  //   icon: <SiCss3 className="text-5xl lg:text-6xl text-blue-500" />,
  //   name: "CSS3",
  // },
  // {
  //   icon: <SiJavascript className="text-5xl lg:text-6xl text-yellow-400" />,
  //   name: "JavaScript",
  // },
  {
    icon: <SiTypescript className="text-5xl lg:text-6xl text-blue-600" />,
    name: "TypeScript",
  },
  {
    icon: <SiReact className="text-5xl lg:text-6xl text-cyan-400" />,
    name: "ReactJS",
  },
  {
    icon: <SiAngular className="text-5xl lg:text-6xl text-red-600" />,
    name: "Angular",
  },
  {
    icon: <SiNodedotjs className="text-5xl lg:text-6xl text-green-600" />,
    name: "NodeJS",
  },
  {
    icon: <SiTailwindcss className="text-5xl lg:text-6xl text-sky-400" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiGit className="text-5xl lg:text-6xl text-orange-600" />,
    name: "Git",
  },
];

const Technologies = () => {
  return (
    <div id="tecnologias" className="pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Tecnologías
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-16"
      >
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="relative flex flex-col justify-center items-center gap-2 group"
          >
            {tech.icon}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mb-6 sm:mb-10 w-max rounded bg-neutral-800 text-white text-sm p-1 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {tech.name}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
