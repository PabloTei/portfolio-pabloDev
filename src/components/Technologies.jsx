import React from "react";
import { SiReact } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="tecnologias" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologías
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-16"
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <SiReact className="text-5xl text-cyan-400" />
          <span>React</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <SiAngular className="text-5xl text-red-600" />
          <span>Angular</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <SiTypescript className="text-5xl text-blue-500" />
          <span>TypeScript</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <SiNodedotjs className="text-5xl text-green-500" />
          <span>NodeJS</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <SiTailwindcss className="text-5xl text-sky-400" />
          <span>Tailwind</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <SiGit className="text-5xl text-orange-600" />
          <span>Git</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
