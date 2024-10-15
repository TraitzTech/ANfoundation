import React, { useState } from "react";
import "../../pillarcards/varpillarcard/varpillarcard.css";

const ExternalP3 = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(true);
  const [isOpenDropdowntwo, setIsOpenDropdowntwo] = useState(false);
  const [isOpenDropdownthree, setIsOpenDropdownthree] = useState(false);
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
              <li className="dd-lv-1-1-li-one">
                <a
                  href="https://asjp.clld.org/languages/BAMBILI"
                  target="_blank"
                >
                  &#8226; Dictionary
                </a>
              </li>
              <li className="dd-lv-1-1-li-one">
                <a
                  href="https://www.youtube.com/watch?v=hRoswknY_Pg"
                  target="_blank"
                >
                  &#8226; Bambili Anthem
                </a>
              </li>

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
                  &#8226; Achu and Yellow soup (Bambili Traditional Meal)
                </a>
              </li>
              <li className="dd-lv-1-2-li-two">
                &#8226; Achu and Na'a (Garden egg)
              </li>

              <li className="dd-lv-1-2-li-two">
                <a
                  href="https://en.wikipedia.org/wiki/Palm_wine"
                  target="_blank"
                >
                  &#8226; Palm Wine (Bambili Traditional Drink)
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
              <li className="dd-lv-1-1-li-two">
                <a href="https://www.google.co.uk/maps/place/Mb%C9%99ligi+(Bambili)+Palace/@5.9881404,10.2463711,17z/data=!3m1!4b1!4m6!3m5!1s0x105f3fb9ae710e99:0x9c83f6315e54fa6b!8m2!3d5.9881404!4d10.248946!16s%2Fg%2F11v0nz77tl?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
                  {" "}
                  &#8226; Bambili Palace
                </a>
              </li>
              {/* <li className="dd-lv-1-1-li-three">&#8226; Quarters</li> */}
              <li className="dd-lv-1-1-li-four">
                {" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:The_Amazing_Lake_Bambili.jpg"
                  target="_blank"
                >
                  &#8226; Lake Bambili
                </a>
              </li>
            </div>

            <li>
              &#8226; About Bambili -{" "}
              <a
                href="https://joshuaproject.net/people_groups/10618/CM"
                target="_blank"
              >
                The Joshua Project
              </a>
            </li>

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
