import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="container">
      <div className="skills">
        <motion.h2
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Skills & Experience
        </motion.h2>
        <ul>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
          >
            HTML & HTML5
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.3 }}
          >
            CSS & CSS3
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.6 }}
          >
            Bootstrap
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.9 }}
          >
            SASS
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 2.2 }}
          >
            Javascript
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 2.5 }}
          >
            JSON & AJAX
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 2.8 }}
          >
            Pug js
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 3.1 }}
          >
            Gulp js
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 3.4 }}
          >
            React, React Hooks & Redux
          </motion.li>
        </ul>
        <motion.p
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Visit my{" "}
          <a rel="_blank" href="https://github.com/moamen2020">
            GitHub
          </a>{" "}
          for more details or just <a href="#">contact me</a>
        </motion.p>
      </div>
    </div>
  );
};

export default Skills;
