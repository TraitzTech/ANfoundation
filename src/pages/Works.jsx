import React from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import Navtop from "../components/navtop/Navtop";
import Bfooter from "../components/bottomfooter/Bfooter";
import Newsletter from "../components/newsletter/Newsletter";
import Title from "../components/title/Title";
import Aboutevent from "./aboutevent/Aboutevent";

const Works = () => {
  // useEffect(() => {
  
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const section = document.querySelector("#home");
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []);
  return (
    <div className="OurWorks-container">
      <Link to="/home">
        <FaArrowLeft />
      </Link>
      {/* <Title content={"Our Works in Bambili"} /> */}
      <Aboutevent />
      <Newsletter />
      <Bfooter />
    </div>
  );
};

export default Works;
