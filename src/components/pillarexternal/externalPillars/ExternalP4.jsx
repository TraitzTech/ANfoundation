import React, { useState } from "react";
import "../../pillarcards/varpillarcard/varpillarcard.css";

const ExternalP4 = ({ bgImage, headercontent, text }) => {
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
              Health
              <p
                style={{ fontWeight: "800", paddingLeft: "5px" }}
                className={isOpenDropdownOne ? "for-drop" : ""}
              >
                &gt;
              </p>
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
                <a
                  href="https://www.indeed.com/cmp/Bambilli-Medicalised-Health-Centre"
                  target="_blank"
                >
                  &#8226; Bambili Health Center
                </a>
              </li>
              <li className="dd-lv-1-1-li-two">
                           <a
                  href="https://www.google.com/maps/place/University+of+Bamenda+Health+Center/@6.0054338,10.2602418,17z/data=!3m1!4b1!4m6!3m5!1s0x105f41a4423dbd2f:0xe9a0ef7d650aced8!8m2!3d6.0054338!4d10.2628167!16s%2Fg%2F11y1jp3_6g?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                &#8226; University of Bamenda Health Center
                               </a>
              </li>
              <li className="dd-lv-1-1-li-three">
                &#8226; Ntehbang Integrated Health Center
              </li>
              <li className="dd-lv-1-1-li-two">
                &#8226; Mamishang Health Center
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
              Faith-based{" "}
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
                <a href="https://www.olfpb.org/" target="_blank">
                  {" "}
                  &#8226; Our Lady of Fatima Parish Bambili
                </a>
              </li>
              <li className="dd-lv-1-2-li-two">
                &#8226; St Francis of Quasi Parish Ntewshi
              </li>

              <li className="dd-lv-1-2-li-two"> &#8226; PC CCAST Complex</li>

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

export default ExternalP4;
