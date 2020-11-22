import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container">
      <div className="home ">
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
        >
          I'm <span>Moamen Omar</span>
        </motion.h2>
        <motion.span
          className="name-job"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
        >
          Front End Developer
        </motion.span>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href='https://drive.google.com/file/d/1hM2HG_4pYtALBbkBTxqih6JvymkkWwY1/view?usp=sharing' target="_blank" rel="noopener noreferrer">Downloud CV</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
