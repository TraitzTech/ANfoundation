import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcardfive = ({ bgImage, headercontent, text }) => {
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
                Social Services{" "}
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
                <li>Bambili Health Center</li>
                <li>University of Bamenda Health Center</li>
                <li>
                  <a href="https://www.olfpb.org/">
                    Our Lady of Fatima Parish Bambili
                  </a>
                </li>
                <li>St Francis Quasi Parish Ntewshi</li>
                <li>PC CCAST Complex</li>
              </div>

              <h3
                className="dropdown-one-two dropit"
                onClick={() =>
                  toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                }
              >
                Technical Resources{" "}
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
                <li>Experts</li>
                <li>Research</li>
              </div> */}

              {/* <h3
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
            {/* </div>
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
