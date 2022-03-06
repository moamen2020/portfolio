import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/image-1.webp";
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './Skills.css';


const Skills = () => {
  return (
    <Container className="overflow-hidden">
      <Row>
        <Col sm={12} md={6} className="ml-5" >
          <motion.h2
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7 }}
            className="title"
          >
            Skills & Experience
          </motion.h2>
          <ul>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 1 }}
            >
              HTML
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 1.3 }}
            >
              CSS
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
              Javascript
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 2.2 }}
            >
              SASS
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 2.5 }}
            >
              Gulp js
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 2.8 }}
            >
              React & React Hook
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 3.1 }}
            >
              Redux & redux Toolkit
            </motion.li>
          </ul>
          <motion.p
            className="mail-github"
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Visit my{" "}
            <a rel="_blank" href="https://github.com/moamen2020">
              GitHub
            </a>{" "}
            for more details or just <a href="mailto:moamen.ismail70@gmailcom">contact me</a>
          </motion.p>
        </Col>
        <Col sm={12} md={6}  >
          <motion.div
            className="image"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          >
            <img src={img} alt="img" />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
