import React from "react";
import "./reviews.css";
import reviewsImg from "../../assets/Images/HomePage/Reviews/reviewsImg.png";
import quoteVector from "../../assets/Images/HomePage/Reviews/quoteVector.png";
import customerPic from "../../assets/Images/HomePage/Reviews/customerPic.png";
import star from "../../assets/Images/HomePage/Reviews/star.png";
import halfStar from "../../assets/Images/HomePage/Reviews/halfStar.png";
import messageIcon from "../../assets/Images/HomePage/Reviews/messageIcon.png";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="sipnotech__reviews">
      <div className="sipnotech__reviews_content-container">
        <div className="sipnotech__reviews-blueBlur"></div>
        <div className="sipnotech__reviews-purpleBlur"></div>
        <div className="sipnotech__reviews-purpleBlur_mobile"></div>
        <div className="sipnotech__reviews-image_container_web">
          <img src={reviewsImg} alt="" className="sipnotech__reviews-image" />
          <div className="sipnotech__reviews-audienceCount_container">
            <img
              src={messageIcon}
              alt=""
              className="sipnotech__reviews-audienceCount_messageIcon"
            />
            <div className="sipnotech__reviews-audienceCount_counts">
              <p className="sipnotech__reviews-audienceCount_totalAudience">
                Total Audience
              </p>
              <p className="sipnotech__reviews-audienceCount_totalNumbers">
                100
              </p>
            </div>
          </div>
        </div>
        <div className="sipnotech__reviews-text_container">
          <p className="sipnotech__reviews-text_testimonials">TESTIMONIALS</p>
          <h1 className="sipnotech__reviews-text_heading">
            <img
              src={quoteVector}
              alt=""
              className="sipnotech__reviews-text_heading-quoteVector"
            />
            What Our Customers
            <br />
            Say About Us
          </h1>
          <div className="sipnotech__reviews-image_container_mobile">
            <img src={reviewsImg} alt="" className="sipnotech__reviews-image" />
          </div>
          <div className="sipnotech__reviews-text_content">
            <p className="sipnotech__reviews-text_para">
              We are a fast paced and well accomplished web & application
              development initiative to help ambitious teams transform concepts
              and ideas into successful companies.
            </p>
            <div className="sipnotech__reviews-reviews_container">
              <img
                src={customerPic}
                alt=""
                className="sipnotech__reviews-reviews_customerPic"
              />
              <div className="sipnotech__reviews-reviews_customer-details">
                <p className="sipnotech__reviews-reviews_customer-name">
                  Mansi.Mate
                </p>
                <div className="sipnotech__reviews-reviews_customer-ratings">
                  <img
                    src={star}
                    alt=""
                    className="sipnotech__reviews-reviews_customer-ratings_star"
                  />
                  <img
                    src={star}
                    alt=""
                    className="sipnotech__reviews-reviews_customer-ratings_star"
                  />
                  <img
                    src={star}
                    alt=""
                    className="sipnotech__reviews-reviews_customer-ratings_star"
                  />
                  <img
                    src={halfStar}
                    alt=""
                    className="sipnotech__reviews-reviews_customer-ratings_star"
                  />
                </div>
                <div className="sipnotech__reviews-reviews_customer-post">
                  Product Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sipnotech__reviews_btns-container">
        <BsArrowLeft className="sipnotech__reviews_btns-left" />
        <BsArrowRight className="sipnotech__reviews_btns-right" />
      </div>
    </div>
  );
};

export default Reviews;
