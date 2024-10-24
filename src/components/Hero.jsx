import React from "react";
import { HERO_CONTENT } from "../constants/data";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 pt-8 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src="https://res.cloudinary.com/depifliz3/image/upload/v1729802044/ATEP-CONSULTING/PORTFOLIO/altumcode-7m79J2LWzTI-unsplash_cldskr.jpg"
              alt="Pablo Teijeiro"
              className="border border-stone-900 rounded-3xl"
              width={420}
              height={420}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Pablo Teijeiro
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-end Developer
            </motion.span>
            <motion.div variants={childVariants} className="flex gap-2.5 pt-6">
              <a
                href="https://linkedin.com/in/pablo-teijeiro-lopez-55a483191"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://github.com/PabloTei/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithubSquare className="text-4xl" />
              </a>
            </motion.div>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className=" bg-stone-300 rounded-xl p-4 text-sm text-stone-800 font-semibold flex justify-center gap-2 items-center hover:bg-white hover:duration-300 ease-in-out"
            >
              Descargar CV
              <MdDownloading className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
