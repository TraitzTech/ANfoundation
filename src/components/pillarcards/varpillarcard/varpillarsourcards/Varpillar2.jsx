// import React from 'react'

// const Varpillar2 = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Varpillar2

import React, { useState } from "react";
import "../varpillarcard.css";

const Varpillar2 = ({ bgImage, headercontent, text }) => {
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

            <div
              className={
                isOpenDropdownOne
                  ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                  : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
              }
            >
              {/* Advisory service Item */}

              <li className="lv2-one-li-one">
                &#8226; Apprenticeship and training of young men in {""}
                <span
                  id="see"
                  className={isOpenDropdowntwo ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                  }
                >
                  {" "}
                  see more
                </span>{" "}
                <span
                  className={
                    isOpenDropdowntwo
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  renewable energy and skilled trades in partnership with{" "}
                  <a
                    href="https://www.facebook.com/sunlightotherescuecameroun?mibextid=LQQJ4d "
                    target="_blank"
                  >
                    Sunlight - To - The Rescue Cameroun
                  </a>{" "}
                  <span
                    id="see"
                    className={isOpenDropdowntwo ? "" : "hidden"}
                    onClick={() =>
                      toggleDropdown(isOpenDropdowntwo, setIsOpenDropdowntwo)
                    }
                  >
                    {" "}
                    see less
                  </span>{" "}
                </span>
              </li>

              {/* End of advisory service item*/}

              {/* Advisory service Item */}

              {/* End of advisory service item*/}

              {/* Advisory service Item */}

              <li className="lv2-one-li-one">
                &#8226; Scholarship and textbook support to, {""}{" "}
                <span
                  id="see"
                  className={isOpenDropdownthree ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                  }
                >
                  {" "}
                  see more
                </span>{" "}
                <span
                  className={
                    isOpenDropdownthree
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  post- primary school girls{" "}
                  {/* <a
                    href="mailto:apostolicworkslesaplatinum@gmail.com"
                    target="_blank"
                  >
                    LESA Platinum Apostolic Works
                  </a>{" "} */}
                  <span
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
                  </span>{" "}
                </span>
              </li>

              {/* End of advisory service item*/}

              <li className="lv2-one-li-one">
                <a
                  href="https://www.facebook.com/share/NgdVZ7sUw4n7e7E6/?mibextid=kFxxJD"
                  target="_blank"
                > 
                  &#8226; Akwo Girls In Technology Scholarship Program
                </a>{" "}
                <span
                  id="see"
                  className={isOpenDropdownthree ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdownthree, setIsOpenDropdownthree)
                  }
                >
                  {" "}
                  see more
                </span>{" "}
                <span
                  className={
                    isOpenDropdownthree
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  supports high school girls in STEM{" "}
                  <span
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
                  </span>{" "}
                </span>
              </li>
              {/* Advisory service Item */}

              <li className="lv2-one-li-one">
                &#8226; Digital skills and Career{" "}
                <span
                  id="see"
                  className={isOpenDropdownfour ? "hidden" : ""}
                  onClick={() =>
                    toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
                  }
                >
                  {" "}
                  see more
                </span>{" "}
                <span
                  className={
                    isOpenDropdownfour
                      ? "varpillar-dropdown-lv-1 dd-lv-1-1"
                      : "varpillar-dropdown-lv-1 dd-lv-1-1".concat(" hidden")
                  }
                >
                  development support for young men. Some initiatives in
                  partnership with{" "}
                  <a
                    href="https://www.facebook.com/OLFPBambili/posts/pfbid02H6CaB4kpJihvEmRzbqSSujHCrNorPtHju5dKdEYLwMcCgSTWFv4pWYbxZTQEuyppl "
                    target="_blank"
                  >
                    Our Lady of Fatima Parish Bambili
                  </a>{" "}
                  <span
                    id="see"
                    className={isOpenDropdownfour ? "" : "hidden"}
                    onClick={() =>
                      toggleDropdown(isOpenDropdownfour, setIsOpenDropdownfour)
                    }
                  >
                    {" "}
                    see less
                  </span>{" "}
                </span>
              </li>

              {/* End of advisory service item*/}
              <li>&#8226; Other mentoring services</li>
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

export default Varpillar2;
