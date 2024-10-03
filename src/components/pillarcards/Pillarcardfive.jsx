import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcardfive = ({ bgImage, headercontent, text }) => {
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
            <span>Bambili</span> <br />
            <span>Social Services</span>
            <li>Bambili Health Center</li>
            <li>University of Bamenda</li>
            <li>
              <a href="https://www.olfpb.org/">
                Our Lady of Fatima Parish Bambili
              </a>
            </li>
          </ul>
          <span id="span"> - </span>
        </div>
      </div>
    </div>
  );
};

export default Pillarcardfive;

// Social Services
// Bambili Health Center
// University of Bamenda Health Center
// Our Lady Of Fatima Parish Bambili
// St Francis Quasi Parish Ntewshi
// PC CCAST Complex
// Technical Resources
// Experts
// Research
