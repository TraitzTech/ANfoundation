import React, { useEffect } from "react";

import Navtop from "../components/navtop/Navtop";
import Ourpillars from "../components/ourpillars/Ourpillars";
import Whoweare from "../components/whoweare/Whoweare";
import Oursupport from "../components/oursupport/Oursupport";
import Partners from "../components/partners/Partners";
import Inpartners from "../components/inpartners/Inpartners";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import Contact from "../components/contactus/Contact";
import Empower from "../components/empower/Empower";
import Bfooter from "../components/bottomfooter/Bfooter";
import Whewework from "../components/where-we-work/Whewework";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector("#home");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      {/* <Navtop /> */}
      <Empower />
      <Whewework />
      <Ourpillars />
      <Whoweare />

      {/* <Oursupport /> */}
      <Newsletter />
      <Footer />
      <Bfooter />
    </div>
  );
};

export default Home;
