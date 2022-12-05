// home data------
import hereForImg from "../assets/Images/HomePage/HereFor/hereForImg.png";
import lace from "../assets/Images/HomePage/HereFor/lace.png";
// ----------

// about data------
import aboutHereForImg from "../assets/Images/About/HereFor/aboutHereForImg.png";
// -------

const heroData = [
  {
    id: 1,
    category: "homePage",
    img1: hereForImg,
    img2: lace,
    heading: "WELCOME TO SIPNOTECH",
    title: (
      <h1 className="sipnotech__hereFor_text-heading">
        We are here for <br />
        Business <span>Solutions & Ideas</span>
      </h1>
    ),
    desc: "We are a fast paced and well accomplished web & application development initiative to help ambitious teams transform concepts and ideas into successful companies.",
    desc2:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nisi tellus pharetra risus libero morbi lo.",
    learnMoreBtn: (
      <button className="sipnotech__hereFor_btns-learnMoreBtn">
        Learn More
      </button>
    ),
  },
  {
    id: 2,
    category: "aboutPage",
    img1: aboutHereForImg,
    heading: "GET TO KNOW US",
    title: (
      <h1 className="sipnotech__hereFor_text-heading">
        We are here for <br />
        Business <span>Solutions & Ideas</span>
      </h1>
    ),
    desc: "We are a fast paced and well accomplished web & application development initiative to help ambitious teams transform concepts and ideas into successful companies.",
    desc2:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nisi tellus pharetra risus libero morbi lo.",
  },
];

export default heroData;
