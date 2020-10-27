import React from "react";
import img from "../../src/IMG.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11 col-lg-4 col-md-6 col-sm-12">
          <motion.div
            className="image"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          >
            <img src={img} alt="img" />
          </motion.div>
        </div>
        <div className="col-11 col-lg-8 col-md-6 col-sm-12">
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
              <strong class="str-2">Age </strong> : 20 Years
            </span>
            <span class="inf">
              <strong class="str-3">Nationality </strong> : Egypt
            </span>
            <span class="inf">
              <strong class="str-4">Languages </strong> : Arabic, + good English
            </span>
            <span class="inf">
              <strong class="str-5">Address </strong> : Alalf maskan, Ain shams
              ,Cairo
            </span>
            <span class="inf">
              <strong class="str-6">Freelance </strong> : Available
            </span>
            <span class="inf">
              <strong class="str-7">E-mail </strong> : moamen_omar@gmail.com
            </span>
            <span class="inf">
              <strong class="str-8">Phone </strong> : 01144944981, 01203891195
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
