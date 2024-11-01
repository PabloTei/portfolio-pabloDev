import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 2,
    text: "Años de experiencia",
  },
  {
    num: 12,
    text: "Proyectos completados",
  },
  {
    num: 9,
    text: "Tecnologías masterizadas",
  },
  {
    num: 694,
    text: "Commits código",
  },
];

const GitHubActivity = () => {
  return (
    <section className="pt-8 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2.5 }}
        >
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
