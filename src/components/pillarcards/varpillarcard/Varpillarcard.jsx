import React, { useState } from "react";
import "./varpillarcard.css";
import bgimage from "../../../assets/community Icon.png";

const Varpillarcard = ({
  bgImage,
  headercontent,
  text,
  items = [
    ["Community Developement-1", "Community Developement-2"],
    ["Inaugural consultation on human dev in mbili for girls and women", "Inaguaral Girls-2"],
    [
      "Event Information-1",
      "Event summary-2",
      "Event summary-3",
      "Event summary-4",
    ],
  ],

  links = [["https://www.olfpb.org/"]],
}) => {
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
              {items[0][0]}
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
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-one"
                onClick={() =>
                  toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                }
              >
                &#9724; {items[1][0]}{" "}
                <p className={isOpenDropdowntwo ? "for-drop" : ""}>&gt;</p>
              </h2>
              <li className="dd-lv-1-1-li-one">&#8226; {items[1][0]}</li>
              <li className="dd-lv-1-1-li-two">&#8226; {items[1][1]}</li>
              <li className="dd-lv-1-1-li-three">&#8226; {items[1][2]}</li>
              <li className="dd-lv-1-1-li-four">&#8226; {items[1][3]}</li>
              <li className="dd-lv-1-1-li-five">&#8226; {items[1][4]}</li>
              <li className="dd-lv-1-1-li-six">&#8226; {items[1][5]}</li>
              <li className="dd-lv-1-1-li-seven">&#8226; {items[1][6]}</li>
              <li className="dd-lv-1-1-li-eight">&#8226; {items[1][7]}</li>

              <div
                className={
                  isOpenDropdowntwo
                    ? "varpillar-dropdown-lv-2 lv-2-two"
                    : "varpillar-dropdown-lv-2 lv-2-one".concat(" hidden")
                }
              >
                <li className="lv2-one-li-one">
                  <a href={links[0][0]} target="_blank">
                    &#8226; {items[2][0]}
                  </a>
                </li>
                <li className="lv2-one-li-two">
                  <a href="#" target="_blank">
                    &#8226; {items[2][1]}
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
                    &#8226; {items[2][2]}
                  </a>
                </li>
                <li className="lv2-one-li-two">
                  <a href="#" target="_blank">
                    &#8226; {items[2][3]}
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
              {items[0][1]}{" "}
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

export default Varpillarcard;
