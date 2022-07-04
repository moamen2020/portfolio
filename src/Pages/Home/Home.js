import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home ">
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
          className="name"
        >
          Hello Brother
        </motion.h2>
        <motion.span
          className="name-job"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
          style={{ color: "#0d6efd", fontWeight: "bold" }}
        >
          I'm A
          <Typewriter
            words={[" Moamen Omar", " Full Stack developer"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.span>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            Downloud CV
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
