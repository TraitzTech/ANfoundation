import React, { useState, useRef } from "react";
import document from "../../../../assets/Inaugural Consultation SUMMARY REPORT 21Sep2024.pdf";
import panelist from "../../../../assets/PANELISTS - Growing Together as Mbeligi -21Sep2024.pdf";
import "../varpillarcard.css";

const Varpillar1 = ({ bgImage, headercontent, text }) => {
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
            >
              {/* start of dropdown lv 2 */}
              <h2
                className="varpillar-head-dropdown-lv-2 head-lv-2-one"
                onClick={() =>
                  toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                }
              >
                &#8226; Inaugural consultation/webinar on empowering the Mbeligi
                community by nurturing women and girls.{" "}
                {/* <span
                  id="see"
                  className={isOpenDropdownfour ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
                  }
                >
                  {" "}
                  see more
                </span>{" "} */}
                <span
                  className={
                    isOpenDropdownfour
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  {" "}
                  {/* <span
                    id="see"
                    className={isOpenDropdownfour ? "" : "hidden"}
                    onClick={() =>
                      toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
                    }
                  >
                    {" "}
                    see less
                  </span>{" "} */}
                </span>
              </h2>

              <div
                className={
                  isOpenDropdowntwo
                    ? "varpillar-dropdown-lv-2 lv-2-two"
                    : "varpillar-dropdown-lv-2 lv-2-one".concat(" hidden")
                }
              >
                <li className="lv2-one-li-one">
                  <a
                    href=" https://forms.gle/SJ2KSig1sYrvvSCH8"
                    target="_blank"
                  >
                    &#8226; Introduction & Survey;
                  </a>
                </li>

                <li className="lv2-one-li-two">
                  <a
                    href="https://drive.google.com/file/d/12mf7zni91xfnQ_ut43QwKGy-OzHdB6Ps/view?usp=drivesdk"
                    target="_blank"
                  >
                    &#8226; Consultation Report;
                  </a>
                </li>
                <li className="lv2-one-li-one">
                  <a
                    href="https://drive.google.com/file/d/1CXZ-rec2NyQrTHzIlQ-XkFrIgC2Errv0/view?usp=drivesdk"
                    target="_blank"
                  >
                    &#8226; Panelists;
                  </a>
                </li>

                <hr className="varpillar-dropdown-lv-2-hr" />
              </div>

              {/* end of dropdown lv 2 item */}

              {/* start of dropdown lv 2 item 2*/}
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
