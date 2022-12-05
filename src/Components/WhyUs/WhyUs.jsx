import React, { useState } from "react";
import "./whyUs.css";
import techImg from "../../assets/Images/whyUs/techImg.png";
import supportImg from "../../assets/Images/whyUs/supportImg.png";
import passionImg from "../../assets/Images/whyUs/passionImg.png";
import { BsCheckCircleFill } from "react-icons/bs";

const WhyUs = () => {
  const data = [
    {
      id: "1",
      key: "1",
      title: "Latest Technology",
      desc: "The digital revolution continues to set trends and tempt us with new technologies that developers and programmers everywhere will be crazy about. We look and recommend the best solution required for the businesses or effective and progressive growth.",
      feature1: "Handpicked tools and techniques",
      feature2: "Recommended by Professional",
      feature3: "Expert Craftsmen ship",
      feature4: "Effective User Experience",
      img: techImg,
    },
    {
      id: "2",
      key: "2",
      title: "Awesome Support",
      desc: "Everything you need for your business is just a call away.",
      feature1: "24*7 support",
      feature2: "Available for calls, emails or messages",
      feature3: "Scalability of employees per time clock",
      img: supportImg,
    },
    {
      id: "3",
      key: "3",
      title: "Passion",
      desc: "Everything you need for your business is just a call away.",
      feature1: "24*7 support",
      feature2: "Available for calls, emails or messages",
      feature3: "Scalability of employees per time clock",
      img: passionImg,
    },
  ];

  const category = data.map((item) => item.title);

  const [displayContent, setDisplayContent] = useState([data[0]]);

  const [activeCategory, setActiveCategory] = useState("Latest Technology");

  const displayData = (activeCat) => {
    setActiveCategory(activeCat);
    let filterData = data.filter(function (value) {
      return value.title === activeCat;
    });
    setDisplayContent(filterData);
  };

  return (
    <div className="sipnotech__why-us_main">
      <div className="sipnotech__why-us_header">
        <h4>OUR BENEFITS</h4>
        <h1 className="sipnotech__why-us_main-title">
          WHY CHOOSE <span>US</span>?
        </h1>
        <p className="sipnotech__why-us_main-text">
          We are committed to providing our customers with exceptional service
          while offering our employees the best training.
        </p>
      </div>
      <div className="sipnotech__why-us_categories_container">
        {category.map((item) => (
          <p
            key={item}
            onClick={() => {
              displayData(item);
            }}
            style={{
              borderBottom:
                activeCategory === item ? "2px solid #f68b37fc" : "",
              color: activeCategory === item ? "#f68b37fc" : "",
            }}
            className="sipnotech__why-us_categories">
            {item}
          </p>
        ))}
      </div>
      {displayContent.map((item) => (
        <div key={item.id} className="sipnotech__why-us_content">
          <div className="sipnotech__why-us_purpleBlur"></div>
          <div className="sipnotech__why-us_text-container">
            <div className="sipnotech__why-us_img-container-mobile">
              <img src={item.img} alt="" className="sipnotech__why-us_img" />
            </div>
            <p className="sipnotech__why-us_text-para">{item.desc}</p>
            <div className="sipnotech__why-us_features">
              <p className="sipnotech__why-us_feature">
                <span className="sipnotech__why-us_checkIcon">
                  <BsCheckCircleFill />
                </span>
                {item.feature1}
              </p>
              <p className="sipnotech__why-us_feature">
                <span className="sipnotech__why-us_checkIcon">
                  <BsCheckCircleFill />
                </span>
                {item.feature2}
              </p>
              <p className="sipnotech__why-us_feature">
                <span className="sipnotech__why-us_checkIcon">
                  <BsCheckCircleFill />
                </span>
                {item.feature3}
              </p>
              {item.title === "Latest Technology" ? (
                <p className="sipnotech__why-us_feature">
                  <span className="sipnotech__why-us_checkIcon">
                    <BsCheckCircleFill />
                  </span>
                  {item.feature4}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sipnotech__why-us_img-container-web">
            <img src={item.img} alt="" className="sipnotech__why-us_img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
