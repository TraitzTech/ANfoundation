import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcardtwo = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(false);
  const [isOpenDropdowntwo, setIsOpenDropdowntwo] = useState(false);
  const [isOpenDropdownthree, setIsOpenDropdownthree] = useState(false);
  const [isOpenDropdownfour, setIsOpenDropdownfour] = useState(false);

  const toggleDropdown = (objectToSet, setVariable) => {
    setVariable(!objectToSet);
    console.log("cliked dropdown");
  };

  return (
    <div className="pillar-card-container">
      <div className="pillar-card">
        

        {/* my stuff */}
        <div onClick={() => toggleDropdown(isOpen, setIsOpen)}>
          <img src={bgImage} alt="background image" />
          <h3>{headercontent}</h3>
          <p>{text}</p>
          <hr />
          {/* <span className={isOpen ? "hidden" : ""} id="span">
            {" "}
            +{" "}
          </span> */}
        </div>

        {/* <div
          className={
            isOpen ? "dropdown".concat("") : "dropdown".concat(" hidden")
          }
        >
          <ul>
            <span
              className="dropdown-one dropit"
              onClick={() =>
                toggleDropdown(isOpenDropdownOne, setIsOpenDropdownOne)
              }
            >
              Bambili <p className={isOpenDropdownOne ? "dropi" : ""}> &gt; </p>
            </span>{" "}
            <br />
            <div
              className={
                isOpenDropdownOne
                  ? "dropdown".concat("")
                  : "dropdown".concat(" hidden")
              }
            >
              <h3
                className="dropit"
                onClick={() =>
                  toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                }
              >
                Education & Skills{" "}
                <p className={isOpenDropdowntwo ? "dropi" : ""}> &gt; </p>{" "}
                <br />
              </h3>
              <div
                className={
                  isOpenDropdowntwo
                    ? "dropdowntwo".concat("")
                    : "dropdowntwo".concat(" hidden")
                }
              >
                <li>Secondary Education</li>
                <li>Higher Education</li>
                <li>Agriculture</li>
                <li>Business and Trades</li>
                <li>Capentry</li>
                <li>Wielding</li>
                <li>Solar Electrification</li>
                <li>Tailoring</li>
              </div>

              <h3
                className="dropdown-one-two dropit"
                onClick={() =>
                  toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                }
              >
                Online Learning{" "}
                <p className={isOpenDropdownthree ? "dropi" : ""}> &gt; </p>
                <br />
              </h3>
              <div
                className={
                  isOpenDropdownthree
                    ? "dropdowntwo".concat("")
                    : "dropdowntwo".concat(" hidden")
                }
              >
                <li>
                  <a href="https://www.edx.org/" target="_blank">
                    Edx
                  </a>
                </li>
                <li>
                  <a href="https://chat.openai.com/" target="_blank">
                    ChatGPT
                  </a>
                </li>
                <li>
                  <a href="https://www.khanacademy.org/" target="_blank">
                    Khan Academy
                  </a>
                </li>
              </div>

                          </div>
          </ul>
          <span id="span" onClick={() => toggleDropdown(isOpen, setIsOpen)}>
            {" "}
            -{" "}
          </span>
        </div> */}
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
