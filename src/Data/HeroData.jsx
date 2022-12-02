import { BsPlayCircleFill } from "react-icons/bs";

// home data------
import homeHeroImg from "../assets/Images/HomePage/Hero/homeHeroImg.png";
import vector from "../assets/Images/HomePage/Hero/vector.png";
import lace1 from "../assets/Images/HomePage/Hero/lace.png";
import lace2 from "../assets/Images/HomePage/Hero/lace.png";
import lace3 from "../assets/Images/HomePage/Hero/lace.png";
// ----------

// about data------
import aboutHeroImg from "../assets/Images/About/Hero/aboutHeroImg.png";
// -------

// services data------
import servicesHeroImg from "../assets/Images/Services/Hero/servicesHeroImg.png";
// -------

// portfolio data------
import portfolioHeroImg from "../assets/Images/PortfolioPage/Hero/portfolioHeroImg.png";
// -------

// contact data------
import contactHeroImg from "../assets/Images/ContactPage/Hero/contactHeroImg.png";
// -------

const heroData = [
  {
    id: 1,
    category: "homePage",
    img1: homeHeroImg,
    img2: vector,
    img3: lace1,
    img4: lace2,
    img5: lace3,
    icon: (
      <div className="sipnotech__hero-btns_playBtn">
        <BsPlayCircleFill />
      </div>
    ),
    title: (
      <h1 className="sipnotech__hero-text_title">
        Best <span>Marketing</span>
        <br />
        Digital Agency
      </h1>
    ),
    desc: "Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at porttitor id mattis. Id risus et bibendum ornare bibendum diam. Sed at euismod cursus at. Eget eu etiam lacus eu egestas amet id.",
    discoverMoreBtn: (
      <button className="sipnotech__hero-btns_discoverMoreBtn">
        Discover More
      </button>
    ),
    getStartedBtn: (
      <button className="sipnotech__hero-btns_getStartedBtn">
        Get Started
      </button>
    ),
    watchVideo: "Watch Video",
  },
  {
    id: 2,
    category: "aboutPage",
    img1: aboutHeroImg,
    title: (
      <h1 className="sipnotech__hero-text_title">
        Help Companies
        <br />
        <span>Design</span> Their
        <br />
        <span>Products</span>
      </h1>
    ),
    desc: "We are committed to providing our customers with exceptional service while offering our employees the best training.",
  },
  {
    id: 3,
    category: "servicesPage",
    img1: servicesHeroImg,
    img2: vector,
    title: (
      <h1 className="sipnotech__hero-text_title">
        The <span>Best Solutions</span>
        <br />
        For Your Business
      </h1>
    ),
    desc: "We are committed to providing our customers with exceptional service while offering our employees the best training.",
  },
  {
    id: 4,
    category: "portfolioPage",
    img1: portfolioHeroImg,
    img2: vector,
    title: (
      <h1 className="sipnotech__hero-text_title">
        Our <span>Projects</span>
      </h1>
    ),
    desc: "Kindly check out our few beautiful & professional works, every client is fully delighted & glad after checking our innovation base work.",
    desc2:
      "Kindly check out our few beautiful & professional works, every client is fully delighted.",
  },
  {
    id: 5,
    category: "contactPage",
    img1: contactHeroImg,
    title: (
      <h1 className="sipnotech__hero-text_title">
        <span>Contact</span>
      </h1>
    ),
    desc: "Lets Connect NOW…!",
    desc2:
      "Lorem ipsum dolor sit amet consectetur. Suspendisse elementum sed at porttitor id mattis. Id risus et bibendum ornare bibendum diam. Sed at euismod cursus at. Eget eu etiam lacus eu egestas amet id.",
  },
];

export default heroData;
