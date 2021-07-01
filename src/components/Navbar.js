import React from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Typography } from "@material-ui/core";

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div onClick={scrollToTop} className="navbar-title">
            Ray
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                activeClass="active"
                to="project-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="navbar-item">
              <Link activeClass="active" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
