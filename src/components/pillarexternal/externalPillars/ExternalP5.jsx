import React, { useState } from "react";
import "../../pillarcards/varpillarcard/varpillarcard.css";

const ExternalP5 = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(false);
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

            <h2
              className="varpillar-head-dropdown-lv-1 head-one"
              onClick={() =>
                toggleDropdown(isOpenDropdownOne, setIsOpenDropdownOne)
              }
            >
              Social Services
              <p className={isOpenDropdownOne ? "for-drop" : ""}>&gt;</p>
            </h2>
            <div
              className={
                isOpenDropdownOne
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              {/* start of dropdown lv 2 */}

              <li className="dd-lv-1-1-li-one">
                &#8226; Bambili Health Center{" "}
              </li>
              <li className="dd-lv-1-1-li-two">
                &#8226; University of Bamenda Health Center
              </li>
              <li className="dd-lv-1-1-li-three">
                <a href="#" target="_blank">
                  &#8226; Our Lady of Fatima Parish Bambili
                </a>{" "}
              </li>
              <li className="dd-lv-1-1-li-four">
                &#8226; St Francis Quasi Parish Ntewshi
              </li>
              <li className="dd-lv-1-1-li-five">&#8226; PC CCAST Complex</li>

              {/* end of dropdown lv 2 item */}

              {/* start of dropdown lv 2 item 2*/}
              

              {/* end of dropdown lv 2 item 2 */}
            </div>

            {/* end of duplication of dropdown level one */}

            <h2
              className="varpillar-head-dropdown-lv-1 head-two"
              onClick={() =>
                toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
              }
            >
              Techical
              <p className={isOpenDropdowntwo ? "for-drop" : ""}>&gt;</p>
            </h2>
            <div
              className={
                isOpenDropdowntwo
                  ? "varpillar-dropdown-lv-1 dd-lv-1-2"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-one"
                onClick={() =>
                  toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                }
              >
                &#9724; Experts{" "}
                <p className={isOpenDropdownthree ? "for-drop" : ""}>&gt;</p>
              </h2>
              <div
                className={
                  isOpenDropdownthree
                    ? "varpillar-dropdown-lv-2 lv-2-two"
                    : "varpillar-dropdown-lv-2 lv-2-two".concat(" hidden")
                }
              >
                <li className="lv2-one-li-one">
                  <a href="#" target="_blank">
                    &#8226;
                  </a>
                </li>
                <li className="lv2-one-li-two">
                  <a href="#" target="_blank">
                    &#8226;
                  </a>
                </li>

                <hr className="varpillar-dropdown-lv-2-hr" />
              </div>
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-two"
                onClick={() =>
                  toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
                }
              >
                &#9724; Research{" "}
                <p className={isOpenDropdownfour ? "for-drop" : ""}>&gt;</p>
              </h2>
              <div
                className={
                  isOpenDropdownfour
                    ? "varpillar-dropdown-lv-2 lv-2-two"
                    : "varpillar-dropdown-lv-2 lv-2-two".concat(" hidden")
                }
              >
                <li className="lv2-one-li-one">
                  <a href="#" target="_blank">
                    &#8226;
                  </a>
                </li>
                <li className="lv2-one-li-two">
                  <a href="#" target="_blank">
                    &#8226;
                  </a>
                </li>

                <hr className="varpillar-dropdown-lv-2-hr" />
              </div>
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

export default ExternalP5;
