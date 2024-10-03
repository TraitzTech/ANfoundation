import React from "react";
import "./partner.css";

import { Link } from "react-router-dom";
import Contact from "../components/contactus/Contact";
import Partneruspage from "../components/partneruspage/Partneruspage";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Bfooter from "../components/bottomfooter/Bfooter";

const Partner = () => {
  return (
    <div className="partner-page-container">
      <Link to="/home">/Home</Link>
      <Partneruspage />
      <Newsletter />
      <hr />
      <Bfooter />
    </div>
  );
};

export default Partner;
