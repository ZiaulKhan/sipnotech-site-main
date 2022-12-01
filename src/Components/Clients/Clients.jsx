import React from "react";
import "./clients.css";
import clientPic1 from "../../assets/Images/About/Clients/clientPic1.png";
import clientPic2 from "../../assets/Images/About/Clients/clientPic2.png";
import clientPic3 from "../../assets/Images/About/Clients/clientPic3.png";
import clientPic4 from "../../assets/Images/About/Clients/clientPic4.png";
import clientPic5 from "../../assets/Images/About/Clients/clientPic5.png";
import clientPic6 from "../../assets/Images/About/Clients/clientPic6.png";
import clientPic7 from "../../assets/Images/About/Clients/clientPic7.png";
import clientPic8 from "../../assets/Images/About/Clients/clientPic8.png";
import clientPic9 from "../../assets/Images/About/Clients/clientPic9.png";
import clientPic10 from "../../assets/Images/About/Clients/clientPic10.png";
import clientPic11 from "../../assets/Images/About/Clients/clientPic11.png";

const Clients = () => {
  return (
    <div className="sipnotech__clients">
      <div className="sipnotech__clients-blueBlur"></div>
      <div className="sipnotech__clients-text_container">
        <p className="sipnotech__clients-text_welcome">OUR CLIENTS</p>
        <h1 className="sipnotech__clients-text_heading">
          Trusted By <span>100+</span>
          <br />
          <span>Clients</span> Globally
        </h1>
        <div className="sipnotech__clients-text_content">
          <p className="sipnotech__clients-text_para">
            Have a Custom requirement or a Complex Project? Leverage our
            expertise of working with 100+ organizations across Industries &
            Geographies.
          </p>
          <div className="sipnotech__clients-btns">
            <button className="sipnotech__clients-btns_learnMoreBtn">
              Schedule a call
            </button>
          </div>
        </div>
      </div>
      <div className="sipnotech__clients-image_container">
        <div className="sipnotech__clients-image_container_bgOuter">
          <div className="sipnotech__clients-image_container_bgInner">
            <div className="sipnotech__clients-image_container_bgImg">
              <img
                src={clientPic6}
                alt=""
                className="sipnotech__clients_clientPic6"
              />
              <img
                src={clientPic8}
                alt=""
                className="sipnotech__clients_clientPic8"
              />
            </div>
            <img
              src={clientPic1}
              alt=""
              className="sipnotech__clients_clientPic1"
            />
            <img
              src={clientPic5}
              alt=""
              className="sipnotech__clients_clientPic5"
            />
            <img
              src={clientPic9}
              alt=""
              className="sipnotech__clients_clientPic9"
            />
            <img
              src={clientPic10}
              alt=""
              className="sipnotech__clients_clientPic10"
            />
          </div>
          <img
            src={clientPic2}
            alt=""
            className="sipnotech__clients_clientPic2"
          />
          <img
            src={clientPic3}
            alt=""
            className="sipnotech__clients_clientPic3"
          />
          <img
            src={clientPic7}
            alt=""
            className="sipnotech__clients_clientPic7"
          />
          <img
            src={clientPic4}
            alt=""
            className="sipnotech__clients_clientPic4"
          />
          <img
            src={clientPic11}
            alt=""
            className="sipnotech__clients_clientPic11"
          />
        </div>
      </div>
      <div className="sipnotech__clients-text_content_mobile">
        <p className="sipnotech__clients-text_para">
          Have a Custom requirement or a Complex Project? Leverage our expertise
          of working with 100+ organizations across Industries & Geographies.
        </p>
        <div className="sipnotech__clients-btns">
          <button className="sipnotech__clients-btns_learnMoreBtn">
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
