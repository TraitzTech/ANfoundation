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
        <span className={isOpen ? "hidden" : ""} id="span"> + </span>
        <div
          className={
            isOpen ? "dropdown".concat("") : "dropdown".concat(" hidden")
          }
        >
          
          <ul>
            <li>
              MBECUDA - Bambili, Buea, Limbe, Douala, Yaounde, USA, Canada
<<<<<<< HEAD
            </li>
            <li>Mbeligi Facebook</li>
=======
            </li>
            <li>
              <a href="https://www.facebook.com/share/g/Qu3m4i8mPcjca7fu/?mibextid=K35XfP">
                Mbeligi Facebook
              </a>
            </li>
>>>>>>> 9e1544fcc7dca1ac03c94db4affe9ec34d8c26ac
            <li>The AN Foundation</li>
          </ul>
          <span id="span"> - </span>
        </div>
      </div>
    </div>
  );
};

export default Pillarcard;
