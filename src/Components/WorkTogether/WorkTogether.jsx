import React from "react";
import "./workTogether.css";

const WorkTogether = () => {
  return (
    <div className="sipnotech__work-together">
      <div className="sipnotech__work-together_content-container">
        <div className="sipnotech__work-together_blueBlur-left"></div>
        <div className="sipnotech__work-together_blueBlur-right"></div>
        <div className="sipnotech__work-together-text_container">
          <p className="sipnotech__work-together-text_small-heading">
            Let’s Work Together
          </p>
          <h1 className="sipnotech__work-together-text_heading">
            Need a successful project?
          </h1>
          <button className="sipnotech__work-together_btn">
            Schedule a call
          </button>
        </div>
        <div className="sipnotech__work-together_bg"></div>
      </div>
    </div>
  );
};

export default WorkTogether;
