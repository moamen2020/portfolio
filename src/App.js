import React from 'react';
import { Routes ,Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </div>
    );
  }
  
  export default App;
  
