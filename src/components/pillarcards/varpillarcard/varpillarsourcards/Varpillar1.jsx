import React, { useState } from "react";
import "../varpillarcard.css";


const Varpillar1 = ({ bgImage, headercontent, text }) => {
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

            {/* <h2
              className="varpillar-head-dropdown-lv-1 head-one"
              onClick={() =>
                toggleDropdown(isOpenDropdownOne, setIsOpenDropdownOne)
              }
            >
              Community Mobilisation
              <p className={isOpenDropdownOne ? "for-drop" : ""}>&gt;</p>
            </h2> */}
            <div
              className={
                isOpenDropdownOne
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              {/* start of dropdown lv 2 */}
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-one"
                onClick={() =>
                  toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                }
              >
                &#9724; Inaugural consultation on human developement in Bambili
                for girls and women{" "}
                <p className={isOpenDropdowntwo ? "for-drop" : ""}>&gt;</p>
              </h2>
              

              <div
                className={
                  isOpenDropdowntwo
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
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-two"
                onClick={() =>
                  toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                }
              >
                &#9724; Inaugaural event in Bambili{" "}
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

              {/* end of dropdown lv 2 item 2 */}
            </div>
            {/* end of dropdown lv one first iteom */}

            {/* duplication dropdown level one */}

            <h2
              className="varpillar-head-dropdown-lv-1 head-two"
              onClick={() =>
                toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
              }
            >
              {" "}
              <p className={isOpenDropdownfour ? "for-drop" : ""}>&gt;</p>
            </h2>
            <div
              className={
                isOpenDropdownfour
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              {/* start of dropdown lv 2 */}
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-twho"
                onClick={() =>
                  toggleDropdown(isOpenDropdownfive, setIsOpenDropdownfive)
                }
              >
                &#9724; Inaugaural event in Bambili{" "}
                <p className={isOpenDropdownfive ? "for-drop" : ""}>&gt;</p>
              </h2>
              <li className="dd-lv-1-2-li-one">&#8226;</li>
              <li className="dd-lv-1-2-li-two">&#8226;</li>
              <li className="dd-lv-1-2-li-three">&#8226;</li>

              <div
                className={
                  isOpenDropdownfive
                    ? "varpillar-dropdown-lv-2 lv-2-three"
                    : "varpillar-dropdown-lv-2 lv-2-three".concat(" hidden")
                }
              >
                <li className="lv2-three-li-one">
                  <a href="#" target="_blank">
                    &#8226; Event Introduction
                  </a>
                </li>
                <li className="lv2-three-li-one">
                  <a href="#" target="_blank">
                    &#8226; Event Summary
                  </a>
                </li>

                <hr className="varpillar-dropdown-lv-2-hr" />
              </div>

              {/* end of dropdown lv 2 item */}

              {/* start of dropdown lv 2 item 2*/}
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-four"
                onClick={() =>
                  toggleDropdown(isOpenDropdownsix, setIsOpenDropdownsix)
                }
              >
                &#9724; Inaugaural event in Bambili{" "}
                <p className={isOpenDropdownsix ? "for-drop" : ""}>&gt;</p>
              </h2>
              <div
                className={
                  isOpenDropdownsix
                    ? "varpillar-dropdown-lv-2 lv-2-four"
                    : "varpillar-dropdown-lv-2 lv-2-four".concat(" hidden")
                }
              >
                <li className="lv2-four-li-one">
                  <a href="#" target="_blank">
                    &#8226; Event Introduction
                  </a>
                </li>
                <li className="lv2-four-li-two">
                  <a href="#" target="_blank">
                    &#8226; Event Summary
                  </a>
                </li>

                <hr className="varpillar-dropdown-lv-2-hr" />
              </div>

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

export default Varpillar1;
