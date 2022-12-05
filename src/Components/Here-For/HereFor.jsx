import React from "react";
import "./hereFor.css";

const HereFor = (props) => {
  return (
    <div className="sipnotech__hereFor">
      <div className="sipnotech__hereFor_blueBlur"></div>
      <div className="sipnotech__hereFor_purpleBlur"></div>
      <div className="sipnotech__hereFor_text-container">
        <p className="sipnotech__hereFor_text-welcome">{props.heading}</p>
        {props.title}
        <p className="sipnotech__hereFor_text-para">{props.desc}</p>
        <div className="sipnotech__hereFor_text-content">
          <p className="sipnotech__hereFor_text-para">{props.desc2}</p>
          <div className="sipnotech__hereFor_btns">{props.learnMoreBtn}</div>
        </div>
      </div>
      <div className="sipnotech__hereFor_image-container">
        <img
          src={props.lace}
          alt=""
          className="sipnotech__hereFor_vector-lace"
        />
        <img
          src={props.hereForImg}
          alt=""
          className="sipnotech__hereFor_image"
        />
      </div>
      <div className="sipnotech__hereFor_text-content_mobile">
        <p className="sipnotech__hereFor_text-para">{props.desc2}</p>
        <div className="sipnotech__hereFor_btns">{props.learnMoreBtn}</div>
      </div>
    </div>
  );
};

export default HereFor;
