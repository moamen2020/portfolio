import React from "react";
import { Switch, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <Switch>
      <motion.nav
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <ul class="list">
          <li class="nav-links">
            <Link class="nav-ancor" to="/">
              Home
            </Link>
          </li>
          <li class="nav-links">
            <Link class="nav-ancor" to="/about">
              About
            </Link>
          </li>
          <li class="nav-links">
            <Link class="nav-ancor" to="/skills">
              Skills
            </Link>
          </li>
          <li class="nav-links">
            <Link class="nav-ancor" to="/projects">
              Projects
            </Link>
          </li>
          <li class="nav-links">
            <Link class="nav-ancor" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </Switch>
  );
};

export default Navbar;
