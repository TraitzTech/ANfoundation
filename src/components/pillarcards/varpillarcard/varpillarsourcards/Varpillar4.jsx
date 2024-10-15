import React, { useState } from "react";
import "../varpillarcard.css";

const Varpillar4 = ({ bgImage, headercontent, text }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDropdownOne, setIsOpenDropdownOne] = useState(true);
  const [isOpenDropdowntwo, setIsOpenDropdowntwo] = useState(true);
  const [isOpenDropdownthree, setIsOpenDropdownthree] = useState(true);
  const [isOpenDropdownfour, setIsOpenDropdownfour] = useState(true);

  const [isExpandedOne, setIsExpandedOne] = useState(false);
  const [isExpandedtwo, setIsExpandedtwo] = useState(false);
  const [isExpandedthree, setIsExpandedthree] = useState(false);

  const toggleExpand = (expandToSet, setExpand) => {
    setExpand(!expandToSet);
  };

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

              <li className="lv2-one-li-one">
                &#8226; Advisory support to {""}
                <a href="https://www.facebook.com/OLFPBambili" target="_blank">
                  Our Lady of Fatima Parish Bambili
                </a>{" "}
                on youth engagement,
                {/* <span
                  id="see"
                  className={isOpenDropdowntwo ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                  }
                >
                  {" "}
                  see more
                </span>{" "} */}
                <span
                  className={
                    isOpenDropdowntwo
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  skills and livelihood opportunities.{" "}
                  {/* <span
                    id="see"
                    className={isOpenDropdowntwo ? "" : "hidden"}
                    onClick={() =>
                      toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                    }
                  >
                    {" "}
                    see less
                  </span>{" "} */}
                </span>
              </li>

              {/* End of advisory service item*/}

              {/* Advisory service Item */}

              <li className="lv2-one-li-one">
                &#8226; Advisory to {""}
                <a
                  href="mailto:apostolicworkslesaplatinum@gmail.com"
                  target="_blank"
                >
                  LESA Apostolic Works
                </a>{" "}
                {""}
                on stakeholder engagement{" "}
                {/* <span
                  id="see"
                  className={isOpenDropdownthree ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                  }
                >
                  {" "}
                  see more
                </span>{" "} */}
                <span
                  className={
                    isOpenDropdownthree
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  and monitoring & evaluation.{" "}
                  {/* <span
                    id="see"
                    className={isOpenDropdownthree ? "" : "hidden"}
                    onClick={() =>
                      toggleDropdown(
                        isOpenDropdownthree,
                        setIsOpenDropdownthree
                      )
                    }
                  >
                    {" "}
                    see less
                  </span>{" "} */}
                </span>
              </li>

              {/* End of advisory service item*/}

              {/* Advisory service Item */}

              <li className="lv2-one-li-one">
                &#8226; Advisory services to entrepreneurs, startups, and small
                businesses
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
                  on professionalization, digital tools for productivity, and
                  access to finance.{" "}
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
              </li>

              {/* End of advisory service item*/}
            </div>
            {/* end of dropdown lv one first iteom */}

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

export default Varpillar4;
