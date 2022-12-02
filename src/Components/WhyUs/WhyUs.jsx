import React, { useState } from "react";
import "./whyUs.css";
import techImg from "../../assets/Images/whyUs/techImg.png";
import supportImg from "../../assets/Images/whyUs/supportImg.png";
import passionImg from "../../assets/Images/whyUs/passionImg.png";
import { BsCheckCircleFill } from "react-icons/bs";

const WhyUs = () => {
  const [toggle, setToggle] = useState("1");
  const data = [
    {
      id: "1",
      key: "1",
      title: "Latest Technology",
      text: "The digital revolution continues to set trends and tempt us with new technologies that developers and programmers everywhere will be crazy about. We look and recommend the best solution required for the businesses or effective and progressive growth.",
      features1: "Handpicked tools and techniques",
      features2: "Recommended by Professional",
      features3: "Effective User Experience",
      img: techImg,
    },
    {
      id: "2",
      key: "2",
      title: "Awesome Support",
      text: "Everything you need for your business is just a call away.",
      features1: "24*7 support",
      features2: "Available for calls, emails or messages",
      features3: "Scalability of employees per time clock",
      img: supportImg,
    },
    {
      id: "3",
      key: "3",
      title: "Passion",
      text: "Everything you need for your business is just a call away.",
      features1: "24*7 support",
      features2: "Available for calls, emails or messages",
      features3: "Scalability of employees per time clock",
      img: passionImg,
    },
  ];
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
    </div>
  );
};

export default WhyUs;
