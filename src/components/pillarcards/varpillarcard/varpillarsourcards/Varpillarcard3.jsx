import React, { useState } from "react";
import "../varpillarcard.css";

const Varpillar3 = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(false);
  const [isOpenDropdowntwo, setIsOpenDropdowntwo] = useState(false);
  const [isOpenDropdownthree, setIsOpenDropdownthree] = useState(false);
  const [isOpenDropdownfour, setIsOpenDropdownfour] = useState(true);
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

            {/* <h2
              className="varpillar-head-dropdown-lv-1 head-one"
              onClick={() =>
                toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
              }
            >
              Community Mobilisation
              <p className={isOpenDropdownfour ? "for-drop" : ""}>&gt;</p>
            </h2> */}
            <div
              className={
                isOpenDropdownfour
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              {/* start of dropdown lv 2 */}
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-one"
                onClick={() =>
                  toggleDropdown(isOpenDropdownfive, setIsOpenDropdownfive)
                }
              >
                &#9724; Inaugural consultation on human developement in Bambili
                for girls and women{" "}
                <p className={isOpenDropdownfive ? "for-drop" : ""}>&gt;</p>
              </h2>

              <div
                className={
                  isOpenDropdownfive
                    ? "varpillar-dropdown-lv-2 lv-2-two"
                    : "varpillar-dropdown-lv-2 lv-2-one".concat(" hidden")
                }
              >
                <li className="lv2-one-li-one">
                  <a href="#" target="_blank">
                    &#8226; Event Information;
                  </a>
                </li>
                <li className="lv2-one-li-two">
                  <a href="#" target="_blank">
                    &#8226; Event Summary;
                  </a>
                </li>

                <hr className="varpillar-dropdown-lv-2-hr" />
              </div>

              {/* end of dropdown lv 2 item */}

              {/* start of dropdown lv 2 item 2*/}

              {/* end of dropdown lv 2 item 2 */}

              <h2 style={{marginTop: '15px'}}
                className="varpillar-head-dropdown-lv-2 head-lv-2-one"
                onClick={() =>
                  toggleDropdown(isOpenDropdownsix, setIsOpenDropdownsix)
                }
              >
                &#9724; Community Library (Planned){" "}
                {/* <p className={isOpenDropdownsix ? "for-drop" : ""}>&gt;</p> */}
              </h2>

              

            </div>

            {/* end of duplication of dropdown level one */}
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

export default Varpillar3;
