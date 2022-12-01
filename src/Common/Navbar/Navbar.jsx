import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sipnotech__navbar">
      <div className="sipnotech__navbar-menu">
        {toggleMenu ? (
          <GoThreeBars
            className="sipnotech__navbar-menu_toggleBtn"
            color="#ffffff"
            size={25}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <GoThreeBars
            className="sipnotech__navbar-menu_toggleBtn"
            color="#ffffff"
            size={25}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="sipnotech__navbar-menu_container">
            <div className="sipnotech__navbar-menu_container-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <button>
                <NavLink to="/contact-us">Contact</NavLink>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="sipnotech__navbar-links">
        <div className="sipnotech__navbar-links_logo_container">
          <h1 className="sipnotech__navbar-links_logo">
            Sipno<span>tech</span>
          </h1>
        </div>
        <div className="sipnotech__navbar-links_container">
          <li className="sipnotech__navbar-links_li">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="sipnotech__navbar-links_li">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="sipnotech__navbar-links_li">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="sipnotech__navbar-links_li">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="sipnotech__navbar-links_li">
            <NavLink to="/services">Services</NavLink>
          </li>
          <button>
            <NavLink to="/contact-us">Contact</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
