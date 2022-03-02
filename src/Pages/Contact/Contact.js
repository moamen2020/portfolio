import React from "react";
import { motion } from "framer-motion";
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <motion.h2
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 10 }}
        >
          Contact
        </motion.h2>
        <motion.input
          type="text"
          placeholder="Your Name"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 80 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 80 }}
        />
        <motion.textarea
          cols="65"
          rows="15"
          placeholder="Message"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 80 }}
        ></motion.textarea>
        <motion.button
          className="btn-send-Message"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.9, type: "spring", stiffness: 80 }}
        >
          Send Message
        </motion.button>
      </Container>
    </div>
  );
};

export default Contact;
