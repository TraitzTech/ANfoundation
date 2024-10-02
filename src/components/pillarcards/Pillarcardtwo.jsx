import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcardtwo = ({ bgImage, headercontent, text }) => {
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
            <li>Secondary Education</li>
            <li>Agriculture</li>
            <li>Business and Trades</li>
            <span>Online Learning</span>
            <li>
              <a href="https://www.edx.org/">Edx</a>
            </li>
            <li>
              <a href="https://chat.openai.com/">ChatGPT</a>
            </li>
            <li>
              <a href="https://www.khanacademy.org/">Khan Academy</a>
            </li>
          </ul>
          <span id="span"> - </span>
        </div>
      </div>
    </div>
  );
};

export default Pillarcardtwo;

// Secondary Education
// Higher Education
// Agriculture
// Business and Trades
// Carpentry
// Welding
// Electrification incl. Solar
// Tailoring
// Online Learning
// EdX
// ChatGPT
// Khan Academy
