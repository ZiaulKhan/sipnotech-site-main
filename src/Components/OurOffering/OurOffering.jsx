import React from "react";
import "./ourOffering.css";
import modernImg from "../../assets/Images/OurOfferings/modernImg.png";
import responsiveImg from "../../assets/Images/OurOfferings/responsiveImg.png";
import marketingImg from "../../assets/Images/OurOfferings/marketingImg.png";

const OurOffering = () => {
  const data = [
    {
      id: 1,
      title: "Modern Design",
      desc: "Special Eye-catchy designs for the best solutions and services.",
      img: modernImg,
    },
    {
      id: 2,
      title: "Fully Responsive",
      desc: "Best View with Best Experience for the Best sites.",
      img: responsiveImg,
    },
    {
      id: 3,
      title: "Marketing Strategy",
      desc: "Perfect game plan with Perfect outcomes for the Perfect Business.",
      img: marketingImg,
    },
  ];
  return (
    <div className="sipnotech__our-offering">
      <div className="sipnotech__our-offering_header">
        <h4>SERVICES WE ARE OFFERING</h4>
        <h1 className="sipnotech__our-offering_header-title">
          We Design <span>Digital Products</span> that
          <br />
          Helps Business Grow
        </h1>
        <p className="sipnotech__our-offering_header-text">
          We are committed to providing our customers with exceptional service
          while offering our employees the best training.
        </p>
      </div>
      <div className="sipnotech__our-offering_card-container">
        {data.map((item) => (
          <div key={item.id} className="sipnotech__our-offering_card">
            <p className="sipnotech__our-offering_card-title">{item.title}</p>
            <h1 className="sipnotech__our-offering_card-desc">{item.desc}</h1>
            <div className="sipnotech__our-offering_card-img-container">
              <img
                className="sipnotech__our-offering_card-img-bg"
                src={item.img}
                alt=""
              />
              <img
                className="sipnotech__our-offering_card-img"
                src={item.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOffering;
