import React, { useState } from "react";
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
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Services</li>
              <button>Contact</button>
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
          <li className="sipnotech__navbar-links_li">Home</li>
          <li className="sipnotech__navbar-links_li">About</li>
          <li className="sipnotech__navbar-links_li">Portfolio</li>
          <li className="sipnotech__navbar-links_li">Blog</li>
          <li className="sipnotech__navbar-links_li">Services</li>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
