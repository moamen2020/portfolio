import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import Lottie from "react-lottie";
import data from "./98431-loading-animation.json";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="app">
      {!show && (
        <div className="loading">
          <Lottie
            options={defaultOptions}
            height="300px"
            width="300px"
            animationPosition={"center"}
            autoplay={true}
          />
        </div>
      )}
      {show && (
        <>
          <BackgroundAnimation />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
