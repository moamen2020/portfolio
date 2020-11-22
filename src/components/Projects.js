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
        <h3>Data Web</h3>
        <h5>Features</h5>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>JQuery</li>
        </ul>
        <button className="prev">
          <a href="https://moamen2020.github.io/Data_Web" target="_blank" rel="noopener noreferrer">Preview</a>
        </button>
        <button className="git">
          <a href="https://github.com/moamen2020/Data_Web" target="_blank" rel="noopener noreferrer">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ y: "-200vw" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 30 }}
      >
        <h3>Shopping</h3>
        <h5>Features</h5>
        <ul>
          <li>html </li>
          <li>css</li>
          <li>Vanill js</li>
          <li>Sass</li>
        </ul>
        <button className="prev">
          <a href="https://moamen2020.github.io/shopping-vanill-js/index.html" target="_blank" rel="noopener noreferrer">Preview</a>
        </button>
        <button className="git">
          <a href="https://github.com/moamen2020/shopping-vanill-js" target="_blank" rel="noopener noreferrer">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3>COVID-19</h3>
        <h5>Features</h5>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>React js</li>
        </ul>
        <button className="prev">
          <a href="https://moamen2020.github.io/COVID_19/" target="_blank" rel="noopener noreferrer">Preview</a>
        </button>
        <button className="git">
          <a href="https://github.com/moamen2020/COVID_19" target="_blank" rel="noopener noreferrer">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3>Dolla</h3>
        <h5>Features</h5>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>React js</li>
        </ul>
        <button className="prev">
          <a href="https://5faff999a30abc8e2f54ad9e--upbeat-visvesvaraya-c7e62c.netlify.app/" target="_blank"  rel="noopener noreferrer">Preview</a>
        </button>
        <button className="git">
          <a href="https://github.com/moamen2020/dolla" target="_blank"  rel="noopener noreferrer">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ y: "200vw" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 30 }}
      >
        <h3>Netflix</h3>
        <h5>Features</h5>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>React js</li>
        </ul>
        <button className="prev">
          <a href="https://5fb142cd1db4d7580a563ad7--boring-brahmagupta-5406c1.netlify.app/" target="_blank"  rel="noopener noreferrer">Preview</a>
        </button>
        <button className="git">
          <a href="https://github.com/moamen2020/netflix-" target="_blank"  rel="noopener noreferrer">Github</a>
        </button>
      </motion.div>
      {/*  */}
      <motion.div
        className="project"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3>E-commerce</h3>
        <h5>Features</h5>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>React js / context</li>
        </ul>
        <button className="prev">
          <a href="https://5faa276fd674a8343c9b8b72--e-comme.netlify.app/" target="_blank"  rel="noopener noreferrer">Preview</a>
        </button>
        <button className="git">
          <a href="https://github.com/moamen2020/E-commerce-context" target="_blank"  rel="noopener noreferrer">Github</a>
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;
