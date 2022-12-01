import React from "react";
import "./what-we-do.css";
import Card from "../../Common/Card/Card";
import data from "../../data/Data"

const What_we_do = () => {
  return (
    <div className="sipnotech__what-we-do">
      
      <h1 className="Sipnotech__what-we-do_heading"> what can we
            <br />
            do for you?
      </h1>
      <div className="sipnotech__what-we-do_cards">
        {
          data.map(item =>(
            <Card key={item.id} className="sipnotech__what-we-do_cards-card">
              <span className="sipnotech__what-we-do_cards-card_img">{item.image}</span>
              <h1 className="sipnotech__what-we-do_cards_title">{item.title}</h1>
              <small>{item.desc}</small>
              <button className="sipnotech__what-we-do_cards-btn">{item.button}
              <span className="sipnotech__what-we-do_cards-btn_icon">{item.icon}</span>
              </button>
            </Card>
          ))
        }
      </div>


      
    </div>
  );
};

export default What_we_do;
