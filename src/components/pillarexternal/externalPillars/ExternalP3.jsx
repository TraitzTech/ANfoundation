import React, { useState } from "react";
import "../../pillarcards/varpillarcard/varpillarcard.css";

const ExternalP3 = ({ bgImage, headercontent, text }) => {
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
              Language
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
              {/* <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-one"
                onClick={() =>
                  toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                }
              >
                &#9724; Inaugural consultation on human developement in Bambili
                for girls and women{" "}
                <p className={isOpenDropdowntwo ? "for-drop" : ""}>&gt;</p>
              </h2> */}
              <li className="dd-lv-1-1-li-one">
                <a href="https://www.youtube.com/@prof_agwandi" target="_blank">
                  &#8226; Language Matters
                </a>
              </li>
              <li className="dd-lv-1-1-li-two">&#8226; Dictionary</li>
              <li className="dd-lv-1-1-li-three">&#8226; Anthem</li>
              <li className="dd-lv-1-1-li-four">&#8226; Calendar</li>

              {/* end of dropdown lv 2 item */}

              {/* start of dropdown lv 2 item 2*/}

              {/* end of dropdown lv 2 item 2 */}
            </div>
            {/* end of dropdown lv one first iteom */}

            {/* duplication dropdown level one */}

            <h2
              className="varpillar-head-dropdown-lv-1 head-two"
              onClick={() =>
                toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
              }
            >
              Food and Drinks{" "}
              <p className={isOpenDropdowntwo ? "for-drop" : ""}>&gt;</p>
            </h2>
            <div
              className={
                isOpenDropdowntwo
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              <li className="dd-lv-1-2-li-one">
                <a
                  href="https://images.app.goo.gl/4oY2AYSL1KsSCxiG6"
                  target="_blank"
                >
                  {" "}
                  &#8226; Achu and Yellow soup
                </a>
              </li>
              <li className="dd-lv-1-2-li-two">
                &#8226; Achu and Na'a (Garden egg)
              </li>

              <li className="dd-lv-1-2-li-two">
                <a href="#" target="_blank">
                  {" "}
                  &#8226; Muluh (palm wine)
                </a>
              </li>

              {/* end of dropdown lv 2 item */}

              {/* start of dropdown lv 2 item 2*/}

              {/* end of dropdown lv 2 item 2 */}
            </div>

            <h2
              className="varpillar-head-dropdown-lv-1 head-two"
              onClick={() =>
                toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
              }
            >
              Tourism{" "}
              <p className={isOpenDropdownthree ? "for-drop" : ""}>&gt;</p>
            </h2>

            <div
              className={
                isOpenDropdownthree
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              <li className="dd-lv-1-1-li-two">&#8226; Bambili Palace</li>
              <li className="dd-lv-1-1-li-three">&#8226; Quarters</li>
              <li className="dd-lv-1-1-li-four">&#8226; Lake Bambili</li>
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

export default ExternalP3;
