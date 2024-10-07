import React, { useState } from "react";
import "../varpillarcard.css";

const Varpillar5 = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(true);
  const [isOpenDropdowntwo, setIsOpenDropdowntwo] = useState(false);
  const [isOpenDropdownthree, setIsOpenDropdownthree] = useState(false);
  const [isOpenDropdownfour, setIsOpenDropdownfour] = useState(false);
  const [isOpenDropdownfive, setIsOpenDropdownfive] = useState(false);
  const [isOpenDropdownsix, setIsOpenDropdownsix] = useState(false);

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
            {/* start of dropdown lv one first item */}

            <div
              className={
                isOpenDropdownOne
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              {/* Advisory service Item */}
              <li>&#8226; Sex Education</li>

              <li className="lv2-one-li-one">
                &#8226; Digital savings for economic security{" "}
                <span
                  id="see"
                  className={isOpenDropdowntwo ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                  }
                >
                  {" "}
                  see more
                </span>
                <span
                  className={
                    isOpenDropdowntwo
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  in partnership with {""}
                  <a href="https://mynkwa.com/" target="_blank">
                    myNkwa.com
                  </a>{" "}
                  <span
                    id="see"
                    className={isOpenDropdowntwo ? "" : "hidden"}
                    onClick={() =>
                      toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                    }
                  >
                    {" "}
                    see less
                  </span>{" "}
                </span>
              </li>

              {/* End of advisory service item*/}
              <li className="lv2-one-li-one">
                &#8226; Refuge home (planned) and GBV {""}{" "}
                <span
                  id="see"
                  className={isOpenDropdownthree ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                  }
                >
                  {" "}
                  see more
                </span>
                <span
                  className={
                    isOpenDropdownthree
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  prevention/response resources for at-risk or affected women
                  and children{" "}
                  <span
                    id="see"
                    className={isOpenDropdownthree ? "" : "hidden"}
                    onClick={() =>
                      toggleDropdown(isOpenDropdownthree, setIsOpenDropdowntwo)
                    }
                  >
                    {" "}
                    see less
                  </span>{" "}
                </span>
              </li>
            </div>
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

export default Varpillar5;
