import React from "react";
import "./counter.css";

const Counter = () => {
  return (
    <div className="sipnotech__counter">
      <div className="sipnotech__counter_rectangle_main">
        <div className="sipnotech__counter_clients">
          <p className="sipnotech__counter_numbers">100+</p>
          <p className="sipnotech__counter_heading">Clients</p>
        </div>
        <div className="sipnotech__counter_projects">
          <p className="sipnotech__counter_numbers">100+</p>
          <p className="sipnotech__counter_heading">Projects</p>
        </div>
        <div className="sipnotech__counter_countries">
          <p className="sipnotech__counter_numbers">10+</p>
          <p className="sipnotech__counter_heading">Countries</p>
        </div>
      </div>
      <div className="sipnotech__counter_rectangle_behind"></div>
    </div>
  );
};

export default Counter;
