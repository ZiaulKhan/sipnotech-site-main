import React from "react";
import "./get-to-work.css";
import getToWorkImg from "../../assets/Images/HomePage/Get-to-work/getToWorkImg.png";
import getToWorkImgMobile from "../../assets/Images/HomePage/Get-to-work/getToWorkImgMobile.png";

const Get_to_work = () => {
  return (
    <div className="sipnotech__get-to-work">
      <div className="sipnotech__get-to-work_content-container">
        <div className="sipnotech__get-to-work_blueBlur-left"></div>
        <div className="sipnotech__get-to-work_blueBlur-right"></div>
        <div className="sipnotech__get-to-work-image_container">
          <img
            src={getToWorkImg}
            alt=""
            className="sipnotech__get-to-work_imageWeb"
          />
          <img
            src={getToWorkImgMobile}
            alt=""
            className="sipnotech__get-to-work_imageMobile"
          />
        </div>
        <div className="sipnotech__get-to-work-text_container">
          <h1 className="sipnotech__get-to-work-text_heading">
            Have A Project In Mind?
            <br />
            Let’s Get To Work.
          </h1>
          <button className="sipnotech__get-to-work_btn">Get in Touch</button>
        </div>
        <div className="sipnotech__get-to-work_bg"></div>
      </div>
    </div>
  );
};

export default Get_to_work;
