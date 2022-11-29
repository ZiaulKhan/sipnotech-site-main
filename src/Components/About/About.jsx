import React from "react";
import "./about.css";
import aboutImg from "../../assets/Images/About/aboutImg.png";
import lace from "../../assets/Images/About/lace.png";

const About = () => {
  return (
    <div className="sipnotech__about">
      <div className="sipnotech__about-blueBlur"></div>
      <div className="sipnotech__about-purpleBlur"></div>
      <div className="sipnotech__about-text_container">
        <p className="sipnotech__about-text_welcome">WELCOME TO SIPNOTECH</p>
        <h1 className="sipnotech__about-text_heading">
          We are here for <br />
          Business <span>Solutions & Ideas</span>
        </h1>
        <p className="sipnotech__about-text_para">
          We are a fast paced and well accomplished web & application
          development initiative to help ambitious teams transform concepts and
          ideas into successful companies.
        </p>
        <div className="sipnotech__about-text_content">
          <p className="sipnotech__about-text_para">
            Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at
            porttitor id mattis.
          </p>
          <div className="sipnotech__about-btns">
            <button className="sipnotech__about-btns_learnMoreBtn">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="sipnotech__about-image_container">
        <img src={lace} alt="" className="sipnotech__about-vector_lace" />
        <img src={aboutImg} alt="" className="sipnotech__about-image" />
      </div>
      <div className="sipnotech__about-text_content_mobile">
        <p className="sipnotech__about-text_para">
          Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at
          porttitor id mattis.
        </p>
        <div className="sipnotech__about-btns">
          <button className="sipnotech__about-btns_learnMoreBtn">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
