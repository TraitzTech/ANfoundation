import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcardfour = ({ bgImage, headercontent, text }) => {
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
        <span className={isOpen ? "hidden" : ""} id="span">
          {" "}
          +{" "}
        </span>
        <div
          className={
            isOpen ? "dropdown".concat("") : "dropdown".concat(" hidden")
          }
        >
          <ul>
            <span>Bambili</span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScEsBrYu7npRJrq09ZmuVWQ16dRl2L8BV4F-Pp00MJbS_lO1w/viewform">
              {" "}
              <li>Growing Mbeligi Together Inaugural - 21st Sept 2024</li>
            </a>
          </ul>
          <span id="span"> - </span>
        </div>
      </div>
    </div>
  );
};

export default Pillarcardfour;
