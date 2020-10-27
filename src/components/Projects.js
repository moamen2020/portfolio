import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="container">
      <motion.div
        className="project"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3>The Way Shop</h3>
        <h5>Features</h5>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
        </ul>
        <button className="prev">
          <a href="#">Preview</a>
        </button>
        <button className="git">
          <a href="#">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ y: "-200vw" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 30 }}
      >
        <h3>The Way Shop</h3>
        <h5>Features</h5>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
        </ul>
        <button className="prev">
          <a href="#">Preview</a>
        </button>
        <button className="git">
          <a href="#">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3>The Way Shop</h3>
        <h5>Features</h5>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
        </ul>
        <button className="prev">
          <a href="#">Preview</a>
        </button>
        <button className="git">
          <a href="#">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3>The Way Shop</h3>
        <h5>Features</h5>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
        </ul>
        <button className="prev">
          <a href="#">Preview</a>
        </button>
        <button className="git">
          <a href="#">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ y: "200vw" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 30 }}
      >
        <h3>The Way Shop</h3>
        <h5>Features</h5>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
        </ul>
        <button className="prev">
          <a href="#">Preview</a>
        </button>
        <button className="git">
          <a href="#">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3>The Way Shop</h3>
        <h5>Features</h5>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
          <li>HTML5 & CSS3</li>
        </ul>
        <button className="prev">
          <a href="#">Preview</a>
        </button>
        <button className="git">
          <a href="#">Github</a>
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;
