import React, { useState } from "react";
import me from "../../../assets/technical.pdf";

import "../../pillarcards/varpillarcard/varpillarcard.css";

const ExternalP5 = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(true);
  const [isOpenDropdowntwo, setIsOpenDropdowntwo] = useState(true);
  const [isOpenDropdownthree, setIsOpenDropdownthree] = useState(true);
  const [isOpenDropdownfour, setIsOpenDropdownfour] = useState(true);
  const [isOpenDropdownfive, setIsOpenDropdownfive] = useState(true);
  const [isOpenDropdownsix, setIsOpenDropdownsix] = useState(true);

  const toggleDropdown = (objectToSet, setVariable) => {
    setVariable(!objectToSet);
    console.log("cliked dropdown");
  };

  return (
    <div className="varpillarcard-container">
      <div className="varpillarcard-contents">
        <div
          className="varpillar-std-block"
          onClick={() => toggleDropdown(isOpen, setIsOpen)}
        >
          <img src={bgImage} alt="background image" />
          <h3>{headercontent}</h3>
          <p>{text}</p>
          <hr />
          <span className={isOpen ? "hidden" : ""} id="span">
            {" "}
            +{" "}
          </span>
        </div>

        {/* start of gen dropdown */}

        <div
          className={
            isOpen
              ? "varpillar-gen-block".concat("")
              : "varpillar-gen-block".concat(" hidden")
          }
        >
          <ul className="varpillar-gen-ul">
            <div
              className={
                isOpenDropdownOne
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            ></div>

            <li>
              <a href={me} target="_blank" rel="noopener noreferrer">
                &#8226; Technical Experts
              </a>
            </li>

            <div
              className={
                isOpenDropdowntwo
                  ? "varpillar-dropdown-lv-1 dd-lv-1-2"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            ></div>
          </ul>
          <span id="spane" onClick={() => toggleDropdown(isOpen, setIsOpen)}>
            {" "}
            -{" "}
          </span>
        </div>

        {/* End of gen dropdown  */}
      </div>
    </div>
  );
};

export default ExternalP5;
