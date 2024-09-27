import React from "react";
import './pillarcard.css'
import bgimage from "../../assets/community Icon.png";

const Pillarcard = ({ bgImage, content, text }) => {
  return (
    <div className="pillar-card-container">
      <div className="pillar-card">
        <img src={bgimage} alt="background image" />
        <h3>Community Developement</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Senectus et pharetra dui vel
          tortor. Tincidunt interdum adipiscing a
        </p>
      </div>
    </div>
  );
};

export default Pillarcard;
