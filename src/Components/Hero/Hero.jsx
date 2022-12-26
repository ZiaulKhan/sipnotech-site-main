import React from "react";
import "./hero.css";

const Hero = (props) => {
  return (
    <div className="sipnotech__hero">
      <img src={props.vector} alt="" className="sipnotech__hero-vector_line" />
      <div className="sipnotech__hero-blueBlur"></div>
      <div className="sipnotech__hero-blueBlur_second"></div>
      <div className="sipnotech__hero-purpleBlur"></div>
      <div className="sipnotech__hero-purpleBlur_mobile"></div>
      <div className="sipnotech__hero-text_container">
        {props.title}
        <div className="sipnotech__hero-text_content">
          <p className="sipnotech__hero-text_para">{props.desc}</p>
          <p className="sipnotech__hero-text_para">{props.desc2}</p>
          <div className="sipnotech__hero-btns">
            {props.getStartedBtn}
            {props.playIcon}
            <p>{props.watchVideo}</p>
          </div>
        </div>
      </div>
      <div className="sipnotech__hero-image_container">
        <img
          src={props.lace1}
          alt=""
          className="sipnotech__hero-vector_lace1"
        />
        <img
          src={props.lace2}
          alt=""
          className="sipnotech__hero-vector_lace2"
        />
        <img
          src={props.lace3}
          alt=""
          className="sipnotech__hero-vector_lace3"
        />
        <img src={props.heroImg} alt="" className="sipnotech__hero-image" />
      </div>
      <div className="sipnotech__hero-text_content_mobile">
        <p className="sipnotech__hero-text_para">{props.desc}</p>
        <p className="sipnotech__hero-text_para">{props.desc2}</p>
        <div className="sipnotech__hero-btns">{props.discoverMoreBtn}</div>
      </div>
    </div>
  );
};

export default Hero;
