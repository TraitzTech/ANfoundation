import React, { useEffect, useState } from "react";

import "./navtop.css";
import Button from "../../components/button/Button";
const Navtop = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Scroll to the specific section based on the URL hash
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector("#home");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navigation-container" id="home">
      <div className="navtigation-top-contents">
        <div className={`h3-container ${isSticky ? "sticky" : ""}`}>
          <h3>
            <span className="dot"></span> The Awahsa'a Ngeniform Foundation
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
