import React, { useState } from "react";
import "./pillarcard.css";
import bgimage from "../../assets/community Icon.png";

const Pillarcard = ({ bgImage, headercontent, text }) => {
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
        {/* <img src={bgImage} alt="background image" />
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
            <li>
              MBECUDA - Bambili, Buea, Limbe, Douala, Yaounde, USA, Canada
            </li>
            <li>
              <a href="https://www.facebook.com/share/g/Qu3m4i8mPcjca7fu/?mibextid=K35XfP">
                Mbeligi Facebook
              </a>
            </li>
            <li>The AN</li>
          </ul>
          <span id="span"> - </span>
        </div> */}

        {/* My Change */}

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
                MBECUDA{" "}
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
                <li>MBECUDA Bambili</li>
                <li>MBECUDA Buea</li>
                <li>MBECUDA Limbe</li>
                <li>MBECUDA Douala</li>
              </div>

              <h3
                className="dropdown-one-two dropit"
                onClick={() =>
                  toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                }
              >
                Organisations{" "}
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
                <h3
                  className="dropdown-one-two dropit"
                  onClick={() =>
                    toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
                  }
                >
                  AN foundation{" "}
                  <p className={isOpenDropdownfour ? "dropi" : ""}> &gt; </p>
                  <br />
                </h3>
                <div
                  className={
                    isOpenDropdownfour
                      ? "dropdowntwo".concat("")
                      : "dropdowntwo".concat(" hidden")
                  }
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScEsBrYu7npRJrq09ZmuVWQ16dRl2L8BV4F-Pp00MJbS_lO1w/viewform"
                    target="_blank"
                  >
                    <li>Growing Mbeligi Together Inaugural - 21st Sept 2024</li>
                  </a>
                </div>
                <li>
                  {" "}
                  <a href="https://www.facebook.com/share/g/Qu3m4i8mPcjca7fu/?mibextid=K35XfP">
                    Mbeligi Facebook
                  </a>
                </li>
                {/* <li>Achu and Na'a (Garden egg)</li> */}
              </div>

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

export default Pillarcard;
