import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcard = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("cliked dropdown");
  };
  return (
    <div className="pillar-card-container" onClick={toggleDropdown}>
      <div className="pillar-card">
        <img src={bgImage} alt="background image" />
        <h3>{headercontent}</h3>
        <p>{text}</p>
        <hr />
        <div
          className={
            isOpen ? "dropdown".concat("") : "dropdown".concat(" hidden")
          }
        >
          <ul>
            <li>
              MBECUDA - Bambili, Buea, Limbe, Douala, Yaounde, USA, Canada
            </li>
            <li>
              <a href="https://www.facebook.com/share/g/Qu3m4i8mPcjca7fu/?mibextid=K35XfP">
                Mbeligi Facebook
              </a>
            </li>
            <li>The AN Foundation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pillarcard;
