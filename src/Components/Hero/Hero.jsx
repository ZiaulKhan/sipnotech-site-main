import React from "react";
import "./hero.css";
import { BsPlayCircleFill } from "react-icons/bs";
import heroImg from "../../assets/Images/Hero Section/heroImg.png";
import vector2 from "../../assets/Images/Hero Section/vector2.png";
import lace1 from "../../assets/Images/Hero Section/lace3.png";
import lace2 from "../../assets/Images/Hero Section/lace3.png";
import lace3 from "../../assets/Images/Hero Section/lace3.png";

const Hero = () => {
  return (
    <div className="sipnotech__hero">
      <img src={vector2} alt="" className="sipnotech__hero-vector_line" />
      <div className="sipnotech__hero-blueBlur"></div>
      <div className="sipnotech__hero-purpleBlur"></div>
      <div className="sipnotech__hero-purpleBlur_mobile"></div>
      <div className="sipnotech__hero-text_container">
        <h1 className="sipnotech__hero-text_heading">
          Best <span>Marketing</span>
          <br />
          Digital Agency
        </h1>
        <div className="sipnotech__hero-text_content">
          <p className="sipnotech__hero-text_para">
            Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at
            porttitor id mattis. Id risus et bibendum ornare bibendum diam. Sed
            at euismod cursus at. Eget eu etiam lacus eu egestas amet id.
          </p>
          <div className="sipnotech__hero-btns">
            <button className="sipnotech__hero-btns_getStartedBtn">
              Get Started
            </button>
            <div className="sipnotech__hero-btns_playBtn">
              <BsPlayCircleFill />
            </div>
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <div className="sipnotech__hero-image_container">
        <img src={lace1} alt="" className="sipnotech__hero-vector_lace1" />
        <img src={lace2} alt="" className="sipnotech__hero-vector_lace2" />
        <img src={lace3} alt="" className="sipnotech__hero-vector_lace3" />
        <img src={heroImg} alt="" className="sipnotech__hero-image" />
      </div>
      <div className="sipnotech__hero-text_content_mobile">
        <p className="sipnotech__hero-text_para">
          Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at
          porttitor id mattis. Id risus et bibendum ornare bibendum diam. Sed at
          euismod cursus at. Eget eu etiam lacus eu egestas amet id.
        </p>
        <div className="sipnotech__hero-btns">
          <button className="sipnotech__hero-btns_discoverMoreBtn">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
