import React from "react";
import { Link } from "react-router-dom";
import Contact from "../components/contactus/Contact";
import Partneruspage from "../components/partneruspage/Partneruspage";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter"

const Partner = () => {
  return (
    <div>
      <Link to="/home">/Home</Link>
      <Partneruspage />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Partner;
