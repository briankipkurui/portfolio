import React, { useState } from "react";
import "./navbar.scss";
import "./navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";


export const Navbar = () => {
  const [isMobile, setIsmobile] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const handleClick = () => setIsmobile(false);

  //function that changes navbar bg-color on  scroll
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav
        className={colorChange ? "navbar bgcolorBlack" : "navbar bgcolorInhert"}
      >
        <h3 className="logo" onClick={() => scroll.scrollToTop()}>
          Allan
        </h3>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li
            onClick={() => {
              handleClick();
              scroll.scrollToTop();
            }}
          >
            home
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
              onClick={handleClick}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
              onClick={handleClick}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
              onClick={handleClick}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
              onClick={handleClick}
            >
              contact
            </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsmobile(!isMobile)}
        >
          {isMobile ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
        </button>
      </nav>
    </>
  );
};
