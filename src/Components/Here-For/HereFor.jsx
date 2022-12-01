import React from "react";
import "./hereFor.css";
import hereForImg from "../../assets/Images/HomePage/HereFor/hereForImg.png";
import lace from "../../assets/Images/HomePage/HereFor/lace.png";

const HereFor = () => {
  return (
    <div className="sipnotech__hereFor">
      <div className="sipnotech__hereFor-blueBlur"></div>
      <div className="sipnotech__hereFor-purpleBlur"></div>
      <div className="sipnotech__hereFor-text_container">
        <p className="sipnotech__hereFor-text_welcome">WELCOME TO SIPNOTECH</p>
        <h1 className="sipnotech__hereFor-text_heading">
          We are here for <br />
          Business <span>Solutions & Ideas</span>
        </h1>
        <p className="sipnotech__hereFor-text_para">
          We are a fast paced and well accomplished web & application
          development initiative to help ambitious teams transform concepts and
          ideas into successful companies.
        </p>
        <div className="sipnotech__hereFor-text_content">
          <p className="sipnotech__hereFor-text_para">
            Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at
            porttitor id mattis.
          </p>
          <div className="sipnotech__hereFor-btns">
            <button className="sipnotech__hereFor-btns_learnMoreBtn">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="sipnotech__hereFor-image_container">
        <img src={lace} alt="" className="sipnotech__hereFor-vector_lace" />
        <img src={hereForImg} alt="" className="sipnotech__hereFor-image" />
      </div>
      <div className="sipnotech__hereFor-text_content_mobile">
        <p className="sipnotech__hereFor-text_para">
          Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at
          porttitor id mattis.
        </p>
        <div className="sipnotech__hereFor-btns">
          <button className="sipnotech__hereFor-btns_learnMoreBtn">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HereFor;
