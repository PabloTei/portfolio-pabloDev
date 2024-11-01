import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants/data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contacto" className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-white"
      >
        Contacto
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex justify-center content-center	gap-2.5 pt-2 my-4"
        >
          <a
            href="https://linkedin.com/in/pablo-teijeiro-lopez-55a483191"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:brightness-125 hover:scale-105"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/PabloTei/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-300 hover:brightness-125 hover:scale-105"
          >
            <FaGithubSquare className="text-2xl" />
          </a>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
          aria-label="Email"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
