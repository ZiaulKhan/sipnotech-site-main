import React from "react";
import "./hereFor.css";
import hereForImg from "../../assets/Images/HomePage/HereFor/hereForImg.png";
import lace from "../../assets/Images/HomePage/HereFor/lace.png";

const HereFor = (props) => {
  return (
    <div className="sipnotech__hereFor">
      <div className="sipnotech__hereFor-blueBlur"></div>
      <div className="sipnotech__hereFor-purpleBlur"></div>
      <div className="sipnotech__hereFor-text_container">
        <p className="sipnotech__hereFor-text_welcome">{props.heading}</p>
        {props.title}
        <p className="sipnotech__hereFor-text_para">{props.desc}</p>
        <div className="sipnotech__hereFor-text_content">
          <p className="sipnotech__hereFor-text_para">{props.desc2}</p>
          <div className="sipnotech__hereFor-btns">{props.learnMoreBtn}</div>
        </div>
      </div>
      <div className="sipnotech__hereFor-image_container">
        <img
          src={props.lace}
          alt=""
          className="sipnotech__hereFor-vector_lace"
        />
        <img
          src={props.hereForImg}
          alt=""
          className="sipnotech__hereFor-image"
        />
      </div>
      <div className="sipnotech__hereFor-text_content_mobile">
        <p className="sipnotech__hereFor-text_para">{props.desc2}</p>
        <div className="sipnotech__hereFor-btns">{props.learnMoreBtn}</div>
      </div>
    </div>
  );
};

export default HereFor;
