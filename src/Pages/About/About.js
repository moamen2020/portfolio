import React from "react";
import img from "../../assets/img.svg";
import { motion } from "framer-motion";
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={12} md={6} >
          <motion.div
            className="image"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          >
            <img src={img} alt="img" />
          </motion.div>
        </Col>
        <Col sm={12} md={6}>
          <motion.div
            class="information"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          >
            <h2>
              I am <span>Moamen Omar</span>
            </h2>
            <p>
              I am a frontend web developer. I can provide clean code and <br />
              pixel prefect design. I also make website more & more <br />
              interactive with web animation
            </p>
            <span class="inf">
              <strong class="str-1">Full Name </strong> : Moamen Omar
            </span>
            <span class="inf">
              <strong class="str-2">Age </strong> : 21 Years
            </span>
            <span class="inf">
              <strong class="str-3">Nationality </strong> : Egypt
            </span>
            <span class="inf">
              <strong class="str-4">Languages </strong> : Arabic + good English
            </span>
            <span class="inf">
              <strong class="str-5">Address </strong> : Alalf maskan, Ain shams
              ,Cairo
            </span>
            <span class="inf">
              <strong class="str-6">Freelance </strong> : Available
            </span>
            <span class="inf">
              <strong class="str-7">E-mail </strong> : moamen.ismail70@gmail.com
            </span>
            <span class="inf">
              <strong class="str-8">Phone </strong> : 011 449 449 81
            </span>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
