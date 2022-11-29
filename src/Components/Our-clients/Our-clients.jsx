import React from "react";
import "./ourclients.css";
import clientsImg from "../../assets/Images/Clients/clientsImg.png";
import quoteVector from "../../assets/Images/Clients/quoteVector.png";
import clientPic from "../../assets/Images/Clients/clientPic.png";
import star from "../../assets/Images/Clients/star.png";
import halfStar from "../../assets/Images/Clients/halfStar.png";
import messageIcon from "../../assets/Images/Clients/messageIcon.png";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Clients = () => {
  return (
    <div className="sipnotech__clients">
      <div className="sipnotech__clients_content-container">
        <div className="sipnotech__clients-blueBlur"></div>
        <div className="sipnotech__clients-purpleBlur"></div>
        <div className="sipnotech__clients-purpleBlur_mobile"></div>
        <div className="sipnotech__clients-image_container_web">
          <img src={clientsImg} alt="" className="sipnotech__clients-image" />
          <div className="sipnotech__clients-audienceCount_container">
            <img
              src={messageIcon}
              alt=""
              className="sipnotech__clients-audienceCount_messageIcon"
            />
            <div className="sipnotech__clients-audienceCount_counts">
              <p className="sipnotech__clients-audienceCount_totalAudience">
                Total Audience
              </p>
              <p className="sipnotech__clients-audienceCount_totalNumbers">
                100
              </p>
            </div>
          </div>
        </div>
        <div className="sipnotech__clients-text_container">
          <p className="sipnotech__clients-text_testimonials">TESTIMONIALS</p>
          <h1 className="sipnotech__clients-text_heading">
            <img
              src={quoteVector}
              alt=""
              className="sipnotech__clients-text_heading-quoteVector"
            />
            What Our Customers
            <br />
            Say About Us
          </h1>
          <div className="sipnotech__clients-image_container_mobile">
            <img src={clientsImg} alt="" className="sipnotech__clients-image" />
          </div>
          <div className="sipnotech__clients-text_content">
            <p className="sipnotech__clients-text_para">
              We are a fast paced and well accomplished web & application
              development initiative to help ambitious teams transform concepts
              and ideas into successful companies.
            </p>
            <div className="sipnotech__clients-reviews_container">
              <img
                src={clientPic}
                alt=""
                className="sipnotech__clients-reviews_clientPic"
              />
              <div className="sipnotech__clients-reviews_client-details">
                <p className="sipnotech__clients-reviews_client-name">
                  Mansi.Mate
                </p>
                <div className="sipnotech__clients-reviews_client-ratings">
                  <img
                    src={star}
                    alt=""
                    className="sipnotech__clients-reviews_client-ratings_star"
                  />
                  <img
                    src={star}
                    alt=""
                    className="sipnotech__clients-reviews_client-ratings_star"
                  />
                  <img
                    src={star}
                    alt=""
                    className="sipnotech__clients-reviews_client-ratings_star"
                  />
                  <img
                    src={halfStar}
                    alt=""
                    className="sipnotech__clients-reviews_client-ratings_star"
                  />
                </div>
                <div className="sipnotech__clients-reviews_client-post">
                  Product Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sipnotech__clients_btns-container">
        <BsArrowLeft className="sipnotech__clients_btns-left" />
        <BsArrowRight className="sipnotech__clients_btns-right" />
      </div>
    </div>
  );
};

export default Clients;
