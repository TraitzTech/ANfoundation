import React, { useState } from "react";
import "./pillarcard.css";
import { FaArrowRight } from "react-icons/fa";
import bgimage from "../../assets/community Icon.png";
import { Link } from "react-router-dom";

const Pillarcard = ({
  bgImage,
  headercontent,
  headercontent1 = "",
  headercontent2 = "",
  headercontent3 = "",
  text,
  plus,
}) => {
  const [isOpen, setIsOpen] = useState(true);
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
        <div onClick={() => toggleDropdown(isOpen, setIsOpen)}>
          <img src={bgImage} alt="background image" />
          <h3>{headercontent}</h3>
          <h3>
            {" "}
            <Link to="/Bambili#home">
              {" "}
              {/* <FaArrowRight size={20} /> */}
              {headercontent1} <span style={{ float: "right" }}>{plus}</span>
            </Link>
          </h3>
          <h3>
            {" "}
            {/* <Link to="./works"> */}
            <a
              href="https://web.facebook.com/AkwoGirlTech?mibextid=kFxxJD&rdid=CFDHyinc8VJ6ZKKc&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2FNgdVZ7sUw4n7e7E6%2F%3Fmibextid%3DkFxxJD%26_rdc%3D1%26_rdr"
              target="_blank"
            >
              {headercontent2} <span style={{ float: "right" }}>{plus}</span>
            </a>
            {/* </Link> */}
          </h3>
          <h3>
            <a
              href="https://web.facebook.com/sunlightotherescuecameroun?mibextid=LQQJ4d&_rdc=1&_rdr"
              target="_blank"
            >
              {headercontent3} <span style={{ float: "right" }}>{plus}</span>
            </a>
          </h3>
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
                  <a
                    href="https://www.facebook.com/share/g/Qu3m4i8mPcjca7fu/?mibextid=K35XfP"
                    target="_blank"
                  >
                    Mbeligi Facebook
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

export default Pillarcard;
