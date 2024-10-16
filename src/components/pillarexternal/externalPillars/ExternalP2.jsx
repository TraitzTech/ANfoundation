import React, { useState } from "react";
import "../../pillarcards/varpillarcard/varpillarcard.css";

const ExternalP2 = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(true);
  const [isOpenDropdowntwo, setIsOpenDropdowntwo] = useState(false);
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
            {/* start of dropdown lv one first item */}

            <h2
              className="varpillar-head-dropdown-lv-1 head-one"
              onClick={() =>
                toggleDropdown(isOpenDropdownOne, setIsOpenDropdownOne)
              }
            >
              Online Learning
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
                <a href="https://www.edx.org/" target="_blank">
                  &#8226; Edx
                </a>
              </li>
              <li>
                <a
                  href="https://www.indeed.com/cmp/Bambilli-Medicalised-Health-Centre"
                  target="_blank"
                >
                  &#8226; Khan Academy
                </a>
              </li>

              <li className="dd-lv-1-1-li-one">
                <a href="https://www.coursera.org/" target="_blank">
                  &#8226; Coursera
                </a>
              </li>

              <li className="dd-lv-1-1-li-one">
                <a href="https://chatgpt.com/" target="_blank">
                  &#8226; Chatgpt
                </a>
              </li>

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
              Education & Skills{" "}
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
                  href="https://ccastaa.org/about-us-2-2/about-us/"
                  target="_blank"
                >
                  {" "}
                  &#8226; Secondary Education
                </a>
              </li>

              <li className="dd-lv-1-2-li-one">
                <a href="https://uniba.cm/" target="_blank">
                  {" "}
                  &#8226; Higher Education
                </a>
              </li>

              <li className="dd-lv-1-2-li-one">
                <a
                  href="https://web.facebook.com/p/Regional-College-of-Agriculture-RCA-Bambili-100083411765530/?_rdc=1&_rdr"
                  target="_blank"
                >
                  {" "}
                  &#8226; Agriculture
                </a>
              </li>
              <li className="dd-lv-1-2-li-two">&#8226; Business and Trades</li>
              <li className="dd-lv-1-2-li-two">&#8226; Carpentry</li>
              <li className="dd-lv-1-2-li-two">&#8226; Welding</li>
              <li className="dd-lv-1-2-li-two">
                &#8226; Solar Electrification
              </li>
              <li className="dd-lv-1-2-li-two">&#8226; Tailoring</li>

              {/* end of dropdown lv 2 item */}

              {/* start of dropdown lv 2 item 2*/}

              {/* end of dropdown lv 2 item 2 */}
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

export default ExternalP2;
