import React from "react";
import './pillarcard.css'
import bgimage from "../../assets/community Icon.png";

const Pillarcard = ({ bgImage, headercontent, text }) => {
  return (
    <div className="pillar-card-container">
      <div className="pillar-card">
        <img src={bgImage} alt="background image" />
        <h3>{headercontent}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Pillarcard;
