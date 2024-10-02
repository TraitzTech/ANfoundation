import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcardthree = ({ bgImage, headercontent, text }) => {
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
            <span>Language</span>
            <li>
              <a href="https://www.youtube.com/@prof_agwandi">
                Language Matters
              </a>
            </li>
            <li>Dictionary</li>
            <li>Anthem</li>
            <li>Calendar</li>
            <span>Food and Drinks</span>
            <li>Achu and Yellow soup</li>
            <li>Achu and Na'a (Garden egg)</li>
            <span>Tourism</span>
            <li>Bambili Palace</li>
            <li>Quarters</li>
            <li>Lake Bambili</li>

            <span> Music, Dance & Crafts Traditional Practices Events</span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pillarcardthree;

// Language
// Language Matters
// Dictionary
// Anthem
// Calendar
// Food & Drinks
// Achu & Yellow Soup
// Achu & Na'a (Garden Egg)
// Achu & Black Soup
// Achu & Egusi Soup
// Palmwine
// Tourism
// Bambili Palace
// Quarters
// Lake Bambili
// Ngo'fana
// Rivers & Waterfalls
