import React, { useState } from "react";
import "./portfolio.css";
import Card from "../../Common/Card/Card";
import data from "../../Data/PortfolioData";

const Portfolio = (props) => {
  const category = data.map((item) => item.category);
  const uniqueCategory = ["All", ...new Set(category)];

  const [activeCategory, setActiveCategory] = useState("All");

  const onClick = (activeCat) => {
    setActiveCategory(activeCat);
  };

  const [project, setProject] = useState(data);

  const displayData = (activeCategory) => {
    if (activeCategory === "All") {
      setProject(data);
      return;
    } else {
      const filterProject = data.filter((item) => item.category === category);
      setProject(filterProject);
    }
  };
  displayData();
  return (
    <div className="sipnotech__portfolio">
      <h1 className="sipnotech__portfolio_heading">{props.heading}</h1>
      <h1 className="sipnotech__portfolio_title">{props.title}</h1>
      <div className="sipnotech__portfolio_categories_container">
        {uniqueCategory.map((item) => (
          <p
            key={item.id}
            onClick={() => onClick(item)}
            onFilterProjects={displayData()}
            className="sipnotech__portfolio_categories">
            {item}
          </p>
        ))}
      </div>
      <div className="sipnotech__portfolio_cards">
        {data.map((item) => (
          <Card key={item.id} className="sipnotech__portfolio_cards-card">
            <img
              className="sipnotech__portfolio_cards-card_img"
              src={item.image}
              alt=""
            />
            <h1 className="sipnotech__portfolio_cards_title">{item.title}</h1>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
