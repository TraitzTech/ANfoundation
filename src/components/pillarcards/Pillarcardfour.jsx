import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcardfour = ({ bgImage, headercontent, text }) => {
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
        {/*   <img src={bgImage} alt="background image" />
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
         */}
        {/* the new */}

        <div onClick={() => toggleDropdown(isOpen, setIsOpen)}>
          <img src={bgImage} alt="background image" />
          <h3>{headercontent}</h3>
          <p>{text}</p>
          <hr />
          <span className={isOpen ? "hidden" : ""} id="span">
            {" "}
            +{" "}
          </span>
        </div>

        <div
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
                  ? "dropdowntwo".concat("")
                  : "dropdowntwo".concat(" hidden")
              }
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScEsBrYu7npRJrq09ZmuVWQ16dRl2L8BV4F-Pp00MJbS_lO1w/viewform"
                target="_blank"
              >
                {" "}
                <li>Growing Mbeligi Together Inaugural - 21st Sept 2024</li>
              </a>
              {/* <h3
                className="dropit"
                onClick={() =>
                  toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                }
              >
                Language{" "}
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
                <li>
                  <a href="https://www.youtube.com/@prof_agwandi">
                    Language Matters
                  </a>
                </li>
                <li>Dictionary</li>
                <li>Anthem</li>
                <li>Calendar</li>
              </div>

              <h3
                className="dropdown-one-two dropit"
                onClick={() =>
                  toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                }
              >
                Food and Drinks{" "}
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
                <li>Achu and Yellow soup</li>
                <li>Achu and Na'a (Garden egg)</li>
              </div>

              <h3
                className="dropdown-one-three  dropit"
                onClick={() =>
                  toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
                }
              >
                Tourism{" "}
                <p className={isOpenDropdownfour ? "dropi" : ""}> &gt; </p>{" "}
                <br />
              </h3>
              <div
                className={
                  isOpenDropdownfour
                    ? "dropdowntwo".concat("")
                    : "dropdowntwo".concat(" hidden")
                }
              >
                <li>Bambili Palace</li>
                <li>Quarters</li>
                <li>Lake Bambili</li>
              </div>

              <h3 className="dropit">
                {" "}
                Music, Dance & Crafts Traditional Practices Events
              </h3> */}
            </div>
          </ul>
          <span id="span" onClick={() => toggleDropdown(isOpen, setIsOpen)}>
            {" "}
            -{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pillarcardfour;
